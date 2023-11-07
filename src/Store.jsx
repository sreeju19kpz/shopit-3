import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./contents/Components/Feature/cartSlice";
import purchaseReducer from "./contents/Components/Feature/PurchaseSlice";
import { productsApi } from "./contents/customHooks/ReactQuery";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    purchase: purchaseReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
