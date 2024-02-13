import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodos = jest.fn();

describe("AddInput", () => {
    test("should render input element", () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos}></AddInput>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument;
    })

    test("should be able to type in input", () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos}></AddInput>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: {value: "Go grocery shopping"}})
        expect(inputElement.value).toBe("Go grocery shopping");
    })
})