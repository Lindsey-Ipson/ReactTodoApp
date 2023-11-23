import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  }

  const remove = (id) => {
    setTodos((todos) => todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          remove={remove}
        />
      ))}
    </div>
  )

}

export default TodoList;