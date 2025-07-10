import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Start from './pages/Start' 
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/HomePage'
import { UserDataContext } from './context/UserContext'
const App = () => {

  const user = useContext(UserDataContext)
  console.log(user)
  return (
    <div>


      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>

      </Routes>
    </div>
  )
}

export default App