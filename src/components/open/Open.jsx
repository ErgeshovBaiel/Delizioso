import React from 'react'

const Open = () => {
  return (
    <div className='w-full max-w-[1400px] flex justify-center mx-auto px-4 py-50'>
      <div
        className='md:w-[1150px] md:h-[588px] w-[325px] h-[416px] relative md:rounded-[100px]
         rounded-[60px] overflow-hidden aspect-[1150/588]'
      >
        <img
          src='https://noodlecat.com/wp-content/uploads/2021/09/baljinnyam-sumiyasuren-gKN5m528N6o-unsplash-1536x1057.jpg'
          alt='Noodle Dish'
          className='w-full h-full object-cover'
        />
        <div className='absolute md:bottom-15 bottom-40 inset-0 flex flex-col items-center justify-center text-center text-white '>
          <h1 className='md:w-[595px] w-[185px] text-[40px] md:text-[80px] font-bold font-[Tinos] relative md:bottom-15 -bottom-15'>
            we are <span className='relative md:bottom-0 bottom-3'>open from</span> 
          </h1>
          <h3 className='md:w-[346px] w-[180px] text-xl md:text-[40px] font-semibold font-[Poppins] relative md:bottom-7.5 -bottom-15'>
            Monday-Sunday
          </h3>
          <div className='relative md:top-0 top-17'>
          <p className='text-[15px] md:text-xl font-normal font-[Poppins]'>
            Launch: Mon-Sun - 11:00am-02:00pm
          </p>
          <p className='text-[15px] md:text-xl font-normal font-[Poppins] mt-2'>
            Dinner: Sunday - 04:00pm-08:00pm
          </p>
          <p className='text-[15px] md:text-xl font-normal font-[Poppins] mt-2'>
            04:00pm-09:00pm
          </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-2.5 relative md:top-25 top-20 '>
            <button
              className='md:px-12 md:py-4 px-7.5 py-4 rounded-full bg-[#FF8A00] text-white text-[14px] 
              md:text-[20px] font-[Poppins] font-semibold'
            >
              Order now
            </button>
            <button
              className='md:px-12 md:py-4 px-7.5 py-4 rounded-full bg-white text-[#311F09] text-[14px] 
              md:text-[20px] font-[Poppins] relative font-semibold'
            >
              Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Open