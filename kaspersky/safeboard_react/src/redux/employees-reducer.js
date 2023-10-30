import { employeesAPI } from '../api/api';

// Action types:
const SET_EMPLOYEES = 'employeesPage/SET_EMPLOYEES';
const SET_CURRENT_PAGE = 'employeesPage/SET_CURRENT_PAGE';
const SET_TOTAL_EMPLOYEES_COUNT = 'employeesPage/SET_TOTAL_EMPLOYEES_COUNT';

// Action creators:
export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalEmployeesCount = (totalCount) => ({
  type: SET_TOTAL_EMPLOYEES_COUNT,
  totalCount,
});

// Thunks:
export const requestEmployees = (page, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(page));

  let data = await employeesAPI.getEmployees(page, pageSize);
  dispatch(setEmployees(data));
  dispatch(setTotalEmployeesCount(data.totalCount));
};

// Reducer:
let initialState = {
  employees: [],
  pageSize: 5,
  totalEmployeesCount: 0,
  currentPage: 1,
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.employees,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_EMPLOYEES_COUNT:
      return {
        ...state,
        totalEmployeesCount: action.totalCount,
      };
    default:
      return state;
  }
};

export default employeesReducer;
