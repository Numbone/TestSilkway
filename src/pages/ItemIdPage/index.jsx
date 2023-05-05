import React, { useCallback, useEffect, useState } from "react";
import "./styles.scss";
import CarouselSlider from "../../entities/Carousel";
import ItemInfo from "../../entities/ItemInfo";
import Item from "../../entities/Item";
import { useLocation } from "react-router-dom";
import { handleItemId } from "../../shared/api/ItemApi";
const ItemIdPage = () => {
    const location=useLocation();
  const [product,setProduct]=useState([])
  const handleGetItemId=useCallback(async(id)=>{
    const data =await handleItemId(id);
    setProduct(data)
  },[]) 
  const array = [1, 2, 3, 4, 5];
  useEffect(()=>{
    handleGetItemId(location?.pathname?.replace("/item",""))
  },[handleGetItemId, location.pathname])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="id__page">
      <div className="actions">
        <CarouselSlider
        image_path={product?.image_path}
         />
        <ItemInfo  
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
          />
      </div>
      <div className="caption">Может понравиться</div>
      <div className="product">
        {array?.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemIdPage;
