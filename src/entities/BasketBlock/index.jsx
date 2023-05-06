import React from "react";
import "./styles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  handleProviderTransactionAccept,
  handleProviderTransactionCancel,
  handleProviderTransactionConfirm,
} from "../../shared/api/providerApi";
import {
  handleSellerTransactionAccept,
  handleSellerTransactionBuy,
} from "../../shared/api/sellerApi";
const BasketBlock = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate("");
  const descriptionOfBlock = (url) => {
    if (url === "/order/seller/decor") {
      return "sellerConfirm";
    }
    if (url === "/order/seller/pay") {
      return "sellerPay";
    }
    if (url === "/order/provider/confirm") {
      return "providerConfirm";
    }
    if (url === "/order/provider/send") {
      return "providerSend";
    }
  };
  const handlePatchTransactionAcceptSeller = async (id) => {
    notify();
    const data = await handleSellerTransactionAccept(id);
    navigate("/order");
    return data;
  };
  const handlePatchTransactionBuySeller = async (id) => {
    notifyBuy();
    const data = await handleSellerTransactionBuy(id);
    navigate("/order");
    return data;
  };

  const handlePatchTransactionAcceptProvider = async (id) => {
    notify();
    const data = await handleProviderTransactionAccept(id);
    navigate("/order");
    return data;
  };
  const handlePatchTransactionAcceptConfirm = async (id) => {
    notifyBuy();
    const data = await handleProviderTransactionConfirm(id);
    navigate("/order");
    return data;
  };
  const handlePatchTransactionCancelProvider = async (id) => {
    notifyCancel();
    const data = await handleProviderTransactionCancel(id);
    navigate("/order");
    return data;
  };
  const notify = () =>
    toast.success("Заказ потвержден", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyCancel = () =>
    toast.error("Заказ потвержден", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyBuy = () =>
    toast.success("Заказ на покупку отправлен", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const notifyConfirm = () =>
    toast.success("Заказ на покупку отправлен", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  console.log(item);
  return (
    <div className="basket_block">
      <div className="text">Доставка</div>
      <div className="wrapper">
        <div className="label">Кол-во товаров:</div>
        <div className="value">
          {item?.products_amount.reduce((partialSum, a) => partialSum + a, 0)}{" "}
          штук
        </div>
      </div>
      <div className="wrapper">
        <div className="label">Цена </div>
        <div className="value">{item?.total_cost} тг</div>
      </div>
      <button
        className="btn"
        onClick={() =>
          descriptionOfBlock(location.pathname) === "providerConfirm"
            ? handlePatchTransactionAcceptProvider(item?.id)
            : descriptionOfBlock(location.pathname) === "sellerConfirm"
            ? handlePatchTransactionAcceptSeller(item?.id)
            : descriptionOfBlock(location.pathname) === "sellerPay"
            ? handlePatchTransactionBuySeller(item?.id)
            : handlePatchTransactionAcceptConfirm(item?.id)
        }
      >
        {descriptionOfBlock(location.pathname) === "providerConfirm"
          ? "Потвердить заказ"
          : descriptionOfBlock(location.pathname) === "sellerConfirm"
          ? "Оформить заказ"
          : descriptionOfBlock(location.pathname) === "sellerPay"
          ? "Оплатить заказ"
          : "Отправить заказ"}
      </button>
      {descriptionOfBlock(location.pathname) === "providerConfirm" ? (
        <button
          className="btn"
          onClick={() =>
            descriptionOfBlock(location.pathname) === "providerConfirm"
              ? handlePatchTransactionCancelProvider(item?.id)
              : null
          }
        >
          {descriptionOfBlock(location.pathname) === "providerConfirm"
            ? "Отменить заказ"
            : null}
        </button>
      ) : null}
    </div>
  );
};

export default BasketBlock;
