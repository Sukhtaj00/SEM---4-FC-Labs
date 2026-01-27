import { useState } from "react";
import type { Department } from "../interfaces/Employee";

interface Props {
  departments: Department[];
  onAddEmployee: (firstName: string, departmentName: string) => void;
}

const AddEmployeeForm = ({ departments, onAddEmployee }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters.");
      return;
    }

    if (!department) {
      setError("Please select a department.");
      return;
    }

    onAddEmployee(firstName.trim(), department);
    setFirstName("");
    setDepartment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Employee</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />

      <select
        value={department}
        onChange={e => setDepartment(e.target.value)}
      >
        <option value="">Select Department</option>
        {departments.map(dept => (
          <option key={dept.name} value={dept.name}>
            {dept.name}
          </option>
        ))}
      </select>

      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;
