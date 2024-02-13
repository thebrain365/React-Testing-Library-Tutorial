import { render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodos = jest.fn();

describe("AddInput", () => {
    test("should render input element", () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos}></AddInput>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument;
    })
})