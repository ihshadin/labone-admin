import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }

        return {
          url: "/user/all",
          method: "GET",
          params,
        };
      },
      providesTags: ["user"],
    }),

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

    addNewUser: builder.mutation({
      query: (data) => {
        return {
          url: `/user`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/user/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useAddNewUserMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
} = userApi;
