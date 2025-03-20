import React from 'react'

const Restautant = () => {
  return (
    <div className='container pt-[100px] m-auto '>
      <div className='flex justify-between '>
        <div className='w-[780px] h-[780px] flex items-center justify-center rounded-full bg-[#efefeef5] '>
          <div className='w-[605px] h-[605px] bg-[#ecebe8] rounded-full '>
            <img
              className='w-[500px] h-[500px] relative top-[45.14px] left-[45.14px] rounded-full'
              src='https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66c727d76724a47dade1ce15_66c7299440e6066f40bae2f4/scale_1200'
              alt=''
            />
          </div>
        </div>
        <div className='pt-[160px]'>
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
      <div className='flex justify-between '>
        <div className=' '>
          <p className='w-[424px] h-[320px] text-[20px] font-[Poppins] font-normal relative top-50 leading-[200%] text-[#5C4529]'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
        </div>
        <div className='w-[780px] h-[780px] flex items-center justify-center rounded-full bg-[#efefeef5] '>
          <div className='w-[605px] h-[605px] bg-[#ecebe8] rounded-full'>
            <img
              className='w-[500px] h-[500px] relative top-[45.14px] left-[45.14px] rounded-full'
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

export default Restautant
