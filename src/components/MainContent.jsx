import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import WeatherWidget from "./WeatherWidget";
import TaskFilters from "./TaskFilters";

function MainContent() {
  return (
    <div className="container mt-3">
      <WeatherWidget /> {/* Displays weather info for tasks */}
      <TaskFilters /> {/* Allows users to filter tasks by priority, status, etc. */}
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default MainContent;