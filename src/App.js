import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => (
  <div>
    <h1>Todo App</h1>
    <TodoInput />
    <TodoList />
  </div>
);

export default App;
