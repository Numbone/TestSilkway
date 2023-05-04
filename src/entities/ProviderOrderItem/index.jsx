import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
const ProviderOrderItem = () => {
  const navigate = useNavigate();
  return (
    <div className="provider_order">
      <div className="provider_block">
        <div className="label">Заказчик:</div>
        <div className="value">ТОО НурАс</div>
      </div>
      <div className="provider_block">
        <div className="label">Номер заказа:</div>
        <div className="value">0205122341</div>
      </div>
      <div className="provider_block">
        <div className="label">Количество товара:</div>
        <div className="value">1 500 шт.</div>
      </div>
      <div className="provider_block">
        <div className="label">Цена заказа:</div>
        <div className="value">1 500 000₸</div>
      </div>
      <div className="btn" onClick={() => navigate("provider/confirm")}>
        Открыть заказ
      </div>
    </div>
  );
};

export default ProviderOrderItem;
