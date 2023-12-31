import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });

  it("Should load contact us component", () => {
    render(<Contact />);

    //heading is there or not
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load contact us component", () => {
    render(<Contact />);

    //button is there or not
    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    //placeholder is name or not
    const inputName = screen.getByPlaceholderText("Name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes.length);

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
