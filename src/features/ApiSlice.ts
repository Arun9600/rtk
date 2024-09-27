import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { limitResult, productsDetailData } from "../App.types";

export const productCategory = createApi({
  reducerPath: "productCategory",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProductCategory: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
    getLimitedProducts: builder.query<limitResult[], void>({
      query: () => "/products?limit=6",
    }),
    getProductDetail: builder.query<productsDetailData, number>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetProductCategoryQuery,
  useGetLimitedProductsQuery,
  useGetProductDetailQuery,
} = productCategory;
