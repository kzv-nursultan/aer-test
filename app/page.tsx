"use client"
import { TableBody, TableHead } from "@/components";
import AddEmployee from "@/components/modals/addEmployee";
import { useGetAllEmployeesQuery } from "@/lib/api/employeeApi";

export default function Home() {
  const { data: employeesList } = useGetAllEmployeesQuery("");

  return (
    <div className="p-4">
      <div className="pb-4 flex">
        <AddEmployee />
      </div>
      <table className="border w-full">
        <TableHead />
        <TableBody employees={employeesList || []} />
      </table>
    </div>
  );
}
