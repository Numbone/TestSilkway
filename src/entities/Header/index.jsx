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
import {FaUser} from 'react-icons/fa'
const options = ["Продукты", "Продукты123", "Продукты123456"];
const defaultOption = options[0];
const Header = () => {
  const { user } = useContext(Context);
  
  const navigate = useNavigate();
  const [selectDropdown, setSelectDropdown] = useState();
  const logout=()=>{
    user.setUser("");
    user.setIsAuth(false);
    user.setRole("");
    localStorage.clear();
  }
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
          {user?.role === "" ? (
            <div className="icon">
              <Entry />
            </div>
          ) : (
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18V17C7 14.2386 9.23858 12 12 12C14.7614 12 17 14.2386 17 17V18"
                  stroke="#00BCD4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
                <path
                  d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                  stroke="#00BCD4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
                  stroke="#00BCD4"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}
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
        
           {user?.role !== "" ? (
            <div className="wrapper" onClick={()=>logout()}>
            <div className="icons">
            <Entry />
            </div>
            <div className="text" onClick={() => navigate("/")}>
              Выйти
            </div>
          </div>):null
        }
       
      </div>
    </header>
  );
};

export default observer(Header);
