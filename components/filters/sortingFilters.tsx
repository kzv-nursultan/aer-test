"use client";
import { EMPLOYEE_FIELDS } from "@/constants/consts";
import { useGetEmployeesBySearchMutation } from "@/lib/api/employeeApi";
import { ChangeEvent, useMemo, useState } from "react";

const initialFilterState = { field: "", value: "" };

export default function SortingFilters() {
  const sortingFields = useMemo(() => Object.keys(EMPLOYEE_FIELDS), []);
  const [filter, setFilter] = useState(initialFilterState);
  const [getEmployeesBySearch] = useGetEmployeesBySearchMutation();

  const selectChangeHandler = ({
    target,
  }: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const onSearchBtnClick = () => {
    getEmployeesBySearch(filter);
  };

  const onClearBtnClick = () => {
    setFilter(initialFilterState);
    getEmployeesBySearch(undefined);
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-2">
      <div className="flex w-full gap-2">
        <div className="relative w-auto">
          <select
            className="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            name="field"
            onChange={selectChangeHandler}
            value={filter.field}
            data-testid="filters-select"
          >
            <option value="" disabled defaultValue={""}>
              Choose field
            </option>
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

        <div className="w-full">
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
      </div>

      <div className="flex align-center gap-2">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={onSearchBtnClick}
        >
          Search
        </button>
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={onClearBtnClick}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
