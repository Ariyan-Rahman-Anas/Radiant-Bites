import { useEffect, useState } from "react";
import { CartContext } from "./allContext";

export const CartProvider = ({ children }) => {
  const getItemsFromLocalStorage = () => {
    let dishItems = localStorage.getItem("orderedItems");
    if (dishItems) {
      return JSON.parse(dishItems);
    } else {
      return [];
    }
  };

  const [cartItems, setCartItems] = useState(getItemsFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("orderedItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };


  const removeItemFromCart = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem("orderedItems", JSON.stringify(updatedItems));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};