import React from 'react'

const Table = () => {
  return (
    <div className='w-full min-h-[1056px] bg-[#fcf5ec] flex flex-col items-center py-20 px-6 md:px-16'>
      <div className='w-full max-w-[1400px] flex flex-col md:flex-col lg:flex-row
       items-center md:items-center lg:items-start gap-12.5 relative md:left-25 md:top-25'>
        
        <div className='md:text-left max-w-[700px] relative md:left-200 md:top-30 md:order-1 lg:order-none'>
          <h1 className='text-[40px] md:text-[80px] text-[#3b2b17] font-[Tinos] font-bold leading-[1.1]'>
            Let's reserve
          </h1>
          <h1 className='text-[#FF8A00] text-[40px] md:text-[80px] font-[Tinos] font-bold leading-[1.1]'>
            a table
          </h1>
          <p className='text-[16px] md:text-[20px] text-[#5C4529] mt-12.5 leading-[1.8]'>
            Ready to savor the flavors of Italy with us? Secure your spot at{' '}
            <span className='text-[#ff8a00]'>Delizioso</span> by making a
            reservation today. Whether it's a romantic dinner for two or a
            lively gathering with friends, we're here to make your dining
            experience memorable.
          </p>
          <button
            className='md:px-12 md:py-4 px-7.5 py-4 rounded-full bg-[#FF8A00] 
            text-white text-[14px] md:text-[20px] font-[Poppins] font-semibold mt-13.25'
          >
            Reservation
          </button>
        </div>
        <div className='relative flex flex-col items-center lg:right-180 md:order-2 lg:order-none'>
          <div
            className='w-[87px] h-[87px] md:w-[120px] md:h-[120px] lg:w-[181px] lg:h-[181px]  
            rounded-full bg-[#f9ead8] flex items-center justify-center absolute top-5 left-80 md:left-160'
          >
            <img
              className='w-[69px] h-[69px] md:w-[90px] md:h-[90px] lg:w-[143.38px] lg:h-[143.38px] rounded-full object-cover'
              src='https://img.restoclub.ru/uploads/article/7/2/0/0/720092ed9cdc1d6d757ccb8e358b31bb_w1200_h630--c.jpeg'
              alt=''
            />
          </div>
          <div className='w-[418px] h-[418px] md:w-[500px] md:h-[500px] lg:w-[883px] lg:h-[883px] rounded-full border-[1px] border-solid border-[#b9a68e] flex items-center justify-center'>
            <div className='w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[664px] lg:h-[664px] rounded-full bg-[#fcefdd] flex items-center justify-center'>
              <img
                className='w-[253px] h-[253px] md:w-[380px] md:h-[380px] lg:w-[525px] lg:h-[525px] object-cover rounded-full'
                src='https://ucctulsa.org/wp-content/uploads/2021/08/events-at-Fellowship-Community-Church-in-Tulsa-768x768.jpg'
                alt=''
              />
            </div>
          </div>
          <div
            className='w-[87px] h-[87px] md:w-[120px] md:h-[120px] lg:w-[181px] lg:h-[181px] rounded-full bg-[#f9ead8]
            relative lg:-left-75 lg:bottom-52 -left-35 bottom-22.5 flex items-center justify-center'
          >
            <img
              className='w-[69px] h-[69px] md:w-[90px] md:h-[90px] lg:w-[143.38px] lg:h-[143.38px] rounded-full object-cover'
              src='https://s0.rbk.ru/v6_top_pics/media/img/2/08/756747456789082.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
