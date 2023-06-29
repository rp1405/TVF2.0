import { useDispatch, useSelector } from "react-redux";
import { changeCat } from "../features/cart/cartSlice";
import "./slider.css";
export default function Slider() {
  const { allCategories } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function createSlider(obj, ind) {
    return (
      <div
        className="tags"
        key={obj}
        onClick={() => {
          dispatch(changeCat(obj));
        }}
      >
        {obj}
      </div>
    );
  }
  return <div className="scrollmenu">{allCategories.map(createSlider)}</div>;
}
