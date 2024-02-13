import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}></TodoFooter>
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {
    test("Should render the correct amount of incomplete tasks", () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5}></MockTodoFooter>);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument;
    })
    
    test("Should render 'task' when the number of incomplete tasks is 1", () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1}></MockTodoFooter>);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument;
    })
})

// test("The result should be truthy", () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={0}></MockTodoFooter>);
//     const paragraphElement = screen.getByText(/0 tasks left/i);
//     expect(paragraphElement).toBeTruthy();
// })

// test("The component should be visible to the user", () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={0}></MockTodoFooter>);
//     const paragraphElement = screen.getByText(/0 tasks left/i);
//     expect(paragraphElement).toBeVisible();
// })

// test("Should return the proper tag which is the p tag", () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={0}></MockTodoFooter>);
//     const paragraphElement = screen.getByText(/0 tasks left/i);
//     expect(paragraphElement).toContainHTML("p");
// })