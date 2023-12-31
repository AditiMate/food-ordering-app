import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");  //get total res cards

  expect(cardsBeforeSearch.length).toBe(9);  //expected length of res card before search

  const searchBtn = screen.getByRole("button", { name: "Search" });  //find  button with name search
 
  const searchInput = screen.getByTestId("searchInput");  //find search input box

  fireEvent.change(searchInput, {target: {value: "burger"}});  //change input value  i.e burger

  fireEvent.click(searchBtn);  //Click on search button

  const cardsAfterSearch = screen.getAllByTestId("resCard");  //get search result in the form of res cards

  expect(cardsAfterSearch.length).toBe(1);  // length 1 i.e 1 res card
});

// it("Should Search Res List for burger text input", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );

//   const cardsBeforeFilter = screen.getAllByTestId("resCard");  //get total res cards

//   expect(cardsBeforeFilter.length).toBe(9);  //expected length of res card before search

//   const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });  //find  button with name search
 
//   fireEvent.click(topRatedBtn);  //Click on search button

//   const cardsAfterFilter= screen.getAllByTestId("resCard");  //get search result in the form of res cards

//   expect(cardsAfterFilter.length).toBe(7);  // length 1 i.e 1 res card
// });