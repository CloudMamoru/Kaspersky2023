const SortDrowDown = (props) => {
  return (
    <div className='select is-small'>
      <select onChange={props.getSortField}>
        <option value='full_name'>by name</option>
        <option value='account'>by account</option>
        <option value='email'>by email</option>
        <option value='group'>by group</option>
        <option value='phone_number'>by phone</option>
      </select>
    </div>
  );
};

export default SortDrowDown;
