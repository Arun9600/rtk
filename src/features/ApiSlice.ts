import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { limitResult, productsDetailData } from "../App.types";

export const productCategory = createApi({
  reducerPath: "productCategory",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getLimitedProducts: builder.query<limitResult[], void>({
      query: () => "/products?limit=6",
    }),
    getProductDetail: builder.query<productsDetailData, number>({
      query: (id) => `/products/${id}`,
    }),
    getAllProducts: builder.query<productsDetailData[], void>({
      query: () => `/products`,
    }),
    getCategoryJewels: builder.query<productsDetailData[], void>({
      query: () => `/products/category/jewelery`,
    }),
    getCategoryElectronics: builder.query<productsDetailData[], void>({
      query: () => `/products/category/electronics`,
    }),
    getCategoryMens: builder.query<productsDetailData[], void>({
      query: () => `/products/category/men's clothing`,
    }),
    getCategoryWoMens: builder.query<productsDetailData[], void>({
      query: () => `/products/category/women's clothing`,
    }),
  }),
});

export const {
  useGetLimitedProductsQuery,
  useGetCategoryElectronicsQuery,
  useGetProductDetailQuery,
  useGetAllProductsQuery,
  useGetCategoryJewelsQuery,
  useGetCategoryMensQuery,
  useGetCategoryWoMensQuery,
} = productCategory;
