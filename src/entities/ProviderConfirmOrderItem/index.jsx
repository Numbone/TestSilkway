import React, { useCallback, useEffect, useState } from "react";
import { ReactComponent as Star } from "../../shared/icons/Item/star.svg";
import Img from "../../shared/icons/Item/item.jpeg";
import './styles.scss'
import { handleItemId } from "../../shared/api/ItemApi";
import OrderBlock from "../SellerConfirmOrderItem/OrderBlock";
const ProviderConfirmOrderItem = ({item}) => {
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

export default ProviderConfirmOrderItem;
