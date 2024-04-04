import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breakdrum from './Breakdrum';
import ProductDisplay from './ProductDisplay';
const product = () => {
  const {alldata} = useContext(Shopcontext);

  const{ProductId} = useParams();
  const product = alldata.find((e)=>e.id===Number(ProductId))
  return (
    <div>
      <Breakdrum product={product}/>
      <ProductDisplay product = {product}/>
    </div>
  )
}

export default product
