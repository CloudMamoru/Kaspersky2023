import { employeesAPI } from '../api/api';

// Action types:
const SET_EMPLOYEES = 'employeesPage/SET_EMPLOYEES';
const SET_CURRENT_PAGE = 'employeesPage/SET_CURRENT_PAGE';
const SET_TOTAL_EMPLOYEES_COUNT = 'employeesPage/SET_TOTAL_EMPLOYEES_COUNT';
const TOGGLE_IS_FETCHING = 'employeesPage/TOGGLE_IS_FETCHING';

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
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

// Thunks:
export const requestEmployees = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));

  let data = await employeesAPI.getEmployees();
  dispatch(toggleIsFetching(false));
  dispatch(setEmployees(data));
  dispatch(setTotalEmployeesCount(data.length));
};

// Reducer:
let initialState = {
  employees: [],
  pageSize: 20,
  totalEmployeesCount: 0,
  currentPage: 1,
  isFetching: false,
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
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export default employeesReducer;
