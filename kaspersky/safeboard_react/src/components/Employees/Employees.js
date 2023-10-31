import { useState, useEffect } from 'react';
import Paginator from '../common/Paginator/Paginator';
import styles from './Employees.module.sass';
import Table from './TypeOfDataOutput/Table/Table';
import SearchString from '../common/SearchString/SearchString';
import SortDrowDown from '../common/SortDrowDown/SortDrowDown';
import ArrowUp from '../../assets/icons/ArrowUp';
import ArrowDown from '../../assets/icons/ArrowDown';
import cells from '../../assets/icons/cells.png';
import card from '../../assets/icons/card.png';
import group from '../../assets/icons/group.png';
import CardsList from './TypeOfDataOutput/CardsList/CardsList';
import GroupList from './TypeOfDataOutput/GroupList/GroupList';

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

  // Режим отображения:
  const [typeOfDataOutput, setTypeOfDataOutput] = useState('table');

  return (
    <div>
      <h1 className={styles.task_h1}>Employees</h1>
      {/* Активная панель */}
      <div className={styles.active_panel}>
        <div className='columns'>
          {/* Кнопки пагинации */}
          <div className='column'>
            <button className='button is-small' onClick={prevPage}>
              Previous page
            </button>
            <button className='button is-small' onClick={nextPage}>
              Next page
            </button>
          </div>

          {/* Режим отображения */}
          <div className='column'>
            <button
              className='button is-small'
              onClick={() => setTypeOfDataOutput('table')}
            >
              <figure class='image is-16x16'>
                <img src={cells} alt='table' />
              </figure>
            </button>
            <button
              className='button is-small'
              onClick={() => setTypeOfDataOutput('card')}
            >
              <figure class='image is-16x16'>
                <img src={card} alt='card' />
              </figure>
            </button>
            <button
              className='button is-small'
              onClick={() => setTypeOfDataOutput('group')}
            >
              <figure class='image is-16x16'>
                <img src={group} alt='group' />
              </figure>
            </button>
          </div>

          {/* Сортировка */}
          <div className='column'>
            <SortDrowDown getSortField={getSortField} />
            <button className='button is-small' onClick={sortData}>
              <span>Sort</span>
              {<Arrow />}
            </button>
          </div>

          {/* Поиск */}
          <div className='column'>
            <SearchString onSearchSend={onSearchSend} />
          </div>
        </div>
      </div>

      <br />
      {typeOfDataOutput === 'table' && <Table employees={employeesOnCurrentPage} />}
      {typeOfDataOutput === 'table' && (
        <Paginator
          pageSize={pageSize}
          totalEmployeesCount={totalCurrentEmployees}
          paginate={paginate}
        />
      )}

      {typeOfDataOutput === 'card' && <CardsList employees={employeesOnCurrentPage} />}
      {typeOfDataOutput === 'card' && (
        <Paginator
          pageSize={pageSize}
          totalEmployeesCount={totalCurrentEmployees}
          paginate={paginate}
        />
      )}

      {typeOfDataOutput === 'group' && <GroupList employees={currentEmployees} />}
    </div>
  );
};

export default Employees;
