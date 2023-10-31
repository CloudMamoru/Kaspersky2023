import { createSelector } from 'reselect';

// reselect:
export const getEmployeesSelector = (state) => {
  return state.employeesPage.employees;
};

export const getEmployees = createSelector(getEmployeesSelector, (employees) => {
  return employees.filter((u) => true);
});

// Common selectors:
export const getPageSize = (state) => {
  return state.employeesPage.pageSize;
};

export const getTotalEmployeesCount = (state) => {
  return state.employeesPage.totalEmployeesCount;
};

export const getIsFetching = (state) => {
  return state.employeesPage.isFetching;
};
