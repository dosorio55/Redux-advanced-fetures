import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: { cartItems: cartItemsSlice.reducer, uiState: uiSlice.reducer }
});

export default store;
