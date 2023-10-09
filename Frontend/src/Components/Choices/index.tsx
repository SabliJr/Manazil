import React from "react";
import "./Choices.css";

import Choices from "../../Assets/choice.png";
import CheckingIn from "../../Assets/check-in.png";
import EasyBooking from "../../Assets/booking.png";

const Index = () => {
  return (
    <section className='choices'>
      <div className='choicesHeader'>
        <h3>Why to choose us ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          ullam! Lorem, ipsum dolor.
        </p>
      </div>
      <div className='choicesIconsDiv'>
        <div>
          <img src={Choices} alt='' />
          <h4>Lots Of Choices</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, ullam!
          </p>
        </div>
        <div>
          <img src={EasyBooking} alt='' />
          <h4>Easy Booking</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, ullam!
          </p>
        </div>
        <div>
          <img src={CheckingIn} alt='' />
          <h4>Easy Check In</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, ullam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
