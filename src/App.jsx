import React from "react";
import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
   const [todos,setTodos]=useState([]);
  const [isEdit,setIsEdit]=useState(false);
  console.log("isEdit=>",isEdit);
   console.log("todos=>",todos);
    const getTodo = async()=>{
     await axios.get("http://localhost:3000/todo/getTodo")
      .then((res)=>setTodos(res.data))
      .catch((err)=>console.log(err));
    }

   useEffect(()=>{
    getTodo()
    },[])
     const handleEdit = async () => {
    await axios.put(`http://localhost:3000/todo/updateTodo/${todos._id}`, {
      title: todos.title,
    });
    setIsEdit(true);
    console.log("edit id=>", todos._id);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6">
        <Header />
        <TodoInput getTodo={getTodo} isEdit={isEdit} setIsEdit={setIsEdit} handleEdit={handleEdit}/>
        <TodoList getTodo={getTodo} todos={todos} setTodos={setTodos} isEdit={isEdit} setIsEdit={setIsEdit} handleEdit={handleEdit}/>

      </div>
    </div>
  );
};

export default App;
