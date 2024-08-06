import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleDone } from "../redux/actions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.done ? "line-through" : "none" }}
        >
          {todo.text}
          <button onClick={() => dispatch(toggleDone(todo.id))}>Done</button>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
