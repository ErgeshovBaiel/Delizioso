import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const Food = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/menu')
  }

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
            {t('Welcome')}
          </h1>
          <h1 className='text-[#FF8A00] text-[40px] md:text-[80px] font-[Tinos] font-bold leading-[1.1]'>
            delizioso
          </h1>
          <p className='text-[16px] md:text-[20px] text-[#5C4529] mt-8 md:mt-15 leading-[1.8] max-w-[600px]'>
            {t('Benven')} <span className='text-[#ff8a00]'>Delizioso</span> ,{' '}
            {t('aroma')}
          </p>
          <div className='mt-8 md:mt-25'>
            <button
              onClick={handleClick}
              className='md:px-12 md:py-4 px-7.5 py-4 rounded-full bg-[#FF8A00] 
            text-white text-[14px] md:text-[20px]  font-semibold cursor-pointer'
            >
              {t('menu')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food
