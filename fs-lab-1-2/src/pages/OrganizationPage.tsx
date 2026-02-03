import { organization } from "../data/organization";

const OrganizationPage = () => {
  return (
    <main>
      <h2>Organization</h2>

      <ul>
        {organization.map((person, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              {person.firstName} {person.lastName}
            </span>
            <span>{person.role}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default OrganizationPage;
