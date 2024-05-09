"use client";
import { Employee } from "@/constants/types";
import { ReactNode } from "react";
import EditEmployee from "../modals/editEmployee";
import { DeleteEmployee } from "..";
import { useGetAllEmployeesQuery } from "@/lib/api/employeeApi";
import { CheckBox } from "@/ui";

interface DataCellProps {
  children: ReactNode;
  styles?: string;
}

const DataCell = ({ children, styles }: DataCellProps) => (
  <td
    scope="row"
    className={`px-6 py-4 font-medium text-gray-900 text-center border ${styles}`}
  >
    {children}
  </td>
);

const TableState = ({ text }: { text: string }) => (
  <tr>
    <td className="text-center" colSpan={8} rowSpan={3}>
      <p className="py-5">{text}</p>
    </td>
  </tr>
);

export default function TableBody() {
  const { data: employeesList, isLoading } = useGetAllEmployeesQuery("");

  if (employeesList?.length === 0 && !isLoading)
    return (
      <tbody>
        <TableState text="No Data Found..." />
      </tbody>
    );

  return (
    <tbody>
      {isLoading ? (
        <TableState text="Loading..." />
      ) : (
        employeesList?.map((employee: Employee) => (
          <tr key={employee.id}>
            <DataCell styles="sticky left-0 h-fit text-black bg-slate-100">
              {employee.name}
            </DataCell>
            <DataCell>{employee.email}</DataCell>
            <DataCell>{employee.age}</DataCell>
            <DataCell>{employee.position}</DataCell>
            <DataCell>{employee.department}</DataCell>
            <DataCell>
              <div className="flex align-center justify-center gap-2">
                <DeleteEmployee id={employee.id} name={employee.name} />
                <EditEmployee employee={employee} />
                <CheckBox id={employee.id} />
              </div>
            </DataCell>
          </tr>
        ))
      )}
    </tbody>
  );
}
