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
      async onQueryStarted(idForDelete, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(
            employeesApi.util.updateQueryData(
              "getAllEmployees",
              "",
              (draft: Employee[]) => {
                return draft.filter((employee) => employee.id !== idForDelete);
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
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
              (employeesList) => {
                employeesList?.push(newEmployee);
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
        method: "PATCH",
        body: rest,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedEmployee } = await queryFulfilled;
          dispatch(
            employeesApi.util.updateQueryData(
              "getAllEmployees",
              "",
              (employeesList) => {
                const index = employeesList.findIndex(
                  (obj: Employee) => obj.id === args.id
                );
                employeesList[index] = updatedEmployee;
              }
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getEmployeesBySearch: build.query<
      Employee[],
      { field: string; value: string }
    >({
      query: ({ field, value }) => ({
        url: "employees",
        method: "GET",
        params: {},
      }),
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useDeleteEmployeeMutation,
  useAddEmployeeMutation,
  useEditEmployeeMutation,
  useGetEmployeesBySearchQuery,
} = employeesApi;
