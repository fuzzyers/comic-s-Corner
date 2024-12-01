"use client"
import React, { useEffect, useState } from 'react'
import Input from './input'

const Login = () => {
    const [form, setForm] = useState({
        Email: "",
        Password: ""
    })

    useEffect(() => {
        console.log(form)
    },[form])

  return (
    <form>
        <Input title='Email' setData={setForm}/>
        <Input title='Password' setData={setForm}/>
        <input type='submit'/>
    </form>
  )
}

export default Login