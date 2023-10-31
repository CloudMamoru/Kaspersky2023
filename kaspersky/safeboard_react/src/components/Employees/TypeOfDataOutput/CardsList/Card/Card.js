import styles from './Card.module.sass';

import noface from '../../../../../assets/images/noface.jpeg';

const Card = (props) => {
  return (
    <div className={`card ${styles.employee_card}`}>
      <img src={noface} alt='Avatar' />
      <div className='container'>
        <h4>
          <b>{props.employee.full_name}</b>
        </h4>
        <p>{props.employee.group}</p>
        <p>{props.employee.phone_number}</p>
      </div>
    </div>
  );
};

export default Card;
