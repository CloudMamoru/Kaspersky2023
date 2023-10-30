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
  }, []);

  const onPageChanged = (pageNumber) => {
    let { pageSize } = props;
    props.requestEmployees(pageNumber, pageSize);
  };

  return (
    <div>
      <Employees
        totalEmployeesCount={props.totalEmployeesCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        employees={props.employees}
        onPageChanged={onPageChanged}
        setCurrentPage={props.setCurrentPage}
      />
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
