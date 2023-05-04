import React from "react";
import Menu from "../../entities/Menu";
import "./styles.scss";
import Silder from "../../entities/Slider";
import Item from "../../entities/Item";

const HomePage = () => {
  const array = ["Options", "Options", "Options", "Options", "Options"];
  return (
    <div className="background">
      <div className="main">
        <Menu array={array} />
        <div className="restrict">
          <Silder />
        </div>
      </div>
      <div className="product">
        {array?.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
