import React, { useContext, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { ReactComponent as Star } from "../../shared/icons/Item/star.svg";
import {
  handleSellerTransactionMinus,
  handleSellerTransactionPlus,
} from "../../shared/api/sellerApi";
import { Context } from "../..";
import { useLocation } from "react-router-dom";
const OrderBlock = ({ product, index, item, data }) => {
  const location=useLocation();
  const { user } = useContext(Context);
  const [counter, setCounter] = useState(item?.products_amount?.[index]);
  const handlePatchTransactionMinus = async (transactionId, productId) => {
    const data = await handleSellerTransactionMinus(transactionId, productId);
  };

  const handlePatchTransactionPlus = async (transactionId, productId) => {
    const data = await handleSellerTransactionPlus(transactionId, productId);
  };

  return (
    <div className="item_store">
      <div className="img">
        <img src={product?.[index]?.image_path?.[0]} alt="" />
      </div>
      <div className="item_store_content">
        <div className="top">{item?.products_name?.[index]}</div>
        <div className="cost">
          <div className="price">{product?.[index]?.price}</div>
          <div className="star">
            <Star />
            <div className="text">4.7</div>
          </div>
        </div>
        <div className="counter_confirm">
          <div className="price">{product?.[index]?.price}т/ штук</div>
          <div className="async_counter">
            {user.role === "provider" || location.pathname==="/order/seller/pay" ? null : (
              <div
                className="minus"
                onClick={() => {
                  counter < 1 && setCounter((count) => count - 1);
                  handlePatchTransactionMinus(item?.id, data);
                }}
              >
                <BiMinus />
              </div>
            )}

            <div className="cost_async">{counter}</div>
            {user.role === "provider" || location.pathname==="/order/seller/pay" ? null : (
              <div
                className="plus"
                onClick={() => {
                  setCounter((count) => count + 1);
                  handlePatchTransactionPlus(item?.id, data);
                }}
              >
                <BiPlus />
              </div>
            )}
          </div>

          <div className="result">
            Итог: {counter * product?.[index]?.price} ₸
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0003 11.9998L14.8287 14.8282M9.17188 14.8282L12.0003 11.9998L9.17188 14.8282ZM14.8287 9.17139L12.0003 11.9998L14.8287 9.17139ZM12.0003 11.9998L9.17188 9.17139L12.0003 11.9998Z"
              stroke="#A4A5A9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#A4A5A9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OrderBlock;
