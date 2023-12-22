import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./app.css"
import AllCountries from "./components/AllCountries/AllCountries"
import Layout from "./components/Layout/Layout";
import Error from "./components/Error/Error";
import CountryInfo from "./components/CountryInfo/CountryInfo";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      { path: '/', 
        element:<AllCountries/>,
      },
    ]
  },
  {
    path:"/country/:countryName",
    element: <CountryInfo/>
  }
  
])

function App() {
  return(
    <RouterProvider router={router}/>
  )
}

export default App;
