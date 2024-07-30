import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const machineApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMachine: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/machine",
          method: "GET",
          params,
        };
      },
      providesTags: ["machine"],
    }),

    addMachine: builder.mutation({
      query: (data) => {
        return {
          url: "/machine",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["machine"],
    }),

    deleteMachine: builder.mutation({
      query: (id) => {
        return {
          url: `/machine/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["machine"],
    }),

    updateMachine: builder.mutation({
      query: (args) => {
        return {
          url: `/machine/${args?.id}`,
          method: "PATCH",
          body: args?.data,
        };
      },
      invalidatesTags: ["machine"],
    }),
  }),
});

export const {
  useAddMachineMutation,
  useDeleteMachineMutation,
  useGetAllMachineQuery,
  useUpdateMachineMutation,
} = machineApi;
