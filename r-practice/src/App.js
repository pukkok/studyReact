import './App.css';
import React, { Component , useState} from 'react'
import Login from './test/Login';
import loginData from './dummy/LoginData'

function App() {

  const [success, setSuccess] = useState(false)

  return (
    <>
    {success ? <div>Home Page</div> : <Login id={loginData.USER_ID} password={loginData.USER_PASSWORD} setSuccess={setSuccess} />}
    </> 
  )
}

export default App;