import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = { fullName, email, password };

    // Колдонуучунун маалыматтарын сактоо
    localStorage.setItem('user', JSON.stringify(user));

    // Каттоо ийгиликтүү болсо, Login барагына жөнөтүү
    alert('Registration successful! Please log in.');
    navigate('/login');
  };

  return (
    <div className='w-screen h-screen flex bg-white overflow-hidden'>
      <div className='w-1/2 flex flex-col justify-center items-center p-10'>
        <h1 className='text-4xl font-bold mb-4'>Sign Up</h1>
        <p className='mb-6'>
          Have an account?{' '}
          <Link to='/login' className='text-blue-500'>Login</Link>
        </p>
        <form className='w-full max-w-sm' onSubmit={handleSignUp}>
          <label className='block mb-2'>Full name</label>
          <input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='w-full p-3 border rounded mb-4'
            placeholder='Your full name'
            required
          />

          <label className='block mb-2'>Email address</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-3 border rounded mb-4'
            placeholder='your@email.com'
            required
          />

          <label className='block mb-2'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-3 border rounded mb-4'
            placeholder='********'
            required
          />

          <button type='submit' 
            className='w-full bg-orange-500 text-white p-3 rounded mb-4 cursor-pointer'>
            Create account
          </button>
        </form>
      </div>
      <div className='w-1/2 h-screen overflow-hidden'>
        <img
          src='https://lucenotte.com/static/media/signup.0bf631e1364d0a5bfbed.webp'
          alt='Sign Up'
          className='w-full h-full object-cover pointer-events-none select-none'
        />
      </div>
    </div>
  );
};

export default SignUp;
