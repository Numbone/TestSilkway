import React, { useCallback, useEffect, useState } from "react";
import "./styles.scss";
import { handleItemId } from "../../shared/api/ItemApi";
import OrderBlock from "./OrderBlock";
const SellerConfirmOrderItem = ({ item }) => {
  const [product, setProduct] = useState([]);
  
  const handleGetItemId = useCallback(async (array) => {
    for (let i = 0; i < array.length; i++) {
      try {
        const element = array[i];
        const data = await handleItemId("/" + element);

        setProduct((count) => [...count, data]);
      } catch (error) {}
    }
  }, []);
  useEffect(() => {
    handleGetItemId(item?.products_id);
  }, []);

  return (
    <>
      {item?.products_id?.map((data, index) => (
        <OrderBlock product={product}
        index={index}
        item={item}
        data={data}
     />
      ))}
    </>
  );
};

export default SellerConfirmOrderItem;
