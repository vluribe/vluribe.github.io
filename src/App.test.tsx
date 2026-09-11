import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the homepage intro and main sections", () => {
  render(<App />);
  expect(screen.getByText(/hey there/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /tech stack/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /work timeline/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /let's talk/i })).toBeInTheDocument();
  expect(screen.getByText(/diverse domains/i)).toBeInTheDocument();
  expect(screen.getByText("Crowley")).toBeInTheDocument();
  expect(screen.getByText("Gemini")).toBeInTheDocument();
  expect(screen.getByText("Actual.io")).toBeInTheDocument();
  expect(screen.queryByText(/sophilabs/i)).not.toBeInTheDocument();
  expect(screen.getAllByRole("button", { name: /see highlights/i }).length).toBeGreaterThan(0);
  expect(screen.getByRole("link", { name: /laura uribe/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/laura-uribe-donado"
  );
});
