import React, { useState } from 'react'

const LoginSignup = () => {
  const [state,setstate]=useState("Sign Up");

  const [formdata,setformdata] = useState({
    username:"",
    password:"",
    email:""
  })

  const Changehandler=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
  const login = async ()=>{
console.log("login",formdata);
let responedata ;
     await fetch("https://e-commerce-dkp8.vercel.app/login",{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-type':'application/json'
      },
     body:JSON.stringify(formdata),
    }).then((respone)=>respone.json()).then((data)=>responedata=data)
if(responedata.sucess===true){
  localStorage.setItem("auth-token",responedata.token);
  window.location.replace("/")
}else{
  alert(responedata.error)
}
  };
  const SignUp = async()=>{
    console.log("sign up",formdata);
    let responedata ;
     await fetch("https://e-commerce-dkp8.vercel.app/signup",{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-type':'application/json'
      },
     body:JSON.stringify(formdata),
    }).then((respone)=>respone.json()).then((data)=>responedata=data)
if(responedata.sucess){
  localStorage.setItem("auth-token",responedata.token);
  window.location.replace("/")
}else{
  alert(responedata.error)
}
  }
  return (
    <div className='flex justify-center items-center mt-7'>
            <div className="card w-[600px] bg-red-400 flex">
               <div className="logins ">
                <h1 className='ml-3 mt-5 text-2xl text-white'>{state}</h1>
                <div className="login-signup-fields m-7">
                  { state ==="Sign Up"?<input type="text" name="username" value={formdata.username} onChange={Changehandler}  id="" className='w-full my-4 h-10' placeholder='Your Name'/>:<></>}
                  <input type="Email" name="email" id="" value={formdata.email} onChange={Changehandler}   className='w-full my-4 h-10' placeholder='Your Email' />
                  <input type="password" name="password" value={formdata.password} onChange={Changehandler} id=""   className='w-full my-4 h-10' placeholder='Your password'/>
                </div>
                { state ==="Sign Up"?
                <p>Already have an account?<span className='cursor-pointer' onClick={()=>{setstate("Login")}}>Login</span></p>:<p>Create  an account?<span className='cursor-pointer' onClick={()=>{setstate("Sign Up")}}>Click Here</span></p>}
                
                  <button className='bg-green-300 ml-4 h-10 w-32 mt-6 mb-7 text-white' onClick={()=>{state==="Login"?login():SignUp()}}>Continue</button>


                </div>
              </div>  
         </div>
  )
}

export default LoginSignup
