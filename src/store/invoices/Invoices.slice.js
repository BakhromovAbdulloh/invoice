import { createSlice } from "@reduxjs/toolkit";

export const { actions: invoicesAction, reducer: invoicesReducer } =
  createSlice({
    name: "invoices",
    initialState: {
      invoicesList: null,
      error: null,
    },

    reducers: {
      setInvoicesList: (state, { payload }) => {
        state.invoicesList = payload;
      },
    },
  });
