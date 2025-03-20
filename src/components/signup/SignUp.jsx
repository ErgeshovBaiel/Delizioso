import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
  return (
    <div className='w-screen h-screen flex bg-white overflow-hidden relative bottom-25'>
      <div className='w-1/2 flex flex-col justify-center items-center p-10 bg-white relative right-25'>
        <h1 className='text-4xl font-bold mb-4'>Sign Up</h1>
        <p className='mb-6'>
          Have an account?{' '}
          <Link to='/login' className='text-blue-500'>
            Login
          </Link>
        </p>
        <form className='w-full max-w-sm'>
          <label className='block mb-2'>Full name</label>
          <input
            type='text'
            className='w-full p-3 border rounded mb-4'
            placeholder='Your full name'
          />

          <label className='block mb-2'>Email address</label>
          <input
            type='email'
            className='w-full p-3 border rounded mb-4'
            placeholder='your@email.com'
          />

          <label className='block mb-2'>Password</label>
          <input
            type='password'
            className='w-full p-3 border rounded mb-4'
            placeholder='********'
          />

          <div className='flex items-center mb-4'>
            <input type='checkbox' className='mr-2' />
            <span>
              Accept{' '}
              <a href='#' className='text-blue-500'>
                Terms & Conditions
              </a>
            </span>
          </div>

          <button className='w-full bg-orange-500 text-white p-3 rounded mb-4'>
            Create account
          </button>
          <button className='w-full flex justify-center items-center border p-3 rounded'>
            <FcGoogle className='w-5 h-5 mr-2' />
            Sign Up with Google
          </button>
        </form>
      </div>
      <div className='w-1/2 h-full'>
        <img
          src='https://lucenotte.com/static/media/signup.0bf631e1364d0a5bfbed.webp'
          alt='Sign Up'
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default SignUp
