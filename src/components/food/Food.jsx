import React from 'react';

const Food = () => {
  return (
    <div className="w-full h-auto md:h-[967px] bg-[#e0f5e7] pt-20 md:pt-40 mt-20 md:mt-40">
      <div className="w-full max-w-[1200px] m-auto flex flex-col md:flex-row gap-8  items-center px-4 md:px-0">
        <div className="flex-shrink-0">
          <img
            className="w-full md:w-[550px] h-[300px] md:h-[550px] object-cover"
            src="https://s3.aws-k8s.generated.photos/ai-generated-photos/bg-removal-uploads/results/212/b745aa15-d312-474d-8edf-8aa78d2aae5d.png"
            alt="Delizioso Food"
          />
        </div>

        <div className="text-center  mt-8 md:mt-0">
          <h1 className="text-[40px] md:text-[80px] text-[#3b2b17] font-[Tinos] font-bold leading-[1.1]">
            Welcome to
          </h1>
          <h1 className="text-[#FF8A00] text-[40px] md:text-[80px] font-[Tinos] font-bold leading-[1.1]">
            delizioso
          </h1>
          <p className="text-[16px] md:text-[20px] font-[Poppins] text-[#5C4529] mt-8 md:mt-15 leading-[1.8] max-w-[434px]">
            Steak salad with pepper is a hearty and flavorful salad in which
            tender pieces of steak are combined with fresh herbs, usually
            seasoned with hot sauce and decorated with a pepper crust to add
            piquancy and depth.
          </p>
          <div className="mt-8 md:mt-25">
            <button className="w-full md:w-[232px] h-[60px] md:h-[74px] rounded-full bg-[#FF8A00] text-white text-[16px] md:text-[20px] font-[Poppins] font-semibold">
              See our menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
