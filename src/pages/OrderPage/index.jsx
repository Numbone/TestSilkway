import React, { useCallback, useContext, useEffect, useState } from "react";
import "./styles.scss";
import TitleAndUploadProductButton from "../../entities/TitleAndUploadProductButton";
import { ReactComponent as SeacrhIcon } from "../../shared/icons/Header/SearchIcon.svg";
import Menu from "../../entities/Menu";
import ProviderOrderItem from "../../entities/ProviderOrderItem";
import { getTransaction } from "../../shared/api/universal";
import { Context } from "../..";
const OrderPage = () => {
  const array = [
    { name: "Товары", url: "/provider" },
    { name: "Склад", url: "/store" },
    { name: "Заказы", url: "/order" },
  ];
  const { user } = useContext(Context);
  const role = user?.role;
  const [order, setOrder] = useState([]);
  const handleGetTransactions = useCallback(async (role) => {
    const data = await getTransaction(role);
    setOrder(data);
  }, []);
  useEffect(() => {
    handleGetTransactions(localStorage.getItem("role"));
  }, [handleGetTransactions]);

  return (
    <div className="flex">
      <Menu array={array} />
      <div className="content__role">
        <TitleAndUploadProductButton title={"Заказы"} />
        <div className="wrapper_product">
          <div className="statistic_search">
            <SeacrhIcon />
            <input type="text" placeholder="Что вы ищите" />
          </div>
          
          {/* content */}
          <div className="order_content">
            {order?.map((item) => (
              <ProviderOrderItem
                item={item}
                key={item?.id}
                id={item?.id}
                products_amount={item?.products_amount}
                products_id={item?.products_id}
                products_name={item?.products_name}
                products_status={item?.products_status}
                provider_id={item?.provider_id}
                seller_id={item?.seller_id}
                status={item?.status}
                total_cost={item?.total_cost}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
