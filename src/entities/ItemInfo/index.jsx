import React from "react";
import "./styles.scss";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { ReactComponent as Star } from "../../shared/icons/Item/star.svg";
import { ReactComponent as Basket } from "../../shared/icons/Item/basket.svg";
const ItemInfo = () => {
  return (
    <div className="item__info">
      <div className="item__info__title">
        Private label best strong skin bleaching lightening cream foot full body
        glutathione kojic acid whitening cream for black skin
      </div>
      <div className="category">Категория: Косметика</div>
      <div className="star">
        <div className="svg">
          <Star />
          <div className="counter">4.7</div>
        </div>

        <div className="reviews">12 отзывов</div>
        <div className="customer">24 покупателя</div>
      </div>
      <div className="description">
        Идейные соображения высшего порядка, а также перспективное планирование
        в значительной степени обусловливает важность экспериментов, поражающих
        по своей масштабности и грандиозности. Для современного мира
        социально-экономическое развитие в значительной степени обусловливает
        важность переосмысления внешнеэкономических политик.
      </div>
      <div className="wrapper">
        <div className="count_and_price">
          <div className="count">10 - 999 Штук</div>
          <div className="price">$65 - $80</div>
        </div>
        <div className="count_and_price">
          <div className="count">10 - 999 Штук</div>
          <div className="price">$65 - $80</div>
        </div>
        <div className="count_and_price">
          <div className="count">10 - 999 Штук</div>
          <div className="price">$65 - $80</div>
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
          <div className="minus">
            <BiMinus />
          </div>
          <div className="cost">123</div>
          <div className="plus">
            <BiPlus />
          </div>
        </div>
        <div className="value">1572 tg</div>
        <button className="basket_icons">
          <Basket />
          <div>В корзину</div>
        </button>
        <button className="buy">Купить</button>
      </div>
    </div>
  );
};

export default ItemInfo;
