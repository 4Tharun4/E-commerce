import React from 'react'
import Admin from './Admin'
import {Link} from 'react-router-dom'
import logo from '../../assets/Admin Panel Assets/nav-logo.svg'
const Side_bar = () => {
  return (
   <div className="main bg-red-500 h-20 flex justify-between items-center">

       <div className="logo  flex items-center justify-center mb-7">
        <img src={logo} alt="" />
        </div>
        <div className="links ">
          <ul className=' flex'>
            <Link to={"/"}><li className='mr-6 text-xl'>Home</li></Link>
           <Link to={"/addproduct"}> <li className='mr-6 text-xl'>Add Products</li></Link>
            <Link to={"/All-products"}><li className='mr-6 text-xl'>All Products</li></Link>
            <Link to={"/orders"}><li className='mr-6 text-xl'>Orders</li></Link>
           
          </ul>
        </div>
        <div className="">
          <div className="userimg  w-28 ">
          <img src={logo} alt=""  className=' rounded-full border bg-white  w-12 h-[3rem]'/>
          </div>
        </div>
       </div>
  )
}

export default Side_bar
