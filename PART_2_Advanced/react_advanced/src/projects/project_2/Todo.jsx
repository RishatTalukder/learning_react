import React, { useState } from "react";
import todoData from "./todoData";

const Todo = () => {
  const [data, setData] = useState(todoData);
  const [task, setTask] = useState("");

  const removeItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleAdd = () => {
    if (task.trim() === "") return;

    const newItem = {
      id: data.length + 1,
      task: task,
    };

    setData((prevData) => [newItem, ...prevData]);
    setTask("");
  };

  return (
    <div className="py-5">
      <h1 className="text-center mb-4">Todo List</h1>

      <div className="d-flex flex-column align-items-center gap-3 mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter todo item..."
          style={{ maxWidth: "500px" }}
          value={task}
          onChange={handleChange}
          name="task"
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Todo
        </button>
      </div>

      <div className="d-flex flex-column align-items-center gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="card shadow-sm w-100"
            style={{ maxWidth: "500px" }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <h5 className="mb-0">{item.task}</h5>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-center align-items-center mt-4">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => setData([])}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
