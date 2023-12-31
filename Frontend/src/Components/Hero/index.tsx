import React from "react";
import "./Hero.css";

import Booking from "./Booking";

const Index = () => {
  return (
    <main className='hero'>
      <div className='heroDiv'>
        <h3>Book your stay with Manazil</h3>
        <p>1,480,086 rooms around the world are waiting for you!</p>
      </div>
      <div className='bookingDiv'>
        <Booking />
      </div>
    </main>
  );
};

export default Index;
