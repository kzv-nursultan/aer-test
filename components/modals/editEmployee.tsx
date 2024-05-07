"use client";
import { Employee, EmployeeFormFields } from "@/constants/types";
import Edit from "@/public/svg/edit";
import { Modal } from "@/ui";
import { useState } from "react";
import { EmployeeHandler } from "..";
import { fetchData } from "@/utils/fetchData";

interface EditEmployeeProps {
  employee: Employee;
}

export default function EditEmployee({ employee }: EditEmployeeProps) {
  const [showModal, setShowModal] = useState(false);
  const [dataToChange, setDataToChange] = useState<EmployeeFormFields>(() => {
    const { id, ...rest } = { ...employee };
    return rest;
  });

  const openEditModal = () => setShowModal(true);

  const updateEmployeeInfo = async () =>
    await fetchData<void>({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToChange),
    }, `/${employee.id}`);

  return (
    <>
      <button className="border" onClick={openEditModal}>
        <Edit />
      </button>
      <Modal
        show={showModal}
        modalHandler={setShowModal}
        title={`Edit ${employee.name}`}
        onConfirm={updateEmployeeInfo}
      >
        <EmployeeHandler
          employee={dataToChange}
          setNewEmployee={setDataToChange}
        />
      </Modal>
    </>
  );
}
