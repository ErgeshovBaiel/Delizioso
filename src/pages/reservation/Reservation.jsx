import React from 'react'
import image from "../../assets/image copy.png"

const Reservation = () => {
  return (
    <div className='container'>

      <div>
        <img  className="blue"src={image} alt="" />
      </div>

      <div>
        
        <h1 className='red'>Book a table</h1>

        <div>
          <form action="">

            <input type="text " placeholder='Date' />
            <input type="text" placeholder='Time' />
            <input type="text" placeholder='Party size' />

          </form>
        </div>
        <div>
          <button className='Button'>Book now</button>
        </div>

      </div>


    </div>
  )
}

export default Reservation

