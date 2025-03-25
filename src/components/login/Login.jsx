import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    const storedUser = JSON.parse(localStorage.getItem('user'))

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/')
    } else {
      alert('Invalid email or password')
    }
  }

  return (
    <div className='w-screen h-screen flex bg-white'>
      <div
        className='w-12.75 h-12.75 rounded-full bg-[#FF8A00] 
      flex items-center justify-center relative top-10 left-15 cursor-pointer'
        onClick={() => navigate('/')}
      >
        <h1
          className='w-4.5 h-9.5 text-white 
        text-[25px] font-semibold font-[Poppins] pl-0.5'
        >
          D
        </h1>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center p-10'>
        <h1 className='text-4xl font-bold mb-4'>Log in</h1>
        <p className='mb-6'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-blue-500'>
            Sign up
          </Link>
        </p>
        <form className='w-full max-w-sm' onSubmit={handleLogin}>
          <label className='block mb-2'>Email address</label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='border-none p-3 focus:outline-[#FF8A00] focus:outline-2 w-full h-12.5 rounded-[15px] mb-5 bg-gray-100'
            placeholder='your@email.com'
            required
          />

          <label className='block mb-2'>Password</label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='border-none p-3 focus:outline-[#FF8A00] focus:outline-2 w-full h-12.5 rounded-[15px] mb-5 bg-gray-100'
            placeholder='********'
            required
          />

          <button
            type='submit'
            className='w-full bg-[#FF8A00]
           text-white p-3 rounded-[15px] mt-5 cursor-pointer'
          >
            Login
          </button>
        </form>
      </div>
      <div className='w-1/2'>
        <img
          src='https://lucenotte.com/static/media/login.16cbaaa2fb1722a1d7e4.webp'
          alt='Login'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default Login
