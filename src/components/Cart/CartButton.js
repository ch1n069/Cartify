import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartActions } from "../../store/ui-slice";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartItems.quantity);

  const onClickHandler = () => {
    dispatch(toggleCartActions.toggle());
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items}</span>
    </button>
  );
};

export default CartButton;
