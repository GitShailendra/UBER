import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData,setUserData] = useState({});
  const handleSubmit = (e)=>{

    e.preventDefault();
    console.log(email,password)
    setUserData({
      email:email,
      password:password
    });
    console.log(userData)
    setEmail('');
    setPassword('');
    
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen '>
     <div>
     <img className='w-14 mb-10' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
        <form onSubmit={(e)=>handleSubmit(e)}>
          <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter you mail here' required className='w-full py-2 px-4 border bg-[#eeeeee] mb-7 rounded  text-lg placeholder:text-sm'/>
          <h3 className='text-lg font-medium mb-2'> Enter Password</h3>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password here' required className='w-full py-2 px-4 border bg-[#eeeeee] mb-7 rounded text-lg placeholder:text-sm'/>
          <button className='w-full bg-[#111] text-white text-xl mb-3 py-3 rounded font-semibold px-4'>Login</button>
        </form>
        <p className='text-center'>New here? <Link to="/signup" className='text-blue-500'>Create new account</Link></p>
     </div>
     <div>
      <Link to='/captain-login'  className='w-full flex justify-center items-center  bg-[#10b471] text-white text-xl mb-3 py-3 rounded font-semibold px-4'>Sign in as Captain</Link>
     </div>
    </div>
  )
}

export default UserLogin