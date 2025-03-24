import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='w-screen h-screen flex  bg-white relative bottom-25'>
      <div className='w-1/2 flex flex-col justify-center items-center p-10'>
        <h1 className='text-4xl font-bold mb-4'>Log in</h1>
        <p className='mb-6'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-blue-500'>Sign up</Link>
        </p>
        <form className='w-full max-w-sm' onSubmit={handleLogin}>
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
          className='w-full bg-orange-500
           text-white p-3 rounded mb-4 cursor-pointer'>
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
  );
};

export default Login;
