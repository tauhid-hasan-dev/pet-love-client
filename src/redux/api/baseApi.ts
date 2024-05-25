import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    /*  baseUrl: "http://localhost:5000/api", */
    baseUrl: "https://pet-adoption-plaform-a8.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
