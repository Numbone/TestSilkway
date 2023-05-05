import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.scss";

import Img from "../../shared/icons/Item/item.jpeg";

const CarouselSlider = ({ image_path }) => {
  console.log(image_path)
  return (
    <Carousel
      showStatus={false}
      showArrows={false}
      showIndicators={false}
      thumbWidth={100}
      className="id_carousel"
    >
      {
        image_path?.map(item=>
          <div className="carousel-wrapper">
          <img src={item} />
        </div> )
      }
      
    </Carousel>
  );
};

export default CarouselSlider;
