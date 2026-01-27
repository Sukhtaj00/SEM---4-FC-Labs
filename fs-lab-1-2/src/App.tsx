import { useState } from "react";
import Header from "./components/header";
import EmployeeList from "./components/employeelist";
import Footer from "./components/footer";
import AddEmployeeForm from "./components/addemployeeform";
import type { Department } from "./interfaces/Employee";
import { departments as initialDepartments } from "./data/employees";

function App() {
  const [departments, setDepartments] = useState<Department[]>(initialDepartments);

  const addEmployee = (firstName: string, departmentName: string) => {
    setDepartments(prev =>
      prev.map(dept =>
        dept.name === departmentName
          ? {
              ...dept,
              employees: [...dept.employees, { firstName }]
            }
          : dept
      )
    );
  };

  return (
    <>
      <Header />
      <EmployeeList departments={departments} />
      <AddEmployeeForm
        departments={departments}
        onAddEmployee={addEmployee}
      />
      <Footer />
    </>
  );
}

export default App;
