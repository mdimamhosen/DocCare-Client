import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tippy/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes";
import AppContextProvider from "./ContextProvider/AppContext";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AppContextProvider>
      <RouterProvider router={routes} />
      <ToastContainer />
    </AppContextProvider>
  </>
);
