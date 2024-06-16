import { loadStripe } from '@stripe/stripe-js';
import PageHeadBanner from '../../SharedComponents/PageHeadBanner';
import usePageTitle from './../../Hooks/usePageTitle';
import bannerImg from "./../../assets/images/Payment.png";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../SharedComponents/CheckoutForm';
import { useState } from 'react';


const stripePromise = loadStripe(
  "pk_test_51PRzMV06n1lC6yWX37a0PfNBSpjXotSiZHlLOGtHZuZ9aFjYk47e67odpG88yLLRhtzMR3zUeDzU69bDyg8xnaK900hxPeZkrG"
);
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  //updating the page title
  usePageTitle("Payment");

  

  return (
    <div>
      <PageHeadBanner
        sectionImg={bannerImg}
        heading={"Make Payment"}
        subHeading={"Please pay your bill and enjoy the dish!"}
        subHeadingColor={"white"}
      ></PageHeadBanner>

      {/* stripe */}
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
      {/* stripe */}
    </div>
  );
};
export default Payment;