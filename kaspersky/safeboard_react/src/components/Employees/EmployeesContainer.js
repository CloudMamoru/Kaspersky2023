import React, { useEffect } from 'react';
import {
  getEmployees,
  getPageSize,
  getTotalEmployeesCount,
} from '../../redux/employees-selectors';
import { getCurrentPage } from '../../redux/employees-selectors';
import Employees from './Employees';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { requestEmployees, setCurrentPage } from '../../redux/employees-reducer';

const EmployeesContainer = (props) => {
  useEffect(() => {
    props.requestEmployees(props.currentPage, props.pageSize);
  });
  return (
    <div>
      <Employees employees={props.employees} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    employees: getEmployees(state),
    pageSize: getPageSize(state),
    totalEmployeesCount: getTotalEmployeesCount(state),
    currentPage: getCurrentPage(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    requestEmployees,
  })
)(EmployeesContainer);
