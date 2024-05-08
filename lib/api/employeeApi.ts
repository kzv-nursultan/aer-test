import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeesApi = createApi({
  reducerPath: "employeesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query: () => "employees",
    }),
  }),
});

export const { useGetAllEmployeesQuery } = employeesApi;
