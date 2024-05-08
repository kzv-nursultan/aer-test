"use client";
import { TableBody, TableHead } from "@/components";
import AddEmployee from "@/components/modals/addEmployee";
import { useGetAllEmployeesQuery } from "@/lib/api/employeeApi";
import { useAppDispatch } from "@/lib/hooks";
import { setEmployeesList } from "@/lib/slices/employeeData";
import { useEffect } from "react";

export default function Home() {
  const { data: employeesList, isLoading } = useGetAllEmployeesQuery("");

  return (
    <div className="p-4">
      <div className="pb-4 flex">
        <AddEmployee />
      </div>
      <table className="border w-full">
        <TableHead />
        <TableBody employees={employeesList} loadingData={isLoading} />
      </table>
    </div>
  );
}
