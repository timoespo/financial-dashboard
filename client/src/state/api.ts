import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  GetKpisResponse,
  getProductsResponse,
  getTransactionsResponse,
} from './types'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'main',
  tagTypes: ['Kpis', 'Products', 'Transactions'],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => 'kpi/kpis/',
      providesTags: ['Kpis'],
    }),
    getProducts: build.query<Array<getProductsResponse>, void>({
      query: () => 'product/products/',
      providesTags: ['Products'],
    }),
    getTransactions: build.query<Array<getTransactionsResponse>, void>({
      query: () => 'transaction/transactions/',
      providesTags: ['Transactions'],
    }),
  }),
})

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api
