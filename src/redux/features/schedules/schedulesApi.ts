import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const schedulesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSchedule: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }

        return {
          url: "/schedule",
          method: "GET",
          params,
        };
      },
      providesTags: ["schedule"],
    }),

    addSchedule: builder.mutation({
      query: (data) => {
        return {
          url: "/schedule",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["schedule"],
    }),

    deleteSchedule: builder.mutation({
      query: (id) => {
        return {
          url: `/schedule/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["schedule"],
    }),

    updateSchedule: builder.mutation({
      query: (args) => {
        return {
          url: `/schedule/${args?.id}`,
          method: "PATCH",
          body: args?.data,
        };
      },
      invalidatesTags: ["schedule"],
    }),
  }),
});

export const {
  useAddScheduleMutation,
  useDeleteScheduleMutation,
  useGetAllScheduleQuery,
  useUpdateScheduleMutation,
} = schedulesApi;
