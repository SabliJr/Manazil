import React from "react";
import "./NewsLetter.css";

import Envelope from "../../Assets/envelope-open-dollar.svg";

const Index = () => {
  return (
    <section className='NewsSection'>
      <div className='textAndIcon'>
        <img src={Envelope} alt='Envelope' className='envelope' />
        <div>
          <h3>Heeeey!</h3>
          <p>
            Do you want get secret offers and best prices for amazing stays?
            Sign up to join our travel club!
          </p>
        </div>
      </div>
      <div className='emailAndButton'>
        <div>
          <input type='email' placeholder='Your email address' />
        </div>
        <button type='submit'> Sign Up </button>
      </div>
    </section>
  );
};

export default Index;
