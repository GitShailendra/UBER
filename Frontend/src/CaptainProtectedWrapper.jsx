import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from './context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate();
  const {captain, setCaptain} = useContext(CaptainDataContext)
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    if (!token) {
    navigate('/captain-login')
  }
  axios.get(`${import.meta.env.VITE_BASE_URL}/captain/get-profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response)=>{
    console.log('captain profile response', response)
    if(response.status === 201) {
      console.log('captain profile', response.data)
      setCaptain(response.data.captain)
      setIsLoading(false)
    }
  }).catch((error)=>{
    localStorage.removeItem('token');
    setIsLoading(false);
    navigate('/captain-login');
  })
  },[token])

  
  if(isLoading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>
  }
  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectedWrapper