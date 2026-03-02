import { useState } from "react";
import { organizationService } from "../services/organizationService";

export const useRoleForm = (
  setRoles: React.Dispatch<React.SetStateAction<any>>
) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = organizationService.createRole(
      firstName,
      lastName,
      role
    );

    if (!result.success) {
      setError(result.message);
      return;
    }

    setRoles(result.data);
    setFirstName("");
    setLastName("");
    setRole("");
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    role,
    setRole,
    error,
    handleSubmit
  };
};