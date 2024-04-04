import React, { useContext } from 'react'
import {Shopcontext} from '../Context/Shopcontext'
import Items from '../Components/Items'

const Shopcat = (props) => {
  const {alldata} = useContext(Shopcontext)
  console.log(alldata);
  return (
    <div className='grid grid-cols-4 gap-10'>
     {
            alldata.map((items,i)=>{
              if(props.category===items.category){
                return  <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
            }else{
              return null
            }
          })
        }
      
    </div>
  )
}

export default Shopcat
