import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'

import "./Forms.scss"
import GoBack from '../nav/GoBack'

const LoginForm = () => {
  const [formData, setFormData] = useState({email: "", password: ""})

  const [errors, setErrors] = useState({email: "", pass: "", other: ""})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target
    setErrors({email: "", pass: "", other: ""})

    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const auth = getAuth()

    if (formData.email === "" || formData.password === "") {
      setErrors({email: "", pass: "", other: "Fill in all fields to continue."})
    } else if (formData.email.length > 0 && formData.password.length > 0) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        navigate('/admin')
      })
      .catch(err => {
        console.log(err)
      })
  }
  }
  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <h2 className='margin-bottom'>Welcome back.</h2>
      <p className='margin-bottom-2'>This is the login for the admin page</p>
      <input className='margin-bottom-2'
        type="text"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        name="email"
      />
      {errors.email.length > 0 && <p className='error'>{errors.email}</p>}
      <input className='margin-bottom-2'
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        name="password"
      />
      {errors.pass.length > 0 && <p className='error'>{errors.pass}</p>}

      <button type='submit' style={{width: "300px"}} className='call-to-action-button margin-bottom-2'><h4>Log In</h4></button>

      <GoBack />
    </form>
  )
}

export default LoginForm