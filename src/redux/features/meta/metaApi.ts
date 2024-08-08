import { TQueryParam } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";

const metaApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMetaData: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/meta",
          method: "GET",
          params,
        };
      },
      providesTags: ["meta"],
    }),
    getAppointmentData: builder.query({
      query: (duration) => {
        // if (args) {
        //   args?.forEach((item: TQueryParam) => {
        //     params?.append(item.name, item.value as string);
        //   });
        // }
        return {
          url: `/meta/appointment-chart?duration=${duration}`,
          method: "GET",
        };
      },
      providesTags: ["meta"],
    }),
    getDepartmentData: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/meta/department-doctor-chart",
          method: "GET",
          params,
        };
      },
      providesTags: ["meta"],
    }),
    getRecentAppointmentData: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/meta/resent-appointment",
          method: "GET",
          params,
        };
      },
      providesTags: ["meta"],
    }),
    getLiveSchedulesData: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((item: TQueryParam) => {
            params?.append(item.name, item.value as string);
          });
        }
        return {
          url: "/meta/live-schedule",
          method: "GET",
          params,
        };
      },
      providesTags: ["meta"],
    }),
  }),
});

export const {
  useGetMetaDataQuery,
  useGetAppointmentDataQuery,
  useGetDepartmentDataQuery,
  useGetRecentAppointmentDataQuery,
  useGetLiveSchedulesDataQuery,
} = metaApi;
