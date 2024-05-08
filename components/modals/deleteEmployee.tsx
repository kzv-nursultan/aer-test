"use client";
import { Modal } from "@/ui";
import { useState } from "react";
import Delete from "@/public/svg/delete";
import { useDeleteEmployeeMutation } from "@/lib/api/employeeApi";

interface DeleteEmployeeProps {
  id: number;
  name: string;
}

export default function DeleteEmployee({ id, name }: DeleteEmployeeProps) {
  const [showModal, setShowModal] = useState(false);
  const [deleteEmployeeMutation, { isLoading, isError }] =
    useDeleteEmployeeMutation();

  const openDeleteModal = () => setShowModal(true);

  const deleteEmployee = async () => {
    await deleteEmployeeMutation(id);
  };

  return (
    <>
      <button className="border" onClick={openDeleteModal}>
        <Delete />
      </button>
      <Modal
        show={showModal}
        modalHandler={setShowModal}
        title={"Delete data"}
        onConfirm={deleteEmployee}
        confirmTitle="Delete"
        isLoading={isLoading}
        isError={isError}
      >
        <p className="text-lg">Are you sure you want to delete: {name} ?</p>
        <p className="text-slate-500">* all data will be permanently deleted</p>
      </Modal>
    </>
  );
}
