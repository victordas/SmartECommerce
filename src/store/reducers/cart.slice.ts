import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../models";

const initialState: CartState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addItemToCart: (state, action) => {
      const { cartItems } = state;
      const idx = cartItems.findIndex(({id}) => action.payload.id === id)
      if (idx >= 0) {
        cartItems[idx].qty += 1;
        cartItems[idx].sum +=  cartItems[idx].price;
        state.cartItems = [...cartItems]
      } else {
        state.cartItems.push({
          ...action.payload,
          qty: 1,
          sum: action.payload.price,
        });
      }
    },

    // Remove item from cart
    removeItemFromCart: (state, action) => {
        const { cartItems } = state
        const idx = cartItems.findIndex(({id}) => action.payload.id === id)
        if(cartItems[idx].qty === 1) {
            cartItems.splice(idx, 1)
        } else {
            cartItems[idx].qty -= 1;
            cartItems[idx].sum -= cartItems[idx].price
        }
        state.cartItems = [...cartItems]
    },

    // Remove product from cart
    removeProductFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(({id}) => id !== action.payload.id)
    },
    // Clear cart
    clearCart: (state) => {
        state.cartItems = []
    }
  },
});

const { actions, reducer: cartRecucer } = cartSlice;
const { addItemToCart, removeItemFromCart, removeProductFromCart } = actions;

export { addItemToCart, cartRecucer, removeItemFromCart, removeProductFromCart };
