import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchasedItems: [],
};
const purchaseSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    purchaseItem: (state, { payload }) => {
      if (state.purchasedItems.find((item) => item.id === payload.id)) return;
      state.purchasedItems.push({ id: payload.id });
      console.log(state);
    },
  },
});

export const { purchaseItem } = purchaseSlice.actions;

export default purchaseSlice.reducer;
