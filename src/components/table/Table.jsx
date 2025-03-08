import React from 'react'

const Table = () => {
  return (
    <div className='w-full min-h-[1200px] bg-[#fcf5ec] pt-40 mt-50'>
      <div className='w-360 m-auto flex gap-50 items-center  relative right-75'>
        <div className='flex-shrink-0'>
          <div className='w-[181px] h-[181px] rounded-full relative top-[215px] left-[650px] bg-[#f9ead8]'>
            <img
              className='w-[143.38px] h-[143.38px] rounded-full relative top-[18.81px] left-[18.81px]'
              src='https://img.restoclub.ru/uploads/article/7/2/0/0/720092ed9cdc1d6d757ccb8e358b31bb_w1200_h630--c.jpeg'
              alt=''
            />
          </div>

          <div className='w-[883px] h-[883px] rounded-full border-[1px] border-solid border-[#b9a68e]'>
            <div className='w-[664px] h-[664px] rounded-full bg-[#fcefdd] relative top-28 left-28'>
              <img
                className='w-[525px] h-[525px] object-cover rounded-full relative top-18 left-18'
                src='https://ucctulsa.org/wp-content/uploads/2021/08/events-at-Fellowship-Community-Church-in-Tulsa-768x768.jpg'
                alt='Delizioso Food'
              />
            </div>
          </div>
        </div>

        <div className='relative top-2'>
          <h1 className='w-125 text-[80px] text-[#3b2b17] font-[Tinos] font-bold leading-[1.1]'>
            Let's reserve
          </h1>
          <h1 className='text-[#FF8A00] text-[80px] font-[Tinos] font-bold leading-[1.1]'>
            a table
          </h1>
          <p className='text-[20px] font-[Poppins] text-[#5C4529] mt-15 leading-[1.8] max-w-[434px]'>
            I can't book a table directly, but I can help you find an
            establishment or walk you through the whole process! If you are
            looking for a specific restaurant, please let me know its name and
            location, and I will be able to provide some details or help you
            with booking.
          </p>
          <div className='relative top-25'>
            <button className='w-[232px] h-[74px] rounded-full bg-[#FF8A00] text-white text-[20px] font-[Poppins] font-semibold'>
              Reservation
            </button>

            <div className='w-[181px] h-[181px] rounded-full relative top-[5px] right-[1050px] bg-[#f9ead8]'>
              <img
                className='w-[143.38px] h-[143.38px] rounded-full relative top-[18.81px] left-[18.81px]'
                src='https://s0.rbk.ru/v6_top_pics/media/img/2/08/756747456789082.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
