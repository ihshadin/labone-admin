import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";


const diagnosticDoctorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDiagnosticDoctors: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/diagnostic-doctor",
          method: "GET",
          params,
        };
      },
      providesTags: ["diagnosticDoctor"],
    }),

    addDiagnosticDoctor: builder.mutation({
      query: (data) => {
        return {
          url: "/diagnostic-doctor",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["diagnosticDoctor"],
    }),

    deleteDiagnosticDoctor: builder.mutation({
      query: (id) => {
        return {
          url: `/diagnostic-doctor/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["diagnosticDoctor"],
    }),

    updateDiagnosticDoctor: builder.mutation({
      query: (args) => {
        return {
          url: `/diagnostic-doctor/${args?.id}`,
          method: "PATCH",
          body: args?.data,
        };
      },
      invalidatesTags: ["diagnosticDoctor"],
    }),
  }),
});

export const {
  useAddDiagnosticDoctorMutation,
  useDeleteDiagnosticDoctorMutation,
  useGetAllDiagnosticDoctorsQuery,
  useUpdateDiagnosticDoctorMutation,
} = diagnosticDoctorApi;
