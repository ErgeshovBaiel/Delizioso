import React, { useState, useEffect } from 'react'
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose
} from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const savedActive = localStorage.getItem('activePage')
    if (savedActive) {
      setActive(savedActive)
    }
  }, [])

  const handleNavClick = item => {
    setActive(item)
    setMenuOpen(false)
    localStorage.setItem('activePage', item)
    navigate(item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`)
  }

  return (
    <div className='w-full fixed top-0 left-0 z-50 bg-white shadow-md'>
      <div className='max-w-350 mx-auto h-25 flex items-center justify-between px-4 md:px-0'>
        <div className='flex items-center gap-4.5'>
          <div className='w-12.75 h-12.75 rounded-full bg-[#FF8A00] flex items-center justify-center'>
            <h1 className='w-4.5 h-9.5 text-white text-[25px] font-semibold font-[Poppins] pl-0.5'>
              D
            </h1>
          </div>
          <h2 className='font-semibold font-[Poppins] text-[20px] leading-[100%]'>
            Delizi<span className='text-[#FF8A00]'>oso</span>
          </h2>
        </div>
        <ul className='hidden lg:flex gap-15'>
          {[
            'Home',
            'Menu',
            'About us',
            'Order online',
            'Reservation',
            'Contact us'
          ].map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer hover:text-[#FF8A00] text-[#311F09] font-[Poppins] font-normal text-[16px] transition leading-[100%] 
                ${active === item ? 'text-[#FF8A00]' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-6'>
          <div className='w-12 h-12 rounded-full bg-[#f1f1f1] flex items-center justify-center'>
            <AiOutlineShoppingCart className='text-[#311F09] w-6 h-6 cursor-pointer' />
          </div>
          <NavLink to="/login">
          <div className='hidden md:flex w-28 h-12.5 pb-1.25 rounded-full bg-[#3FA72F] items-center justify-center'>
            <h2 className='text-white text-[18px] font-semibold'>Log in</h2>
          </div>
          </NavLink>
          <button
            className='md:hidden cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className='md:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4'>
          {[
            'Home',
            'Menu',
            'About us',
            'Order online',
            'Reservation',
            'Contact us'
          ].map((item, index) => (
            <li
              key={index}
              className='w-full text-center py-2 border-b cursor-pointer hover:text-[#FF8A00]'
            >
              <NavLink
                to={
                  item === 'Home'
                    ? '/'
                    : `/${item.toLowerCase().replace(' ', '-')}`
                }
                className={({ isActive }) => (isActive ? 'text-[#FF8A00]' : '')}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </NavLink>
            </li>
          ))}
          <NavLink to="/login">
            <button
              className='md:px-12 md:py-4 px-7.5 py-4 rounded-full bg-[#3FA72F] text-white text-[14px] 
            md:text-[20px] font-[Poppins] relative font-semibold cursor-pointer'
            >
              Log in
            </button>
          </NavLink>
        </ul>
      )}
    </div>
  )
}

export default Header
