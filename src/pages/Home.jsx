import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import WeatherWidget from "../components/WeatherWidget";

function Home() {
  return (
    <div className="container mt-4">
      <h2>To-Do List</h2>
      <WeatherWidget /> 
      <TaskList />
    </div>
  );
}

export default Home;