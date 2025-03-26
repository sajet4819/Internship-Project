import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  return (
    <div className="card p-3">
      <h4>Task List</h4>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span
                style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
                onClick={() => dispatch(toggleTask(task.id))}
              >
                {task.text} <span className={`badge bg-${getBadgeColor(task.priority)} ms-2`}>{task.priority}</span>
              </span>
              <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const getBadgeColor = (priority) => {
  switch (priority) {
    case "High":
      return "danger";
    case "Medium":
      return "warning";
    case "Low":
      return "success";
    default:
      return "secondary";
  }
};

export default TaskList;