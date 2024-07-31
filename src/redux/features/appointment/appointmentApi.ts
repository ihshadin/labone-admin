import { baseApi } from "../../api/baseApi";

const appointmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppointment: builder.query({
      query: () => {
        return {
          url: "/appointments",
          method: "GET",
        };
      },
    }),

    getAllOnetimeAppointment: builder.query({
      query: () => {
        return {
          url: "/appointments/available-dates",
          method: "GET",
        };
      },
    }),

    addAppointment: builder.mutation({
      query: (data) => {
        return {
          url: "/appointments/add-appointment-date",
          method: "POST",
          body: data,
        };
      },
    }),

    getAllRecurringAppointment: builder.query({
      query: () => {
        return {
          url: "/appointments/recurring-appointment",
          method: "GET",
        };
      },
    }),

    getAppointmentAvailableDate: builder.query({
      query: () => {
        return {
          url: "/appointments/available-dates",
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
