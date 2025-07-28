import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from './context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    if (!token) {
    navigate('/login')
  }
  },[token])
  axios.get(`${import.meta.env.VITE_BASE_URL}/users/get-profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response)=>{
    console.log('user profile response', response)
    if(response.status === 200 ) {
      console.log('user profile', response.data.user)
      setIsLoading(false)
      setUser(response.data.user)
    }
  }).catch((error)=>{
    localStorage.removeItem('token');
    setIsLoading(false);
    navigate('/login');
  })
  if(isLoading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>
  }
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper