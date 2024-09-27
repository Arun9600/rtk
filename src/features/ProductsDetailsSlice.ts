import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { productsDetailsSliceInitialSlice } from "../App.types";
import { BASE_URL } from "../utils";

const initialState: productsDetailsSliceInitialSlice = {
  datas: {},
  loading: true,
  error: "",
};

const ProductDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productDetailsFunc.fulfilled, (state, action) => {
      state.datas = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(productDetailsFunc.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(productDetailsFunc.rejected, (state) => {
      state.loading = false;
      state.error = "Error in Fetchin Data..!!!";
    });
  },
});

export const productDetailsFunc = createAsyncThunk(
  "productDetails",
  async (productId: number) => {
    const apiURL = await fetch(`${BASE_URL}/products/${productId}`);
    const response = await apiURL.json();
    return response;
  }
);

export default ProductDetailsSlice.reducer;
