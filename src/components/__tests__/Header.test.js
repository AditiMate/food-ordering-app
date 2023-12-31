import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../reduxstore/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //1st way to find login button by role
  //const loginButton = screen.getByRole("button");

  //2nd way to find login button by text
  //const loginButton = screen.getByText("Login");

  //This will exactly give login button
  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("🛒(0 items)");

  expect(cartItems).toBeInTheDocument();
});


it("Should render Header Component with a Cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText(/🛒/);
  
    expect(cartItems).toBeInTheDocument();
  });
  
  it("Should change Login Button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button" , { name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button" , {name: "Logout" });
  
    expect(logoutButton).toBeInTheDocument();
  });