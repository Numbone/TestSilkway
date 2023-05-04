import React, { useEffect, useState } from "react";
import Menu from "../../entities/Menu";
import TitleAndUploadProductButton from "../../entities/TitleAndUploadProductButton";
import "./styles.scss";
import Item from "../../entities/Item";
import { handleProviderProductsUser } from "../../shared/api/providerApi";
const ProviderPage = () => {
  const [products, setProducts] = useState([]);
  const handleGetProductsUser = async () => {
    const result = await handleProviderProductsUser();
    setProducts(result);
  };

  const array = [
    { name: "Товары", url: "/provider" },
    { name: "Склад", url: "/store" },
    { name: "Заказы", url: "/order" },
  ];
  useEffect(() => {
    handleGetProductsUser();
  }, []);
  return (
    <div className="flex">
      <Menu array={array} />
      <div className="content__role">
        <TitleAndUploadProductButton title={"Товары"} />
        <div className="wrapper_product">
          <div className="product">
            {products!==undefined ? products?.map((item) => (
              <Item id={item?.id}
              name={item?.name}
              price={item?.price}
              counts={item?.counts}
              description={item?.description}
              registerDate={item?.registerDate}
              status={item?.status}
              users_id={item?.users_id}
              unit_id={item?.unit_id}
              category_id={item?.category_id}
              image_path={item?.image_path} />
            )):null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderPage;
