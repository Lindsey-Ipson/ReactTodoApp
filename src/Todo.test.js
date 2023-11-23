import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

test("renders without crashing", function() {
  render(<Todo task="Test todo" />);
});

test("matches snapshot", function() {
  const { asFragment } = render(<Todo task="Test todo" />);
  expect(asFragment()).toMatchSnapshot();
});

test("executes delete function once when delete button clicked", function() {
  const mockRemoveFunc = jest.fn();
  const { getByText } = render(<Todo remove={mockRemoveFunc} />);
  const deleteButton = getByText("X");

  fireEvent.click(deleteButton);

  expect(mockRemoveFunc).toHaveBeenCalledTimes(1);
});
