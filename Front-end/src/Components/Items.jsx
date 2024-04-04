import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='items w-[350px]'>
       <Link to={`/product/${props.id}`}> <img src={props.image} alt="" /></Link>
        <p className='my-[6px] mx[0]'>{props.name}</p>
      <div className="item-prices flex gap[20px]">
        <div className="item-price-new  font-[600] text-[18px]">
        ₹{props.new_price}
        </div>
        <div className="item-price-old ml-2 opacity-50 line-through font-[600] text-[18px]">
₹{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
