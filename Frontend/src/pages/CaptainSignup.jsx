import React, { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("")
  const [vehicleCapacity, setVehicleCapacity] = useState("")
  const [vehiclePlate, setVehiclePlate] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [formData, setFormData] = useState({})
  const { captain, setCaptain } = useContext(CaptainDataContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const captainData = {
        email,
      password,
      fullname: {
        firstName,
        lastName
      },
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        vehicleType:vehicleType,
        capacity:vehicleCapacity
      }
      }
    console.log('formdata prints', captainData);
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData);
    if(response.status===201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token);
      navigate('/captain-home')
    }
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleCapacity('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleType('')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen '>
      <div>
        <img className='w-14 mb-10' src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9mOFwvMTg4MDlcL2U3YzliMmZlNjgxNzczMDViOTlkMGQxNzg0NGYyODZlLTE2MjQzODUwOTguc3ZnIn0:postmates:GCn9dBGjGm6UQrLQ2ZBcMEwB_rh62o8xHGzjdDXTEq0?width=2400" alt="" />        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>What's Your Name</h3>
          <div className='flex gap-4 mb-5'>
            <input type="text" placeholder='enter you first name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} className=' w-1/2 border bg-[#eeeeee] py-2 px-4 rounded text-lg' />
            <input type="text" placeholder='enter you last name' value={lastName} onChange={(e) => setLastName(e.target.value)} required className='w-1/2 border bg-[#eeeeee]  py-2 px-4 rounded text-lg' />
          </div>
          <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
          <input type="email" placeholder='enter you mail here' value={email} onChange={(e) => setEmail(e.target.value)} required className='w-full py-2 px-4 border bg-[#eeeeee] mb-5 rounded  text-lg placeholder:text-sm' />
          <h3 className='text-lg mb-2 font-medium'>Vehicle Details</h3>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
            className='w-full py-2 px-4 border bg-[#eeeeee] mb-5 rounded text-lg'
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Auto">Auto</option>
          </select>

          <input type="text" placeholder='Vehicle Color' value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} required className='w-full py-2 px-4 border bg-[#eeeeee] mb-3 rounded text-lg placeholder:text-sm' />
          <input type="text" placeholder='Vehicle Capacity' value={vehicleCapacity} onChange={(e) => setVehicleCapacity(e.target.value)} required className='w-full py-2 px-4 border bg-[#eeeeee] mb-3 rounded text-lg placeholder:text-sm' />
          <input type="text" placeholder='Vehicle Plate Number' value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} required className='w-full py-2 px-4 border bg-[#eeeeee] mb-3 rounded text-lg placeholder:text-sm' />

          <h3 className='text-lg font-medium mb-2'> Enter Password</h3>
          <input type="password" placeholder='enter your password here' value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete='off' className='w-full py-2 px-4 border bg-[#eeeeee] mb-5 rounded text-lg placeholder:text-sm' />
          <button className='w-full bg-[#10b471] text-white text-xl mb-3 py-3 rounded font-semibold px-4'>Login As Captain</button>
        </form>
        <p className='text-center'>Already have an account?<Link to="/captain-login" className='text-blue-500'>Sign in as user</Link></p>
      </div>
      <div>
        <p className='text-[6px] leading-tight'>By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means,form uber and its affiliates to the number provided</p>
      </div>
    </div>
  )
}

export default CaptainSignup