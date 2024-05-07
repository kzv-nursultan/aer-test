import { TableBody, TableHead } from "@/components";
import AddEmployee from "@/components/modals/addEmployee";
import { Employee } from "@/constants/types";
import { fetchData } from "@/utils/fetchData";

export default async function Home() {
  const employeesList = await fetchData<Employee[]>();

  return (
    <div className="p-4">
      <div className="pb-4 flex">
        <AddEmployee />
      </div>
      <table className="border w-full">
        <TableHead />
        <TableBody employees={employeesList} />
      </table>
    </div>
  );
}
