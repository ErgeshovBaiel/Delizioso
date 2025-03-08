// ReservationForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { reserveTable } from '../../redux/actions/actions'
import image from "../../assets/image.png"


const ReservationForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reserveTable(formData)); 
  };

  return (

    <div className='container'>
        <div className='red'>
            <img src={image} alt="" />
        </div>

<form onSubmit={handleSubmit}>

{/* <label>Date:</label> */}
<input type="date" name="date" value={formData.date} onChange={handleChange} required />

{/* <label>Time:</label> */}
<input type="time" name="time" value={formData.time} onChange={handleChange} required />

{/* <label>Guests:</label> */}
<input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" required />

<button type="submit">Book now</button>
</form>


    </div>
   
  );
};

export default ReservationForm;
