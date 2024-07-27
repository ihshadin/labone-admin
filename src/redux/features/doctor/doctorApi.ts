import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDoctors: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }

        return {
          url: "/doctor",
          method: "GET",
          params,
        };
      },
    }),

    addDoctor: builder.mutation({
      query: (data) => {
        return {
          url: "/doctor",
          method: "POST",
          body: data,
        };
      },
    }),

    deleteDoctor: builder.mutation({
      query: (id) => {
        return {
          url: `/doctor/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useGetAllDoctorsQuery, useAddDoctorMutation, useDeleteDoctorMutation } = doctorsApi;
