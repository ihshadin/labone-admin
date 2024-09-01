import { baseApi } from "../../api/baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllService: builder.query({
      query: () => {
        return {
          url: "/service",
          method: "GET",
        };
      },
      providesTags: ["service"],
    }),

    addService: builder.mutation({
      query: (data) => {
        return {
          url: "/service",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["service"],
    }),

    deleteService: builder.mutation({
      query: (id) => {
        return {
          url: `/service/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetAllServiceQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
