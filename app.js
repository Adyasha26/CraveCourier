import React from "react";
import  ReactDOM from "react-dom/client";

import "./app.css";
import Header from "./src/components/Header";
import RestaurantCard from "./src/components/RestaurantCard";
import Main from "./src/components/Main";
import Footer from  "./src/components/Footer";
import Body from "./src/components/Body";
import Cart from "./src/components/Cart";
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
import About from "./src/components/About";
import Help from "./src/components/Help";


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
          element: <About />, 
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
          path: "/help",
          element: <Help/>, 
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
  const [cartOpen, setCartOpen] = useState(false);
    return (
        <Provider store={appStore}>
            <userContext.Provider value={{ currentUser: userName, setUserName }}>
           <CartProvider>
           <Header setCartOpen={setCartOpen} />
            <Outlet/>
            <Footer/>
            <Cart open={cartOpen} setOpen={setCartOpen} />
           </CartProvider>
            </userContext.Provider>
        </Provider>
   
    );
}
root.render(<RouterProvider router={appRouter}/>);
