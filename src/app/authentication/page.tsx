"use client"
import React, { useState } from 'react'
import Login from '../components/login'
import Register from '../components/register'

const Authentication = () => {
    const [mode, setMode] = useState("login")
  return (
    <div>
        {mode === "login" && <Login/>}
        {mode === "signup" && <Register/>}
        <button onClick={() => setMode(mode !== "login" ? "login" : "signup")}>{mode === "login" ? "signup":"login"}</button>
    </div>
  )
}

export default Authentication