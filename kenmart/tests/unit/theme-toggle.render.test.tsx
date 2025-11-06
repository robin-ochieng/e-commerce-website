import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/site/theme-toggle";

describe("ThemeToggle", () => {
  it("renders a button to toggle theme", () => {
    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );
    const btn = screen.getByRole("button", { name: /toggle theme/i });
    expect(btn).toBeInTheDocument();
  });
});
