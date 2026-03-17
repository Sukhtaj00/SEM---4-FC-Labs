import { useRoleForm } from "../hooks/useRoleForm";

interface Props {
  setRoles: React.Dispatch<React.SetStateAction<any>>;
}

const AddRoleForm = ({ setRoles }: Props) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    role,
    setRole,
    error,
    handleSubmit
  } = useRoleForm(setRoles);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Role</h3>

      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role Title"
        value={role}
        onChange={e => setRole(e.target.value)}
      />

      <button type="submit">Add Role</button>
    </form>
  );
};

export default AddRoleForm;