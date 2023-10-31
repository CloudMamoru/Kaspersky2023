const Table = (props) => {
  return (
    <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
      <thead>
        <tr>
          <th>Полное имя</th>
          <th>Учетная запись</th>
          <th>Электронная почта</th>
          <th>Группа</th>
          <th>Номер телефона</th>
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
