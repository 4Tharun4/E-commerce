import React, { createContext, useEffect, useState } from 'react'

import Items from '../Components/Items';

export const Shopcontext = createContext(null);
const getdefaultvalue = ()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }  return cart;   

}

const ShopcontextProvider = (props)=>{
    const [alldata ,setll_product]= useState([]);
    const [cartitem,setcartitems] = useState(getdefaultvalue());

    useEffect(()=>{
   fetch("http://localhost:5000/allproducts").then((respone)=>respone.json())
   .then((data)=>setll_product(data))
    },[])
   
 


   
const addtocart = (ItemsId)=>{
    setcartitems((prev)=>({...prev,[ItemsId]:prev[ItemsId]+1}))
}
const removefromcart = (ItemsId)=>{
    setcartitems((prev)=>({...prev,[ItemsId]:prev[ItemsId]-1}))

}
const gettotalamount = ()=>{
    let totalamount = 0;
    for(const item in cartitem){
        if(cartitem[item]>0){
            let iteminfo = alldata.find((product)=>product.id===Number(item))
            totalamount+=iteminfo.new_price * cartitem[item];
        }
        return totalamount;
    }
    }

    const Totalitmnav =()=>{
        let totalitem = 0;
        for(const item in cartitem){
            if(cartitem[item]>0){
                totalitem += cartitem[item]
            }
        }
        return totalitem;
    }
const contextvalue = {alldata,cartitem,addtocart,removefromcart,gettotalamount,Totalitmnav};
    return(
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
 
export default ShopcontextProvider;