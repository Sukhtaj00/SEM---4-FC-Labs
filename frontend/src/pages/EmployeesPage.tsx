import { useEffect, useState } from "react";
import EmployeeList from "../components/employeelist";
import AddEmployeeForm from "../components/addemployeeform";
import type { Department } from "../interfaces/Employee";

const EmployeesPage = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  // Load employees from backend
  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <EmployeeList departments={departments} />
      <AddEmployeeForm
        departments={departments}
        setDepartments={setDepartments}
      />
    </>
  );
};

export default EmployeesPage;