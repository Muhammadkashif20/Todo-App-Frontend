import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const tasks = [
    "Learn React Components",
    "Make a sleek UI",
    "Push project to GitHub"
  ];

  return (
    <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
