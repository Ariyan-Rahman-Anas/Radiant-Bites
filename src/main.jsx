import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRoute from "./Route/MainRoute";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-green-50">
      <AuthProvider>
        <RouterProvider router={MainRoute}></RouterProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);