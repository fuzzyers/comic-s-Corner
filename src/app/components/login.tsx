"use client"
import React, { useState } from 'react'
import Input from './input'
import { LoginAuth } from '../utils/authentication'
import styles from "@/app/styles/authenticationForm.module.css"

const Login = () => {
    const [form, setForm] = useState({
        Email: "",
        Password: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()

      await LoginAuth(form.Email, form.Password)
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.formContainer}>
        <h1 className={styles.headerText}>Login</h1>
        <Input title='Email' setData={setForm} type={"email"}/>
        <Input title='Password' setData={setForm} type="password"/>
        <input type='submit'/>
    </form>
  )
}

export default Login