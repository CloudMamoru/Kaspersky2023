import GroupDrowDown from '../../../common/GroupDrowDown/GroupDrowDown';
import { useState, useEffect } from 'react';
import Group from './Group/Group';

const GroupList = (props) => {
  const [groupField, setGroupField] = useState('CDN/Managers');
  const [groupFieldsList, setGroupFieldsList] = useState([]);

  useEffect(() => {
    setGroupFieldsList([]);
  }, [props.employees]);

  const getGroupField = (e) => {
    setGroupField(e.target.value);
  };

  const filterEployees = () => {
    const data = props.employees.filter((el) => el['group'].includes(groupField));
    setGroupFieldsList(data);
  };

  return (
    <div className='column'>
      <div className='add_group'>
        <GroupDrowDown getGroupField={getGroupField} />
        <button className='button is-small' onClick={filterEployees}>
          Choose group
        </button>
      </div>
      {groupFieldsList.map((el, key) => (
        <Group key={key} employee={el} />
      ))}
    </div>
  );
};

export default GroupList;
