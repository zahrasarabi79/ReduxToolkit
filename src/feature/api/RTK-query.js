import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const dndApi = createApi({
  reducerPath: "dndApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.dnd5eapi.co/api/" }),
  endpoints: (builder) => ({ getMonstersByName: builder.query({ query: (name) => `monsters/${name}` }) }),
});
export const { useGetMonstersByNameQuery } = dndApi;
