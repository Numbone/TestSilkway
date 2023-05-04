import React from "react";
import SellerConfirmOrderItem from "../../entities/SellerConfirmOrderItem";
import BasketBlock from "../../entities/BasketBlock";
import "./styles.scss";
const SellerPayOrderPage = () => {
  return (
    <div className="confirm">
      <div>
        <div className="map">
          <div className="map_content">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2266_2673)">
                <path
                  d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                  stroke="#00BCD4"
                  stroke-width="3"
                />
                <path
                  d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                  fill="#00BCD4"
                  stroke="#00BCD4"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2266_2673">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="map_text">Добавьте адрес доставки</div>
          </div>
        </div>
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
      </div>
      <BasketBlock />
    </div>
  );
};

export default SellerPayOrderPage;
