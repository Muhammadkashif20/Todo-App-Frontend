import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";

const TodoInput = ({ getTodo, isEdit }) => {
  
  const [todoValue, setTodoValue] = useState("");
  const handleAddTodo = async () => {
    if (!todoValue.trim()) {
      message.error("Please enter a task");
      return;
    }
    await axios.post("http://localhost:3000/todo/addTodo", {
      title: todoValue,
    });
    message.success("Task Added Successfully");
    setTodoValue("");
    getTodo();
  };
  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        value={todoValue}
        onKeyDown={(e) => e.key == "Enter" && handleAddTodo()}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleAddTodo}
        className="cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition "
      >
       Add
      </button>
    </div>
  );
};

export default TodoInput;
