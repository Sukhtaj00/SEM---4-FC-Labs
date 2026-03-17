import { useEffect, useState } from "react";
import AddRoleForm from "../components/AddRoleForm";
import type { Role } from "../interfaces/role";

const OrganizationPage = () => {
  const [roles, setRoles] = useState<Role[]>([]);

  // Load roles from backend
  useEffect(() => {
    fetch("http://localhost:3000/organization")
      .then(res => res.json())
      .then(data => setRoles(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main>
      <h2>Organization</h2>

      <ul>
        {roles.map((person, index) => (
          <li
            key={index}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>
              {person.firstName} {person.lastName}
            </span>
            <span>{person.role}</span>
          </li>
        ))}
      </ul>

      <AddRoleForm setRoles={setRoles} />
    </main>
  );
};

export default OrganizationPage;