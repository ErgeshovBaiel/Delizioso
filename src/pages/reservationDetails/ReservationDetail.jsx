

import Kalendar from "../../assets/kalendar.svg";
import Time from "../../assets/time.svg";
import Adam from "../../assets/people.svg";
import Flag from "../../assets/flag.svg";
import { FaChevronDown } from "react-icons/fa";
import red from "../../assets/red.svg"


const ReservationDetail = () => {
    const reservationData = {
        date: '2025-03-10',
        time: '18:00',
        partySize: 4
    };

    const formattedDate = new Date(reservationData.date).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (
        <div className="app-container mx-auto ">
            <h1   className="text-4xl font-semibold text-center mt-[10px]">Reservation</h1>

            <button className="bg-[#BAF2FF] text-gray-700 text-xl font-normal rounded-2xl py-8 px-12 mb-10 block mx-auto mt-[50px]">
                Due to limited availability, we can hold this table for you for <span className="font-bold text-black">5:00 minutes</span>
            </button>

            <div className="flex gap-10 justify-center">
                <div>
                    <h2 className="text-2xl font-semibold  text-center">Data order</h2>

                    <section className="flex flex-col gap-6">\

                        <input
                            className="w-[475px] h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-4 mx-auto"
                            type="text"
                            placeholder="First name"
                        />

                        <input
                            className="w-[475px] h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-4 mx-auto"
                            type="text"
                            placeholder="Last name"
                        />

                        <div className="relative flex items-center">
                            <button className="w-[152px] h-[70px] bg-white flex items-center justify-center absolute left-4 rounded-2xl">
                                <img className="w-[48px] h-[48px]" src={Flag} alt="Flag" />
                                <img className=" ml-[20px]" src={red} alt="" />
                            </button>
                            <input
                                className="w-[475px] h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-20 mx-auto text-center"
                                type="text"
                                placeholder="Phone number"
                            />
                        </div>

                        <input
                            className="w-[475px] h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-4 mx-auto"
                            type="text"
                            placeholder="Email address"
                        />

                        <div className="relative w-[475px] mx-auto">
                            <input
                                className="w-full h-[100px] rounded-xl bg-[#F6F6F6] text-xl font-normal pl-14 pr-4"
                                type="text"
                                placeholder="Select an occasion"
                            />
                            <FaChevronDown className="absolute right-14 top-1/2 transform -translate-y-1/2 text-#5C4529 w-6 h-6" />
                        </div>


                        <textarea
                            className="w-[475px] h-[325px] rounded-xl bg-[#F6F6F6] text-xl font-normal p-4 mx-auto resize-none"
                            placeholder="Add a special request"
                        ></textarea>



                        <p className="text-xl font-normal text-[#5C4529]" >Sign me up to receive dining offers and news <br /> from this restaurant by email. <span></span></p>

                        <button className="w-[475px] h-[100px] rounded-xl bg-[#FF8A00] text-white font-normal text-[30px]">Confirm reservation</button>

                    </section>
                </div>

                <div className="bg-[#F6F6F6] w-[429px] h-[300px] mt-[78px] rounded-2xl flex flex-col items-start p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 w-full text-center">Reservation Details</h2>
                    <p className="text-xl font-normal text-[#5C4529] flex items-center gap-3 mb-6">
                        <img className="w-6 h-6" src={Kalendar} alt="Calendar Icon" />
                        {formattedDate}
                    </p>
                    <p className="text-xl font-normal text-[#5C4529] flex items-center gap-3 mb-6">
                        <img className="w-6 h-6" src={Time} alt="Clock Icon" />
                        {reservationData.time}
                    </p>
                    <p className="text-xl font-normal text-[#5C4529] flex items-center gap-3">
                        <img className="w-6 h-6" src={Adam} alt="People Icon" />
                        {reservationData.partySize} people (Standard seating)
                    </p>



                    <div className="mt-6 p-4 rounded- w-[417px]  h-[463px] ">
                        <h1 className="text-xl font-bold mb-4 mt-[80px]">Restaurant informations</h1>
                        <p className="mb-2 text-[20px] font-normal text-[#5C4529] mt-[20px]">
                            Sed ut perspiciatis unde omnis iste <br /> natus error sit voluptatem accusantium <br /> doloremque laudantium,
                            totam rem <br />     aperiam, eaque ipsa quae ab illo <br /> inventore veritatis et quasi architecto <br /> beatae vitae dicta sunt explicabo.
                        </p>



                        <p className="text-[20px] font-normal text-[#5C4529] mt-[20px]">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam <br /> eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ReservationDetail;
