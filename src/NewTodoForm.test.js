import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("renders without crashing", function() {
  render(<NewTodoForm />);
});

test("matches snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

test("executes the addTodo function once when submitted", function() {
  const mockAddTodoFunc = jest.fn();
  const { getByText } = render(<NewTodoForm addTodo={mockAddTodoFunc} />);
  const submitButton = getByText("Add todo");

  fireEvent.click(submitButton);

  expect(mockAddTodoFunc).toHaveBeenCalledTimes(1);
});
