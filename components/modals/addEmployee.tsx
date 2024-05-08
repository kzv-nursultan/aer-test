"use client";
import { Modal } from "@/ui";
import { useMemo, useState } from "react";
import { EmployeeFormFields } from "@/constants/types";
import { EmployeeHandler } from "..";
import { useAddEmployeeMutation } from "@/lib/api/employeeApi";
import { EMPLOYEE_FIELDS } from "@/constants/consts";

export default function AddEmployee() {
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] =
    useState<EmployeeFormFields>(EMPLOYEE_FIELDS);

  const hasFormFilled = useMemo(() => {
    const values = Object.values(newEmployee);
    return values.includes("");
  }, [newEmployee]);

  const [addEmployeeMutation, { isLoading }] = useAddEmployeeMutation();

  const saveEmployee = async () => {
    try {
      await addEmployeeMutation(newEmployee);
      setNewEmployee(EMPLOYEE_FIELDS);
    } catch (e) {
      console.error(e);
    }
  };

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
        title="Create Employee"
        onConfirm={saveEmployee}
        isLoading={isLoading}
        confirmDisabled={hasFormFilled}
      >
        <EmployeeHandler
          employee={newEmployee}
          setNewEmployee={setNewEmployee}
        />
      </Modal>
    </>
  );
}
