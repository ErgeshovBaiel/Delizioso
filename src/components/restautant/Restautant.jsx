import React from 'react'

const Restautant = () => {
  return (
    <div className='w-[1400px] m-auto'>
      <div className='flex relative left-30'>
        <div
          className='md:w-[861px] md:h-[861px] w-[295px] h-[295px] rounded-full bg-[#faf8f9] relative
          md:top-[60px] md:right-65 right-15 top-25'
        >
          <div
            className='md:w-[694px] md:h-[694px] w-[237px] h-[237px] bg-[#f0f0ef] rounded-full relative 
          md:top-[83.65px] md:left-[83.65px] top-[28.64px] left-[28.64px]'
          >
            <img
              className='md:w-[549px] md:h-[549px] w-[188px] h-[188px] relative 
              md:top-[72.14px] md:left-[72.14px] top-[24.7px] left-[24.7px] rounded-full'
              src='https://lucenotte.com/static/media/about1small.64976a2d45da9d811e9f.webp'
              alt=''
            />
          </div>
        </div>

        <div className='relative md:top-[250px] md:right-15 top-15 right-32'>
          <h2
            className='w-[360px] h-[176px]  text-[#311F09] md:text-[80px] text-[30px] 
          font-[Tinos] font-bold leading-[11%] relative md:right-0 right-50'
          >
            <span className='text-[#FF8A00] relative md:bottom-20 bottom-0'>
              Our
            </span>{' '}
            restaurant
          </h2>
          <p
            className='md:w-[450px] md:h-[320px] w-[290px] h-[192px] md:text-[20px] text-center text-[14px]  font-[Poppins] font-normal
           relative md:bottom-10 md:right-0 md:top-0 top-50 right-60 leading-[200%] text-[#5C4529]'
          >
            Welcome to Delizioso , a culinary oasis nestled in the vibrant heart
            of downtown Verona. Founded in 2015 by Italian-born restaurateur
            Ismail Marzuki, Luce Notte has quickly become a beloved fixture in
            the local dining scene, captivating guests with its irresistible
            blend of traditional flavors and contemporary flair.
          </p>
        </div>
      </div>

      <div className='flex'>
        <div className='relative top-[500px] flex justify-center'>
          <p
            className='md:w-[450px] md:h-[320px] md:text-[20px] font-[Poppins] 
            font-normal relative md:top-10 md:left-0 top-50 left-10 leading-[200%] text-[#5C4529]
             w-[290px] h-[192px] md:text-center text-center'
          >
            At Delizioso, we take pride in delivering an unparalleled dining
            experience from start to finish. Our menu features a tantalizing
            array of authentic Italian dishes crafted from the finest
            locally-sourced ingredients, including handcrafted pastas, succulent
            seafood, and decadent desserts.
          </p>
        </div>
        <div
          className='md:w-[861px] md:h-[861px] w-[295px] h-[295px] rounded-full bg-[#faf8f9] relative
        md:top-70 md:left-58 right-60 top-92.5'
        >
          <div
            className='md:w-[694px] md:h-[694px] w-[237px] h-[237px] bg-[#f0f0ef] rounded-full relative 
          md:top-[83.65px] md:left-[83.65px] top-[28.64px] left-[28.64px]'
          >
            <img
              className='md:w-[549px] md:h-[549px] w-[188px] h-[188px] relative 
              md:top-[72.14px] md:left-[72.14px] top-[24.7px] left-[24.7px] rounded-full'
              src='https://lucenotte.com/static/media/about2small.b018f2fa8d249ec9c094.webp'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='flex mt-125'>
        <div
          className='md:w-[460px] md:h-[690px] w-[148px] h-[222px] relative
         md:mt-0 md:left-0 mt-95 left-30'
        >
          <img
            className='md:rounded-[50px] rounded-[23px]'
            src='https://lucenotte.com/static/media/executiveChef.a6e6568f51eb35736134.webp'
            alt=''
          />
        </div>

        <div className='relative left-15'>
          <h2
            className='md:w-[600px] md:h-[176px] relative md:top-[18px] md:left-[100px] 
          text-[#311F09] md:text-[80px] font-[Tinos] font-bold leading-[110%]
          w-[202px] h-[68px] text-3xl text-center top-67.5 right-30'
          >
            <span className='text-[#FF8A00]'>Owner</span> & Executive Chef
          </h2>

          <h3
            className='md:w-[400px] md:h-[60px] relative md:top-[80px] md:left-[140px] md:right-0
            text-[#000000]  md:text-[50px] font-[Poppins] font-semibold leading-[100%]
            w-[150px] h-[24px] text-[18px]  top-140 right-20'
          >
            Ismail Marzuki
          </h3>
          <p
            className='md:w-[550px] md:h-[240px] relative md:top-[150px] md:left-[100px]
            text-[#5C4529]  md:text-[25px] font-[Poppins] font-light italic leading-[200%]
            w-[350px] text-center h-[140px] text-[16px] top-165 right-48.5'
          >
            "Culinary artistry begins with a vision, flourishes with dedication,
            and shines with passion. As a restaurant owner, I am privileged to
            orchestrate this symphony of flavors, creating unforgettable
            experiences one dish at a time."
          </p>
        </div>
      </div>
    </div>
  )
}




const Restaurant = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='flex flex-wrap items-center justify-center lg:justify-between'>
        <div className='relative w-full lg:w-[500px] h-[500px] rounded-full bg-[#efefeef5] flex items-center justify-center'>
          <div className='w-[400.72px] h-[400.72px] bg-[#ecebe8] rounded-full flex items-center justify-center'>
            <img
              className='w-[310.31px] h-[310.31px] rounded-full object-cover'
              src='https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66c727d76724a47dade1ce15_66c7299440e6066f40bae2f4/scale_1200'
              alt='Restaurant Interior'
            />
          </div>
        </div>
        <div className='lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0'>
          <h2 className='text-[#311F09] text-4xl md:text-6xl font-[Tinos] font-bold'>
            <span className='text-[#FF8A00]'>Our</span> restaurant
          </h2>
          <p className='mt-6 text-lg text-[#5C4529] leading-relaxed text-[30px]'>
            If you are referring to booking a table at your restaurant, you will probably want to set up a reservation
            system either through your restaurant's website, by phone, or through third-party services such as OpenTable.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap-reverse items-center justify-center lg:justify-between mt-20'>
        <div className='lg:w-1/2 text-center lg:text-left'>
          <p className='mt-6 text-lg text-[#5C4529] text-[30px] leading-relaxed'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
        <div className='relative w-full lg:w-[500px] h-[500px] rounded-full bg-[#efefeef5] flex items-center justify-center'>
          <div className='w-[400.82px] h-[400.82px] bg-[#ecebe8] rounded-full flex items-center justify-center'>
            <img
              className='w-[350.95px] h-[350.95px] rounded-full object-cover'
              src='https://static.kinoafisha.info/upload/articles/585985332975.jpg'
              alt='Restaurant Dish'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-center lg:justify-between mt-20'>
        <div className='w-full lg:w-1/2 h-[500px]'>
          <img
            className='w-[1085px] h-[690px] t-[1918px]  object-cover'
            src='https://lucenotte.com/static/media/executiveChef.a6e6568f51eb35736134.webp'
            alt='Owner Image'
          />
        </div>
        <div className='lg:w-1/3 text-center  lg:text-left mt-10 lg:mt-0 '>
          <h2 className='text-[#311F09] text-4xl md:text-6xl font-[Tinos] font-bold'>
            <span className='text-[#FF8A00]'>Owner</span> & Executive Chef
          </h2>
          <h3 className='text-2xl md:text-4xl font-semibold text-black mt-4'>Ismail Marzuki</h3>
          <p className='mt-6 text-lg text-[#5C4529] italic leading-relaxed'>
            Ismail Marzuki is a well-known Indonesian chef, but he has not received widespread international recognition.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Restaurant

