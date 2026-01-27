import { departments } from "../data/employees";

const EmployeeList = () => {
  return (
    <main>
      {departments.map((dept) => (
        <section key={dept.name}>
          <h2>{dept.name}</h2>
          <ul>
            {dept.employees.map((emp, index) => (
              <li key={index}>
                {emp.firstName} {emp.lastName ?? ""}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
};

export default EmployeeList;
