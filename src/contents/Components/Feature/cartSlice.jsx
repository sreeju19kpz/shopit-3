import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, { payload }) => {
      if (
        state.cartItems.find((item) => item.id === payload.id) === undefined ||
        state.cartItems.find((item) => item.id === payload.id) === null
      ) {
        state.cartItems.push({
          id: payload.id,
          name: payload.name,
          price: payload.price,
          img: payload.img,
          quantity: 1,
        });
      } else {
        state.cartItems.map((item) => {
          if (item.id === payload.id) {
            item.quantity++;
          } else return;
        });
      }
    },
    removeSingleFromCart: (state, { payload }) => {
      if (
        state.cartItems.find((item) => item.id === payload.id) === undefined ||
        state.cartItems.find((item) => item.id === payload.id) === null
      ) {
        return;
      } else {
        state.cartItems.map((item) => {
          if (item.id === payload.id) {
            item.quantity--;
          }
        });
      }
    },
    removeProdctFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
    },
    CalculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity;
        total += item.price * item.quantity;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  clearCart,
  addToCart,
  removeProdctFromCart,
  removeSingleFromCart,
  CalculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
