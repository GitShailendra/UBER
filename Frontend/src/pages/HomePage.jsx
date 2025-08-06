import React from 'react'

const Home = () => {
  return (
    <div className='relative '>
      <img  className='w-36 absolute' src="https://imgs.search.brave.com/pxnVl2e6h7DzoUB7XLGfhK_uQEKE-fiyU6gf4lAe_k4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nby10/ZXh0LXBuZy0xLnBu/Zw" alt="" />

      <div className='w-screen h-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='bg-white h-screen absolute top-0 w-full flex flex-col justify-end'>
        <div className='h-[30%] bg-white p-5'>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form action="">
          <input type="text" className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5' placeholder='Enter you pickup point' />
          <input type="text" className='bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3' placeholder='Enter you destination point' />
        </form>
        </div>
        <div className=' bg-red-500'>

        </div>
        
      </div>
    </div>
  )
}

export default Home