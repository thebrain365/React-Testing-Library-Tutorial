import { render, screen } from '@testing-library/react';
import Header from "../Header";

test("Should render same text passed into title prop", () => {
  render(<Header title={"todo"} />);
  const h1Element = screen.getByText(/todo/i);
  expect(h1Element).toBeInTheDocument();
});

// test("getByRole test", () => {
//   render(<Header title={"todo"} />);
//   const h1Element = screen.getByRole("heading");
//   expect(h1Element).toBeInTheDocument();
// });

test("getByRole test", () => {
  render(<Header title={"todo"} />);
  const h1Element = screen.getByRole("heading", { name: /todo/i });
  expect(h1Element).toBeInTheDocument();
});

test("getByTitle test", () => {
  render(<Header title={"todo"} />);
  const h1Element = screen.getByTitle(/header/i);
  expect(h1Element).toBeInTheDocument();
});

test("getByTestId test", () => {
  render(<Header title={"todo"} />);
  const h1Element = screen.getByTestId(/header-1/i);
  expect(h1Element).toBeInTheDocument();
});

test("findByText test", async () => {
  render(<Header title={"todo"} />);
  const h1Element = await screen.findByText(/todo/i);
  expect(h1Element).toBeInTheDocument();
});

test("queryByText test", () => {
  render(<Header title={"todo"} />);
  const h1Element = screen.queryByText(/webcv/i);
  expect(h1Element).not.toBeInTheDocument();
});

test("getAllByText test", () => {
  render(<Header title={"todo"} />);
  const h1Elements = screen.getAllByRole("heading");
  expect(h1Elements.length).toBe(2);
});