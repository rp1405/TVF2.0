import Menu from "./menu";
import Loader from "./loader";
import Header from "./header";
import { useSelector } from "react-redux";
import Slider from "./slider";
import Footer from "./footer";
import Summary from "./summary";
function Homepage() {
  const { category } = useSelector((state) => state.cart);
  return (
    <div className="Homepage">
      <Header />
      <Slider />
      <Menu category={category} />
      <Footer />
    </div>
  );
}

export default Homepage;
