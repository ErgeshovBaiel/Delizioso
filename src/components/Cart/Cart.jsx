import React from 'react'

function Cart({ text, price, count }) {
    return (
        <div className="relative w-[343px] mt-[235px] h-[500px] rounded-[20px] shadow-md shadow-black/30 p-4 flex flex-col justify-between bg-white">
            <button className="absolute bottom- w-[250px] h-[99px] rounded-[20px] text-white bg-[#512982] flex items-center justify-center opacity-90">
                Order list
            </button>
            <div className="">
                <h3 >{text}</h3>
                <img src="../../pages/Remove.svg" alt=""  />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center bg-[#FAFAF9] gap-5 px-4 py-2 rounded-full">
                    <span className="cursor-pointer text-xl">-</span>
                    <span className="text-lg font-medium">{count}</span>
                    <span className="cursor-pointer text-xl text-green-600">+</span>
                </div>
                <h5 className="text-lg font-semibold">${price}</h5>
            </div>
        </div>
    )
}

export default Cart