import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";

const TodoItem = ({ todos, getTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updateTodo, setUpdateTodo] = useState("");

  console.log("handleUpd=>", updateTodo);
  console.log("isEdit=>", isEdit);

  const handleDelete = async () => {
    console.log("delete id=>", todos._id);
    await axios.delete(`http://localhost:3000/todo/deleteTodo/${todos._id}`);
    getTodo();
    message.success("Task Deleted Successfully");
  };

  // const handleEdit = async () => {
  //   await axios.put(`<ht></ht>tp://localhost:3000/todo/updateTodo/${todos._id}`, {
  //     title: todos.title,
  //   });
  //   setIsEdit(true);
  //   console.log("edit id=>", todos._id);
  //   if (todos._id) {
  //     setUpdateTodo(todos.title);
  //   }
  // };

  return (
  <div className="flex items-center justify-between bg-white/10 text-white px-5 py-3 rounded-xl border border-white/10 shadow-md">
    
    {isEdit ? (
      <input
        type="text"
        value={updateTodo}
        onChange={(e) => setUpdateTodo(e.target.value)}
        className="bg-transparent border-b border-white/30 outline-none text-white px-2 py-1 w-full"
      />
    ) : (
      <span className="text-base">{todos.title}</span>
    )}

    <div className="flex gap-4">
      {/* {isEdit ? (
        <button
          onClick={async () => {
            await axios.put(`http://localhost:3000/todo/updateTodo/${todos._id}`, {
              title: updateTodo,
            });
            setIsEdit(false);
            getTodo();
            message.success("Task Updated Successfully");
          }}
          className="cursor-pointer text-green-400 hover:text-green-500 font-medium transition duration-200"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => {
            setIsEdit(true);
            setUpdateTodo(todos.title);
          }}
          className="cursor-pointer text-blue-400 hover:text-blue-500 font-medium transition duration-200"
        >
          Edit
        </button>
      )} */}
      {isEdit ? (
        <button
        onClick={async ()=>
      await axios.put(`localhost:3000/todo/updateTodo/${todos._id}`, {
       title: todos.title,
       
      )}
         setIsEdit(true);
       console.log("edit id=>", todos._id);
       className="cursor-pointer text-green-400 hover:text-green-500 font-medium transition duration-200"
       >
       </button>
    })}

      <button
        onClick={handleDelete}
        className="cursor-pointer text-red-400 hover:text-red-500 font-medium transition duration-200"
      >
        Delete
      </button>
    </div>
  </div>
);

};

export default TodoItem;
