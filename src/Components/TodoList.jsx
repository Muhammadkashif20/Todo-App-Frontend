import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoList = () => {
 const [todos,setTodos]=useState([]);
 console.log("todos=>",todos);

 useEffect(()=>{
   axios.get("http://localhost:3000/todo/getTodo")
   .then((res)=>setTodos(res.data))
   .catch((err)=>console.log(err));
   
  },[])

 
  return (
    <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
      {todos?.map((todos) => (
        <TodoItem key={todos._id} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
};

export default TodoList;
