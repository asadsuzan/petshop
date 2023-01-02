import cartSlice from "../state/cart/cartSlice";

const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
  reducer: {
    cart: cartSlice
  }

})