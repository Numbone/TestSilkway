import React, { useEffect, useState } from "react";
import Menu from "../../entities/Menu";
import "./styles.scss";
import Silder from "../../entities/Slider";
import Item from "../../entities/Item";
import { handleItemAll } from "../../shared/api/ItemApi";

const HomePage = () => {
  const array = ["Options", "Options", "Options", "Options", "Options"];
  const [products, setProducts] = useState([]);
  const handleGetProductsAll = async () => {
    const { data } = await handleItemAll();
    setProducts(data.slice(0, 6));
  };
  useEffect(() => {
    handleGetProductsAll();
  }, []);
  return (
    <div className="background">
      <div className="main">
        <Menu array={array} />
        <div className="restrict">
          <Silder />
        </div>
      </div>
      <div className="caption">Товары с высоким спросом</div>
      <div className="product">
        {products?.map((item) => (
          <Item
            key={item?.id}
            id={item?.id}
            name={item?.name}
            price={item?.price}
            counts={item?.counts}
            description={item?.description}
            registerDate={item?.registerDate}
            status={item?.status}
            users_id={item?.users_id}
            unit_id={item?.unit_id}
            category_id={item?.category_id}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
