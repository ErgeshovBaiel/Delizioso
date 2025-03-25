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