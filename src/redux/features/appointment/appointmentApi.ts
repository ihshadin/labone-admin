import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const appointmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppointment: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }

        return {
          url: "/appointment",
          method: "GET",
          params,
        };
      },
      providesTags: ["appointment"],
    }),

    addAppointment: builder.mutation({
      query: (data) => {
        return {
          url: "/appointment",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["appointment"],
    }),

    deleteAppointment: builder.mutation({
      query: (id) => {
        return {
          url: `/appointment/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["appointment"],
    }),

    updateAppointment: builder.mutation({
      query: (args) => {
        return {
          url: `/appointment/${args?.id}`,
          method: "PATCH",
          body: args?.data,
        };
      },
      invalidatesTags: ["appointment"],
    }),
  }),
});

export const {
  useAddAppointmentMutation,
  useDeleteAppointmentMutation,
  useGetAllAppointmentQuery,
  useUpdateAppointmentMutation,
} = appointmentApi;
