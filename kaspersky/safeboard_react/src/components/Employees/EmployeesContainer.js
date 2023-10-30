import React from 'react';
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

class EmployeesContainer extends React.Component {
  componentDidMount() {
    let { currentPage, pageSize } = this.props;
    this.props.requestEmployees(currentPage, pageSize);
  }
  render() {
    return (
      <div>
        <Employees />
      </div>
    );
  }
}

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
