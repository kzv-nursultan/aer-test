"use client";
import { TableBody, TableHead } from "@/components";
import SortingFilters from "@/components/filters/sortingFilters";
import AddEmployee from "@/components/modals/addEmployee";

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col align-center pb-4 w-full gap-2 md:flex-row md:justify-between">
        <SortingFilters />
        <AddEmployee />
      </div>
      <div className="overflow-x-auto">
        <table className="border w-full whitespace-nowrap">
          <TableHead />
          <TableBody />
        </table>
      </div>
    </div>
  );
}
