import React from "react";
import './styles.scss'
import Menu from "../../entities/Menu";
import TitleAndUploadProductButton from "../../entities/TitleAndUploadProductButton";
import {ReactComponent as SeacrhIcon} from '../../shared/icons/Header/SearchIcon.svg'
import ItemStore from "../../entities/ItemStore";
const StorePage = () => {
  const array = [
    { name: "Товары", url: "/provider" },
    { name: "Склад", url: "/store" },
    { name: "Заказы", url: "/order" },
  ];
  return (
    <div className="flex">
      <Menu array={array} />
      <div className="content__role">
        <TitleAndUploadProductButton title={"Склад"} />
        <div className="wrapper_product">
          <div className="statistic_top">
            <div className="statistic_top_text">Товары: 34</div>
            <div className="statistic_top_text">Количество шт. товара: 1200 ( -120 сегодня )</div>
            <div className="btn">Открыть статистику склада</div>
          </div>
          <div className="statistic_search">
            <SeacrhIcon/>
            <input type="text" placeholder="Что вы ищите" />
          </div>
          <div className="store_wrapper">
          <ItemStore/>
          <ItemStore/>
          <ItemStore/>
          <ItemStore/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default StorePage;
