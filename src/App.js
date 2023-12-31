import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";   //Lazy loading
import Contact from "./components/Contact";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./reduxstore/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

//Creats single element h1
/* Ep 01 Part 01
const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello World from React"
);

console.log(heading);   //return an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

/*Create nested elements Ep 01 Part 02
 *<div id='parent'>
 *    <div id='child'>
 *       <h1>I am heading</h1>
 *    </div>
 *</div>
 *
 *ReactElement(Object) => HTML(Browser Understands)
 *
 */
/*const parent = React.createElement(
    "div",
    { id: "parent"},
    React.createElement(
        "div",
        { id: "child"},
        React.createElement("h1",{},"I am an h1 tag") 
    )
);
console.log(parent); //return object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/

//Ep 01 Part 03
/*Create Sibling of h1 i.e h2 elements with need to create array of child
 *<div id='parent'>
 *    <div id='child'>
 *       <h1>I am h1 heading</h1>
 *       <h2>I am h2 heading</h2>
 *    </div>
 *</div>
 *
 *ReactElement(Object) => HTML(Browser Understands)
 *
 */
/*const parent = React.createElement(
    "div",
    { id: "parent"},
    React.createElement(
        "div",
        { id: "child"},
       [ React.createElement("h1",{},"I am an h1 tag"),
       React.createElement("h2",{},"I am an h2 tag")] 
    )
);
console.log(parent); //return object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/

//Ep 01 Part 04
/*Create 2child elements with need to create array of child
 *<div id='parent'>
 *    <div id='child'>
 *       <h1>I am h1 heading</h1>
 *       <h2>I am h2 heading</h2>
 *    </div>
 *    <div id='child'>
 *       <h1>I am h1 heading</h1>
 *       <h2>I am h2 heading</h2>
 *    </div>
 *</div>
 *
 *ReactElement(Object) => HTML(Browser Understands)
 *
 */

/*const parent = React.createElement("div", { id: "parent" },[
        React.createElement("div", { id: "child" },[ 
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag"),
        ]),
        React.createElement("div", { id: "child2" },[ 
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag"),
        ])
    ]);
console.log(parent); //return object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/

// Ep 01 Part 05
//Whatever previously written in
//<div id="root"><h1>I am here</h1><div> will be replaced with below code i.e this<h1>I am here</h1> .
/*const parent = React.createElement("div", { id: "parent" },[
    React.createElement("div", { id: "child" },[ 
        React.createElement("h1", {}, "I am React"),
        React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" },[ 
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
    ])
]);
console.log(parent); //return object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/

// Ep-3 part:03
//Create Element with JSX
//JSX (transpiled before it reaches the JS engine) - PARCEL - Babel

//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = (
//   <h1 className="heading" tabIndex="5">
//     React using JSX
//   </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

/*
//React Functional Component
//This is mostly used
const HeadingComponent = () => (
  <div className="container">
     <h1 className="heading">React Functional Component</h1>
  </div>
);

//Shortend of Functional Component
// const HeadingComponent1 = () => <h1 className="heading">React Functional Component</h1>

//Render Functional component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
*/

/*
//Rendering Component inside component
//This is Component Composition
const Title = () => (
      <h1 className="head">React using JSX</h1>
  );

const HeadingComponent = () => (
  <div className="container">
    <h2>{100 + 200}</h2>
    <Title />
    <Title></Title>
    <h1 className="heading">React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
*/

/*
//Putting React Element inside Component
const title = (
    <h1 className="head">React using JSX</h1>
);

const HeadingComponent = () => (
<div className="container">
  {title}
  <h1 className="heading">React Functional Component</h1>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
*/

/*
//React Element inside React Element

const elem = <span>React Element</span>; //element

const title = (
  <h1 className="head">
    {elem}
    React using JSX
  </h1>
); //element

const HeadingComponent = () => (
  <div className="container">
    {title}
    <h1 className="heading">React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
*/

/*
//Title can also be written as {Title()}
const Title = () => (
  <h1 className="head">
    React using JSX
  </h1>
); //element

const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
*/

//Lazy loading
//const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //Authentication
  useEffect(() =>{
    //MAke an API call and send username and password
    const data = {
      name: "Aditi Mate",
    };
    setUserName(data.name);
  },[]);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName}} >
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

//configuration for path
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/grocery",
      //   element: (
      //     <Suspense fallback={<h1>Loading....</h1>}>
      //       <Grocery />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
