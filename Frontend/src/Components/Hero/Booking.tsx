import React, { useState } from "react";
import "./Hero.css";

import { BsArrowRightCircleFill } from "react-icons/bs";

const Booking = () => {
  const [] = useState();

  return (
    <article className='booking'>
      <label htmlFor='Destination'>
        Destination:
        <input
          type='text'
          name='Destination'
          placeholder="Where're you going ?"
        />
      </label>
      <label htmlFor='Check-in'>
        Check-in:
        <input type='date' name='Check-in' placeholder='Add date' />
      </label>
      <label htmlFor='Check-out'>
        Check-out:
        <input type='date' name='Check-out' placeholder='Add date' />
      </label>
      <label htmlFor='Guests'>
        Guests:
        <input type='number' name='Guests' placeholder='Number of guests' />
      </label>
      <div>
        <BsArrowRightCircleFill className='bookingIcon' />
      </div>
    </article>
  );
};

export default Booking;
