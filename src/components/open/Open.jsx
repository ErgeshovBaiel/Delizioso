import React from 'react'
import { useTranslation } from 'react-i18next'


const Open = () => {
    const { t } = useTranslation()
  
  return (
    <div className='w-full max-w-[1400px] flex justify-center mx-auto px-4 relative top-50'>
      <div
        className='md:w-[1150px] md:h-[588px] w-[325px] h-[416px] relative md:rounded-[100px]
         rounded-[60px] overflow-hidden aspect-[1150/588]'
      >
        <img
          src='https://lucenotte.com/static/media/business-hours.0fa8faaca2c14b04bbe8.webp'
          alt='Noodle Dish'
          className='w-full h-full object-cover'
        />
        <div className='absolute md:bottom-15 bottom-40 inset-0 flex flex-col items-center justify-center text-center text-white '>
          <h1 className='md:w-[650px] w-[185px] text-[40px] md:text-[80px] font-bold font-[Tinos] relative md:bottom-15 -bottom-10'>
          {t('from')}
          </h1>
          <h3 className='md:w-[600px] w-[180px] text-xl md:text-[40px] font-semibold relative md:bottom-7.5 -bottom-15'>
          {t('Mond')}
          </h3>
          <div className='relative md:top-0 top-17'>
          <p className='text-[15px] md:text-xl font-normal'>
          {t('Sun')}
          </p>
          <p className='text-[15px] md:text-xl font-normal  mt-2'>
          {t('Din')}
          </p>
          <p className='text-[15px] md:text-xl font-normal  mt-2'>
          {t('Pm')}
          </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-2.5 relative md:top-25 top-20 '>
            <button
              className='md:px-12 md:py-4 px-7.5 py-4 rounded-full bg-[#FF8A00] text-white text-[14px] 
              md:text-[20px]  font-semibold'
            >
            {t('order')}

            </button>
            <button
              className='md:px-12 md:py-4 px-7.5 py-4 rounded-full bg-white text-[#311F09] text-[14px] 
              md:text-[20px]  relative font-semibold'
            >
            {t('reser')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Open