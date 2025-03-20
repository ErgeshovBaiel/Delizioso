import React from 'react';

const Hero = () => {
  return (
    <div
      className=' max-w-[1400px] mx-auto
      flex-col md:flex-row mt-41.5 md:mt-30 px-4 md:px-0 flex'
    >
      <div className='md:w-1/2 md:text-left'>
        <div className='block w-max mb-10 bg-orange-100 text-orange-500 text-[20px] rounded-full px-7.5 py-2.5'>
          Restaurant
        </div>
        <h1 className='text-[60px] md:text-[80px] md:w-[288px] md:mt-6 font-bold text-[#311F09] font-[Raleway] leading-tight'>
          Italian <span className='block md:inline'>Cuisine</span>
        </h1>
        <p className='text-[#5C4529] font-normal font-[Poppins] text-base md:text-[20px] mt-[30px] mx-auto md:mx-0 w-full md:w-[600px]'>
          Experience the Essence of Italy at{' '}
          <span className='text-[#ff8a00]'>Delizioso</span> , where each dish
          embodies the rich flavors and traditions of Italian cuisine. From
          handmade pastas to mouthwatering pizzas and decadent desserts, our
          menu promises a culinary journey through Italy's finest. Buon
          Appetito!
        </p>

        <div className='flex gap-5 md:gap-6 mt-[78px]'>
          <div
            className='block w-max mb-10 md:mb-10 bg-[#FF8A00] text-white text-[14px] md:text-[20px] font-[Poppins] 
            font-semibold rounded-full px-7.5 py-4 md:px-12 md:py-4'
          >
            Order now
          </div>
          <div
            className='block w-max mb-10 md:mb-10 bg-[#3FA72F] text-white text-[14px] md:text-[20px] font-[Poppins]
            font-semibold rounded-full px-7.5 py-4 md:px-12 md:py-4'
          >
            Reservation
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center md:justify-end mt-10'>
        <img
          className='w-full h-auto max-w-[900px] object-contain scale-100'
          src='https://lucenotte.com/static/media/menu-spaghetti.29888127cfcf814cc5b3.webp'
          alt='Italian Cuisine'
        />
      </div>

      
      
    </div>
  );
};

export default Hero;