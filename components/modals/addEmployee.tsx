"use client";
import { Modal } from "@/ui";
import { useState } from "react";
import { EmployeeFormFields } from "@/constants/types";
import { EmployeeHandler } from "..";
import { useAddEmployeeMutation } from "@/lib/api/employeeApi";
import { EMPLOYEE_FIELDS } from "@/constants/consts";


export default function AddEmployee() {
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] =
    useState<EmployeeFormFields>(EMPLOYEE_FIELDS);
  
  const [addEmployeeMutation, { isLoading }] = useAddEmployeeMutation();

  const saveEmployee = async () => await addEmployeeMutation(newEmployee);

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm p-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 max-w-36"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add employee
      </button>
      <Modal
        show={showModal}
        modalHandler={setShowModal}
        title="Add employee"
        onConfirm={saveEmployee}
        isLoading={isLoading}
      >
        <EmployeeHandler
          employee={newEmployee}
          setNewEmployee={setNewEmployee}
        />
      </Modal>
    </>
  );
}
