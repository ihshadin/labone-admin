/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {
  getUserInfo,
  removeFromLocalStorage,
  storeUserInfo,
} from "../../utils/localStorageAuthManagemet";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  // baseUrl: "https://labone-backend-pied.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = getUserInfo();

    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    const errorData = result?.error?.data as { message?: string }; // Define type with optional message property
    if (errorData && errorData.message) {
      alert(errorData.message);
    } else {
      alert("An error occurred.");
    }
  }

  if (result?.error?.status === 401) {
    const res = await fetch(
      "http://localhost:5000/api/v1/auth/refresh-token",
      // "https://labone-backend-pied.vercel.app/api/v1/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await res.json();

    if (data?.data?.accessToken) {
      await storeUserInfo(data?.data?.accessToken);

      result = await baseQuery(args, api, extraOptions);
    } else {
      await removeFromLocalStorage();
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    "meta",
    "user",
    "doctor",
    "machine",
    "department",
    "appointment",
    "schedule",
    "diagnosticDoctor",
    "diagnosticMachine",
    "diagnosticSchedule",
    "notice",
  ],
  refetchOnMountOrArgChange: 30,
  endpoints: () => ({}),
});
