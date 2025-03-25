import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleOrderClick = () => {
    navigate('/order-online')
  }

  const handleReservationClick = () => {
    navigate('/reservation')
  }

  return (
    <div className='max-w-[1400px] mx-auto flex-col md:flex-row mt-41.5 md:mt-30 px-4 md:px-0 flex'>
      <div className='md:w-1/2 md:text-left'>
        <div className='block w-max mb-10 bg-orange-100 text-orange-500 text-[20px] rounded-full px-7.5 py-2.5'>
          {t('Rest')}
        </div>
        <h1 className='text-[60px] md:text-[80px] md:w-[288px] md:mt-6 font-bold text-[#311F09] font-[Raleway] leading-tight'>
          {t('Itali')}
        </h1>
        <p className='text-[#5C4529] font-normal  text-base md:text-[20px] mt-[30px] mx-auto md:mx-0 w-full md:w-[600px]'>
          {t('desc')} <span className='text-[#ff8a00]'>Delizioso</span>{' '}
          {t('desc2')}
        </p>
        <div className='flex gap-5 md:gap-6 mt-[78px]'>
          <div
            onClick={handleOrderClick}
            className='block w-max mb-10 md:mb-10 bg-[#FF8A00] text-white text-[14px] md:text-[20px]
  font-semibold rounded-full px-7.5 py-4 md:px-12 md:py-4 cursor-pointer'
          >
            {t('order')}
          </div>
          <div
            onClick={handleReservationClick}
            className='block w-max mb-10 md:mb-10 bg-[#3FA72F] text-white text-[14px] md:text-[20px]
  font-semibold rounded-full px-7.5 py-4 md:px-12 md:py-4 cursor-pointer'
          >
            {t('reser')}
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center md:justify-end relative bottom-5'>
        <img
          className='w-full h-auto max-w-[900px] object-contain scale-100'
          src='https://lucenotte.com/static/media/menu-spaghetti.29888127cfcf814cc5b3.webp'
          alt='Italian Cuisine'
        />
      </div>
    </div>
  )
}

export default Hero
