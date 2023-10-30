import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
import EmployeesContainer from './components/Employees/EmployeesContainer';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='app-wrapper'>
          <Header />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/employees' element={<EmployeesContainer />} />
              <Route path='*' element=<div>404</div> />
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
