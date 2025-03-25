import React, { useState, useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose
} from 'react-icons/ai'
import { SlGlobe } from 'react-icons/sl'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Header = () => {
  const { t, i18n } = useTranslation()
  const { cartItems } = useContext(CartContext)
  const cartItemCount = cartItems.length

  const changeLanguage = () => {
    const nextLang =
      i18n.language === 'en' ? 'ru' : i18n.language === 'ru' ? 'kg' : 'en'
    i18n.changeLanguage(nextLang)
  }

  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const savedActive = localStorage.getItem('activePage')
    if (savedActive) {
      setActive(savedActive)
    }
  }, [])

  const handleNavClick = (item) => {
    setActive(item.name)
    setMenuOpen(false)
    localStorage.setItem('activePage', item.name)
    navigate(item.link === 'Home' ? '/' : `/${item.link.toLowerCase().replace(/\s/g, '-')}`)
  }

  const menuItems = [
    { name: 'Home', link: 'Home' },
    { name: 'Menu', link: 'Menu' },
    { name: 'About us', link: 'About-us' },
    { name: 'Order online', link: 'Order-online' },
    { name: 'Reservation', link: 'Reservation' },
    { name: 'Contact us', link: 'Contact-us' }
  ]

  return (
    <div className='w-full fixed top-0 left-0 z-50 bg-white shadow-md'>
      <div className='max-w-350 mx-auto h-25 flex items-center justify-between px-4 md:px-0'>
        <div className='flex items-center gap-4.5'>
          <div className='w-12.75 h-12.75 rounded-full bg-[#FF8A00] flex items-center justify-center'>
            <h1 className='w-4.5 h-9.5 text-white text-[25px] font-semibold font-[Poppins] pl-0.5'>
              D
            </h1>
          </div>
          <h2 className='font-semibold text-[20px]'>
            Delizi<span className='text-[#FF8A00]'>oso</span>
          </h2>
        </div>

        <ul className='hidden lg:flex gap-15'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer hover:text-[#FF8A00] text-[#311F09]
                  font-normal text-[17px] transition leading-[100%] 
                ${active === item.name ? 'text-[#FF8A00]' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {t(item.name)}
            </li>
          ))}
        </ul>
        
        <div className='relative group cursor-pointer transition-transform duration-500 hover:scale-105'>
          <p
            className='font-medium md:text-[12px] md:w-10 md:h-6.25 text-[10px] w-8 h-5 rounded-4xl text-white 
            bg-[#FF8A00] md:pl-3 pl-2.25 pt-0.75 relative md:left-5 left-4.5 top-1  z-40'
            onClick={changeLanguage}
          >
            {t('language')}
          </p>
          <SlGlobe
            className='md:w-8 md:h-8 w-7 h-7 relative bottom-2.5 hover:text-[#FF8A00]'
            onClick={changeLanguage}
          />
        </div>

        <div className='flex items-center gap-6'>
          <NavLink to='/cart' className='relative md:left-0 left-5'>
            <div className='w-11.5 h-11.5 rounded-full bg-[#f5f4f4] flex items-center justify-center relative'>
              <AiOutlineShoppingCart className='text-[#311F09] w-6.5 h-6.5 cursor-pointer' />
              {cartItemCount > 0 && (
                <span
                  className='absolute top-0 right-[-4px] bg-[#FF3838] text-white text-[10px]
                  font-bold w-5 h-5 rounded-full flex items-center justify-center'
                >
                  {cartItemCount}
                </span>
              )}
            </div>
          </NavLink>
          <NavLink to='/login'>
            <div className='hidden md:flex w-28 h-12.5 rounded-full bg-[#3FA72F] items-center justify-center'>
              <h2 className='text-white text-[17px] font-semibold'>Log in</h2>
            </div>
          </NavLink>
          <button className='md:hidden cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className='md:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4'>
          {menuItems.map((item, index) => (
            <li key={index} className='w-full text-center py-2 border-b cursor-pointer hover:text-[#FF8A00]'>
              <NavLink
                to={item.link === 'Home' ? '/' : `/${item.link.toLowerCase().replace(/\s/g, '-')}`}
                className={({ isActive }) => (isActive ? 'text-[#FF8A00]' : '')}
                onClick={() => handleNavClick(item)}
              >
                {t(item.name)}
              </NavLink>
            </li>
          ))}
          <NavLink to='/login'>
            <button
              className='md:px-12 md:py-4 px-7.5 py-4 rounded-full bg-[#3FA72F]
               text-white text-[17px] font-[Poppins] relative font-semibold cursor-pointer'
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
