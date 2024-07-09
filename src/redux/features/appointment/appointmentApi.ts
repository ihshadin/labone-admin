import { baseApi } from "../../api/baseApi";

const appointmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppointment: builder.query({
      query: () => {
        return {
          url: "/admin/appointments",
          method: "GET",
        };
      },
      providesTags: ["appointments"],
    }),

    getAllOnetimeAppointment: builder.query({
      query: () => {
        return {
          url: "/admin/appointments/available-dates",
          method: "GET",
        };
      },
      providesTags: ["appointments"],
    }),

    addAppointment: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/appointments/add-appointment-date",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["appointments"],
    }),

    getAllRecurringAppointment: builder.query({
      query: () => {
        return {
          url: "/admin/appointments/recurring-appointment",
          method: "GET",
        };
      },
    }),

    getAppointmentAvailableDate: builder.query({
      query: () => {
        return {
          url: "/admin/appointments/available-dates",
          method: "GET",
        };
      },
    }),
    getAppointmentDateView: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        params.append("date", args);

        return {
          url: "/admin/appointments/add-appointment-date",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const {
  useGetAllAppointmentQuery,
  useAddAppointmentMutation,
  useGetAllRecurringAppointmentQuery,
  useGetAppointmentAvailableDateQuery,
  useGetAppointmentDateViewQuery,
  useGetAllOnetimeAppointmentQuery,
} = appointmentApi;
