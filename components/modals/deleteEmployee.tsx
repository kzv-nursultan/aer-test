"use client";
import { Employee, EmployeeFormFields } from "@/constants/types";
import Edit from "@/public/svg/edit";
import { Modal } from "@/ui";
import { useState } from "react";
import { EmployeeHandler } from "..";
import { fetchData } from "@/utils/fetchData";
import Delete from "@/public/svg/delete";

interface DeleteEmployeeProps {
  id: number;
  name: string;
}

export default function DeleteEmployee({ id, name }: DeleteEmployeeProps) {
  const [showModal, setShowModal] = useState(false);

  const openDeleteModal = () => setShowModal(true);

  const deleteEmployee = async () =>
    await fetchData<void>(
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
      `/${id}`
    );

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
      >
        <p className="text-lg">Are you sure you want to delete: {name} ?</p>
        <p className="text-slate-500">* all data will be permanently deleted</p>
      </Modal>
    </>
  );
}
