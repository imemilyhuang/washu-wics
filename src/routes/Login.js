import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'

const Login = () => {
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
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2 style={{marginBottom: "15px"}}>Welcome back.</h2>
        <input
          type="text"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          name="email"
        />
        {errors.email.length > 0 && <p className='error'>{errors.email}</p>}
        <input
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          name="password"
        />
        {errors.pass.length > 0 && <p className='error'>{errors.pass}</p>}

        <button type='submit' className='call-to-action-button'><p>Log in</p></button>

      </form>
    </div>
  )
}

export default Login