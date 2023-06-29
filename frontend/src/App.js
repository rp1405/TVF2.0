import { useSelector, useDispatch } from "react-redux";
import Homepage from "./components/Homepage";
import Summary from "./components/summary";
import Loader from "./components/loader";
import { changeScreen, setCart } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { getFoodsData } from "./api/foodoptions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getFoodsData().then((foods) => {
      var cats = [];
      foods.forEach((e) => {
        e.num = 0;
        cats.push(e.category);
      });
      cats = [...new Set(cats)];
      dispatch(setCart({ foods, cats }));
      dispatch(changeScreen("Homepage"));
    });
  }, []);
  const { onScreen } = useSelector((state) => state.cart);
  switch (onScreen) {
    case "Homepage":
      return <Homepage />;
    case "Summary":
      return <Summary />;
    case "Loading":
      return <Loader />;
  }
}

export default App;
