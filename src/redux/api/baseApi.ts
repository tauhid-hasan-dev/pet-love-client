import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pet-adoption-plaform-a8.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
