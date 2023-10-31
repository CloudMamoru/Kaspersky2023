const SortDrowDown = (props) => {
  return (
    <div>
      <label>Сортировка: </label>
      <select onChange={props.getSortField}>
        <option value='full_name'>По имени</option>
        <option value='account'>По логину</option>
        <option value='email'>По электронной почте</option>
        <option value='group'>По группе</option>
        <option value='phone_number'>По телефону</option>
      </select>
    </div>
  );
};

export default SortDrowDown;
