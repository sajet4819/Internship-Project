import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { v4 as uuidv4 } from "uuid";
import WeatherWidget from "./WeatherWidget";

function TaskInput() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;
    dispatch(addTask({ id: uuidv4(), text: task, priority, location }));
    setTask("");
    setLocation("");
  };

  return (
    <div className="card p-3 my-3">
      <h4>Add New Task</h4>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="form-control mb-2"
      />
      <select
        className="form-select mb-2"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="text"
        placeholder="Enter location (for weather info)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="form-control mb-2"
      />
      <button className="btn btn-success" onClick={handleAddTask}>
        Add Task
      </button>
      <WeatherWidget location={location} />
    </div>
  );
}

export default TaskInput;