import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Form from './Pages/Form'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/login">Login</Link>
        </ul>
        <ul>
          <Link to="/dashboard">Dashboard</Link>
        </ul>
        <ul>
          <Link to="/form">Form</Link>
        </ul>

      </nav>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Home />} path="/" />
        <Route element={<Form />}path='/form' />
      </Routes>
    </div>
  )
}

export default App