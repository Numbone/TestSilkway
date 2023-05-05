import React, { useEffect, useState } from "react";
import Menu from "../../entities/Menu";
import TitleAndUploadProductButton from "../../entities/TitleAndUploadProductButton";
import "./styles.scss";
import Item from "../../entities/Item";
import { handleProviderProductsUser } from "../../shared/api/providerApi";
const ProviderPage = () => {
  const [products, setProducts] = useState([]);
  const handleGetProductsUser = async () => {
    const {data} = await handleProviderProductsUser();
    setProducts(data);
  };

  const array = [
    { name: "Товары", url: "/provider" },
    { name: "Склад", url: "/store" },
    { name: "Заказы", url: "/order" },
  ];
  useEffect(() => {
    handleGetProductsUser();
  }, []);
  console.log(products)
  return (
    <div className="flex">
      <Menu array={array} />
      <div className="content__role">
        <TitleAndUploadProductButton title={"Товары"} />
        <div className="wrapper_product">
          <div className="product">
            {products?.map((product) => (
              <Item 
              key={product?.id}
              id={product?.id}
              name={product?.name}
              price={product?.price}
              counts={product?.counts}
              description={product?.description}
              registerDate={product?.registerDate}
              status={product?.status}
              users_id={product?.users_id}
              unit_id={product?.unit_id}
              category_id={product?.category_id}
              image_path={product?.image_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderPage;
