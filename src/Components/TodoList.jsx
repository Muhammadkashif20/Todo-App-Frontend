import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoList = () => {
  const tasks = [
    "Learn React Components",
    "Make a sleek UI",
    "Push project to GitHub"
  ];
  useEffect(()=>{
      axios.get("http://localhost:3000/todo/getTodo")
    .then((res)=>res.json())
    .catch((err)=>console.log(err));
  },[])
    
  return (
    <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
