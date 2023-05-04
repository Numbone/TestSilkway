import React from "react";
import "./styles.scss";
const BasketBlock = () => {
  return (
    <div className="basket_block">
      <div className="text">Доставка</div>
      <div className="wrapper">
        <div className="label">Кол-во товаров:</div>
        <div className="value">460</div>
      </div>
      <div className="wrapper">
        <div className="label">Цена доставки:</div>
        <div className="value">460</div>
      </div>
      <button className="btn">Заказ отправлен</button>
    </div>
  );
};

export default BasketBlock;
