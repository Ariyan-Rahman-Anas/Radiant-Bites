import MainLayout from "./Layout/MainLayout";
import { CartProvider } from "./../src/useContext/CartContext";
import { useContext } from "react";
import { ThemeContext } from "./useContext/allContext";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={` ${darkMode ? "bg-gray-800 text-gray-400 " : "bg-green-50"}`}
    >
      <CartProvider>
        <MainLayout></MainLayout>
      </CartProvider>
    </div>
  );
};
export default App;