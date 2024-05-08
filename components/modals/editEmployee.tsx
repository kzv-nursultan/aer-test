"use client";
import { Employee, EmployeeFormFields } from "@/constants/types";
import Edit from "@/public/svg/edit";
import { Modal } from "@/ui";
import { useState } from "react";
import { EmployeeHandler } from "..";
import { fetchData } from "@/utils/fetchData";
import { useEditEmployeeMutation } from "@/lib/api/employeeApi";

interface EditEmployeeProps {
  employee: Employee;
}

export default function EditEmployee({ employee }: EditEmployeeProps) {
  const [showModal, setShowModal] = useState(false);
  const [dataToChange, setDataToChange] = useState<EmployeeFormFields>(() => {
    const { id, ...rest } = { ...employee };
    return rest;
  });
  const [editEmployeeMutation, { isError, isLoading }] =
    useEditEmployeeMutation();

  const openEditModal = () => setShowModal(true);

  const updateEmployeeInfo = async () =>
    await editEmployeeMutation({ ...dataToChange, id: employee.id });

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
        isError={isError}
        isLoading={isLoading}
      >
        <EmployeeHandler
          employee={dataToChange}
          setNewEmployee={setDataToChange}
        />
      </Modal>
    </>
  );
}
