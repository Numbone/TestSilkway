import React, { useState } from "react";
import Menu from "../../entities/Menu";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { handleProviderProductsCreate } from "../../shared/api/providerApi";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UploadPage = () => {
  const { register, handleSubmit, watch, reset } = useForm();
  
 
  const notify = () =>
    toast.success("Товар добавлен", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const onSubmit = async (data) => {
    let formData = new FormData();
    formData.append("category_id", 1);
    formData.append("counts", data?.counts);
    formData.append("description", data?.description);
    formData.append("name", data?.name);
    formData.append("price", data?.price);
    formData.append("unit_id", 1);
    formData.append("file", data?.file?.[0]);
    try {
      const result = await handleProviderProductsCreate(formData);
      reset();
      
    } catch (error) {
      console.log(error);
    } finally {
      notify();
    }
  };
  const array = [
    { name: "Товары", url: "/provider" },
    { name: "Склад", url: "/store" },
    { name: "Заказы", url: "/order" },
  ];
  console.log(watch("file"));
  return (
    <div className="flex">
      <Menu array={array} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content__role">
          <div className="wrapper__role">
            <div className="text">Добавить товар</div>
            <button type="submit" className="btn">
              Добавить
            </button>
          </div>
          <div className="wrapper__role">
            <div className="upload">
              <div className="upload__content">
                <label htmlFor="name">Название товара</label>
                <input type="text" {...register("name")} />
              </div>
              <div className="upload__content">
                <label htmlFor="category_id">Категория товара</label>
                <input type="number" {...register("category_id")} />
              </div>
              <div className="upload__content">
                <label htmlFor="price">Цена за штуку</label>
                <input type="number" {...register("price")} />
              </div>
              <div className="upload__content">
                <label htmlFor="counts">Количество</label>
                <input type="number" {...register("counts")} />
              </div>
              <div className="upload__content">
                <label htmlFor="description">Описание товара</label>
                <textarea rows={5} type="text" {...register("description")} />
              </div>
            </div>
            <div className="drag__content">
              <label htmlFor="file">
                {" "}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.02631 5.1709H14.5059C15.2577 5.1709 15.9522 5.57249 16.3273 6.22398L18.2167 8.80503C18.5918 9.45652 19.2864 9.85812 20.0381 9.85812H47.9999V39.3263C47.9999 40.874 46.7452 42.1287 45.1975 42.1287H2.80235C1.2547 42.1287 0 40.874 0 39.3263V13.127C0 10.9609 0.334662 8.8077 0.992199 6.74376C1.23307 5.81747 2.06927 5.1709 3.02631 5.1709Z"
                    fill="#1B1D28"
                  />
                  <path
                    d="M41.2641 9.37598H4.36816V24.9619H41.2641V9.37598Z"
                    fill="white"
                  />
                  <path
                    d="M45.8982 7H34.33C33.5073 7 32.7602 7.48001 32.4184 8.22826L30.4388 12.5606C30.0968 13.3089 29.3498 13.7889 28.5272 13.7889H0V40.4547C0 42.0024 1.2547 43.2571 2.80235 43.2571H45.1977C46.7453 43.2571 48 42.0024 48 40.4547V9.10176C48 7.94105 47.0589 7 45.8982 7Z"
                    fill="#00BCD4"
                  />
                </svg>
                <div className="text">Выбрать фото</div>
                <div>{watch("file")?.[0]?.name}</div>
              </label>
              <input
                id="file"
                type="file"
            
                {...register("file")}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadPage;
