const Table = (props) => {
  return (
    <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
      <thead>
        <tr>
          <th>Full name</th>
          <th>Account</th>
          <th>Email</th>
          <th>Group</th>
          <th>Phone number</th>
        </tr>
      </thead>
      {props.employees.map((employee, id) => (
        <tbody key={id}>
          <tr>
            <th>{employee.full_name}</th>
            <th>{employee.account}</th>
            <th>{employee.email}</th>
            <th>{employee.group}</th>
            <th>{employee.phone_number}</th>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Table;
