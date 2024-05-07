import { Employee } from "@/consts/types";
import { ReactNode } from "react";

interface EmployeesRow {
  employees: Employee[];
}

interface DataCellProps {
  children: ReactNode;
}

const DataCell = ({ children }: DataCellProps) => (
  <td
    scope="row"
    className="px-6 py-4 font-medium text-gray-900 text-center"
  >
    {children}
  </td>
);

export default function TableBody({ employees }: EmployeesRow) {
  return (
    <tbody>
      {employees.map((employee) => (
        <tr key={employee.id}>
          <DataCell>{employee.name}</DataCell>
          <DataCell>{employee.email}</DataCell>
          <DataCell>{employee.age}</DataCell>
          <DataCell>{employee.position}</DataCell>
          <DataCell>{employee.department}</DataCell>
        </tr>
      ))}
    </tbody>
  );
}
