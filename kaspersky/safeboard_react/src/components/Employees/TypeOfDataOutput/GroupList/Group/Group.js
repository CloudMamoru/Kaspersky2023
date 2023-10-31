const Group = (props) => {
  return (
    <div>
      <br></br>
      <span>
        <b>Name:</b> {props.employee.full_name},
      </span>
      <span>
        <b> Account:</b> {props.employee.account},
      </span>
      <span>
        <b> Email:</b> {props.employee.email},
      </span>
      <span>
        <b> Group:</b> {props.employee.group},
      </span>
      <span>
        <b> Phone Number:</b> {props.employee.phone_number},
      </span>
    </div>
  );
};

export default Group;
