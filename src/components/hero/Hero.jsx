import React from 'react';

const Hero = () => {
  return (
    <div className='w-full max-w-[1200px] mx-auto flex relative left-4.5
    flex-col md:flex-row mt-41.5 md:mt-41.5 px-4 md:px-0'>
      <div className='md:w-1/2 md:text-left'>
        <div className='inline-block bg-[#fae0c1] rounded-full font-[Raleway] px-4 py-1 text-[#FF8A00] text-sm font-medium'>
          Restaurant
        </div>
        <h1 className='text-4xl md:text-5xl font-bold text-[#311F09] font-[Raleway] leading-tight mt-5.5'>
          Italian <span className='block md:inline'>Cuisine</span>
        </h1>
        <p className='text-[#5C4529] text-base md:text-lg mt-7.5 max-w-md mx-auto md:mx-0'>
          Pasta is a staple food of Italian cuisine made from durum wheat
          semolina or flour mixed with water (and sometimes eggs) to create a
          dough, which is then shaped into various forms.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-23.75 justify-center md:justify-start'>
          <button className='bg-[#FF8A00] font-[Poppins] text-white px-6 py-3 rounded-full text-lg font-semibold w-full sm:w-auto'>
            Order now
          </button>
          <button className='bg-[#3FA72F] font-[Poppins] text-white px-6 py-3 rounded-full text-lg font-semibold w-full sm:w-auto'>
            Reservation
          </button>
        </div>
      </div>

      <div className='md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0'>
        <img
          className='w-[80%] sm:w-[70%] md:w-full max-w-lg'
          src='https://s3.aws-k8s.generated.photos/ai-generated-photos/bg-removal-uploads/results/725/7edd5dc0-ec58-4312-adbd-a5dfb5159aae.png'
          alt='Italian Cuisine'
        />
      </div>
    </div>
  );
};

export default Hero;