import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  const [captainEmail, setCaptainEmail] = useState('');
  const [password, setPassword] = useState('');
  const { captain, setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(captainEmail, password);
    const captainData = {
      email: captainEmail,
      password: password
    }
    console.log(captainData);
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captainData);
    if(response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    console.log(captainData);
    setCaptainEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-14 mb-10' src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9mOFwvMTg4MDlcL2U3YzliMmZlNjgxNzczMDViOTlkMGQxNzg0NGYyODZlLTE2MjQzODUwOTguc3ZnIn0:postmates:GCn9dBGjGm6UQrLQ2ZBcMEwB_rh62o8xHGzjdDXTEq0?width=2400" alt="" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className='text-lg mb-2 font-medium'>Captain ID</h3>
          <input 
            type="email" 
            value={captainEmail} 
            onChange={(e) => setCaptainEmail(e.target.value)} 
            placeholder='Enter your captain email' 
            required 
            className='w-full py-2 px-4 border bg-[#eeeeee] mb-7 rounded text-lg placeholder:text-sm'
          />
          
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Enter your password here' 
            required 
            className='w-full py-2 px-4 border bg-[#eeeeee] mb-7 rounded text-lg placeholder:text-sm'
          />
          
          <button className='w-full cursor-pointer bg-[#10b471] text-white text-xl mb-3 py-3 rounded font-semibold px-4'>
            Login as Captain
          </button>
        </form>
        
        <p className='text-center'>Not registered as a captain? <Link to="/captain-signup" className='text-blue-500'>Register now</Link></p>
      </div>
      
      <div>
        <Link to='/login' className='w-full flex justify-center items-center bg-[#111] text-white text-xl mb-3 py-3 rounded font-semibold px-4'>
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;