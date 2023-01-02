import { createSlice } from "@reduxjs/toolkit";
import { addToLocalStore } from "../../../helper/helper";


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: []
  },

  reducers: {

    addToCart: (state, action) => {

      const item = action.payload
      let newCart = []
      const exitingItem = state.value.find(cartItem => cartItem._id === item._id)
      if (exitingItem) {
        const remainingItems = state.value.filter(cartItem => cartItem._id !== item._id)
        exitingItem.quantity += 1
        newCart = [...remainingItems, exitingItem]
      } else {
        item.quantity = 1
        newCart = [...state.value, item]
      }
      addToLocalStore(item._id)
      state.value = newCart
    }
  }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer