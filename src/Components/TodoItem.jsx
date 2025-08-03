import axios from "axios";
import React from "react";

const TodoItem = ({ todos,setTodos }) => {
    const handleDelete=()=>{
    console.log("delete id=>",todos._id);
    axios.delete(`http://localhost:3000/todo/deleteTodo/${todos._id}`)
    let delTodo=todos.filter((todo)=>todos._id !== todo._id)
    setTodos(delTodo);
    console.log("delete Todo=>",delTodo)
  }

  return (
    <div className="flex items-center justify-between bg-white/10 text-white px-5 py-3 rounded-xl border border-white/10 shadow-md">
      <span className="text-base">{todos.title}</span>

      <div className="flex gap-4">
        <button className="cursor-pointer text-blue-400 hover:text-blue-500 font-medium transition duration-200">
          Edit
        </button>
        <button onClick={handleDelete} className="cursor-pointer text-red-400 hover:text-red-500 font-medium transition duration-200">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
