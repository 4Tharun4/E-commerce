import React from 'react'
import './App.css'
import Nav_bar from './Components/Nav_bar'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from './Components/Footer';
import Shop from './Pages/Shop';
import Product from '../src/Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shopcat from './Pages/Shopcat';
const  All = ()=>{
  return(
   <>
   <Nav_bar/>
   <Outlet/>
   <Footer/>
   
   </>
  )
}
function App() {
   
  const router = createBrowserRouter([

    {
      path:'/',
      element :<All/>,
      children:[
        {
          path:'/',
          element:<Shop/>,
        },
        {
          path:'/Mens',
          element:<Shopcat category="Mens"/>,
        },
        {
          path:'/Kids',
          element:<Shopcat category="Kids"/>,
        },
        {
          path:'/Womens',
          element:<Shopcat category="Womens"/>,
        },
        {
          path:'/Product',
          element:<Product/>,
          children:[{
            path:":ProductId",
            element:<Product/>
          }

          ]
        }  ,
        {
          path:'Login',
          element:<LoginSignup/>
        }   ],
      

      


    },
    {
      path:':Productid', element:<Product/>
    },
    {
      path:'/cart',element:<Cart/>
    },
    
  ])

  return (
    <>
   
    <div className="main">
    <RouterProvider router={router} />
    </div>
        
    </>
  )
}

export default App
