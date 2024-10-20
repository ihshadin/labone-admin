import { baseApi } from "../../api/baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBanners: builder.query({
      query: () => {
        return {
          url: "/banner",
          method: "GET",
        };
      },
      providesTags: ["banner"],
    }),

    addBanner: builder.mutation({
      query: (data) => {
        return {
          url: "/banner",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["banner"],
    }),

    deleteBanner: builder.mutation({
      query: (id) => {
        return {
          url: `/banner/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["banner"],
    }),
  }),
});

export const {
  useGetAllBannersQuery,
  useAddBannerMutation,
  useDeleteBannerMutation,
} = bannerApi;
