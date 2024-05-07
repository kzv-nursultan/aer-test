import { TableHead } from "@/components";

interface Employee {
  id: number;
  name: string;
  email: string;
  age: number;
  position: string;
  department: string;
}

const getListOfEmployees = async (): Promise<Employee[]> => {
  const res = await fetch("http://localhost:3000/employees");
  return res.json();
};
export default async function Home() {
  const employeesList = await getListOfEmployees();

  return (
    <div className="p-4">
      <table className="border w-full">
        <TableHead />
        <tbody>
          {employeesList.map((employee) => (
            <tr key={employee.id}>
              <td
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {employee.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
