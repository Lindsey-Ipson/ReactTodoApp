import React from "react";

function Todo({ id, task, remove }) {
  return (
    <div className="Todo">
      <p>{task}</p>
      <button className="Todo-button" onClick={() => remove(id)}>X</button>
    </div>
  )
}

export default Todo;