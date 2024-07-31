import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDepartment: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/department",
          method: "GET",
          params,
        };
      },
      
      providesTags: ["department"],
    }),

    addDepartment: builder.mutation({
      query: (data) => {
        return {
          url: "/department",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["department"],
    }),

    deleteDepartment: builder.mutation({
      query: (id) => {
        return {
          url: `/department/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["department"],
    }),

    updateDepartment: builder.mutation({
      query: (args) => {
        return {
          url: `/department/${args?.id}`,
          method: "PATCH",
          body: args?.data,
        };
      },
      invalidatesTags: ["department"],
    }),
  }),
});

export const {
  useGetAllDepartmentQuery,
  useAddDepartmentMutation,
  useDeleteDepartmentMutation,
  useUpdateDepartmentMutation,
} = departmentApi;
