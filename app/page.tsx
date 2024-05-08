"use client";
import { TableBody, TableHead } from "@/components";
import AddEmployee from "@/components/modals/addEmployee";

export default function Home() {
  return (
    <div className="p-4">
      <div className="pb-4 flex">
        <AddEmployee />
      </div>
      <table className="border w-full">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}
