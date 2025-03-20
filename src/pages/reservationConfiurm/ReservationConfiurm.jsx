
import React from "react";
import { useNavigate } from "react-router-dom";
import nazik from "../../assets/nazik.svg";
import grean from "../../assets/grean.svg";
import Krug from "../../assets/image copy 8.png";
import Kalendar from "../../assets/kalendar.svg";
import Time from "../../assets/time.svg";
import Adam from "../../assets/people.svg";
import modify from "../../assets/modify.svg";
import not from "../../assets/not.svg";

const ReservationConfirm = () => {
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate("/cancel")
    };

    return (
        <div className="app-container">
            <div className="bg-[#20ce5dfc] text-white p-6 mt-[44px] relative rounded-lg">
                <div className="flex items-center gap-4">
                    <p className="text-lg text-[40px] font-bold">Reservation has been confirmed</p>
                </div>
                <div className="flex items-center gap-4 mt-[32px]">
                    <img className="w-[30px] h-[30px]" src={nazik} alt="Confirmation Icon" />
                    <p className="text-lg">The confirmation has been sent to your email.</p>
                </div>
                <div className="flex items-center gap-4 mt-[16px]">
                    <img className="w-[30px] h-[30px]" src={grean} alt="Booking ID Icon" />
                    <p className="text-lg">Booking ID: <strong>#123456</strong></p>
                </div>
            </div>

            <div className="flex items-center">
                <div>
                    <img className="w-[330px] h-[300px] mt-[56px]" src={Krug} alt="" />
                </div>

                <div className="p-rounded-lg w-[324px] mt-[60px] ml-[34px]">
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

                <div className="flex flex-col gap-4 mt-[60px] ml-[112px]">
                    <button className="w-[246px] h-[80px] bg-[#9ecaff] rounded-[20px] text-center flex items-center justify-center text-blue-900">
                        Modify
                        <span className="ml-4">
                            <img className="w-6 h-6" src={modify} alt="Modify Icon" />
                        </span>
                    </button>

                    <button
                        className="w-[246px] h-[80px] bg-[#fecece] rounded-[20px] text-center flex items-center justify-center mt-[20px] text-red-400"
                        onClick={handleCancelClick}
                    >
                        Cancel
                        <span className="ml-4">
                            <img className="w-6 h-6" src={not} alt="Cancel Icon" />
                        </span>
                    </button>
                </div>
            </div>

            <div className="flex justify-between mt-[50px] mx-[57px]">
                <div className="flex flex-col">
                    <div className="relative w-[475px]">
                        <select
                            className="w-full h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-14 pr-4"
                            defaultValue=""
                        >
                            <option value="" disabled>Select an occasion (optional)</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="business">Business Meeting</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <textarea
                        className="w-[475px] h-[325px] rounded-xl bg-[#F6F6F6] text-xl font-normal p-4 resize-none mt-[37px]"
                        placeholder="Add a special request"
                    ></textarea>
                </div>

                <div className="w-[475px] p-6 mt-[-27px] rounded-xl">
                    <h1 className="text-[25px] font-semibold mb-4">Restaurant  <br />   Informations</h1>
                    <p className="mb-4 text-[20px] font-normal text-[#5C4529]">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p className="text-[20px] font-normal text-[#5C4529]">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReservationConfirm;
