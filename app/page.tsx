import { TableBody, TableHead } from "@/components";
import AddEmployee from "@/components/filters/addEmployee";
import { Employee } from "@/consts/types";

const getListOfEmployees = async (): Promise<Employee[]> => {
  const res = await fetch("http://localhost:3000/employees");
  return res.json();
};
export default async function Home() {
  const employeesList = await getListOfEmployees();

  return (
    <div className="p-4">
      <AddEmployee />
      <table className="border w-full">
        <TableHead />
        <TableBody employees={employeesList} />
      </table>
    </div>
  );
}
