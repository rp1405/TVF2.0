import { useDispatch } from "react-redux";
import { changeScreen } from "../features/cart/cartSlice";
import "./summary.css";
import { BASE_URL } from "../config";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { useState } from "react";
function ListItem({ itemName, itemCount, itemPrice }) {
  return (
    <div className="listItem">
      <div className="itemName">
        <h1>{itemName}</h1>
      </div>
      <div className="itemCount">
        <h1>x {itemCount}</h1>
      </div>
      <div className="itemPrice">
        <h1>₹ {itemPrice * itemCount}</h1>
      </div>
    </div>
  );
}
export default function Summary() {
  const [on, setOn] = useState(0);
  const [location, setLocation] = useState("Dine in");
  const { cartItems, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const checkoutHandler = async (location) => {
    if (location == "") {
      alert("Enter delivery location");
      return;
    }
    dispatch(changeScreen("Loading"));
    const {
      data: { key },
    } = await axios.get(`${BASE_URL}/api/v1/getkey`); // any can acces this

    const items = {};
    cartItems.forEach((obj, ind) => {
      if (cartItems[ind].num > 0) {
        items[obj.name] = cartItems[ind].num;
      }
    });
    const {
      data: { order },
    } = await axios.post(`${BASE_URL}/api/v1/checkout`, {
      amount,
      items,
      location,
    });
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "TVF",
      description: "description",
      image: "../../assets/logo.png",
      order_id: order.id,
      callback_url: `${BASE_URL}/api/v1/paymentverification`,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    dispatch(changeScreen("Summary"));
  };
  return (
    <div className="summOutDiv">
      <div>
        <button
          className="back-button"
          onClick={() => dispatch(changeScreen("Homepage"))}
        ></button>
      </div>
      <div className="summaryDiv">
        <div className="summary">
          <h1>Order Summary</h1>
        </div>
        <div>
          {cartItems.map((item, ind) => {
            if (cartItems[ind].num > 0) {
              return (
                <ListItem
                  key={ind}
                  itemName={cartItems[ind].name}
                  itemCount={cartItems[ind].num}
                  itemPrice={cartItems[ind].price}
                />
              );
            }
          })}
        </div>
        <hr></hr>
        <div className="subTotal">
          <h1>Subtotal: ₹ {amount}</h1>
        </div>
      </div>
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => {
            if (on) {
              setLocation("Dine in");
              setOn(0);
            } else {
              setOn(1);
            }
          }}
        />
        <span className="slider round"></span>
      </label>
      {on ? (
        <textarea
          className="location"
          rows={10}
          placeholder="Enter location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      ) : (
        <></>
      )}
      <button
        className="payNow"
        onClick={() => {
          checkoutHandler(location);
        }}
      >
        Pay Now
      </button>
    </div>
  );
}
