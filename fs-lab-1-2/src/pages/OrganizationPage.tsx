import { useState } from "react";
import { organizationRepo } from "../repositories/organizationRepo";
import AddRoleForm from "../components/AddRoleForm";
import type { Role } from "../interfaces/role";

const OrganizationPage = () => {
  const [roles, setRoles] = useState<Role[]>(
    organizationRepo.getRoles()
  );

  return (
    <main>
      <h2>Organization</h2>

      <ul>
        {roles.map((person, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
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