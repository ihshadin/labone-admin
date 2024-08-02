import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const diagnosticScheduleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDiagnosticSchedule: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }

        return {
          url: "/diagnostic-schedule",
          method: "GET",
          params,
        };
      },
      providesTags: ["diagnosticSchedule"],
    }),

    addDiagnosticSchedule: builder.mutation({
      query: (data) => {
        return {
          url: "/diagnostic-schedule",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["diagnosticSchedule"],
    }),

    deleteDiagnosticSchedule: builder.mutation({
      query: (id) => {
        return {
          url: `/diagnostic-schedule/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["diagnosticSchedule"],
    }),

    updateDiagnosticSchedule: builder.mutation({
      query: (args) => {
        return {
          url: `/diagnostic-schedule/${args?.id}`,
          method: "PATCH",
          body: args?.data,
        };
      },
      invalidatesTags: ["diagnosticSchedule"],
    }),
  }),
});

export const {
  useAddDiagnosticScheduleMutation,
  useDeleteDiagnosticScheduleMutation,
  useGetAllDiagnosticScheduleQuery,
  useUpdateDiagnosticScheduleMutation,
} = diagnosticScheduleApi;
