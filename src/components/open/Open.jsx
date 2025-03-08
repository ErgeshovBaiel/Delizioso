import React from 'react'

const Open = () => {
  return (
    <div className='w-360 m-auto relative bottom-50'>
      <div className='w-312.5 m-auto'>
        <div className='w-[1112px] h-[530px]'>
          <div className='relative top-20'>
            <h1
              className='w-[595px] h-[160px] relative top-85 text-white
          left-[250px] text-[80px] font-[Tinos] font-bold leading-[200%]'
            >
              we are open from
            </h1>
            <h3
              className='w-[400px] h-[80px] relative top-[320px] left-[380px] 
           text-[40px] font-[Poppins] font-semibold leading-[200%] text-white'
            >
              Monday-Sunday
            </h3>
            <p
              className='w-[500px] h-[40px] relative top-[320px] left-[380px]
           text-[20px] font-[Poppins] font-normal leading-[200%] text-white'
            >
              Launch : Mon-Sun : 11:00am-02:00pm
            </p>
            <p
              className='w-[500px] h-[40px] relative top-[325px] left-[380px]
           text-[20px] font-[Poppins] font-normal leading-[200%]  text-white'
            >
              Dinner : sunday : 04:00pm-08:00pm
            </p>
            <p
              className='w-[300px] h-[40px] relative top-[330px] left-[550px]
           text-[20px] font-[Poppins] font-normal leading-[200%] text-white'
            >
              04:00pm-09:00pm
            </p>
            <div className='flex gap-6 relative right-16'>
              <div
                className='w-[233px] h-[75px] relative top-[400px] left-[380px]
           rounded-full bg-[#FF8A00]'
              >
                <button
                  className='w-[200px] h-[42px] font-[Poppins] font-semibold
             text-[20px] leading-[200%] text-white  pl-[34px] pt-[17px]'
                >
                  Order now
                </button>
              </div>
              <div
                className='w-[233px] h-[75px] relative top-[400px] left-[380px]
           rounded-full bg-white'
              >
                <button
                  className='w-[200px] h-[42px] font-[Poppins] font-semibold
             text-[20px] leading-[200%] text-[#311F09] pl-[34px] pt-[17px]'
                >
                  Reservation
                </button>
              </div>
            </div>
          </div>
          <img
            className='w-full h-full object-cover rounded-[80px]'
            src='https://noodlecat.com/wp-content/uploads/2021/09/baljinnyam-sumiyasuren-gKN5m528N6o-unsplash-1536x1057.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Open
