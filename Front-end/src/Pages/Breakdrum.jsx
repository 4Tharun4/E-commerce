import React from 'react'
import arrow from '../assets/Assets/breadcrum_arrow.png'
import product from './Product';
const Breakdrum = (props) => {
    const {product}= props;

  return (
    <div className='flex  h-6'>
      HOME <img src={arrow} alt="" />SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" />{product.name}
    </div>
  )
}

export default Breakdrum
