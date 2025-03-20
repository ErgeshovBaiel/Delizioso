import React from 'react';

const Food = () => {
  return (
    <div className='w-full h-auto md:h-[967px] bg-[#e0f5e7] pt-20 md:pt-40 mt-20 md:mt-40'>
      <div className='w-full max-w-[1400px] m-auto flex flex-col md:flex-row gap-25 items-center px-4 md:px-0'>
        <div className='w-full md:w-1/2 flex justify-center md:justify-end  order-2 md:order-1'>
          <img
            className='w-full h-auto max-w-[900px] object-contain scale-100'
            src='https://lucenotte.com/static/media/salad.f17f7b8ada0ae9b1659d.webp'
            alt='Italian Cuisine'
          />
        </div>

        <div className='mt-8 md:mt-0 order-1 md:order-2'>
          <h1 className='text-[40px] md:text-[80px] text-[#3b2b17] font-[Tinos] font-bold leading-[1.1]'>
            Welcome to
          </h1>
          <h1 className='text-[#FF8A00] text-[40px] md:text-[80px] font-[Tinos] font-bold leading-[1.1]'>
            delizioso
          </h1>
          <p className='text-[16px] md:text-[20px] font-[Poppins] text-[#5C4529] mt-8 md:mt-15 leading-[1.8] max-w-[600px]'>
            Benvenuti! Welcome to <span className='text-[#ff8a00]'>Delizioso</span> , where the aroma of Italy fills the
            air and every guest is family. Step into our cozy ambiance and
            prepare to be transported to the heart of Italian culinary
            tradition. Whether you're a connoisseur or new to Italian cuisine,
            our warm hospitality and authentic flavors ensure an unforgettable
            dining experience. Join us as we celebrate the art of food and the
            joy of gathering around the table.
          </p>
          <div className='mt-8 md:mt-25'>
            <button className='md:px-12 md:py-4 px-7.5 py-4 rounded-full bg-[#FF8A00] 
            text-white text-[14px] md:text-[20px] font-[Poppins] font-semibold'>
              See our menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
