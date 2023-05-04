import React from "react";
import { useForm } from "react-hook-form";
import { handlePostRegistration } from "../../shared/api/userApi";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      role: "seller",
    },

    mode: "onBlur", // "onChange"
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const result = await handlePostRegistration(
        data?.address,
        data?.biininn,
        data?.name,
        data?.name,
        data?.password,
        data?.phone,
        data?.role,
        data.username
      );
      reset();
      navigate("/auth?key=login")
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="signIn">
        <div className="wrapper">
          <label></label>
          <div className="role">
            <label
              htmlFor="provider"
              className={
                watch("role") === "provider" ? "provider__active" : "provider"
              }
            >
              {" "}
              Заказчик
            </label>
            <input
              id="provider"
              type="radio"
              {...register("role")}
              value="provider"
            ></input>
            <label
              htmlFor="seller"
              className={
                watch("role") === "seller" ? "seller__active" : "seller"
              }
            >
              {" "}
              Поставщик
            </label>
            <input
              id="seller"
              type="radio"
              {...register("role")}
              value="seller"
            ></input>
          </div>
        </div>
        <div className="wrapper">
          <label htmlFor="address">Адрес электронной почты:</label>
          <input type="email" placeholder="email" {...register("address")} />
        </div>
        <div className="wrapper">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            placeholder="Пожалуйста установите пароль"
            {...register("password", { required: "Password is required!" })}
          />
        </div>
        {errors.password && (
          <div className="wrapper">
            <label htmlFor=""></label>
            <p style={{ color: "red" }}>{errors.password.message}</p>
          </div>
        )}

        <div className="wrapper">
          <label htmlFor="repeat">Подтвердите пароль:</label>
          <input
            type="password"
            placeholder="Пожалуйста подтвердите ваш пароль снова"
            {...register("passwordConfirmation", {
              required: "Please confirm password!",
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords should match!";
                },
              },
            })}
          />
        </div>
        {errors.passwordConfirmation && (
          <div className="wrapper">
            <label htmlFor=""></label>
            <p style={{ color: "red" }}>{errors.passwordConfirmation.message}</p>
          </div>
        )}
        <div className="wrapper">
          <label htmlFor="name">Название:</label>
          <input
            type="text"
            placeholder="Название вашей торговой точки"
            {...register("name")}
          />
        </div>
        <div className="wrapper">
          <label htmlFor="biiniin">BIN / ИИН:</label>
          <input
            type="number"
            placeholder="Укажите ваш BIN / ИИН"
            {...register("biiniin")}
          />
        </div>
        <div className="wrapper">
          <label htmlFor="username">ФИО:</label>
          <input
            type="text"
            placeholder="Укажите ваше ФИО"
            {...register("username", { required: true, maxLength: 100 })}
          />
        </div>
        <div className="wrapper">
          <label htmlFor="phone">Номер телефона:</label>
          <input
            type="number"
            placeholder="Введите ваш номер телефона"
            {...register("phone", {
              required: true,
            })}
          />
        </div>
        <div className="wrapper">
          <label></label>
          <div className="checkbox">
            <input type="checkbox" id="check" {...register("isChecker")} />
            <label className="text" htmlFor="check">
              При создании учетной записи на веб-сайте: Я согласен соблюдать{" "}
              <span>Соглашение о членстве в Alibaba.com</span>
            </label>
          </div>
        </div>
        <div className="wrapper">
          <label></label>
          <button type="submit" disabled={!watch("isChecker")?true:false}>Зарегистрироваться</button>
        </div>
        <div className="wrapper">
          <label></label>
          <div>
            Уже есть аккаунт? <span>Войдите</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
