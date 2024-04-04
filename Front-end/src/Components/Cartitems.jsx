import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import removeicon from '../assets/Assets/cart_cross_icon.png'

const Cartitems = () => {
    const {alldata,cartitem,removefromcart,gettotalamount} = useContext(Shopcontext);
  return (
    <>
    <div className="main">
    <div className='class-items flex space-x-32   '>
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
    <hr />
    {
        alldata.map((e)=>{
            if(cartitem[e.id]>0){
                return <div className="">
                    <div className="cart-items format grid  grid-flow-col grid-cols-10   ">
                    <img src={e.image} alt=""  className='cart-icon-p w-12 ' />
<p>{e.name}</p>
<p>₹{e.new_price}</p>
<p></p>
<button className='c-q'>{cartitem[e.id]}</button>
<p>{e.new_price*cartitem[e.id]}</p>
<img src={removeicon} alt="" className=' cursor-pointer' onClick={()=>{removefromcart(e.id)}} />
</div>
<hr />
</div>
               
            }
            return null;
        })
    }
    <div className="cart-i-down">
      <div className="c-total">
        <h1 className='text-3xl'>cart totals </h1>
        <div className="">
          <div className="cat-item-total">
            <p>Subtotal</p>
            <p>₹{gettotalamount()}</p>
            <hr />
            <div className="cat-tot">
              <p>Shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="">
              <h3>Total</h3>
              <h3>₹{0}</h3>
            </div>
          </div>
          <button className='bg-red-400  w-72 mt-5 h-12 text-white'>PROCRDE TO CHECKOUT</button>
        </div>
      </div>
    </div>
</div>
    </>
  )
}


export default Cartitems
