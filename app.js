import React from "react";
import  ReactDOM from "react-dom/client";

import "./app.css";
import Header from "./src/components/Header";
import RestaurantCard from "./src/components/RestaurantCard";
import Main from "./src/components/Main";
import Footer from  "./src/components/Footer";
import Body from "./src/components/Body";
import FilterButton from "./src/components/FilterButton";
import Try from "./src/components/Try";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantDetails from "./src/components/RestaurantDetails";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";


const root=ReactDOM.createRoot(document.getElementById("root"));

const appRouter= createBrowserRouter([
 {
    path:"/",
    element:<App />,  
    errorElement:<Error />,
    children: [
        {
          path: "/", // This represents the home page
          element: <Main />,
          children: [
            {
              path: "", // Nested route path is relative to the parent route
              element: <Body />,
            },
          ],
        },
        {
          path: "/about",
          element: <Try />, 
        },
        {
          path: "/home",
          element: <Main />,
          children: [
            {
              path: "", // Nested route path is relative to the parent route
              element: <Body />,
            },
          ],
        },
        {
          path: "/contact",
          element: <Contact />, 
        },
        {
            path:"/restaurant/:id",
            element:<RestaurantDetails/>,
        },
      ],
 },
 
]);



function App(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
             

        </>
   
    );
}
root.render(<RouterProvider router={appRouter}/>);
