import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const galleryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGallery: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/gallery",
          method: "GET",
          params,
        };
      },
      providesTags: ["gallery"],
    }),

    addGallery: builder.mutation({
      query: (data) => {
        return {
          url: "/gallery",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["gallery"],
    }),

    deleteGallery: builder.mutation({
      query: (id) => {
        return {
          url: `/gallery/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["gallery"],
    }),

    updateGallery: builder.mutation({
      query: (args) => {
        return {
          url: `/gallery/${args?.id}`,
          method: "PATCH",
          body: args?.data,
        };
      },
      invalidatesTags: ["gallery"],
    }),
  }),
});

export const {
  useGetAllGalleryQuery,
  useAddGalleryMutation,
  useDeleteGalleryMutation,
  useUpdateGalleryMutation,
} = galleryApi;
