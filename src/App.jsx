import { useState } from "react";
import { ThemeContext } from "./useContext/allContext";
import MainLayout from "./Layout/MainLayout";
import { CartProvider } from "./../src/useContext/CartContext";

function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={` ${darkMode ? "bg-gray-800 text-gray-400 " : "bg-green-50"}`}
    >
      <CartProvider>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <MainLayout></MainLayout>
        </ThemeContext.Provider>
      </CartProvider>
    </div>
  );
}
export default App;