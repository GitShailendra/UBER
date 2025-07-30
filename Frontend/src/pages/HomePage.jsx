import React from 'react'

const Home = () => {
  return (
    <div className='relative '>
      <img  className='w-36 absolute' src="https://imgs.search.brave.com/pxnVl2e6h7DzoUB7XLGfhK_uQEKE-fiyU6gf4lAe_k4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nby10/ZXh0LXBuZy0xLnBu/Zw" alt="" />

      <div className='w-screen h-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='bg-white absolute top-0 w-full'>
        <h4>Find a trip</h4>
        <form action="">
          <input type="text" placeholder='Enter you pickup point' />
          <input type="text" placeholder='Enter you destination point' />
        </form>
      </div>
    </div>
  )
}

export default Home