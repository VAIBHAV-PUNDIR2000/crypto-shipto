import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "9fd49c40d9msh65fa100850ff5f0p1b08c3jsn5182389fc09a",
};

const baseUrl = `https://coinranking1.p.rapidapi.com/coins`;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
