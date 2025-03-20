import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#311F09] mt-20 py-10 px-5 relative top-100'>
      <div className='max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col items-start  md:text-left'>
          <div className='flex items-center gap-4'>
            <div className='w-[51px] h-[51px] flex items-center justify-center rounded-full bg-[#FF8A00]'>
              <h1 className='text-white text-[25px] font-semibold'>D</h1>
            </div>
            <h2 className='font-semibold text-white text-[20px]'>
              Delizi<span className='text-[#FF8A00]'>oso</span>
            </h2>
          </div>
          <p className='text-[#E3E2E0] text-[16px] leading-[200%] mt-5 max-w-[300px]'>
            Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
          </p>
          <div className='flex gap-4 mt-5'>
            <div className='w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full'>
              <FaTwitter size={20} />
            </div>
            <div className='w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full'>
              <FaInstagram size={20} />
            </div>
            <div className='w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full'>
              <FaFacebookF size={20} />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-0'>
          <div>
            <h3 className='text-[#FF8A00] text-[20px] font-semibold'>Page</h3>
            <ul className='text-[#E3E2E0] text-[16px] mt-3 space-y-2'>
              <li>Home</li>
              <li>Menu</li>
              <li>Order online</li>
              <li>Catering</li>
              <li>Reservation</li>
            </ul>
          </div>
          <div>
            <h3 className='text-[#FF8A00] text-[20px] font-semibold'>Information</h3>
            <ul className='text-[#E3E2E0] text-[16px] mt-3 space-y-2'>
              <li>About us</li>
              <li>Testimonial</li>
              <li>Event</li>
            </ul>
          </div>
          <div>
            <h3 className='text-[#FF8A00] text-[20px] font-semibold'>Get in touch</h3>
            <ul className='text-[#E3E2E0] text-[16px] mt-3 space-y-2'>
              <li>3247 Johnson Ave, Bronx, NY 10463</li>
              <li>delizioso@gmail.com</li>
              <li>+123 4567 8901</li>
            </ul>
          </div>
        </div>
      </div>
      <p className='text-[#E3E2E0] text-center text-[16px] mt-10'>
        Copyright &copy; 2022 Delizioso
      </p>
    </div>
  );
};

export default Footer;
