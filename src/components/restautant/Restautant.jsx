import React from 'react'

const Restautant = () => {
  return (
    <div className='w-360 m-auto'>
      <div className='flex'>
        <div className='w-[862px] h-[862px] rounded-full bg-[#efefeef5] relative top-[300px] right-50'>
          <div className='w-[695px] h-[695px] bg-[#ecebe8] rounded-full relative top-[83.65px] left-[83.65px]'>
            <img
              className='w-[550px] h-[550px] relative top-[72.14px] left-[72.14px] rounded-full'
              src='https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66c727d76724a47dade1ce15_66c7299440e6066f40bae2f4/scale_1200'
              alt=''
            />
          </div>
        </div>
        <div className='relative top-[500px] '>
          <h2 className='w-[360px] h-[176px]  text-[#311F09] text-[80px] font-[Tinos] font-bold leading-[11%]'>
            <span className='text-[#FF8A00] relative bottom-20'>Our</span>{' '}
            restaurant
          </h2>
          <p className='w-[424px] h-[320px] text-[20px] font-[Poppins] font-normal relative bottom-10 leading-[200%] text-[#5C4529]'>
            If you are referring to booking a table at your restaurant, you will
            probably want to set up a reservation system either through your
            restaurant's website, by phone, or through third-party services such
            as OpenTable or Resy, depending on how your restaurant handles
            bookings. If you need advice on how to set up or manage your
            booking.
          </p>
        </div>
      </div>
      <div className='flex mt-20'>
        <div className='relative top-[500px] '>
          <p className='w-[424px] h-[320px] text-[20px] font-[Poppins] font-normal relative top-10 leading-[200%] text-[#5C4529]'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
        <div className='w-[862px] h-[862px] rounded-full bg-[#efefeef5] relative top-[300px] left-60'>
          <div className='w-[695px] h-[695px] bg-[#ecebe8] rounded-full relative top-[83.65px] left-[83.65px]'>
            <img
              className='w-[550px] h-[550px] relative top-[72.14px] left-[72.14px] rounded-full object-cover'
              src='https://static.kinoafisha.info/upload/articles/585985332975.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='flex mt-150'>
        <div className='w-full h-[1000px]'>
          <img
            className='w-full h-full object-cover'
            src='https://aromatica.axiomthemes.com/wp-content/uploads/2023/07/team-1-copyright-570x696.jpg'
            alt=''
          />
        </div>

        <div>
          <h2 className='w-[600px] h-[176px] relative top-[18px] left-[100px] text-[#311F09] text-[80px] font-[Tinos] font-bold leading-[110%]'>
            <span className='text-[#FF8A00]'>Owner</span> & Executive Chef
          </h2>

          <h3 className='w-[300px] h-[60px] relative top-[80px] left-[100px] text-[#000000] text-[40px] font-[Poppins] font-semibold leading-[100%]'>
            Ismail Marzuki
          </h3>
          <p className='w-[550px] h-[240px] relative top-[200px] left-[100px] text-[#5C4529] text-[30px] font-[Poppins] font-light italic leading-[200%]'>
            Ismail Marzuki is a well-known Indonesian chef, but he has not
            received widespread international recognition. If you were referring
            to someone with a similar name or in a different context (such as a
            famous Indonesian chef), please provide more information so that I
            can help you more effectively.
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

