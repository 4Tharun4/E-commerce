import React, { useState } from 'react'
import upload from '../../assets/Admin Panel Assets/upload_area.svg'

const Addprod = () => {

  const [image,setimage] = useState(false)

  const imagehandler = (e)=>{
    setimage(e.target.files[0]);
  }
const [productdetails,setproductdetails]=useState({
  name:"",
  image:"",
  category:"Mens",
  new_price:"",
  old_price:"",
  description:""
})

const changehandler = (e)=>{
  setproductdetails({...productdetails,[e.target.name]:e.target.value})

}
const Addprod = async ()=>{
  console.log(productdetails);
  let responsedata;
  let product = productdetails;
  let formdata = new FormData();
  formdata.append('product',image)

  await fetch('http://localhost:5000/upload', {
    method: 'post',
    headers: {
      Accept: 'application/json',
    },
    body: formdata,
  }).then((resp)=>resp.json()).then((data)=>{responsedata=data})

  if(responsedata.result){
    product.image = responsedata.image_url;
    console.log(product);

    await fetch("http://localhost:5000/addproduct",{
      method:"POST",
      headers:{
        Accept:'application/json',
        'content-type':'application/json'
      },
      body:JSON.stringify(product)
    }).then((res)=>res.json()).then((data)=>{
      data.result?alert('added'):alert("failed")
    })
  }
    

}
  
  return (
    <div className="main flex   w-full h-[100vh] justify-center">
      <div className="form   bg-red-50 mt-7  w-[800px] shadow-lg h-[950px] ">
        <div className="form-details mt-7 ">
          <div className="title  ml-5">
            <p className='text-start text-2xl'>Product title</p>
            <input type="text" className='w-[700px] h-12' value={productdetails.name} autoComplete='off' name='name' onChange={changehandler} placeholder='Enter-Product-Detail' />
          </div>
          <div className="prices flex  space-x-11 mt-5 ml-5">
            <div className="new_price">
            <p className='text-2xl'> Offer Price</p>
            <input type="text" className='w-[300px] h-12' value={productdetails.new_price} name="new_price" autoComplete='off'  onChange={changehandler} placeholder='Enter-Product-Detail' />
          </div>
          <div className="old_price">
            <p className='text-2xl'> Price</p>
            <input type="text" className='w-[300px] h-12'  value={productdetails.old_price} autoComplete='off' name='old_price' onChange={changehandler} placeholder='Enter-Product-Detail' />
          </div>
          </div>
          <div className="description ml-5">
            <p className='text-2xl '>Product Description</p>
            <textarea name="description" onChange={changehandler} className='w-[600px]' id=""  cols="30" rows="10" value={productdetails.description}></textarea>
          </div>
          <div className="category mt-7 ml-5 ">
            <p className='text-2xl'>Categoty</p>
            <select name="category" id="" className='w-40 border-none mt-5' onChange={changehandler} >
              <option value="Mens">Mens</option>
              <option value="Kids">Kids</option>
              <option value="Womens">Womens</option>
            </select>
          </div>
          <div className="image w-52 mt-7 ml-5">
            <p className='text-2xl'>Product Image</p>
            <label htmlFor="Image">
<          img src={image?URL.createObjectURL(image): upload}alt="" className='w-40' />
</label>
<input type="file" name="" id="Image" hidden onChange={imagehandler}/>
          </div>

          <button className='bg-green-200 mt-7 ml-5 w-40 h-10  text-2xl border  rounded-md' onClick={Addprod}>AddProduct</button>
        </div>
      </div>
    </div>
  )
}

export default Addprod
