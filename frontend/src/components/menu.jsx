import { useSelector } from "react-redux";
import Tray from "./tray";
import Footer from "./footer";
export default function Menu({ category }) {
  const { cartItems } = useSelector((state) => state.cart);
  function createTray(obj, ind) {
    if (cartItems[ind].category == category) {
      return <Tray key={ind} ind={ind} />;
    }
  }
  return (
    // done to manage footer
    <div style={{ "padding-bottom": "260px" }}>
      <>{cartItems.map(createTray)}</>
    </div>
  );
}
