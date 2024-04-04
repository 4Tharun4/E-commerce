import React, { useContext } from 'react'
import logo from '../assets/Assets/logo.png';
import carticon from '../assets/Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { Shopcontext } from '../Context/Shopcontext';
const Nav_bar = () => {
  const {Totalitmnav}= useContext(Shopcontext)
  return (
    <div className='nav flex justify-between shadow-xl p-[16px] h-24'>
        <div className="nav-logo flex items-center gap-[10]">
           <Link to='/'><img src={logo} alt="" /></Link> 
            <p>Show here</p>
        </div>
        <ul className=' flex items-center space-x-8 text-2xl'>
            <li><Link to='/'>Shop</Link></li>
            <li><Link to='/Mens'>Men</Link></li>
            <li><Link to='/Kids'>Kids</Link></li>
            <li><Link to='/Womens'>Women</Link></li>
        </ul>
        <div className="cart flex items-center">
          {localStorage.getItem('auth-token')?<button className='bg-red-100 h-10 rounded-lg  text-2xl space-x-3  mr-6' onClick={()=>{localStorage.removeItem('auth-token');window.replace("/")}}>Logout</button>
           : <button className='bg-red-100 h-10 rounded-lg  text-2xl space-x-3  mr-6'><Link to='/Login'>Login/Register</Link></button>}
           <Link to='/Cart'> <img src={carticon} alt="" className=' w-9 h-7 items-center'  /></Link>
            <div className="count w-[22px] flex items-center justify-center mt-[-35px] ml-[-5px] bg-red-600 h-[22px] rounded-full text-white"><Totalitmnav/></div>
        </div>
     
    </div>
  )
}

export default Nav_bar
