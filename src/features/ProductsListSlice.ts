import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils";
import type { productsSliceInitialState } from "../App.types";

const initialState: productsSliceInitialState = {
  datas: [],
  loading: true,
  error: "",
};

const ProductsListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsDataInList.fulfilled, (state, action) => {
      state.datas = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getProductsDataInList.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getProductsDataInList.rejected, (state) => {
      state.loading = false;
      state.error = "Error in Fetching Data";
    });
  },
});

export const getProductsDataInList = createAsyncThunk(
  "productsList",
  async () => {
    const apiURL = await fetch(`${BASE_URL}/products`);
    const response = await apiURL.json();
    return response;
  }
);

export default ProductsListSlice.reducer;
