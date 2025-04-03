import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignUp = e => {
    e.preventDefault()
    const user = { fullName, email, password }

    localStorage.setItem('user', JSON.stringify(user))

    alert('Registration successful! Please log in.')
    navigate('/login')
  }

  return (
    <div className='w-screen h-screen flex bg-white overflow-hidden'>
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
        <h1 className='text-4xl font-bold mb-4'>Sign Up</h1>
        <p className='mb-6'>
          Have an account?{' '}
          <Link to='/login' className='text-blue-500'>
            Login
          </Link>
        </p>
        <form className='w-full max-w-sm' onSubmit={handleSignUp}>
          <label className='block mb-2'>Full name</label>
          <input
            type='text'
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            className='border-none p-3 focus:outline-[#FF8A00] focus:outline-2 w-full h-12.5 rounded-[15px] mb-5 bg-gray-100'
            placeholder='Your full name'
            required
          />

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
            className='w-full bg-[#f58c14]
           text-white p-3 rounded-[15px] mt-5 cursor-pointer'
          >
            Create account
          </button>
        </form>
      </div>
      <div className='w-1/2 h-screen overflow-hidden'>
        <img
          src='https://sun6-20.userapi.com/ukbr3PbmUMrznyLhsACGC8AUbOzjrtjtZQHgaw/kO_5bWbnFcs.jpg'
          alt='Sign Up'
          className='w-full h-full object-cover pointer-events-none select-none'
        />
      </div>
    </div>
  )
}

export default SignUp
