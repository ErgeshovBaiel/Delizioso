


import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Kalendar from "../../assets/kalendar.svg";
import Time from "../../assets/time.svg";
import Adam from "../../assets/people.svg";
import Flag from "../../assets/flag.svg";
import red from "../../assets/red.svg";
import { FaChevronDown } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import ReservationConfirm from "../reservationConfiurm/ReservationConfiurm";

const ReservationDetail = ({ setIsOpenModal, date, time, partySize }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [phoneError, setPhoneError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [closeModal1, setCloseModal1] = useState(false);

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);

        const phoneRegex = /^(\+?\d{1,2})?(\()?(\d{3})(\))?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
        if (!phoneRegex.test(value)) {
            setPhoneError('Неверный формат номера телефона');
        } else {
            setPhoneError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phoneError && phoneNumber) {
            alert('Резервирование прошло успешно!');
            setCloseModal1(true);
        } else {
            alert('Пожалуйста, исправьте ошибки.');
        }
    };

    const handleEdit = () => {
        navigate('/reservation');
    };

    return (
        <div className="bg-black/70 absolute inset-0 h-[2500px] z-50">
            <div className="app-container mx-auto top-[187px] pb-[90px] bg-[white] z-[1000] left-1/2 -translate-x-1/2 absolute">
                <div className="text-center relative bottom-[100px] flex justify-center">
                    <button onClick={() => setIsOpenModal(false)} className="bg-[white] cursor-pointer w-[80px] h-[80px] rounded-full flex text-[23px] items-center justify-center ">
                        <GrClose />
                    </button>
                </div>
                <ModalHeader />
                {!closeModal1 && (
                    <ModalReservationConfirm
                        handleSubmit={handleSubmit}
                        phoneNumber={phoneNumber}
                        handlePhoneChange={handlePhoneChange}
                        phoneError={phoneError}
                        formattedDate={formattedDate}
                        time={time}
                        partySize={partySize}
                    />
                )}
                {closeModal1 && (
                    <ReservationConfirm />
                )}
            </div>
        </div>
    );
};

export default ReservationDetail;

const ModalHeader = () => {
    return (
        <div className="flex items-center gap-6 w-full px-10 py-4 bg-white">
            <div className="flex items-center">
                <div className="w-[51px] h-[51px] rounded-full bg-[#FF8A00] flex items-center justify-center">
                    <h1 className="text-white text-2xl font-semibold">D</h1>
                </div>
                <h2 className="font-semibold text-lg ml-4">
                    Delizi<span className="text-[#FF8A00]">oso</span>
                </h2>
            </div>

            <div className="flex-grow"></div>

            <div className="flex items-center gap-4">
                <button className="w-28 h-12 rounded-full bg-[#FF8A00] text-white font-semibold transition-transform hover:scale-105">
                    Sign in
                </button>
                <button className="w-28 h-12 rounded-full bg-[#3FA72F] text-white font-semibold transition-transform hover:scale-105">
                    Sign up
                </button>
            </div>
        </div>
    );
};

const ModalReservationConfirm = ({ setCloseModal1, phoneNumber, handleSubmit, handlePhoneChange, phoneError, formattedDate, time, partySize }) => {
    return (
        <>
            <h1 className="text-[80px] font-semibold text-center mt-[88px]">Reservation</h1>

            <button className="bg-[#BAF2FF] text-gray-700 text-[20px] font-normal rounded-[20px] py-8 px-12 mb-10 block mx-auto mt-[53px] w-[950px] h-[123px]">
                Due to limited availability, we can hold this table for you for <span className="font-bold text-black">5:00 minutes</span>
            </button>

            <div className="flex gap-10 justify-center mr-auto">
                <div>
                    <h2 className="text-2xl font-semibold w-[136px] h-[38px] ml-[60px] not-only; mt-[62px]">Data order</h2>

                    <section className="flex flex-col gap-6 mt-[46px]">
                        <input className="w-[475px] h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-4 ml-[57px]" type="text" placeholder="First name" />
                        <input className="w-[475px] h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-4 ml-[57px]" type="text" placeholder="Last name" />
                        <div className="relative flex items-center">
                            <button className="w-[152px] h-[70px] bg-white flex items-center justify-center absolute left-20 rounded-2xl">
                                <img className="w-[48px] h-[48px]" src={Flag} alt="Flag" />
                                <img className="ml-[20px]" src={red} alt="" />
                            </button>
                            <input
                                className="w-[475px] h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-20 text-center ml-[57px]"
                                type="text"
                                placeholder="Phone number"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                            />
                        </div>

                        {phoneError && <span className="text-red-500 text-sm">{phoneError}</span>}

                        <input className="w-[475px] h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-4 ml-[57px]" type="text" placeholder="Email address" />

                        <div className="relative w-[475px]">
                            <select
                                className="w-full h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-14 pr-4 ml-[57px]"
                                defaultValue=""
                            >
                                <option  className="" value="" disabled>Select an occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="business">Business Meeting</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <textarea className="w-[475px] h-[325px] rounded-xl bg-[#F6F6F6] text-xl font-normal p-4 resize-none ml-[57px]" placeholder="Add a special request"></textarea>

                        <div className="flex gap-[20px] mb-[115px]">
                            <input type="radio" className="w-[44px] h-[44px] ml-[50px]" />
                            <p className="text-xl font-normal text-[#5C4529] w-[523px] h-[60px]">Sign me up to receive dining offers and news <br /> from this restaurant by email.</p>
                        </div>

                        <button
                            className="w-[475px] h-[100px] rounded-xl bg-[#FF8A00] text-white font-normal text-[25px] ml-[57px]"
                            onClick={handleSubmit}
                        >
                            Confirm reservation
                        </button>
                    </section>
                </div>

                <div className="ml-[-20px]">
                    <div className="bg-[#F6F6F6] w-[429px] h-[300px] mt-[140px] rounded-[20px] flex flex-col items-start p-6 ml-[-70px]">
                        <h2 className="text-2xl font-semibold mb-6 w-full text-center">Reservation Details</h2>
                        <p className="text-xl font-normal text-[#5C4529] flex items-center gap-3 mb-6">
                            <img className="w-6 h-6" src={Kalendar} alt="Calendar Icon" />
                            {formattedDate}
                        </p>
                        <p className="text-xl font-normal text-[#5C4529] flex items-center gap-3 mb-6">
                            <img className="w-6 h-6" src={Time} alt="Clock Icon" />
                            {time}
                        </p>
                        <p className="text-xl font-normal text-[#5C4529] flex items-center gap-3">
                            <img className="w-6 h-6" src={Adam} alt="People Icon" />
                            {partySize} people (Standard seating)
                        </p>
                    </div>

                    <div className="mt-6 p-4 rounded- w-[417px] h-[463px] ml-[-50px]">
                        <h1 className="text-[25px] font-semibold mb-4 mt-[20px] ml-[-30px]">Restaurant informations</h1>
                        <p className="mb-2 text-[20px] font-normal text-[#5C4529] mt-[40px] ml-[-30px]">
                            Sed ut perspiciatis unde omnis iste <br /> natus error sit voluptatem accusantium <br /> doloremque laudantium, totam rem <br /> aperiam, eaque ipsa quae ab illo <br /> inventore veritatis et quasi architecto <br /> beatae vitae dicta sunt explicabo.
                        </p>

                        <p className="text-[20px] font-normal text-[#5C4529] mt-[25px] ml-[-30px]">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam <br /> eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
