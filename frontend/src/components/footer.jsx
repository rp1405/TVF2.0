import React from "react";
import "./footer.css";
import { changeScreen } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Footer() {
  const { amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="footMainDiv">
      <div>
        <div className="totalAmount">
          <h1>Total Amount</h1>
        </div>
        <div className="amount">
          <h1>₹ {amount}</h1>
        </div>
      </div>
      <div className="amountAndButton">
        <div>
          <button
            className="proceedButton"
            onClick={() => {
              if (amount == 0) {
                alert("Please select some items");
                return;
              }
              dispatch(changeScreen("Summary"));
            }}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
