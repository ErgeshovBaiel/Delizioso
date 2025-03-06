import React from 'react'

const Hero = () => {
  return (
    <div className='w-360 m-auto mt-35'>
      <div className='w-312.5 m-auto flex gap-45'>
      <div>
        <div className="mt-25 w-[153px] h-[41px] rounded-full bg-[#fae0c1]">
        <button className="w-[84px] h-[20px] text-[#FF8A00] text-[18px] font-[Raleway] pl-8.5 pt-4.5 font-normal leading-[11%]">Restauran</button>
        </div>
        <h1 className="mt-18 w-[288px] h-[176px] text-[#311F09] text-[80px] font-[Raleway]  font-bold leading-[11%]">
        Italian <span className='relative top-20'>Cuisine</span></h1>
        <p className="w-[523px] h-[120px] text-[#5C4529] text-[20px] font-[Poppins] font-normal leading-[200%]">
          Pasta is a staple food of Italian cuisine made from durum wheat
          semolina or flour mixed with water (and sometimes eggs) to create a
          dough, which is then shaped into various forms.
        </p>
        <div className='flex gap-6 mt-25'>
        <div className="mt-25x w-[232.42px] h-[74.44px] rounded-full bg-[#FF8A00]">
        <button className="w-[228px] h-[42px] text-[20px]  pt-4.25 text-white font-[Poppins] font-semibold leading-[200%]">Order now</button>
        </div>
        <div className="w-[233px] h-[75px] rounded-full bg-[#3FA72F]">
        <button className="w-[122px] h-[42px] text-[20px] text-white pl-13.75 pt-4.25 font-[Poppins] font-semibold leading-[200%]">Reservation</button>
        </div>
        </div>
      </div>
      <div className='relative top-50'>
        <img  
        className='w-123.25 h-123.25'
        src="https://s3.aws-k8s.generated.photos/ai-generated-photos/bg-removal-uploads/results/725/7edd5dc0-ec58-4312-adbd-a5dfb5159aae.png" alt="" />
      </div>

      </div>
    </div>
  )
}

export default Hero
