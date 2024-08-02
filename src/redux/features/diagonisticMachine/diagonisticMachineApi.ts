import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const diagnosticMachineApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDiagnosticMachine: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/diagnostic-machine",
          method: "GET",
          params,
        };
      },
      providesTags: ["diagnosticMachine"],
    }),

    addDiagnosticMachine: builder.mutation({
      query: (data) => {
        return {
          url: "/diagnostic-machine",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["diagnosticMachine"],
    }),

    deleteDiagnosticMachine: builder.mutation({
      query: (id) => {
        return {
          url: `/diagnostic-machine/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["diagnosticMachine"],
    }),

    updateDiagnosticMachine: builder.mutation({
      query: (args) => {
        return {
          url: `/diagnostic-machine/${args?.id}`,
          method: "PATCH",
          body: args?.data,
        };
      },
      invalidatesTags: ["diagnosticMachine"],
    }),
  }),
});

export const {
  useAddDiagnosticMachineMutation,
  useDeleteDiagnosticMachineMutation,
  useGetAllDiagnosticMachineQuery,
  useUpdateDiagnosticMachineMutation,
} = diagnosticMachineApi;
