import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./styles.scss"

import Img from '../../shared/icons/Item/item.jpeg'
 
const CarouselSlider = () => {
  return (
    <Carousel showStatus={false} showArrows={false}  showIndicators={false} thumbWidth={100} className="id_carousel" >
      <div className="carousel-wrapper">
        <img src={Img} />
        
      </div>
      <div>
        <img src={Img}/>
        
      </div>
      <div>
        <img src={Img} />
        
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
