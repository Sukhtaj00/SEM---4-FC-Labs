import EmployeeList from "../components/employeelist";
import AddEmployeeForm from "../components/addemployeeform";
import type { Department } from "../interfaces/Employee";

interface Props {
  departments: Department[];
  setDepartments: React.Dispatch<React.SetStateAction<Department[]>>;
}

const EmployeesPage = ({ departments, setDepartments }: Props) => {
  return (
    <>
      <EmployeeList departments={departments} />
      <AddEmployeeForm
        departments={departments}
        setDepartments={setDepartments}
      />
    </>
  );
};

export default EmployeesPage;