import React, { useContext, useState } from "react";
import "./styles.scss";
import { ReactComponent as LogoSvg } from "../../shared/icons/Header/Logo.svg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { BsArrowDownShort } from "react-icons/bs";
import { BsArrowUpShort } from "react-icons/bs";
import { ReactComponent as CiSearch } from "../../shared/icons/Header/SearchIcon.svg";
import { ReactComponent as Camera } from "../../shared/icons/Header/Photo.svg";
import { ReactComponent as Order } from "../../shared/icons/Header/Order.svg";
import { ReactComponent as Basket } from "../../shared/icons/Header/Basket.svg";
import { ReactComponent as Entry } from "../../shared/icons/Header/Entry.svg";
import { useNavigate } from "react-router-dom";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
const options = ["Продукты", "Продукты123", "Продукты123456"];
const defaultOption = options[0];
const Header = () => {
  const { user } = useContext(Context);
  console.log(user?.user);
  const navigate = useNavigate();
  const [selectDropdown, setSelectDropdown] = useState();
  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <LogoSvg />
      </div>
      <main className="main">
        <div className="wrapper">
          <div className="dropdown">
            <Dropdown
              options={options}
              onChange={(e) => setSelectDropdown(e?.value)}
              value={defaultOption}
              className="myClassName"
              controlClassName="myControlClassName"
              menuClassName="myMenuClassName"
              arrowClosed={
                <span className="arrow-closed">
                  <BsArrowDownShort />
                </span>
              }
              arrowOpen={
                <span className="arrow-open">
                  <BsArrowUpShort />
                </span>
              }
            />
          </div>
          <div className="search">
            <CiSearch />
            <input type="text" placeholder="Что вы ищите" />
            <Camera />
          </div>
        </div>
      </main>
      <div className="actions">
        <div className="wrapper">
          <div className="icon">
            <Order />
          </div>
          <div className="text" onClick={() => navigate("/order")}>
            Заказы
          </div>
        </div>
        <div className="wrapper">
          <div className="icon">
            <Basket />
          </div>
          <div className="text" onClick={() => navigate("/basket")}>
            Корзина
          </div>
        </div>
        <div className="wrapper">
          <div className="icon">
            <Entry />
          </div>
          <div className="text">
            {user?.role === "" ? (
              <>
                <span onClick={() => navigate("/auth?key=login")}>Вход</span>{" "}
                <span onClick={() => navigate("/auth?key=registrations")}>
                  / Регистрация
                </span>
              </>
            ) : user?.role === "seller" ? (
              <span onClick={() => navigate("/seller")}>{user?.user}</span>
            ) : user?.role === "provider" ? (
              <span onClick={() => navigate("/provider")}>{user?.user}</span>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
