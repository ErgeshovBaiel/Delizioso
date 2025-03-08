import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full h-30 fixed top-0 left-0 z-50 bg-white shadow-md'>
      <div className='container mx-auto px-4 h-full'>
        <div className='w-312.5 m-auto pt-7.5'>
          <div className='flex items-center justify-between h-full'>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 rounded-full bg-[#FF8A00] flex items-center justify-center'>
                <h1 className='text-white text-2xl font-semibold'>D</h1>
              </div>
              <h2 className='font-semibold text-lg font-[Poppins]'>
                Delizi<span className='text-[#FF8A00]'>oso</span>
              </h2>
            </div>

            <ul className='hidden md:flex gap-11.25 font-[Poppins]'>
              <li className='cursor-pointer hover:transition-all hover:duration-1000'>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'text-[#FF8A00]' : 'text-[#311F09]'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className='cursor-pointer hover:transition-all hover:duration-1000'>
                <NavLink
                  to="/menu"
                  className={({ isActive }) =>
                    isActive ? 'text-[#FF8A00]' : 'text-[#311F09]'
                  }
                >
                  Menu
                </NavLink>
              </li>
              <li className='cursor-pointer hover:transition-all hover:duration-1000'>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive ? 'text-[#FF8A00]' : 'text-[#311F09]'
                  }
                >
                  About us
                </NavLink>
              </li>
              <li className='cursor-pointer hover:transition-all hover:duration-1000'>
                <NavLink
                  to="/order-online"
                  className={({ isActive }) =>
                    isActive ? 'text-[#FF8A00]' : 'text-[#311F09]'
                  }
                >
                  Order online
                </NavLink>
              </li>
              <li className='cursor-pointer hover:transition-all hover:duration-1000'>
                <NavLink
                  to="/reservation"
                  className={({ isActive }) =>
                    isActive ? 'text-[#FF8A00]' : 'text-[#311F09]'
                  }
                >
                  Reservation
                </NavLink>
              </li>
              <li className='cursor-pointer hover:transition-all hover:duration-1000'>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? 'text-[#FF8A00]' : 'text-[#311F09]'
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>

            <div className='flex items-center gap-6'>
              <div className='w-12 h-12 rounded-full bg-[#f1f1f1] flex items-center justify-center'>
                <AiOutlineShoppingCart className='text-[#311F09] w-6 h-6' />
              </div>
              <div className='w-28 h-12 rounded-full bg-[#3FA72F] flex items-center justify-center'>
                <h2 className='text-white font-semibold'>Log in</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
