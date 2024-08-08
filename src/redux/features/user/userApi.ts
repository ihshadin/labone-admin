import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => {
        return {
          url: `/user/me`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `/user/me/`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
