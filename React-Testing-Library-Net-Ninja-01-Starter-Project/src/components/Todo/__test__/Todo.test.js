import { fireEvent, getByText, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockTodo = () => {
    return(
        <BrowserRouter>
            <Todo></Todo>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });
}

describe("Todo", () => {
    test("should render the todo on the todo list when add button is clicked", () => {
        render(<MockTodo></MockTodo>);

        addTask(["Go shopping"]);

        const divElement = screen.getByText(/Go shopping/i);
        expect(divElement).toBeInTheDocument();
    })

    test("should render the correct number of todos on the todo list", () => {
        render(<MockTodo></MockTodo>);

        addTask(["Go shopping", "Go ballin", "Go get money"]);

        const divElement = screen.getAllByTestId(/task-container/i);
        expect(divElement.length).toBe(3);
    })

    test("should render the task without the todo-item-active class", () => {
        render(<MockTodo></MockTodo>);

        addTask(["Go shopping"]);

        const divElement = screen.getByText(/Go shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    })

    test("task should have the todo-item-active class when clicked", () => {
        render(<MockTodo></MockTodo>);

        addTask(["Go shopping"]);
        const divElement = screen.getByText(/Go shopping/i);
        fireEvent.click(divElement);

        expect(divElement).toHaveClass("todo-item-active");
    })
})