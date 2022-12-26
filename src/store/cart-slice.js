const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: { items: [], totalQuantity: 0 },
};

const cartItemsSlice = createSlice({
  name: "cart-items",
  initialState,
  reducers: {
    additem(state, action) {
      const newItem = action.payload;
      const exixtingItem = state.cartItems.items.find(
        (item) => item.id === newItem.id
      );
      if (exixtingItem) {
        exixtingItem.quantity++;
        exixtingItem.totalItemPrice =
          exixtingItem.price * exixtingItem.quantity;
      } else {
        state.cartItems.items.push(newItem);
        state.totalPrice = state.totalPrice + newItem;
      }
      state.cartItems.totalQuantity++;
    },
    removeItem(state, action) {
      let removedItemPrice;
      const removeItem = state.cartItems.filter((item) =>
        item.id === action.payload
          ? (removedItemPrice = item.totalItemPrice)
          : item.id !== action.payload
      );
      state.cartItems = removeItem;
      state.totalPrice = state.totalPrice.totalPrice - removedItemPrice;
      state.cartItems.totalQuantity--;
    },
    itemPlus(state, action) {
      const itemInCart = state.cartItems.items.find(
        (item) => item.id === action.payload
      );
      itemInCart.quantity++;
      state.cartItems.totalQuantity++;
    },
    itemMinus(state, action) {
      const itemInCart = state.cartItems.items.find(
        (item) => item.id === action.payload
      );
      itemInCart.quantity--;
      state.cartItems.totalQuantity--;
    },
  },
});

export default cartItemsSlice;
