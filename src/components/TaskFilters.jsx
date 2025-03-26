import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TaskFilters = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value); 
  };

  return (
    <div className="mb-3">
      <h5>Filter Tasks</h5>
      <select className="form-select" value={filter} onChange={handleFilterChange}>
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>
    </div>
  );
};

export default TaskFilters;
