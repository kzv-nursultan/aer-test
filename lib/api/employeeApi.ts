import { Employee, EmployeeFormFields } from "@/constants/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeesApi = createApi({
  reducerPath: "employeesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (build) => ({
    getAllEmployees: build.query({
      query: () => "employees",
    }),
    deleteEmployee: build.mutation<void, number>({
      query: (id) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),
    }),
    addEmployee: build.mutation<Employee, EmployeeFormFields>({
      query: (payload) => ({
        url: "employees",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const { data: newEmployee } = await queryFulfilled;
          dispatch(
            employeesApi.util.updateQueryData(
              "getAllEmployees",
              "",
              (draft) => {
                console.log(draft);
                draft?.push(newEmployee);
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    editEmployee: build.mutation<void, Employee>({
      query: ({ id, ...rest }) => ({
        url: `employees/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useDeleteEmployeeMutation,
  useAddEmployeeMutation,
  useEditEmployeeMutation,
} = employeesApi;
