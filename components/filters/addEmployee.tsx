"use client";
import { Modal } from "@/ui";
import { useState } from "react";
import { CreateEmployee } from "..";
import { EmployeeFormFields } from "@/constants/types";

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
  const saveEmployee = () => console.log("employee added");
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
        <CreateEmployee
          employee={newEmployee}
          setNewEmployee={setNewEmployee}
        />
      </Modal>
    </>
  );
}
