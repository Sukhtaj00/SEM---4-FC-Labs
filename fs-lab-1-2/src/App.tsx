import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import EmployeesPage from "./pages/EmployeesPage";
import OrganizationPage from "./pages/OrganizationPage";
import type { Department } from "./interfaces/Employee";
import { employeeRepo } from "./repositories/employeeRepo";
import "./App.css";

function App() {
  const [departments, setDepartments] = useState<Department[]>(
    employeeRepo.getDepartments()
  );

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
                setDepartments={setDepartments}
              />
            }
          />

          <Route
            path="/organization"
            element={<OrganizationPage />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;