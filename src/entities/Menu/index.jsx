import React from "react";
import "./styles.scss";
import { ReactComponent as Arrow } from "../../shared/icons/Menu/arrow.svg";
import Img from "../../shared/icons/Menu/1.jpeg";
import { NavLink, useLocation } from "react-router-dom";
const Menu = ({ array }) => {
  const location=useLocation()
  return (
    <div className="menu">
      <div className="title">{location?.pathname==="/"?"Частые товары":"Company name"}</div>
      <div className="wrapper">
        {array?.map((item) => (
          <NavLink to={item?.url} className="item">
            <div className="info">
              <div className="img">
                <img src={Img}></img>
              </div>

              <div className="text">{item?.name}</div>
            </div>
            <Arrow />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
