import React from "react";
import "./Footer.css";
import "../Header/Header.css";

const Index = () => {
  let theDate = new Date().getFullYear();

  return (
    <footer className='Footer'>
      <section className='footerText'>
        <div className='footerLogoDiv'>
          <h3 className='Logo'>MANAZIL</h3>
          <p>Your favorite hotel booking experience since sliced bread!</p>
          <p>MANAZIL &copy;{theDate}</p>
        </div>
        <div className='footerLinks'>
          <h3>Help</h3>
          <li>FAQ</li>
          <li>Customer Service</li>
          <li>How to guide</li>
          <li>Contact Us</li>
        </div>
      </section>
    </footer>
  );
};

export default Index;
