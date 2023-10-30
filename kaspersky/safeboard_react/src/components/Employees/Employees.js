import Paginator from '../common/Paginator/Paginator';
import style from './Employees.module.css';
import Table from './TypeOfDataOutput/Table/Table';

const Employees = (props) => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalEmployeesCount}
        pageSize={props.pageSize}
        setCurrentPage={props.setCurrentPage}
      />
      <br />
      <Table employees={props.employees} />
    </div>
  );
};

export default Employees;
