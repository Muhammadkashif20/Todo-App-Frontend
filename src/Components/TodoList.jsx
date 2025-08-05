import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos,setTodos,getTodo,isEdit,setIsEdit}) => {
  return (
    <div className="space-y-3 max-h-64 overflow-y-auto pr-1">

      {todos?.map((todos) => (
        <TodoItem key={todos._id} todos={todos} setTodos={setTodos} getTodo={getTodo} isEdit={isEdit} setIsEdit={setIsEdit}/>
      ))}
    </div>
  );
};

export default TodoList;
