import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/image copy 7.png";
import ReservationDetail from "../reservationDetails/ReservationDetail";

const dates = ["March 6", "March 7", "March 8", "March 9", "March 10"];
const times = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "7:00 PM", "7:30 PM", "8:00 PM"];
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Reservation = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !partySize) {
      alert("Please fill in all fields");
      return;
    }
    setIsOpenModal(true);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-0 mt-50">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img src={Image} alt="Restaurant table" className="w-full max-w-[600px] md:relative md:left-[-120px]" />
        </div>

        <div className="reservationForm w-full md:w-1/2 pt-10 md:pt-[90px]">
          <h1 className="text-4xl md:text-6xl font-bold text-[#311F09] text-center mb-6 md:mb-[35px]">
            Book a table
          </h1>

          <form className="form flex flex-col gap-4 md:gap-6 items-center" onSubmit={handleSubmit}>
            {[{ label: "Date", value: date, setValue: setDate, options: dates },
              { label: "Time", value: time, setValue: setTime, options: times },
              { label: "Party Size", value: partySize, setValue: setPartySize, options: partySizes }].map(({ label, value, setValue, options }) => (
              <div className="relative w-full max-w-[475px]" key={label}>
                <select
                  className="w-full h-[60px] md:h-[100px] rounded-xl bg-[#FBF9F9] text-lg md:text-xl font-normal pl-4 text-[#A0978C]"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  <option value="">{label}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <button
              className="w-full max-w-[475px] h-[60px] md:h-[80px] rounded-xl bg-[#FF8A00] text-white text-lg md:text-xl font-semibold"
              type="submit"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
      {isOpenModal && (
        <ReservationDetail
          setIsOpenModal={setIsOpenModal}
          date={date}
          time={time}
          partySize={partySize}
        />
      )}
    </div>
  );
};

export default Reservation;