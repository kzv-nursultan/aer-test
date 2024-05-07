import { Employee } from "@/constants/types";
interface HeaderTitles extends Omit<Employee, "id"> {
  action: string;
}

type TitlesUnion = keyof Omit<HeaderTitles, "id">;

export const HEADER_TITLES: TitlesUnion[] = [
  "name",
  "email",
  "age",
  "position",
  "department",
  "action",
];



export default function TableHead() {
  return (
    <thead className="bg-gray-50">
      <tr>
        {HEADER_TITLES.map((title) => (
          <th key={title} scope="col" className="px-6 py-3 capitalize">
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
}
