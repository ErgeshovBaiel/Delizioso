import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
  return (
    <div className='w-360 m-auto fixed z-50 top-0 left-1/2 transform -translate-x-1/2  '>
    <div className='w-312.5 m-auto  h-[150px] relative bottom-1 bg-white'>
      <div className='flex gap-25 pt-15'>
        <div className='flex gap-4.5 '>
          <div className='w-[51px] h-[51px]  rounded-full bg-[#FF8A00] '>
            <h1
              className='w-[18px] h-[38px] font-semibold text-[25px] 
      leading-[37.5px] text-white pt-1.5 pl-4.5'
            >
              D
            </h1>
          </div>
          <h2
            className='w-[63px] h-[21px] font-semibold font-[Poppins] 
      text-[14px] leading-[21px] relative top-4'
          >
            Delizi
            <span className='text-[#FF8A00]'>oso</span>
          </h2>
        </div>

        <ul className='flex gap-11.25 relative top-4'>
          <li className='w-[42px] h-[21px] font-normal text-[14px] font-[Poppins] text-[#FF8A00]'>
            Home
          </li>
          <li className='w-[39px] h-[21px] font-normal text-[14px] font-[Poppins] text-[#311F09]'>
            Menu
          </li>
          <li className='w-[72px] h-[21px] font-normal text-[14px] font-[Poppins] text-[#311F09]'>
            About us
          </li>
          <li className='w-[96px] h-[21px] font-normal text-[14px] font-[Poppins] text-[#311F09]'>
            Order online
          </li>
          <li className='w-[83px] h-[21px] font-normal text-[14px] font-[Poppins] text-[#311F09]'>
            Reservation
          </li>
          <li className='w-[97px] h-[21px] font-normal text-[14px] font-[Poppins] text-[#311F09]'>
            Contact us
          </li>
        </ul>
        <div className='flex gap-12.5'>
        <div  className="w-[50px] h-[50px] rounded-full bg-[#f1f1f1]">
        <AiOutlineShoppingCart className='text-[#311F09] w-6 h-6  relative top-3.25 left-3'/>
        </div>
        <div className='w-[112px] h-[50px]  rounded-[133px] bg-[#3FA72F]'>
          <h2 class='w-[82px] h-[21px] pt-3.75 pl-8 font-[Poppins] font-semibold text-[14px] leading-[21px] text-white'>
            Log in
          </h2>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
