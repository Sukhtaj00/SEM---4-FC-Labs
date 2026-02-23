import { employeeService } from "../services/employeeService";
import { useFormInput } from "../hooks/useFormInput";
import type { Department } from "../interfaces/Employee";

interface Props {
  departments: Department[];
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}

const AddEmployeeForm = ({ departments, setDepartments }: Props) => {
  const firstNameInput = useFormInput("");
  const departmentInput = useFormInput("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = firstNameInput.validate(value =>
      value.trim().length < 3
        ? "First name must be at least 3 characters."
        : null
    );

    if (!isNameValid) return;

    const result = employeeService.createEmployee(
      firstNameInput.value,
      departmentInput.value
    );

    if (!result.success) {
      departmentInput.validate(() => result.message || "Error");
      return;
    }

    setDepartments(result.data);
    firstNameInput.reset();
    departmentInput.reset();
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