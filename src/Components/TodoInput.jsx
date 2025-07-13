import React from "react";

const TodoInput = () => {
  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
