import React from "react";
import "./styles.scss";
import BasketBlock from "../../entities/BasketBlock";
import SellerConfirmOrderItem from "../../entities/SellerConfirmOrderItem";
const SellerDecorPage = () => {
  return (
    <div className="confirm">
      <div className="order_confirm">
        <div className="title">
          <div className="text">Заказ</div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0003 11.9998L14.8287 14.8282M9.17188 14.8282L12.0003 11.9998L9.17188 14.8282ZM14.8287 9.17139L12.0003 11.9998L14.8287 9.17139ZM12.0003 11.9998L9.17188 9.17139L12.0003 11.9998Z"
              stroke="#A4A5A9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#A4A5A9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <hr></hr>
        <SellerConfirmOrderItem />
      </div>
      <BasketBlock />
    </div>
  );
};

export default SellerDecorPage;
