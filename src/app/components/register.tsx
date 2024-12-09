"use client"
import React, { useState } from 'react'
import Input from './input'
import { RegisterAuth } from '../utils/authentication'
import styles from "@/app/styles/authenticationForm.module.css"

const Register = () => {
    const [form, setForm] = useState({
        Username: "",
        Password: "",
        ConfirmPassword: "",
        Email: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await RegisterAuth(form.Email, form.Password, form.ConfirmPassword, form.Username)
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.formContainer}>
        <h1>Signup</h1>
        <Input title='Email' setData={setForm} type='email'/>
        <Input title='Username' setData={setForm} type='text'/>
        <Input title='Password' setData={setForm} type='password'/>
        <Input title='ConfirmPassword' setData={setForm} type='password'/>
        <input type='submit'/>
    </form>
  )
}

export default Register