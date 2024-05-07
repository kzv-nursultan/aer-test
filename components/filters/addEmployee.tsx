"use client";
import { Modal } from "@/ui";
import { useState } from "react";

export default function AddEmployee() {
  const [showModal, setShowModal] = useState(false);
  const saveEmployee = () => console.log("employee added");
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      <Modal
        show={showModal}
        modalHandler={setShowModal}
        title="Add employee"
        onConfirm={saveEmployee}
      >
        <></>
      </Modal>
    </>
  );
}
