import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa"; // importing the icons

const TaskItem = ({ task, deleteTask, editTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {task.name}
      <div>
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => editTask(task)} // calling the editTask function with the task object
        >
          <FaEdit />
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteTask(task.id)} // calling the deleteTask function with the task id
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};
export default TaskItem;