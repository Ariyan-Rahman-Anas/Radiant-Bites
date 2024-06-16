import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../useContext/allContext";
import { postData } from "../Hooks/apiUtils";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-hot-toast";

const CheckoutForm = () => {

  //getting ordered items from the LS
  const getItemsFromLocalStorage = () => {
    let dishItems = localStorage.getItem("orderedItems");
    if (dishItems) {
      return JSON.parse(dishItems);
    } else {
      return [];
    }
  };

  const { user } = useAuth();
  const formRef = useRef(null)
  const stripe = useStripe();
  const elements = useElements();
  const { darkMode } = useContext(ThemeContext);
  const [error, setError] = useState("");
  const [items, setItems] = useState(getItemsFromLocalStorage());
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const totalPayable = items?.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  //   console.log("total price from: ", totalPayable);

  //connecting payment system with Back end
  useEffect(() => {
    if (totalPayable > 0) {
      const postingData = async () => {
        try {
          const posted = await postData("create-payment", {
            price: totalPayable,
          });
          console.log(posted?.clientSecret);
          setClientSecret(posted?.clientSecret);
        } catch (error) {
          console.error("Error creating payment:", error);
        }
      };

      postingData();
    }
  }, [totalPayable]);
    

    //handle clearing the shopping Cart by LS
    const handleClearLocalStorage = () => {
        localStorage.removeItem("orderedItems");
      setItems([]);      
  }
    
    
  //handling pay 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("okaaaaaaa")
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Error Payment: ", error);
      setError(error.message);
    } else {
      console.log("Payment Method: ", paymentMethod);
      setError("");
    }

    //confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
            name: user.displayName,
          },
        },
      });
    if (confirmError) {
      console.log("confirming error: ", confirmError);
    } else {
      console.log("payment intent: ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
          setTransactionId(paymentIntent.id);
          handleClearLocalStorage();

        //creating payment history for storing in the DB
        const aPayment = {
          date: new Date(),
          method: paymentMethod.card.brand,
          name: user?.displayName,
          email: user?.email,
          amount: totalPayable,
          transactionId: paymentIntent.id,
          itemNames: items?.map((item) => item.name).join(", "), 
          itemPrices: items?.map((item) => item.totalPrice).join(", "),
          quantity: items?.map((item) => item.totalItems).join(", "),
        };
        console.log("payment history is: ", aPayment);
        
          //storing payment history in the DB
          await postData("payment-history", aPayment);
          toast.success("Payment Successful!");
        console.log("Transaction Id: ", paymentIntent.id);
      }
    }
  };

  return (
    <div className="">
      <div className="min-h-[50vh] flex items-center justify-center text-center ">
        <div>
          <p className="text-2xl">
            Payable amount is: <strong> {`$${totalPayable}`} </strong>
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`${
              darkMode ? "bg-gray-700 text-gray-400 " : ""
            } w-full md:w-[85vw] p-5 mt-2 rounded-md shadow-md `}
          >
            <CardElement
              options={{
                style: {
                  base: {
                    iconColor: "green",
                    fontSize: "16px",
                    color: "gray",
                    "::placeholder": {
                      color: "gray",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            <button
              type="submit"
              disabled={!stripe || !clientSecret}
              className="text-white bg-primary mt-5 p-2 rounded-md border-[.09rem] border-primary hover:text-primary hover:bg-white font-semibold duration-500 cursor-pointer min-w-full "
            >
              Pay
            </button>
            {transactionId && (
              <p className="font-semibold text-primary pt-4 ">{`Transaction Id : ${transactionId}`}</p>
            )}
            {error && <p className="font-semibold text-danger pt-4">{error}</p>}
          </form>
        </div>
      </div>
      <div
        className={`${
          darkMode ? "bg-gray-700 text-gray-400 " : ""
        } w-full md:w-[85vw] mx-auto p-5 rounded-md shadow-md text-center mb-10`}
      >
        <h1 className="text-2xl mb-3">Status</h1>
        <strong className="tracking-[.6rem] ">
          {transactionId ? "Paid" : "On-going..."}
        </strong>
        {}

        {transactionId && (
          <div>
            <p>Enjoy your dishes and Stay with us!</p>
            <b className="tracking-widest" >Thank you!</b>
          </div>
        )}
      </div>
    </div>
  );
};
export default CheckoutForm;