import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
const ProviderOrderItem = ({
  id,
  products_amount,
  products_id,
  products_name,
  products_status,
  provider_id,
  seller_id,
  status,
  item,
  total_cost,
}) => {
  const navigate = useNavigate();
  const redirectByRole = (role, item) => {
    if (role === "seller") {
      if (status === "transaction created") {
        navigate("seller/decor", { state: item });
      }
      if (status === "transaction accepted from provider") {
        navigate("seller/pay", { state: item });
      }
    }
    if (role === "provider") {
      if (status === "transaction accepted from seller") {
        navigate("provider/confirm", { state: item });
      }
      if (status === "transaction buying") {
        navigate("provider/send", { state: item });
      }
    }
  };
  return (
    <div className="provider_order">
      <div className="provider_block">
        <div className="label">Заказчик:</div>
        <div className="value">{id}</div>
      </div>
      <div className="provider_block">
        <div className="label">Номер заказа:</div>
        <div className="value">{id}</div>
      </div>
      <div className="provider_block">
        <div className="label">Количество товара:</div>
        <div className="value">
          {products_amount.reduce((partialSum, a) => partialSum + a, 0)}
        </div>
      </div>
      <div className="provider_block">
        <div className="label">Цена заказа:</div>
        <div className="value">{total_cost}₸</div>
      </div>
      <div className="provider_block">
        <div className="label">Статус заказа:</div>
        <div className="value">{status}</div>
      </div>
      <div
        className="btn"
        onClick={() => redirectByRole(localStorage.getItem("role"), item)}
      >
        Открыть заказ
      </div>
    </div>
  );
};

export default ProviderOrderItem;
