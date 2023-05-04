import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from "../../shared/icons/Slider/1.png";
import "./styles.scss";
const Silder = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="wrapper_slider" >
      <Slider {...settings}>
        <div>
       
          <img src={img} alt=""></img>
        </div>
        <div>
          <img src={img} alt=""></img>
        </div>
        <div>
          <img src={img} alt=""></img>
        </div>
        <div>
          <img src={img} alt=""></img>
        </div>
        <div>
          <img src={img} alt=""></img>
        </div>
        <div>
          <img src={img} alt=""></img>
        </div>
      </Slider>
    </div>
  );
};

export default Silder;
