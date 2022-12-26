import { useDispatch, useSelector } from "react-redux";
import uiSlice from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(
    (state) => state.cartItems.cartItems.totalQuantity
  );

  const handleTogglCart = () => {
    dispatch(uiSlice.actions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={handleTogglCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
