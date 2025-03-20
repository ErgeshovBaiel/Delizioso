import React, { useState } from 'react';
import grean from "../../assets/grean.svg";
import Krug from "../../assets/image copy 8.png";
import Kalendar from "../../assets/kalendar.svg";
import Time from "../../assets/time.svg";
import Adam from "../../assets/people.svg";

const ReservationCancel = () => {
    const [isCancelled, setIsCancelled] = useState(false);

    const handleCancel = () => {
        setIsCancelled(true);
        setTimeout(() => {
            alert("Your reservation has been successfully cancelled!");
        }, 1000);
    };

    return (
        <div className='app-container'>
            <div className="flex items-center gap-6 w-full px-10 py-4 bg-white">
                <div className="flex items-center">
                    <div className="w-[51px] h-[51px] rounded-full bg-[#FF8A00] flex items-center justify-center">
                        <h1 className="text-white text-2xl font-semibold">D</h1>
                    </div>
                    <h2 className="font-semibold text-lg ml-4">
                        Delizi<span className="text-[#FF8A00]">oso</span>
                    </h2>

                    
            <div className="flex items-center gap-4 ml-[600px]" >
                <button className="w-28 h-12 rounded-full bg-[#FF8A00] text-white font-semibold transition-transform hover:scale-105">
                    Sign in
                </button>
                <button className="w-28 h-12 rounded-full bg-[#3FA72F] text-white font-semibold transition-transform hover:scale-105">
                    Sign up
                </button>
            </div>
                </div>
            </div>

            <div className="bg-[#FF8A00] text-white p-6 mt-[44px] relative rounded-lg w-[1112px] h-[232px]">
                <div className="flex items-center gap-4">
                    <p className="text-lg text-[40px] ml-[63px] font-bold">Are you sure you want to cancel <br /> the reservation?</p>
                </div>
                <div className="flex items-center gap-4 mt-[16px] ml-[63px]">
                    <img className="w-[30px] h-[30px]" src={grean} alt="Booking ID Icon" />
                    <p className="text-lg">Booking ID: <strong>#123456</strong></p>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <img className='w-[330px] h-[330px] mt-[56px]' src={Krug} alt="" />
                </div>
                <div className="p-rounded-lg w-[324px] mt-[120px] ml-[34px]">
                    <h1 className="text-2xl font-semibold mb-[30px]">Reservation Details</h1>
                    <div className="flex items-center gap-3 mb-[30px]">
                        <img className="w-6 h-6" src={Kalendar} alt="Calendar Icon" />
                        <p className="text-lg font-medium">Saturday, 28 February 2022</p>
                    </div>
                    <div className="flex items-center gap-3 mb-[20px]">
                        <img className="w-6 h-6" src={Time} alt="Clock Icon" />
                        <p className="text-lg font-medium">04:30 PM</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="w-6 h-6" src={Adam} alt="People Icon" />
                        <p className="text-lg font-medium">2 people (Standard seating)</p>
                    </div>
                </div>
            </div>

            <div>
                {!isCancelled ? (
                    <button 
                        className='bg-[#FF3838] font-semibold text-[25px] ml-[630px] mt-[30px] text-white w-[458px] h-[100px] rounded-[20px]'
                        onClick={handleCancel}
                    >
                        Cancel reservation
                    </button>
                ) : (
                    <p className="text-center text-green-600 font-semibold text-2xl mt-4">Reservation Cancelled!</p>
                )}
            </div>
        </div>
    );
};

export default ReservationCancel;
