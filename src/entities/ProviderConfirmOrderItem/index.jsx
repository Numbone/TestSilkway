import React from "react";
import { ReactComponent as Star } from "../../shared/icons/Item/star.svg";
import Img from "../../shared/icons/Item/item.jpeg";
import './styles.scss'
const ProviderConfirmOrderItem = () => {
  return (
    <div className="item_store">
      <div className="img">
        <img src={Img} alt="" />
      </div>
      <div className="item_store_content">
        <div className="top">
          Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality
          universal rear bumper diffuser
        </div>
        <div className="cost">
          <div className="price">65 tg</div>
          <div className="star">
            <Star />
            <div className="text">4.7</div>
          </div>
        </div>
        <div className="counter_confirm">
          <div className="price">65</div>
          <div className="count">Количество: 230</div>
          <div className="result">Итог: 1 572 ₸</div>
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
      </div>
    </div>
  );
};

export default ProviderConfirmOrderItem;
