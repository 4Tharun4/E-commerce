import React, { useEffect, useState } from 'react'

const Products = () => {

  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/allproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  const removeproduct = async(id)=>{
    await fetch("http://localhost:5000/removeproduct",{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify({id:id})
    
    })
    await getAllProducts();
  }

  return (
    <>
    <div className="card   mt-5 ml-5  grid grid-cols-4">
      { products.map((product,index)=>(
      <div className="sub-card p-3 m-3  bg-red-100  " key={index}>
        <div className="img mb-3 hover:shadow-2xl">
          <img src={product.image} alt="" className='rounded shadow-2xl h-[200px] w-[300px]' />
        </div>
        <div className="description">
          <p>{product.description}</p>
        </div>
        <div className="name">
          <p className=''>Name:{product.name}</p>
        </div>
        <div className="prices">
        <p>New Price:{product.new_price}</p>
          <p>Old Price:{product.old_price}</p>
        </div>
        <div className="category">
          <p>Category:{product.category}</p>
        </div>
        <button onClick={()=>{removeproduct(product.id)}} className='bg-red-600 text-white w-36 h-10 flex justify-center items-center mt-2 ml-5 '>Remove</button>
      </div>
))}
    </div>
    </>

      
  )
}

export default Products
