import React from 'react'
import './App.css'
import Admin from './Pages/Admin/Admin'
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
import Side_bar from './Pages/Admin/Side_bar';
import Footer from './Pages/Admin/Footer';
import Addprod from './Pages/Admin/Addprod';
import Products from './Pages/Admin/Products';
import Orders from './Pages/Admin/Orders';

const All=()=>{
    return(
    <>
    <Side_bar/>
    <Outlet/>
    <Footer/>
    </>
    )
}


function App() {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<All/>,
            children:[
                {
                    path:"/addproduct",
                    element:<Addprod/>
                },
                {
                    path:"/",
                    element:<Admin/>
                },
                {
                    path:"/All-products",
                    element:<Products/>
                },
                {
                    path:"/orders",
                    element:<Orders/>
                }

            ]

        }
    ])
    
 return(
 <>
 <div className="main">
  <RouterProvider router={router} />

  </div>
 </>
 )
}

export default App
