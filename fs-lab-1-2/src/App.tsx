import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import EmployeesPage from "./pages/EmployeesPage";
import OrganizationPage from "./pages/OrganizationPage";
import type { Department } from "./interfaces/Employee";
import { departments as initialDepartments } from "./data/employees";
import "./App.css"

function App() {
  const [departments, setDepartments] =
    useState<Department[]>(initialDepartments);

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
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route
            path="/employees"
            element={
              <EmployeesPage
                departments={departments}
                onAddEmployee={addEmployee}
              />
            }
          />
          <Route path="/organization" element={<OrganizationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
