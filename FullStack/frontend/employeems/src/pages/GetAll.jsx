import "./add.css";
function GetAll() {
  return (
    <div>
      <h2>Employees</h2>
      <h4>
        <a href="/emps/emp">Add Employee</a>
      </h4>
      <table className="table-bordered">
        <thead>
          <tr>
            <th>Emp Id</th>
            <th>Emp Name</th>
            <th>Emp Basic</th>
            <th>Emp address</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name:kshtij</td>
            <td>Age:23</td>
          </tr>
          <tr>
            <td>Name:kshtij</td>
            <td>Age:23</td>
          </tr>{" "}
          <tr>
            <td>Name:kshtij</td>
            <td>Age:23</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GetAll;
