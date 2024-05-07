export interface Employee {
  id: number;
  name: string;
  email: string;
  age: number;
  position: string;
  department: string;
}

export type EmployeeFormFields = Omit<Employee, "id">;
