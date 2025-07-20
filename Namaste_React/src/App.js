import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Counter_App from "./components/Counter_App";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";


/*
// 1)  React Element => Object
// const heading = React.createElement("h1", {id: "heading"}, "namaste react");

// console.log(heading)

//JSX - It is HTML-like or XML-like Syntax
// creating HTML tag inside jsx
const jsxHeading = <div>             
    <h1 className="head">Hello Namaste React</h1> 
    <h2 className="name">kaushal gawali</h2>
    </div>
            
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading)
// root.render(heading)

*/

// 2)  React Component

// const HeadingComponet = () => {
//     return <h1 className="heading">This React Functional component</h1>
// }

//OR we can declare like this
// const HeadingComponet2 = () => <h1 className="heading">This React Functional component</h1>

// OR
/*
const Title = () => {
    return <h1 className="title">Namaste React using JSX!!</h1>
}

const elem = (
    <h1>React Components</h1>
)

const salary = 10000;
// Component composition
const HeadingComponet3 = () => (
    <div id="container">
        {salary}
        {elem}
        {Title()}
        <Title />   
        <Title></Title>
        <h1 className="heading">This React Functional component</h1>
    </div>
);
    
// we render component like this
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet3/ >);

*/

// Building food delivery App project
/* 
* Header
*  - Logo
*  - Nav Items
* Body
*  - Search
*  - RestaurantContainer
*    - RestaurantCard
*      - img
*      - Name, star rating, cuisine, delevery time
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact


*/


//  *** Grocery ***
// On demand loading   OR
// Chunking            OR
// Code Spliting       OR
// Dynamic bundling    OR
// Lazy loading        OR
// dynamic import

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
};

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

/*
// This is very complicated so to avoid this we use JSX

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Namaste React bhaii"),
        React.createElement("h2", {}, "I am in h2")]    // creating aray of chindren
    )
);



// JSX -> Javascript XML

// const heading = React.createElement("h1", {id: "heading"}, "Hello Kaushal")
console.log(parent)  // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


*/
