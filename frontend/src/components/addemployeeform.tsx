import { useFormInput } from "../hooks/useFormInput";
import type { Department } from "../interfaces/Employee";

interface Props {
  departments: Department[];
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}

const AddEmployeeForm = ({ departments, setDepartments }: Props) => {
  const firstNameInput = useFormInput("");
  const departmentInput = useFormInput("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend validation
    const isNameValid = firstNameInput.validate(value =>
      value.trim().length < 3
        ? "First name must be at least 3 characters."
        : null
    );

    if (!isNameValid) return;

    try {
      const response = await fetch("http://localhost:3000/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName: firstNameInput.value,
          departmentName: departmentInput.value
        })
      });

      const data = await response.json();

      if (!response.ok) {
        departmentInput.validate(() => data.message || "Error");
        return;
      }

      setDepartments(data);
      firstNameInput.reset();
      departmentInput.reset();
    } catch (err) {
      departmentInput.validate(() => "Server error.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Employee</h3>

      <input
        type="text"
        value={firstNameInput.value}
        onChange={e => firstNameInput.setValue(e.target.value)}
        placeholder="First Name"
      />
      {firstNameInput.message && <p>{firstNameInput.message}</p>}

      <select
        value={departmentInput.value}
        onChange={e => departmentInput.setValue(e.target.value)}
      >
        <option value="">Select Department</option>
        {departments.map(dept => (
          <option key={dept.name} value={dept.name}>
            {dept.name}
          </option>
        ))}
      </select>
      {departmentInput.message && <p>{departmentInput.message}</p>}

      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;