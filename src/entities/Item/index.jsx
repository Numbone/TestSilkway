import React from "react";
import "./styles.scss";
import { ReactComponent as Basket } from "../../shared/icons/Item/basket.svg";
import { ReactComponent as Star } from "../../shared/icons/Item/star.svg";
import { useNavigate } from "react-router-dom";

const Item = ({
  id,
  name,
  price,
  // counts,
  // description,
  // registerDate,
  // status,
  // users_id,
  // unit_id,
  // category_id,
  image_path,
}) => {
  const navigate = useNavigate();
  console.log(image_path)
  return (
    <div className="good">
      <div className="good__content">
        <div className="basket__icon">
          <Basket />
        </div>
        <img src={image_path?.[0]} alt="item"></img>
        <button className="info" onClick={() => navigate("/item/" + id)}>
          Доп инфо
        </button>
      </div>
      <div className="text">{name}</div>
      <div className="bottom">
        <div className="price">{price}</div>
        <div className="star">
          <Star />
          <div className="text">4.7</div>
        </div>
      </div>
      <div className="additional">1 Штука (Минимальный. Заказ)</div>
    </div>
  );
};

export default Item;
