"use client";
import { Modal } from "@/ui";
import { useState } from "react";
import { EmployeeFormFields } from "@/constants/types";
import { fetchData } from "@/utils/fetchData";
import { EmployeeHandler } from "..";

const InitialNewEmployeeState: EmployeeFormFields = {
  name: "",
  email: "",
  age: 0,
  position: "",
  department: "",
};

export default function AddEmployee() {
  const [showModal, setShowModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState<EmployeeFormFields>(
    InitialNewEmployeeState
  );
  const saveEmployee = () =>
    fetchData<void>({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    });
  
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm p-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
      >
        <EmployeeHandler
          employee={newEmployee}
          setNewEmployee={setNewEmployee}
        />
      </Modal>
    </>
  );
}
