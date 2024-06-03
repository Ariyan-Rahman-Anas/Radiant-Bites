import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRoute from "./Route/MainRoute";
import AuthProvider from "./Provider/AuthProvider";
import { ThemeProvider } from "./useContext/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={MainRoute}></RouterProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  </React.StrictMode>
);