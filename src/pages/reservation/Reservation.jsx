// // import React from "react";
// // import { FaChevronDown } from "react-icons/fa";
// // import Styles from "./Reservation.module.scss"
// // import Image from "../../assets/image copy 2.png"

// // const Reservation = () => {
// //   return (
// //     <div className="container">
// //       <div className={Styles.reservationImage}>
// //         <img src={Image} alt="Restaurant table" />
// //       </div>
      
// //       <div className={Styles.reservationForm}>
// //         <h1>Book a table</h1>
// //         <form>
// //           <div className={Styles.inputGroup}>
// //             <input type="text" placeholder="Date" />
// //             <FaChevronDown className={Styles.icon} />
// //           </div>
// //           <div className={Styles.inputGroup}>
// //             <input type="text" placeholder="Time" />
// //             <FaChevronDown className={Styles.icon} />
// //           </div>
// //           <div className={Styles.inputGroup}>
// //             <input type="text" placeholder="Party size" />
// //             <FaChevronDown className={Styles.icon} />
// //           </div>
// //           <button type="submit">Book now</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Reservation;










// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import Styles from "./Reservation.module.scss";
// import Image from "../../assets/image copy 2.png";

// const dates = ["March 6", "March 7", "March 8", "March 9", "March 10"]; 
// const times = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "7:00 PM", "7:30 PM", "8:00 PM"];
// const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const Reservation = () => {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [partySize, setPartySize] = useState("");
//   const [showDateDropdown, setShowDateDropdown] = useState(false);
//   const [showTimeDropdown, setShowTimeDropdown] = useState(false);
//   const [showPartyDropdown, setShowPartyDropdown] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!date || date === "Select Date" || !time || time === "Select Time" || !partySize || partySize === "Party Size") {
//       alert("Please fill in all fields");
//       return;
//     }
//     console.log("Reservation Details:", { date, time, partySize });
//     alert("Table booked successfully!");
//   };

//   return (
//     <div className="container">
//       <div className={Styles.reservationImage}>
//         <img src={Image} alt="Restaurant table" />
//       </div>

//       <div className={Styles.reservationForm}>
//         <h1>Book a table</h1>
//         <form onSubmit={handleSubmit}>
//           <div className={Styles.inputGroup} onClick={() => setShowDateDropdown(!showDateDropdown)}>
//             <input type="text" value={date} readOnly placeholder="Date" />
//             <FaChevronDown className={Styles.icon} />
//             {showDateDropdown && (
//               <ul className={Styles.dropdown}>
//                 {dates.map((d) => (
//                   <li key={d} onClick={() => { setDate(d); setShowDateDropdown(false); }}>{d}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <div className={Styles.inputGroup} onClick={() => setShowTimeDropdown(!showTimeDropdown)}>
//             <input type="text" value={time} readOnly placeholder="Time" />
//             <FaChevronDown className={Styles.icon} />
//             {showTimeDropdown && (
//               <ul className={Styles.dropdown}>
//                 {times.map((t) => (
//                   <li key={t} onClick={() => { setTime(t); setShowTimeDropdown(false); }}>{t}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <div className={Styles.inputGroup} onClick={() => setShowPartyDropdown(!showPartyDropdown)}>
//             <input type="text" value={partySize} readOnly placeholder="Party size" />
//             <FaChevronDown className={Styles.icon} />
//             {showPartyDropdown && (
//               <ul className={Styles.dropdown}>
//                 {partySizes.map((size) => (
//                   <li key={size} onClick={() => { setPartySize(size); setShowPartyDropdown(false); }}>{size}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <button className={Styles} type="submit">Book now</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Reservation;


import React, { useState } from "react";
import Styles from "./Reservation.module.scss";
import Image from "../../assets/image copy 2.png";

const dates = ["March 6", "March 7", "March 8", "March 9", "March 10"];
const times = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "7:00 PM", "7:30 PM", "8:00 PM"];
const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Reservation = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !partySize) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Reservation Details:", { date, time, partySize });
    alert("Table booked successfully!");
  };

  return (
    <div className="container">
      <div className={Styles.reservationImage}>
        <img src={Image} alt="Restaurant table" />
      </div>

      <div className={Styles.reservationForm}>
        <h1>Book a table</h1>
        <form onSubmit={handleSubmit}>
          <div className={Styles.inputGroup}>
            <label htmlFor="date-select"></label>
            <select
              id="date-select"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              <option value=""> Date </option>
              {dates.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className={Styles.inputGroup}>
            <label htmlFor="time-select"></label>
            <select 
              id="time-select"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option className={Styles.red} value=""> Time</option>
              {times.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className={Styles.inputGroup}>
            <label htmlFor="party-size-select"></label>
            <select
              id="party-size-select"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
            >
              <option value=""> Party Size </option>
              {partySizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <button className={Styles.button} type="submit">
            Book now
          </button>
        </form>
      </div>
      
    </div>



  );
};

export default Reservation;

