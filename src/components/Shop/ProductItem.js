import { useDispatch, useSelector } from "react-redux";
import cartItemsSlice from "../../store/cart-slice";
import uiSlice from "../../store/ui-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = ({ name, price, description, id }) => {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.uiState.cartIsVisible);


  const addItemToCart = () => {
    if (!cartIsVisible) {
      dispatch(uiSlice.actions.toggleCart());
    }
    dispatch(
      cartItemsSlice.actions.additem({
        name,
        price,
        id,
        totalItemPrice: price,
        quantity: 1,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
