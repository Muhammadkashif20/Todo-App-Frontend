import { message } from "antd";
import axios from "axios";
import React from "react";

const TodoItem = ({ todos,getTodo,handleEdit}) => {

    const handleDelete = async()=>{
    console.log("delete id=>",todos._id);
    await axios.delete(`http://localhost:3000/todo/deleteTodo/${todos._id}`)
    getTodo()
    message.success("Task Deleted Successfully");
  }
 

  return (
    <div className="flex items-center justify-between bg-white/10 text-white px-5 py-3 rounded-xl border border-white/10 shadow-md">
      <span className="text-base">{todos.title}</span>

      <div className="flex gap-4">
        <button onClick={handleEdit} className="cursor-pointer text-blue-400 hover:text-blue-500 font-medium transition duration-200">
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
