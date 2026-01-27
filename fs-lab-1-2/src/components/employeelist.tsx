import type { Department } from "../interfaces/Employee";

interface Props {
  departments: Department[];
}

const EmployeeList = ({ departments }: Props) => {
  return (
    <main>
      {departments.map(dept => (
        <section key={dept.name}>
          <h2>{dept.name}</h2>
          <ul>
            {dept.employees.map((emp, index) => (
              <li key={index}>{emp.firstName}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};

export default EmployeeList;
