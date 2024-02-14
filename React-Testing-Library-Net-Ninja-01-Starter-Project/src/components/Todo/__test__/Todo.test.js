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

describe("Todo", () => {
    test("should render the todo on the todo list when add button is clicked", () => {
        render(<MockTodo></MockTodo>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        
        fireEvent.change(inputElement, { target: { value: "Go shopping" } });
        fireEvent.click(buttonElement);

        const divElement = screen.getByText(/Go shopping/i);
        expect(divElement).toBeInTheDocument();
    })
})