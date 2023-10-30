import style from './Employees.module.css';

const Employees = (props) => {
  return <div>{props.employees.map((e) => e.id)}</div>;
};

export default Employees;
