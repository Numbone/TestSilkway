import React from "react";
import "./styles.scss";
import { ReactComponent as FaFacebookF } from "../../shared/icons/Footer/facebook.svg";
import { ReactComponent as FaTelegramPlane } from "../../shared/icons/Footer/telegram.svg";
import { ReactComponent as BsGoogle } from "../../shared/icons/Footer/google.svg";
import { ReactComponent as BsInstagram } from "../../shared/icons/Footer/insta.svg";
import { ReactComponent as Logo } from "../../shared/icons/Footer/Logo.svg";
const Footer = () => {
  return (
    <div className="container ">
      <ul className="footer">
        <li>
          <Logo />
          <div className="company">SilkWay</div>
          <div className="outlined">Вакансии</div>
          <div className="copyright">Copyright © 2022 All rights reserved.</div>
        </li>
        <li>
          <div className="title">Адрес</div>
          <div className="address">
            Мангилик Ел, 55, блок С4.2, офис 265 Нур-Султан, Казахстан
          </div>
          <div className="outlined">+77001780018</div>
          <div className="outlined">info@SilkWay.kz</div>
        </li>
        <li>
          <div className="title">Социальные сети</div>
          <div className="social-links">
            <FaFacebookF />

            <FaTelegramPlane />

            <BsGoogle />

            <BsInstagram />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
