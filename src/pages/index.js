import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./AuthPage";
import HomePage from "./HomePage";
import ItemIdPage from "./ItemIdPage";
import ProviderPage from "./ProviderPage";
import UploadPage from "./UploadPage";
import StorePage from "./StorePage";
import OrderPage from "./OrderPage";
import ProviderConfirmPage from "./ProviderConfirmPage";
import SellerDecorPage from "./SellerDecorPage";
import SellerPayOrderPage from "./SellerPayOrderPage";
import SellerPage from "./SellerPage";
import ProviderSendPage from "./ProviderSendPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/item/:id" element={<ItemIdPage />} />
      <Route path="/provider" element={<ProviderPage />} />
      {/* <Route path="/store" element={<ProviderPage />} /> */}
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="order/provider/confirm" element={<ProviderConfirmPage />} />
      <Route path="order/provider/send" element={<ProviderSendPage />} />
      <Route path="/seller" element={<SellerPage />} />
      <Route path="order/seller/decor" element={<SellerDecorPage />} />
      <Route path="order/seller/pay" element={<SellerPayOrderPage />} />
    </Routes>
  );
};

export default Routing;
