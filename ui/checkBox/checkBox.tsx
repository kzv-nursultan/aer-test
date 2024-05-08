import { SelectedListContext } from "@/app/page";
import { ChangeEvent, useContext, useMemo } from "react";

interface CheckBoxProps {
  id: number;
}
export default function CheckBox({ id }: CheckBoxProps) {
  const { selectedForDelete, selectForDeleteHandler } =
    useContext(SelectedListContext);

  const checked = useMemo(
    () => selectedForDelete?.includes(id),
    [selectedForDelete, id]
  );

  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    selectForDeleteHandler(Number(target.value));
  };
  return (
    <div className="flex items-center">
      <input
        checked={checked}
        id="checked-checkbox"
        type="checkbox"
        value={id}
        onChange={onChangeHandler}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
    </div>
  );
}
