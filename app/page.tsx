"use client";
import { TableBody, TableHead } from "@/components";
import SortingFilters from "@/components/filters/sortingFilters";
import AddEmployee from "@/components/modals/addEmployee";
import { useDeleteEmployeeMutation } from "@/lib/api/employeeApi";
import { createContext, useCallback, useState } from "react";

interface SelectedContext {
  selectedForDelete: number[];
  selectForDeleteHandler: (id: number) => void;
}

export const SelectedListContext = createContext<SelectedContext>({
  selectedForDelete: [],
  selectForDeleteHandler: () => {},
});

export default function Home() {
  const [selectedForDelete, setSelectedForDelete] = useState<number[]>([]);
  const [deleteEmployeeMutation, { isLoading, isError }] =
    useDeleteEmployeeMutation();

  const selectForDeleteHandler = useCallback((id: number) => {
    setSelectedForDelete((prev) => {
      if (prev.includes(id)) {
        return [...prev].filter((num) => num !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  const onDeleteSelectedClick = async () => {
    await Promise.all(selectedForDelete.map((id) => deleteEmployeeMutation(id)));
  }

  return (
    <div className="p-4">
      <div className="flex flex-col align-center pb-4 w-full gap-2 md:flex-row md:justify-between">
        <SortingFilters />
        <AddEmployee />
      </div>
      <div className="overflow-x-auto">
        <SelectedListContext.Provider
          value={{ selectedForDelete, selectForDeleteHandler }}
        >
          <table className="border w-full whitespace-nowrap">
            <TableHead />
            <TableBody />
          </table>
        </SelectedListContext.Provider>
        <button
          className="p-3 border rounded mt-4"
          disabled={selectedForDelete.length === 0}
          onClick={onDeleteSelectedClick}
        >
          delete selected
        </button>
      </div>
    </div>
  );
}
