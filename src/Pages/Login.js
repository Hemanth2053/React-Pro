import React from 'react'
import{ useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>navigate("/")}>navigate to home</button>
        <button onClick={()=>navigate("/dashboard")}>navigate to dash board</button>
    </div>
  )
}

export default Login