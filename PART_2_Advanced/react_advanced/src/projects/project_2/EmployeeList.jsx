import React, { useState } from "react";
import employeeData from "./employeeData";

const EmployeeList = () => {
  const [data, setData] = useState(employeeData);
  const [employeeName, setEmployeeName] = useState("");

  const removeEmployee = (id) => {
    const newData = data.filter((employee) => employee.id !== id);
    setData(newData);
  };

  const addEmployee = () => {
    if (employeeName.trim() === "") return;

    // Here you might want to generate a unique ID. For demo purposes, we use Date.now().
    const newEmployee = { id: Date.now(), name: employeeName };
    setData([newEmployee, ...data]);
    setEmployeeName("");
  };

  const clearItems = () => setData([]);
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Employee List</h1>

      <div className="d-flex flex-column align-items-center gap-3 mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter employee name..."
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          style={{ maxWidth: "500px" }}
        />
        <button className="btn btn-primary" onClick={addEmployee}>
          Add Employee
        </button>
      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        {data.map((employee) => (
          <div
            key={employee.id}
            className="card shadow-sm w-100"
            style={{ maxWidth: "500px" }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{employee.name}</h5>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeEmployee(employee.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-danger mt-4"
        onClick={clearItems}
        >Clear All Employees</button>
      </div>
    </div>
  );
};

export default EmployeeList;
