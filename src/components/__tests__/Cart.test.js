import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../reduxstore/appStore";
import Header from "../Header";
import Cart from '../Cart';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Strawberry Specials (7)");  

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  expect(screen.getByText("🛒(0 items)")).toBeInTheDocument();
  
  const addBtns = screen.getAllByRole("button", { name: "Add" });

  //console.log(addBtns.length);

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("🛒(1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("🛒(2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(9); //Strawberry Specials (7) + 2 items added in cart

  fireEvent.click(screen.getByRole("button" , {name : "Clear Cart"}));

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  expect(screen.getByText("Your cart is empty😢")).toBeInTheDocument();
});
