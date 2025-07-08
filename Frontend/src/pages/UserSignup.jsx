import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [formData,setFormData] = useState({})
  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormData({
      email,
      password,
      fullName:{
        firstName,
        lastName
      }
    });
    console.log('formdata prints' , formData);
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen '>
      <div>
        <img className='w-14 mb-10' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>What's Your Name</h3>
          <div className='flex gap-4 mb-5'>
            <input type="text" placeholder='enter you first name' required value={firstName} onChange={(e)=>setFirstName(e.target.value)} className=' w-1/2 border bg-[#eeeeee] py-2 px-4 rounded text-lg' />
            <input type="text" placeholder='enter you last name' value={lastName} onChange={(e)=>setLastName(e.target.value)} required className='w-1/2 border bg-[#eeeeee]  py-2 px-4 rounded text-lg' />
          </div>
          <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
          <input type="email"  placeholder='enter you mail here' value={email} onChange={(e)=>setEmail(e.target.value)} required className='w-full py-2 px-4 border bg-[#eeeeee] mb-5 rounded  text-lg placeholder:text-sm' />
          <h3 className='text-lg font-medium mb-2'> Enter Password</h3>
          <input type="password" placeholder='enter your password here' value={password} onChange={(e)=>setPassword(e.target.value)} required className='w-full py-2 px-4 border bg-[#eeeeee] mb-5 rounded text-lg placeholder:text-sm' />
          <button className='w-full bg-[#111] text-white text-xl mb-3 py-3 rounded font-semibold px-4'>Login</button>
        </form>
        <p className='text-center'>Already have an account?<Link to="/login" className='text-blue-500'>Sign in as user</Link></p>
      </div>
      <div>
        <p className='text-[6px] leading-tight'>By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means,form uber and its affiliates to the number provided</p>
      </div>
    </div>
  )
}

export default UserSignup