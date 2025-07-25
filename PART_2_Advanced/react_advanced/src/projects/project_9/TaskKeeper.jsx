import React, { useState, useEffect } from "react";
import TaskItem from "./Components/TaskItem";

const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : []; // parsing the tasks from local storage or returning an empty array
};

const TaskKeeper = () => {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage()); // getting tasks from local storage
  const [inputValue, setInputValue] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = inputValue.trim();
    if (input === "") {
      setAlert({ show: true, message: "Task cannot be empty", type: "error" });
      return;
    }
    if (isEditing) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingTaskId ? { ...task, name: input } : task
      );
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // saving the updated tasks to local storage
      setAlert({
        show: true,
        message: "Task updated successfully",
        type: "success",
      });
      setIsEditing(false);
      setEditingTaskId(null);
    } else {
      const newTask = {
        id: Date.now(), // using timestamp as a unique id
        name: input,
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks); // adding the new task to the tasks array
      localStorage.setItem("tasks", JSON.stringify(newTasks)); // saving the new tasks to local storage
      setAlert({
        show: true,
        message: "Task added successfully",
        type: "success",
      });
    }
    setInputValue(""); // clearing the input field
  };

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ show: false, message: "", type: "" }); // hiding the alert after 3 seconds
      }, 3000);
      return () => clearTimeout(timer); // cleanup function to clear the timer
    }
  }, [alert.show]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id); // filtering out the task with the given id
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // saving the updated tasks to local storage
    setAlert({
      show: true,
      message: "Task deleted successfully",
      type: "success",
    });
  };

  const editTask = (task) => {
    setInputValue(task.name); // setting the input value to the task name
    setEditingTaskId(task.id); // setting the editing task id
    setIsEditing(true); // setting the editing mode to true
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); // saving the tasks to local storage whenever the tasks state changes
  }, [tasks]);

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div
        className="bg-light p-3 rounded shadow"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <div style={{ height: "30px" }} className="mb-2 text-center">
          {alert.show && (
            <div
              className={`bg-${
                alert.type === "error" ? "danger" : "success"
              } text-white p-1 rounded`}
            >
              {alert.message}
            </div>
          )}
        </div>
        <h1 className="text-center text-primary mb-2">Task Keeper</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter task name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // controlled input
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isEditing ? "Update Task" : "Add Task"}{" "}
            {/* changing button text based on editing mode */}
          </button>
        </form>

        {/* Render the list of tasks */}
        <div
          className={`mt-3 border rounded ${
            tasks.length === 0
              ? "d-flex justify-content-center align-items-center"
              : ""
          }`}
          style={{
            minHeight: "300px",
            padding: "10px",
            backgroundColor: "#f8f9fa",
          }}
        >
          {tasks.length === 0 ? (
            <p className="text-muted m-0">No tasks added...</p>
          ) : (
            <ul className="list-group w-100">
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask} // passing the deleteTask function as a prop
                  editTask={editTask} // passing the editTask function as a prop
                />
              ))}
            </ul>
          )}
        </div>
        <button
          className="btn btn-danger w-100 mt-3"
          onClick={() => {
            setTasks([]);
            if (tasks.length > 0) {
              setAlert({
                show: true,
                message: "All tasks cleared",
                type: "success",
              });
            }
          }}
        >
          Clear All Tasks
        </button>
      </div>
    </div>
  );
};
export default TaskKeeper;
