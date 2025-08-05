import React from "react";
import Header from "./components/Header";
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6">
        <Header />
        <TodoInput getTodo={getTodo} isEdit={isEdit} setIsEdit={setIsEdit}/>
        <TodoList getTodo={getTodo} todos={todos} setTodos={setTodos} isEdit={isEdit} setIsEdit={setIsEdit}/>

      </div>
    </div>
  );
};

export default App;
