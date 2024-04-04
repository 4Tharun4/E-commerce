import React, { useContext } from 'react'
import data_product from '../assets/Assets/data'
import Items from './Items'
import { Shopcontext } from '../Context/Shopcontext'

const Popular = () => {
  const {alldata} = useContext(Shopcontext)
  return (
    <div className='popular flex flex-col  gap-[10px] h-[90vh]'>
      <h1 className='font-[600] text-[50px]'>Popular Collections</h1>
      <hr className='w-[200px] h-[6px] rounded-2xl ' />
      <div className="proular-img flex gap-8">
        {
            alldata.map((items,i)=>{
                return  <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
            })
        }
      </div>
    </div>
  )
}

export default Popular
