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
        <div className="slider_wrapper">
       
          <img src={img} alt=""></img>
        </div>
        <div  className="slider_wrapper">
          <img src={"http://businesspskov.ru/pictures/141223144504.jpg"} alt=""></img>
        </div>
        <div  className="slider_wrapper">
          <img src={"http://businesspskov.ru/pictures/141223163518.jpg"} alt=""></img>
        </div>
        <div  className="slider_wrapper">
          <img src={"http://businesspskov.ru/pictures/141223165944.jpg"} alt=""></img>
        </div>
        <div  className="slider_wrapper">
          <img src={"http://businesspskov.ru/pictures/141223165944.jpg"} alt=""></img>
        </div>
        <div  className="slider_wrapper">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbW9kit3VJK_yMrRPYWxCUW8YKVDJ0jmQ4w&usqp=CAU"} alt=""></img>
        </div>
      </Slider>
    </div>
  );
};

export default Silder;
