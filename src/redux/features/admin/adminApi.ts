import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAdmin: builder.mutation({
      query: (adminInfo) => {
        return {
          url: "/admin/church/addAdmin",
          method: "POST",
          body: adminInfo,
        };
      },
      invalidatesTags: ["admins"],
    }),

    getAdmin: builder.query({
      query: (id) => {
        return {
          url: `/admin/church/admins/${id}`,
          method: "GET",
        };
      },
      providesTags: ["admins"],
    }),

    deleteAdmin: builder.mutation({
      query: (id) => {
        return {
          url: `/admin/church/delete/${id}`,
          method: "GET",
        };
      },
      invalidatesTags: ["admins"],
    }),

    getDashboardData: builder.query({
      query: () => {
        return {
          url: `/admin/dashboard`,
          method: "GET",
        };
      },
      providesTags: ["admins"],
    }),

    getUserData: builder.query({
      query: () => {
        return {
          url: `/users/getdetails`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useAddAdminMutation,
  useGetAdminQuery,
  useDeleteAdminMutation,
  useGetDashboardDataQuery,
  useGetUserDataQuery,
} = adminApi;
