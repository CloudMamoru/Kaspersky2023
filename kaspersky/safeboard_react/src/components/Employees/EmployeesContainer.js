import React, { useEffect } from 'react';
import {
  getEmployees,
  getIsFetching,
  getPageSize,
} from '../../redux/employees-selectors';
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
        <Employees pageSize={props.pageSize} employees={props.employees} />
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    employees: getEmployees(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    requestEmployees,
  })
)(EmployeesContainer);
