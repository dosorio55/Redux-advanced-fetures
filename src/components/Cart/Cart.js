import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.items.map(
          ({ name, quantity, totalItemPrice, price, id }) => (
            <CartItem
              key={id}
              item={{ name, quantity, totalItemPrice, price }}
              id={id}
            />
          )
        )}
      </ul>
    </Card>
  );
};

export default Cart;
