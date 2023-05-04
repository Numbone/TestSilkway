import React from "react";
import "./styles.scss";
import CarouselSlider from "../../entities/Carousel";
import ItemInfo from "../../entities/ItemInfo";
import Item from "../../entities/Item";
const ItemIdPage = () => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="id__page">
      <div className="actions">
        <CarouselSlider />
        <ItemInfo />
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
