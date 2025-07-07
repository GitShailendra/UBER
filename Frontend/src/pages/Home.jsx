import React from 'react'
import BackgroundImage from '../assets/home/Home.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='h-screen pt-8 w-full flex justify-between flex-col bg-red-400' style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
      <img className='w-14 ml-9' src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="" />
        <div className='bg-white py-4 pb-7 px-4'>
          <h1 className='text-2xl font-bold'>Get started with uber</h1>
          <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 mt-3 rounded-md'>Continue</Link>
        </div>
    </div>
  )
}

export default Home