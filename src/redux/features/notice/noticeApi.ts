import { baseApi } from "../../api/baseApi";

const noticeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotices: builder.query({
      query: () => {
        return {
          url: "/notice",
          method: "GET",
        };
      },
      providesTags: ["notice"],
    }),

    addNotice: builder.mutation({
      query: (data) => {
        return {
          url: "/notice",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["notice"],
    }),

    deleteNotice: builder.mutation({
      query: (id) => {
        return {
          url: `/notice/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["notice"],
    }),
  }),
});

export const {
  useGetAllNoticesQuery,
  useAddNoticeMutation,
  useDeleteNoticeMutation,
} = noticeApi;
