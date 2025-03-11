import React from 'react'
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full min-h-[691px] bg-[#311F09] mt-125'>
      <div className='w-[1250px] m-auto'>
        <div className='flex'>
          <div>
            <div className='flex gap-4.5 pt-[149px]'>
              <div className='w-[51px] h-[51px] rounded-full bg-[#FF8A00]'>
                <h1 className='w-[18px] h-[38px] font-semibold text-[25px] leading-[37.5px] text-white pt-1.5 pl-4.5'>
                  D
                </h1>
              </div>
              <h2 className='font-semibold font-[Poppins] text-white text-[14px] leading-[21px] relative top-4'>
                Delizi
                <span className='text-[#FF8A00]'>oso</span>
              </h2>
            </div>
            <p className='w-[300px] h-[120px] text-[20px] leading-[200%] text-[#E3E2E0] font-normal pt-[45px]'>
              Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
            </p>
            <div className='flex gap-7.5 relative top-25'>
              <div className='w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full'>
                <FaTwitter size={30} />
              </div>
              <div className='w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full'>
                <FaInstagram size={30} />
              </div>
              <div className='w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full'>
                <FaFacebookF size={30} />
              </div>
            </div>
          </div>

          <div className='flex gap-17.5 pt-[149px] pl-[140px]'>
            <div>
              <h3 className='w-[65px] h-[50px] font-[Poppins] font-semibold text-[25px] leading-[200%] text-[#FF8A00]'>
                Page
              </h3>
              <div className='flex flex-col gap-[15px] pt-[25px]'>
                <p className='w-[60px] h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  Home
                </p>
                <p className='w-[56px] h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  Menu
                </p>
                <p className='w-[123px] h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  Order online
                </p>
                <p className='w-[88px] h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  Catering
                </p>
                <p className='w-[118px] h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  Reservation
                </p>
              </div>
            </div>

            <div>
              <h3 className='w-[151px] h-[50px] font-[Poppins] font-semibold text-[25px] leading-[200%] text-[#FF8A00]'>
                Information
              </h3>
              <div className='flex flex-col gap-[15px] pt-[25px]'>
                <p className='w-[89px] h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  About us
                </p>
                <p className='w-[116px] h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  Testimonial
                </p>
                <p className='w-[54px] h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  Event
                </p>
              </div>
            </div>


            <div>
              <h3 className='w-[154px] h-[50px] font-[Poppins] font-semibold text-[25px] leading-[200%] text-[#FF8A00]'>
                Get in touch
              </h3>
              <div className='flex flex-col gap-[15px] pt-[25px]'>
                <p className='w-[280px] h-[62px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
                </p>
                <p className='w-[214px] h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  delizioso@gmail.com
                </p>
                <p className='w-[147px] h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
                  +123 4567 8901
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className='w-[800px] pt-25 pl-112.5 h-[40px] font-[Poppins] font-normal text-[20px] leading-[200%] text-[#E3E2E0]'>
          Copyright @ 2022 Delizioso
        </p>
      </div>
    </div>
  )
}

export default Footer