import React from 'react'

const Food = () => {
  return (
    <div className="w-full h-[967px] bg-[#e0f5e7] pt-40 mt-40">
      <div className="w-360 m-auto flex gap-50 items-center relative left-18">
        <div className="flex-shrink-0">
          <img
            className="w-[550px] h-[550px] object-cover"
            src="https://s3.aws-k8s.generated.photos/ai-generated-photos/bg-removal-uploads/results/212/b745aa15-d312-474d-8edf-8aa78d2aae5d.png"
            alt="Delizioso Food"
          />
        </div>

        <div className="relative top-2">
          <h1 className="text-[80px] text-[#3b2b17] font-[Tinos] font-bold leading-[1.1]">
            Welcome to
          </h1>
          <h1 className="text-[#FF8A00] text-[80px] font-[Tinos] font-bold leading-[1.1]">
            delizioso
          </h1>
          <p className="text-[20px] font-[Poppins] text-[#5C4529] mt-15 leading-[1.8] max-w-[434px]">
            Steak salad with pepper is a hearty and flavorful salad in which
            tender pieces of steak are combined with fresh herbs, usually
            seasoned with hot sauce and decorated with a pepper crust to add
            piquancy and depth.
          </p>
          <div className="relative top-25">
            <button className="w-[232px] h-[74px] rounded-full bg-[#FF8A00] text-white text-[20px] font-[Poppins] font-semibold">
              See our menu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food
