import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/site/footer";

describe("Footer", () => {
  it("renders the current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    const text = screen.getByText((content) =>
      content.includes(String(year))
    );
    expect(text).toBeInTheDocument();
  });
});
