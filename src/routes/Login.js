import React from 'react'
import LoginForm from '../components/forms/LoginForm'

const Login = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  return <LoginForm />
}

export default Login