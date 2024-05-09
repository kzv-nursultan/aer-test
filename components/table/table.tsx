"use client"
import { useDeleteEmployeeMutation } from "@/lib/api/employeeApi";
import { createContext, useCallback, useState } from "react";
import TableHead from "./tableHead";
import TableBody from "./tableBody";
import { Modal } from "@/ui";

interface SelectedContext {
  selectedForDelete: number[];
  selectForDeleteHandler: (id: number) => void;
}

export const SelectedListContext = createContext<SelectedContext>({
  selectedForDelete: [],
  selectForDeleteHandler: () => {},
});

export default function Table() {
   const [showModal, setShowModal] = useState(false);
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
     try {
       await Promise.all(
         selectedForDelete.map((id) => deleteEmployeeMutation(id))
       );
       setSelectedForDelete([]);
     } catch (error) {
       console.error(error);
     }
   };
  return (
    <div className="overflow-x-auto">
      <SelectedListContext.Provider
        value={{ selectedForDelete, selectForDeleteHandler }}
      >
        <table data-testid="employees-table" className="border w-full whitespace-nowrap">
          <TableHead />
          <TableBody />
        </table>
      </SelectedListContext.Provider>
      <button
        className="sticky left-0 bg-gray-300 disabled:text-gray-200 disabled:hover:bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-4 capitalize"
        disabled={selectedForDelete.length === 0}
        onClick={() => setShowModal(true)}
      >
        delete selected
      </button>
      <Modal
        show={showModal}
        modalHandler={setShowModal}
        title={"Delete selected"}
        onConfirm={onDeleteSelectedClick}
        confirmTitle="Delete"
        isLoading={isLoading}
        isError={isError}
      >
        <p className="text-lg">
          Are you sure you want to delete selected Employees?
        </p>
        <p className="text-slate-500">* all data will be permanently deleted</p>
      </Modal>
    </div>
  );
}
