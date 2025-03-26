import React from "react";
import { useSelector } from "react-redux";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import WeatherWidget from "../components/WeatherWidget";
import TaskFilters from "../components/TaskFilters";

function Dashboard() {
  const tasks = useSelector((state) => state.tasks.list);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <p>Welcome, {user ? user.email : "Guest"}!</p>
      <h4>Total Tasks: {tasks.length}</h4>
      <WeatherWidget /> {/* Show weather for relevant tasks */}
      <TaskFilters /> {/* Add filtering functionality */}
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default Dashboard;