import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdoptionRequest: build.mutation({
      query: (data) => {
        console.log("coming from adoption api", data);
        return {
          url: "/adoption-request",
          method: "POST",
          contentType: "application/json",
          data,
        };
      },
      invalidatesTags: [tagTypes.adoptionrequest],
    }),
  }),
});

export const { useCreateAdoptionRequestMutation } = petApi;
