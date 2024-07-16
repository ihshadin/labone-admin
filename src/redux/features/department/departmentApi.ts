import { baseApi } from "../../api/baseApi";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDepartment: builder.query({
      query: () => {
        return {
          url: "/department",
          method: "GET",
        };
      },
    }),

    addDepartment: builder.mutation({
      query: (data) => {
        return {
          url: "/department",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetAllDepartmentQuery, useAddDepartmentMutation } = departmentApi;
