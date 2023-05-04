import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { handlePostLogin } from "../../shared/api/userApi";
import { Context } from "../..";
import { useNavigate } from "react-router-dom";
import { Redirect } from "../../shared/helper/Redirect";

const SignIn = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const result = await handlePostLogin(data?.username, data?.password);
      user.setUser(result?.users.username);
      user.setIsAuth(true);
      user.setRole(result?.users.role);
      Redirect(user.role, navigate);
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="signIn">
        <div className="wrapper">
          <label htmlFor="username">Адрес электронной почты:</label>
          <input type="text" placeholder="email" {...register("username")} />
        </div>
        <div className="wrapper">
          <label htmlFor="lastName">Пароль:</label>
          <input
            type="password"
            placeholder="Введите пароль"
            {...register("password")}
          />
        </div>
        <div className="wrapper">
          <label></label>
          <button type="submit">Войти</button>
        </div>
        <div className="wrapper">
          <label></label>
          <div>
            Нету аккаунта? <span>Зарегистрируйтесь</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
