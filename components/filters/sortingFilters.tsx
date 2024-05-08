"use client";
import { EMPLOYEE_FIELDS } from "@/constants/consts";
import { ChangeEvent, useMemo, useState } from "react";

export default function SortingFilters() {
  const sortingFields = useMemo(() => Object.keys(EMPLOYEE_FIELDS), []);
  const [filter, setFilter] = useState({ field: "", value: "" });

  const selectChangeHandler = ({
    target,
  }: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const onSearchBtnClick = () => {
    console.log(filter);
  };

  return (
    <>
      <div className="pr-3 mb-6 md:mb-0">
        <div className="relative w-auto">
          <select
            className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            name="field"
            onChange={selectChangeHandler}
            value={filter.field}
          >
            <option></option>
            {sortingFields.map((field) => (
              <option key={field} className="capitalize">
                {field}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 pr-3 mb-6 md:mb-0">
        <div className="relative">
          <input
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="type here"
            name="value"
            onChange={selectChangeHandler}
            value={filter.value}
          />
        </div>
      </div>
      <button className="border px-2" onClick={onSearchBtnClick}>
        search
      </button>
    </>
  );
}
