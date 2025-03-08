
import Styles from "./ReservationDetail.module.scss";
import Icon2 from "../../assets/image copy 5.png";
// import { FaChevronDown } from "react-icons/fa";
import Kalendar from "../../assets/kalendar.svg"
import Time from "../../assets/time.svg"
import Adam from '../../assets/people.svg'
import Flag from "../../assets/flag.svg"
const ReservationDetail = () => {
    const reservationData = {
        date: '2025-03-10',
        time: '18:00',
        partySize: 4
    };

    return (
        <div className='container1'>


            {/* ////////////////////////////////////////////    */}
            <div >
                <h1 className={Styles.h1}>Reservation</h1>
                <button className={Styles.buttonblue}>Due to limited availability, we can hold this table for you for <span className={Styles.blue}> 5:00 minutes</span></button>

                <div>
                    <h2>Data order</h2>
                    <section className={Styles.input}>
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />

                        <div className={Styles.phoneContainer}>

                            <button className={Styles.button2}>
                                <img className={Styles.image} src={Flag} alt="" />
                            </button>

                            <input className={Styles.phone} type="text" placeholder="Phone number" />
                        </div>

                        <input type="text" placeholder="Email address" />
                    </section>
                </div>
            </div>

            {/* /////////////////////////////////////////////////////////////////////////////////////// */}

            <div className={Styles.card}>
                <div>
                    <h2 className={Styles.h2}>Reservation Details</h2>
                    <p>
                        <img className={Styles.kalendar} src={Kalendar} alt="Calendar Icon" />
                        Monday, 28 February 2022
                    </p>
                    <p>
                        <img className={Styles.time} src={Time} alt="Clock Icon" />
                        04:30 PM
                    </p>
                    <p>
                        <img className={Styles.adam} src={Adam} alt="People Icon" />
                        2 people (Standard seating)
                    </p>
                </div>
            </div>


        </div>


    );
};

export default ReservationDetail;
