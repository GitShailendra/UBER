import React, { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import Start from './pages/Start' 
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/HomePage'
import { UserDataContext } from './context/UserContext'
import UserProtectedWrapper from './UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainLogout from './pages/CaptainLogout'
import CaptainHome from './pages/CaptainHomePage'
import CaptainProtectedWrapper from './CaptainProtectedWrapper'
const App = () => {

  const user = useContext(UserDataContext)
  console.log('user loggedn in',user)
  return (
    <div>


      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
        <Route path='/captain-home' element={<CaptainProtectedWrapper><CaptainHome/></CaptainProtectedWrapper>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/user/logout' element={
          <UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>
        }/>
        <Route path='/captain/logout' element={
          <CaptainProtectedWrapper>
            <CaptainLogout/>
          </CaptainProtectedWrapper>
        }/>

      </Routes>
    </div>
  )
}

export default App