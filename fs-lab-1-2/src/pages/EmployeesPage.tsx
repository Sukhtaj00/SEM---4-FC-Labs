import EmployeeList from "../components/employeelist";
import AddEmployeeForm from "../components/addemployeeform";
import type { Department } from "../interfaces/Employee";

interface Props {
  departments: Department[];
  onAddEmployee: (firstName: string, departmentName: string) => void;
}

const EmployeesPage = ({ departments, onAddEmployee }: Props) => {
  return (
    <>
      <EmployeeList departments={departments} />
      <AddEmployeeForm
        departments={departments}
        onAddEmployee={onAddEmployee}
      />
    </>
  );
};

export default EmployeesPage;
