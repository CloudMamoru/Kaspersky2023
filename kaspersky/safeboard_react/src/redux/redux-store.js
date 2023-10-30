import { applyMiddleware, combineReducers, legacy_createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import employeesReducer from './employees-reducer';

let reducers = combineReducers({
  employeesPage: employeesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;

export default store;
