import { useState } from "react";
import { ThemeContext } from "./useContext/allContext";
import MainLayout from "./Layout/MainLayout";

function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={` ${darkMode ? "bg-gray-800 text-gray-500 " : ""}`}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MainLayout></MainLayout>
      </ThemeContext.Provider>
    </div>
  );
}
export default App;