import { IPet } from "@/types/pet";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IMeta } from "@/types";

const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    /*  createPet: build.mutation({
      query: (data) => {
        // Log the data before sending it
        console.log(data);
        return {
          url: "/pets",
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: [tagTypes.pet],
    }), */

    createPet: build.mutation({
      query: (data) => {
        console.log("coming from pet api", data); // You can log the data here if needed
        return {
          url: "/pets",
          method: "POST",
          contentType: "application/json",
          data,
        };
      },
      invalidatesTags: [tagTypes.pet],
    }),

    editPet: build.mutation({
      query: (data) => ({
        url: "/pets",
        method: "PUT",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.pet],
    }),

    getAllPets: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/pets",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IPet[], meta: IMeta) => {
        return {
          pets: response,
          meta,
        };
      },
      providesTags: [tagTypes.pet],
    }),

    getPet: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/pets/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.pet],
    }),

    deletePet: build.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.pet],
    }),
  }),
});

export const {
  useCreatePetMutation,
  useDeletePetMutation,
  useGetAllPetsQuery,
  useEditPetMutation,
  useGetPetQuery,
} = petApi;
