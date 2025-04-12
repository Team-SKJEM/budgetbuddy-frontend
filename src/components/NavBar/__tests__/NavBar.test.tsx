import { cleanup, screen } from "@testing-library/react";
import Navbar from "../NavBar";
import userEvent from "@testing-library/user-event";
import { render } from "../../../tests/utils";

// Mock the logo import
jest.mock(
  "../../../assets/images/budgetBuddyLogo.png",
  () => "mocked-logo.png",
);

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  afterEach(cleanup);

  it("renders the logo", () => {
    const logo = screen.getByRole("img", { name: /logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "mocked-logo.png");
  });

  it("renders navigation links on desktop view", () => {
    const navigationLinks = ["Home", "About", "Our Mission", "Sign In"];

    navigationLinks.forEach((link) => {
      const linkElement = screen.getAllByText(link)[0];
      expect(linkElement).toBeInTheDocument();
    });
  });

  it("renders a register button", () => {
    const registerButton = screen.getAllByText(/Register/i)[0];
    expect(registerButton).toBeInTheDocument();
  });

  it("should have the correct link attributes", async () => {
    // The Home link
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("href", "/");

    // The About link
    const aboutLink = screen.getByRole("link", { name: "About" });
    expect(aboutLink).toHaveAttribute("href", "/about");

    // The Our Mission link
    const missionLink = screen.getByRole("link", { name: "Our Mission" });
    expect(missionLink).toHaveAttribute("href", "/mission");

    // The Sign In link nothing yet
    // The Register link
    const registerLink = screen.getByRole("link", { name: "Register" });
    expect(registerLink).toHaveAttribute("href", "/register");
  });

  describe("Mobile view", () => {
    beforeAll(() => {
      window.innerWidth = 500; // Set a mobile width
      window.dispatchEvent(new Event("resize")); // Dispatch a resize event to trigger the media query
      render(<Navbar />);
    });

    afterAll(() => {
      window.innerWidth = 1024; // Reset to desktop width
      window.dispatchEvent(new Event("resize")); // Dispatch a resize event to trigger the media query
    });

    it("renders a menu button for mobile view", () => {
      const menuButton = screen.getAllByLabelText(/Open Menu/i)[0];
      expect(menuButton).toBeInTheDocument();
    });

    it("shows mobile menu items when menu button is clicked", async () => {
      const user = userEvent.setup();

      // Click the menu button
      const menuButton = screen.getAllByLabelText(/Open Menu/i)[0];
      await user.click(menuButton);

      // Check if all menu items are visible
      const menuItems = ["Home", "About", "Our Mission", "Sign In", "Register"];
      menuItems.forEach((item) => {
        const menuItem = screen.getAllByText(item)[0];
        expect(menuItem).toBeInTheDocument();
      });
    });
  });
});
