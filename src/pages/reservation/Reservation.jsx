;
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
    setIsOpenModal(true)
    // navigate('/reservation-detail', { state: { date, time, partySize } });
  };

  return (
    <div className="">
      <div className="app-container mx-auto flex items-start">
        <div>
          <img src={Image} alt="Restaurant table" className="w-[600px] relative left-[-120px]" />
        </div>

        <div className="reservationForm max-w-[400px] mx-auto pt-[90px]">
          <h1 className="text-6xl font-bold text-[#311F09] text-center mb-[35px]">
            Book a table
          </h1>

          <form className="form flex flex-col gap-6 ml-[-20px]" onSubmit={handleSubmit}>
            <div className="relative w-[475px] mx-auto">
              <select
                className="w-full h-[100px] rounded-xl bg-[#FBF9F9] text-xl font-normal pl-4 text-[#A0978C]"
                id="date-select"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              >
                <option value="">Date</option>
                {dates.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative w-[475px] mx-auto">
              <select
                className="w-full h-[100px] rounded-xl bg-[#FBF9F9] text-xl font-normal pl-4 text-[#A0978C]"
                id="time-select"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value=""> Time</option>
                {times.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative w-[475px] mx-auto">
              <select
                className="w-full h-[100px] rounded-xl bg-[#FBF9F9] text-xl font-normal pl-4 text-[#A0978C]"
                id="party-size-select"
                value={partySize}
                onChange={(e) => setPartySize(e.target.value)}
              >
                <option value=""> Party Size</option>
                {partySizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="w-[475px] h-[80px] rounded-xl bg-[#FF8A00] text-white text-xl font-semibold"
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
          partySize={partySize} />
      )
      }
    </div>
  );
};

export default Reservation;

