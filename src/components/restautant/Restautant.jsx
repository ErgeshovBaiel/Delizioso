import React from 'react'
import { useTranslation } from 'react-i18next'

const Restautant = () => {
  const { t } = useTranslation()

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
            className='w-[360px] h-[176px] text-[#311F09] md:text-[80px] text-[30px] 
  font-[Tinos] font-bold leading-[11%] relative md:right-0 right-70 
  text-center md:text-left'
          >
            <span className='text-[#FF8A00] relative md:bottom-20 bottom-0'>
              {t('Oures')}
            </span>{' '}
            {t('Oures2')}
          </h2>

          <p
            className='md:w-[450px] md:h-[320px] w-[290px] h-[192px] md:text-[20px] text-center md:text-left
             text-[14px]  font-normal
           relative md:bottom-10 md:right-0 md:top-0 top-50 right-60 leading-[200%] text-[#5C4529]'
          >
            {t('Welcome')}
            <span className='text-[#ff8a00]'>Delizioso</span> , {t('culinary')}
          </p>
        </div>
      </div>

      <div className='flex'>
        <div className='relative top-[500px] flex justify-center'>
          <p
            className='md:w-[450px] md:h-[320px] md:text-[20px]
            font-normal relative md:top-10 md:left-0 top-50 left-10 leading-[200%] text-[#5C4529]
             w-[290px] h-[192px]  text-center md:text-left'
          >
            {t('At')} {""}
            <span className='text-[#ff8a00]'>Delizioso</span> ,
             {t('take')}
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
          w-[202px] h-[68px] text-3xl text-center md:text-left top-67.5 right-30'
          >
            <span className='text-[#FF8A00]'>{t('Owner')}</span>{t('Executive')}
          </h2>

          <h3
            className='md:w-[500px] md:h-[60px] relative md:top-[120px] md:left-[140px] md:right-0
            text-[#000000]  md:text-[50px] font-semibold leading-[100%]
            w-[150px] h-[24px] text-[18px]  top-140 right-20'
          >
            {t('Marzuki')}
          </h3>
          <p
            className='md:w-[550px] md:h-[240px] relative md:top-[150px] md:left-[100px]
            text-[#5C4529]  md:text-[25px] font-[Poppins] font-light italic leading-[200%]
            w-[350px]  text-center md:text-left h-[140px] text-[16px] top-165 right-48.5'
          >
            {t('Culinary')}

          </p>
        </div>
      </div>
    </div>
  )
}

export default Restautant
