import React from "react";
import "./tray.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../features/cart/cartSlice";
export default function Tray({ ind }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { name, price, veg, num } = cartItems[ind];
  var vegNonveg = "";
  if (veg) {
    vegNonveg = "../../assets/veg-icon.svg";
  } else {
    vegNonveg = "../../assets/non-veg-icon.svg";
  }
  return (
    <div className="supermaindiv">
      <div className="maindiv">
        <div className="vegNonVeg">
          <img className="image" src={vegNonveg}></img>
        </div>
        <div className="name">
          <h1>{name}</h1>
        </div>
        <div className="buttonAndPrice">
          <div className="price">
            <h1>₹ {price}</h1>
          </div>
          <div className="button-div">
            <button
              className="button bleft"
              onClick={() => {
                dispatch(decrease(ind));
              }}
            >
              -
            </button>
            <button className="button">{num}</button>
            <button
              className="button bright"
              onClick={() => {
                dispatch(increase(ind));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
