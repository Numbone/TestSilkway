import React from "react";
import "./styles.scss";
import { ReactComponent as Star } from "../../shared/icons/Item/star.svg";
import Img from "../../shared/icons/Item/item.jpeg";
const ItemStore = () => {
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
        <div className="counter">
          <div className="count">Количество товара на складе: 350</div>
          <button className="btn">Открыть статистику товара</button>
        </div>
      </div>
    </div>
  );
};

export default ItemStore;
