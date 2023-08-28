import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch, useSelector } from "react-redux";

const MainHeader = (props) => {
  useSelector((state) => (state.cartIsVisible = state.cartIsVisible));
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClickHandler={{}} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
