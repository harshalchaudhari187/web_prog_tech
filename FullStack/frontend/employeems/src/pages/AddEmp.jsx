import "./add.css";
function AddEmp() {
  return (
    <div className="container">
      <h2>Add User</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" className="form-control" id="firstName" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" className="form-control" id="pincode" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEmp;
