import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login'
// import Signup from './Signup'
import SignupForm from './SignupForm'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<SignupForm/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App