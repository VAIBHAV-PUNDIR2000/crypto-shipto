import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = `https://bing-news-search1.p.rapidapi.com`;
const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "9fd49c40d9msh65fa100850ff5f0p1b08c3jsn5182389fc09a",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export default cryptoNewsApi;

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
