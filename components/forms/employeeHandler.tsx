"use client";
import { EmployeeFormFields } from "@/constants/types";
import { Dispatch, SetStateAction } from "react";

interface EmployeeHandlerProps {
  employee: EmployeeFormFields;
  setNewEmployee: Dispatch<SetStateAction<EmployeeFormFields>>;
}

export default function EmployeeHandler({
  employee,
  setNewEmployee,
}: EmployeeHandlerProps) {
  
  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="w-full max-w-sm">
      {Object.keys(employee).map((title) => (
        <div key={title} className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4 capitalize"
              htmlFor={`id-for-${title}-input`}
            >
              {title}
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id={`id-for-${title}-input`}
              type="text"
              value={employee[title as keyof EmployeeFormFields]}
              onChange={onChangeHandler}
              name={title}
              required
            />
          </div>
        </div>
      ))}
    </form>
  );
}
