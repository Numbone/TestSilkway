import React from 'react'
import './styles.scss'
import TitleAndUploadProductButton from '../../entities/TitleAndUploadProductButton';
import {ReactComponent as SeacrhIcon} from '../../shared/icons/Header/SearchIcon.svg'
import Menu from '../../entities/Menu';
import ProviderOrderItem from '../../entities/ProviderOrderItem';
const OrderPage = () => {
    const array = [
        { name: "Товары", url: "/provider" },
        { name: "Склад", url: "/store" },
        { name: "Заказы", url: "/order" },
      ];
      return (
        <div className="flex">
          <Menu array={array} />
          <div className="content__role">
            <TitleAndUploadProductButton title={"Заказы"} />
            <div className="wrapper_product">
              <div className="statistic_search">
                <SeacrhIcon/>
                <input type="text" placeholder="Что вы ищите" />
              </div>
              {/* content */}
              <div className="order_content">
                <ProviderOrderItem/>
                <ProviderOrderItem/>
                <ProviderOrderItem/>
                <ProviderOrderItem/>
                
              </div>
            </div>
          </div>
        </div>
      );
}

export default OrderPage