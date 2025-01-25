import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { checkEmail, registerApi } from '../services/AllApis';
import { useNavigate } from 'react-router-dom';
function Register() {

    const [adduser, SetAddUser] = useState({
        email: "", username: "", password: ""
    })

    const nav = useNavigate()
    const handelRegister = async () => {
        console.log(adduser);
        const { username, email, password } = adduser
        if (!username || !email || !password) {
            alert("Enter Valid Inputs!!")
        }
        else {
            const result = await checkEmail(email)
            console.log(result);
            if (result.data.length > 0) {
                alert(" Email already in use")
            }
            else {
                const result = await registerApi(adduser)
                if (result.status == 201) {
                    alert("success")
                    SetAddUser({
                        email: "", username: "", password: ""
    
                    })
                    nav("/log")

                }
                else{
                    alert("Registration Failed")
                    console.log(result);
                    
                }
              

            }


        }
    }
    return (
        <>
            <div className=' d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                <div className='w-75 border shadow mt-3 bg-light p-3'>

                    <h2>Register</h2>
                    <input type="text" onChange={(e) => { SetAddUser({ ...adduser, email: e.target.value }) }} placeholder='Enter EmailId' className='mt-3 form-control' />
                    <input type="text " onChange={(e) => { SetAddUser({ ...adduser, username: e.target.value }) }} placeholder=' username' className='form-control mt-3 ' />

                    <input type="text" onChange={(e) => { SetAddUser({ ...adduser, password: e.target.value }) }} placeholder='  Password' className='form-control mt-3 ' />
                    <div className='d-flex justify-content-between mt-3'>
                        <button onClick={handelRegister} className='btn btn-success'>Register</button>
                        <Link to={'/log'}>Already an User</Link>
                    </div>
                </div>
            </div>

        </>)
}

export default Register