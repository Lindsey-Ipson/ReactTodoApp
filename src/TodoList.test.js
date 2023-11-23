import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function submitTodoHelper(todoList, task = "New task") {
  const taskInput = todoList.getByLabelText("Task");
  const submitButton = todoList.getByText("Add todo");

  fireEvent.change(taskInput, { target: { value: task } });
  fireEvent.click(submitButton);
}

test("renders without crashing", function() {
  render(<TodoList />);
});

test("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test("adds a new todo", function() {
  const todoList = render(<TodoList />);

  expect(todoList.queryByText("New task")).not.toBeInTheDocument();

  submitTodoHelper(todoList);

  // expect the form to be reset to empty and new todo to be displayed
  expect(todoList.getByLabelText("Task")).toHaveValue("");
  expect(todoList.getByText("New task")).toBeInTheDocument();
  expect(todoList.getByText("X")).toBeInTheDocument();
});

test("deletes a todo", function() {
  const todoList = render(<TodoList />);

  submitTodoHelper(todoList);

  expect(todoList.queryByText("New task")).toBeInTheDocument();

  const deleteButton = todoList.getByText("X");
  fireEvent.click(deleteButton);

  expect(todoList.queryByText("New task")).not.toBeInTheDocument();
});

