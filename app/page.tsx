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
    <main>
      <>
        {employeesList.map((employee) => (
          <p key={employee.id}>{employee.name}</p>
        ))}
      </>
    </main>
  );
}
