import { baseApi } from "../../api/baseApi";

const photosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPhotos: builder.mutation({
      query: (payload) => {
        console.log("payload", payload);
        return {
          url: "/about-us/66c9d4ff2b1c51fc3bd6abbc/add-photo",
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["photos"],
    }),

    removePhotos: builder.mutation({
      query: (payload) => {
        return {
          url: "/about-us/66c9d4ff2b1c51fc3bd6abbc/remove-photo",
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["photos"],
    }),

    getAllPhotos: builder.query({
      query: () => {
        return {
          url: "/about-us",
          method: "GET",
        };
      },
      providesTags: ["photos"],
    }),
  }),
});

export const {
  useAddPhotosMutation,
  useRemovePhotosMutation,
  useGetAllPhotosQuery,
} = photosApi;
