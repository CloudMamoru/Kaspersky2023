import { useState, useEffect } from 'react';
import Paginator from '../common/Paginator/Paginator';
import style from './Employees.module.css';
import Table from './TypeOfDataOutput/Table/Table';
import SearchString from '../common/SearchString/SearchString';
import SortDrowDown from '../common/SortDrowDown/SortDrowDown';
import ArrowUp from '../../assets/icons/ArrowUp';
import ArrowDown from '../../assets/icons/ArrowDown';

const Employees = ({ pageSize, employees }) => {
  const [currentEmployees, setCurrentEmployees] = useState([...employees]); // Список текущих работников
  const [employeesOnCurrentPage, setEmployeesOnCurrentPage] = useState([]); // Пользователи на текущей странице
  const [currentPage, setCurrentPage] = useState(1); // Текущая страница для пагинации
  const [totalCurrentEmployees, setTotalCurrentEmployees] = useState(employees.length); // Количество текущих пользователей

  useEffect(() => {
    setEmployeesOnCurrentPage(changeEmployeesOnCurrentPage());
  }, [currentEmployees, currentPage]);

  // Пагинация:
  const changeEmployeesOnCurrentPage = () => {
    const lastEmployeeIndex = currentPage * pageSize;
    const firstEmployeeIndex = lastEmployeeIndex - pageSize;
    return currentEmployees.slice(firstEmployeeIndex, lastEmployeeIndex);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    setCurrentPage((prev) =>
      prev !== Math.ceil(totalCurrentEmployees / pageSize) ? prev + 1 : prev
    );
  };
  const prevPage = () => setCurrentPage((prev) => (prev !== 1 ? prev - 1 : prev));

  // Фильтрация:
  const getFiltredData = (text) => {
    // Функция фильтрации
    if (!text) {
      return employees;
    } else {
      let array = employees;
      // Фильтрация по нахождению введенной подстроки в наших данных
      return array.filter((el) => {
        return (
          el['full_name'].toLowerCase().includes(text.toLowerCase()) || // ФИО
          el['account'].toLowerCase().includes(text.toLowerCase()) || // Учётная запись
          el['email'].toLowerCase().includes(text.toLowerCase()) || // Почта
          el['group'].toLowerCase().includes(text.toLowerCase()) || // Группа
          el['phone_number'].toLowerCase().includes(text.toLowerCase()) // Телефон
        );
      });
    }
  };

  const onSearchSend = (text) => {
    const filtredData = getFiltredData(text);
    setCurrentEmployees(filtredData);
    setTotalCurrentEmployees(filtredData.length);
    setEmployeesOnCurrentPage(changeEmployeesOnCurrentPage());
  };

  // Сортировка:
  const [sortField, setSortField] = useState('full_name'); // Поле сортировки
  const [directionSort, setDirectionSort] = useState(true); // Направление сортировки

  const Arrow = () => {
    return directionSort ? <ArrowDown /> : <ArrowUp />;
  };

  const getSortField = (e) => {
    setSortField(e.target.value);
    setDirectionSort(true);
  };

  const sortData = () => {
    let sortedData;
    if (directionSort) {
      sortedData = currentEmployees.sort(
        (a, b) => {
          return a[sortField] > b[sortField] ? 1 : -1;
        } // Прямая сортировка
      );
    } else {
      sortedData = currentEmployees.reverse((a, b) => {
        return a[sortField] > b[sortField] ? 1 : -1;
      }); // Обратная сортировка
    }
    setCurrentEmployees(sortedData);
    setEmployeesOnCurrentPage(changeEmployeesOnCurrentPage());
    setDirectionSort(!directionSort);
  };

  return (
    <div>
      <div className='title is-2 has-text-centered'>Работники</div>
      <div className='title is-2 has-text-centered'>{sortField}</div>
      <div className='columns'>
        <div className='column'>
          <a className='pagination-previous' onClick={prevPage}>
            Предыдущая страница
          </a>
          <a className='pagination-next' onClick={nextPage}>
            Следующая страница
          </a>
        </div>
        <div className='column'>
          <SortDrowDown getSortField={getSortField} />
          <button onClick={sortData}>Отсортировать {<Arrow />}</button>
        </div>
        <div className='column'>
          <SearchString onSearchSend={onSearchSend} />
        </div>
      </div>
      <Table employees={employeesOnCurrentPage} />
      <Paginator
        pageSize={pageSize}
        totalEmployeesCount={totalCurrentEmployees}
        paginate={paginate}
      />
    </div>
  );
};

export default Employees;
