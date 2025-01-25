import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginApi } from '../services/AllApis'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [user,setUser]=useState({
        email:"",password:""
    
    })

    const nav=useNavigate()

    const handleLogin=async()=>{
        console.log(user);
        const {email,password}=user
        if(!email||!password){
            alert("Enter Valid Inputs")
        }
        else{
            const result=await loginApi(email,password)
            if(result.status==200){
                if(result.data.length>0){
                    console.log(result.data[0]);
                    sessionStorage.setItem('userData',JSON.stringify(result.data[0 ]))
                    
                    alert("Login Successfull")
                    nav('/home')
                    setUser({
                        email:"",password:""
                    
                    })
                }
                else{
                    alert("Invalid email/password")
                }
            }else{
                alert("something wnet wrong")
            }
        }
        
    }
  return (
<>
 <div className=' d-flex justify-content-center align-items-center' style={{height:'80vh'}}> 
 <div className='w-75 border shadow mt-3 bg-light p-3'>

    <h2>Login</h2>
    <input type="text" onChange={(e)=>{setUser({...user,email:e.target.value})}} placeholder='Enter EmailId' className='mt-3 form-control' />
    <input type="text" onChange={(e)=>{setUser({...user,password:e.target.value})}}  placeholder=' Password' className='form-control mt-3 ' />
    <div className='d-flex justify-content-between mt-3'>
        <button className='btn btn-success' onClick={handleLogin}>Login</button>
        <Link to={'/reg'}>new User</Link>
    </div>
 </div>
 </div>
</>  )
}

export default Login