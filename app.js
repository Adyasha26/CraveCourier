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
import { Provider } from "react-redux";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantDetails from "./src/components/RestaurantDetails";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import appStore from "./src/utils/appStore";
import { CartProvider } from "./src/utils/cartContext";
import userContext from "./src/utils/userContext";
import { useState } from "react";


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
  const [userName, setUserName] = useState("Name");
    return (
        <Provider store={appStore}>
            <userContext.Provider value={{ currentUser: userName, setUserName }}>
           <CartProvider>
            <Header/>
            <Outlet/>
            <Footer/>
            </CartProvider>
            </userContext.Provider>
        </Provider>
   
    );
}
root.render(<RouterProvider router={appRouter}/>);
