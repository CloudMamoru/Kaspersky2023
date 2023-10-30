import style from './Employees.module.css';
import Table from './TypeOfDataOutput/Table/Table';

const Employees = (props) => {
  return <Table employees={props.employees} />;
};

export default Employees;
