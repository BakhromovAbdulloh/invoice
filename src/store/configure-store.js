import { configureStore } from "@reduxjs/toolkit";
import { invoicesReducer } from "./invoices/Invoices.slice";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
  },
});
