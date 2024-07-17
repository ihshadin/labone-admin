import { baseApi } from "../../api/baseApi";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDoctors: builder.query({
      query: () => {
        return {
          url: "/doctor",
          method: "GET",
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
  }),
});

export const { useGetAllDoctorsQuery, useAddDoctorMutation } = doctorsApi;
