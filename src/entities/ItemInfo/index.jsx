import React, { useState } from "react";
import "./styles.scss";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { ReactComponent as Star } from "../../shared/icons/Item/star.svg";
import { ReactComponent as Basket } from "../../shared/icons/Item/basket.svg";
import { handleSellerTransactionAdd } from "../../shared/api/sellerApi";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
const ItemInfo = ({
  id,
  name,
  price,
  counts,
  description,
  // registerDate,
  // status,
  // users_id,
  // unit_id,
  category_id,
}) => {
  const location = useLocation();
  const [counter, setCounter] = useState(1);
  const notifyAdd = () =>
    toast.success("Товар добавлен в корзину", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSellerTransaction = async (amount, productId) => {
    try {
      const data = await handleSellerTransactionAdd(amount, productId);
    } catch (error) {
    } finally {
      notifyAdd();
    }
  };
  return (
    <div className="item__info">
      <div className="item__info__title">{name}</div>
      <div className="category">Категория: {category_id}</div>
      <div className="star">
        <div className="svg">
          <Star />
          <div className="counter">4.7</div>
        </div>

        <div className="reviews">12 отзывов</div>
        <div className="customer">24 покупателя</div>
      </div>
      <div className="description">{description}</div>
      <div className="wrapper">
        <div className="count_and_price">
          <div className="count">{counts} Штук</div>
          <div className="price">{price} tg</div>
        </div>
        <div className="count_and_price">
          <div className="count">{counts + 100} Штук</div>
          <div className="price">{price - 20} tg</div>
        </div>
        <div className="count_and_price">
          <div className="count">{counts + 300} Штук</div>
          <div className="price">{price - 30} tg</div>
        </div>
      </div>
      <div className="additional">
        <div className="h1">Дополнительная информация</div>
        <div className="address">Казахстан, г.Нур-султан, Малайсары 37</div>
        <div className="address">+7 (777) 777-77-77</div>
        <div className="address">tooNuras@gmail.com</div>
      </div>
      <div className="basket__wrapper">
        <div className="counter">
          <div
            className="minus"
            onClick={() => counter > 1 && setCounter((count) => count - 1)}
          >
            <BiMinus />
          </div>
          <div className="cost">{counter}</div>
          <div
            className="plus"
            onClick={() => setCounter((count) => count + 1)}
          >
            <BiPlus />
          </div>
        </div>
        <div className="value">{price * counter} tg</div>
        <div className="btn_wrapper">
          <button
            className="basket_icons"
            onClick={() => handleSellerTransaction(counter, id)}
          >
            <Basket />
            <div>В корзину</div>
          </button>
          {/* <button
            className="buy"
            onClick={() => handleRedirectSellerTransaction(counter, id)}
          >
            Купить
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
