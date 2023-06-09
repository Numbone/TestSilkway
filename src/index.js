import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import UserStore from "./shared/store/userStore";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DeviceStore from "./shared/store/ItemStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const Context = createContext(null);
root.render(
  <Context.Provider value={{
    user:new UserStore(),
    device:new DeviceStore()
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);
