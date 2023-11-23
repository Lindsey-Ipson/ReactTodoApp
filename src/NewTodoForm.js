import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {
  const INITIAL_STATE = { task: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({
      ...formData,
      id: uuid()
    });
    setFormData(INITIAL_STATE);
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">Task</label>
      <input
        id="task"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />
      <button>Add todo</button>
    </form>
  )
}

export default NewTodoForm;