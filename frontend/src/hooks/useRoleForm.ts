import { useState } from "react";

export const useRoleForm = (
  setRoles: React.Dispatch<React.SetStateAction<any>>
) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic frontend validation
    if (firstName.trim().length < 3) {
      setError("First name must be at least 3 characters.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/organization", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          lastName,
          role
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      setRoles(data);
      setFirstName("");
      setLastName("");
      setRole("");
    } catch (err) {
      setError("Server error.");
    }
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