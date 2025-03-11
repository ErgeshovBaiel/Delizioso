import React, { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full fixed top-0 left-0 z-50 bg-white shadow-md'>
      <div className='max-w-[1200px] mx-auto px-4 h-25 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 rounded-full bg-[#FF8A00] flex items-center justify-center'>
            <h1 className='text-white text-2xl font-semibold'>D</h1>
          </div>
          <h2 className='font-semibold text-lg'>
            Delizi<span className='text-[#FF8A00]'>oso</span>
          </h2>
        </div>
        <ul className='hidden lg:flex gap-10 font-medium'>
          {['Home', 'Menu', 'About us', 'Order online', 'Reservation', 'Contact us'].map((item, index) => (
            <li key={index} className='cursor-pointer hover:text-[#FF8A00] transition'>
              <NavLink 
                to={`/${item.toLowerCase().replace(' ', '-')}`} 
                className={({ isActive }) => isActive ? 'text-[#FF8A00]' : ''}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-6'>
          <div className='w-12 h-12 rounded-full bg-[#f1f1f1] flex items-center justify-center'>
            <AiOutlineShoppingCart className='text-[#311F09] w-6 h-6 cursor-pointer'/>
          </div>
          <div className='hidden md:flex w-28 h-12 rounded-full bg-[#3FA72F] items-center justify-center'>
            <h2 className='text-white font-semibold'>Log in</h2>
          </div>
          <button className='md:hidden cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <ul className='md:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4'>
          {['Home', 'Menu', 'About us', 'Order online', 'Reservation', 'Contact us'].map((item, index) => (
            <li key={index} className='w-full text-center py-2 border-b cursor-pointer hover:text-[#FF8A00]'>
              <NavLink 
                to={`/${item.toLowerCase().replace(' ', '-')}`} 
                className={({ isActive }) => isActive ? 'text-[#FF8A00]' : ''} 
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </NavLink>
            </li>
          ))}
          <div className='w-28 h-12 rounded-full bg-[#3FA72F] flex items-center justify-center mt-2'>
            <h2 className='text-white font-semibold'>Log in</h2>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Header;
