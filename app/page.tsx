"use client";
import { TableBody, TableHead } from "@/components";
import SortingFilters from "@/components/filters/sortingFilters";
import AddEmployee from "@/components/modals/addEmployee";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex align-center pb-4 w-full">
        <SortingFilters />
        <AddEmployee />
      </div>
      <table className="border w-full">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}
