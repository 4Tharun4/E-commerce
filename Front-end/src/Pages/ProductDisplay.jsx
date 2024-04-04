import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addtocart} = useContext(Shopcontext)
  return (
    <div className='productdisplay flex ml-20'>
        <div className="productdisplay-left flex gap-5  ">
            <div className="img-list w-28 space-y-5  ">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="prod-display-img  h-[400px]">
                <img src={product.image} alt="" className='prod-main' />
            </div>

        </div>
        <div className="prod-right ml-7  ">
    <h1 className='text-3xl'>{product.name}</h1>
    <div className="prod-old-price  line-through">₹{product.old_price}</div>
    <div className="prod-current-price">₹{product.new_price}</div>
       
      <div className="right-sizes">
        <h1>Select size</h1>
        <div className="prod-dis-r-size flex gap-7 ">
            <div className="border w-8 text-center bg-lime-200">S</div>
            <div className="border w-8 text-center bg-lime-200">M</div>
            <div className="border w-8 text-center bg-lime-200">L</div>
            <div className="border w-8 text-center bg-lime-200">Xl</div>
            <div className="border w-8 text-center bg-lime-200">XXl</div>
        </div>
      </div>
      <button className='bg-red-400  w-72 mt-5 h-12 text-white ' onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
      <p className='p-d-r mt-5'><span>Category :</span>Women ,T-Shirt,CropTop</p>
      <p className='p-d-r mt-5'><span>Tags :</span>Mordern Latest</p>
    </div>
    </div>
  )
}

export default ProductDisplay
