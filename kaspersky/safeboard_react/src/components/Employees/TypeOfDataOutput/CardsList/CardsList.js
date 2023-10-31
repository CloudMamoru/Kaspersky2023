import Card from './Card/Card';
import styles from './CardsList.module.css';

const CardsList = (props) => {
  const array_size = 5;

  const sliced_array = [];

  for (let i = 0; i < props.employees.length; i += array_size) {
    sliced_array.push(props.employees.slice(i, i + array_size));
  }
  return (
    <div className={styles.cards_place}>
      {sliced_array.map((employees_list, key) => (
        <div key={key} className='columns'>
          {employees_list.map((employee, id) => (
            <div key={id} className='column'>
              <Card employee={employee} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardsList;
