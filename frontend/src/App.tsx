import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import EmployeesPage from "./pages/EmployeesPage";
import OrganizationPage from "./pages/OrganizationPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Navigate to="/employees" />} />

          <Route path="/employees" element={<EmployeesPage />} />

          <Route path="/organization" element={<OrganizationPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;