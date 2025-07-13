import React from "react";

const TodoItem = ({ task }) => {
  return (
    <div className="flex items-center justify-between bg-white/10 text-white p-3 rounded-lg border border-white/10">
      <div className="flex items-center gap-3">
        <input type="checkbox" className="accent-blue-500 w-4 h-4" />
        <span>{task}</span>
      </div>
      <button className="text-red-400 hover:text-red-500 text-sm">Delete</button>
    </div>
  );
};

export default TodoItem;
