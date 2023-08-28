import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { toggleCartActions } from "../../store/ui-slice";
const CartButton = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(toggleCartActions.toggle());
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
