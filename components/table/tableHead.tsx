type EMPLOYEES_HEADER = ["name", "email", "age", "position", "department"];
const HEADER_TITLES: EMPLOYEES_HEADER = [
  "name",
  "email",
  "age",
  "position",
  "department",
];

export default function TableHead() {
  return (
    <thead>
      <tr>
        {HEADER_TITLES.map((title) => (
          <th key={title} scope="col" className="px-6 py-3">
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
}
