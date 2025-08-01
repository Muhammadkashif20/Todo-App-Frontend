import React from "react";

const TodoItem = ({ task }) => {
  return (
    <div className="flex items-center justify-between bg-white/10 text-white px-5 py-3 rounded-xl border border-white/10 shadow-md">
      <span className="text-base">{task}</span>

      <div className="flex gap-4">
        <button className="text-blue-400 hover:text-blue-500 font-medium transition duration-200">
          Edit
        </button>
        <button className="text-red-400 hover:text-red-500 font-medium transition duration-200">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
