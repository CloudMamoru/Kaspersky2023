import React, { useEffect } from 'react';
import {
  getEmployees,
  getIsFetching,
  getPageSize,
  getTotalEmployeesCount,
} from '../../redux/employees-selectors';
// import { getCurrentPage } from '../../redux/employees-selectors';
import Employees from './Employees';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { requestEmployees } from '../../redux/employees-reducer';
import Preloader from '../common/Preloader/Preloader';

// Контейнерная компонента для Ajax
const EmployeesContainer = (props) => {
  useEffect(() => {
    props.requestEmployees();
  }, []);

  return (
    <div>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Employees
          totalEmployeesCount={props.totalEmployeesCount}
          pageSize={props.pageSize}
          // setCurrentPage={props.setCurrentPage}
          employees={props.employees}
        />
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    employees: getEmployees(state),
    pageSize: getPageSize(state),
    totalEmployeesCount: getTotalEmployeesCount(state),
    isFetching: getIsFetching(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    // setCurrentPage,
    requestEmployees,
  })
)(EmployeesContainer);
