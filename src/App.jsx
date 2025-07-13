import React from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6">
        <Header />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
