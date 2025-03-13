import React from 'react'

const Table = () => {
  return (
    <div className='w-full min-h-screen bg-[#FEF8F3] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-10'>
      <div className='md:w-1/2 md:text-left'>
        <h1 className='text-[32px] md:text-[48px] font-bold text-[#3B2B17]'>
          Let's reserve <br />
          <span className='text-[#FF8A00]'>a table</span>
        </h1>
        <p className='text-[16px] text-[#5C4529] mt-4 md:mt-6 leading-[1.6]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
          quam.
        </p>
        <button className='mt-6 md:mt-8 px-6 py-3 bg-[#FF8A00] text-white font-semibold rounded-full text-[16px] shadow-lg'>
          Reservation
        </button>
      </div>
      <div className='md:w-1/2 flex justify-center relative mt-10 md:mt-0'>
        <div className='relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]'>
          <img
            src='https://ucctulsa.org/wp-content/uploads/2021/08/events-at-Fellowship-Community-Church-in-Tulsa-768x768.jpg'
            alt='Food table'
            className='w-full h-full object-cover rounded-full border-20 border-[#f7e6d1]'
          />
          <img
            src='https://img.restoclub.ru/uploads/article/7/2/0/0/720092ed9cdc1d6d757ccb8e358b31bb_w1200_h630--c.jpeg'
            alt=''
            className='absolute bottom-[-20px] left-[-20px] w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover rounded-full border-5 border-[#f7e6d1] shadow-md'
          />
          <img
            src='https://www.accu-chek.ca/sites/g/files/iut106/f/ca-xxxx_dining_out_with_diabetes_1366x480.jpg'
            alt=''
            className='absolute top-[-20px] right-[-20px] w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover rounded-full border-5 border-[#f7e6d1] shadow-md'
          />
        </div>
      </div>
    </div>
  )
}

export default Table
