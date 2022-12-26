import { useDispatch } from "react-redux";
import cartItemsSlice from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props, id) => {
  const { name, quantity, totalItemPrice, price } = props.item;
  const dispatch = useDispatch();

  const handlePlusItem = () => {
    dispatch(cartItemsSlice.actions.itemPlus(id));
  };

  const handleMinusItem = () => {
    dispatch(cartItemsSlice.actions.itemMinus(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalItemPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleMinusItem}>-</button>
          <button onClick={handlePlusItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
