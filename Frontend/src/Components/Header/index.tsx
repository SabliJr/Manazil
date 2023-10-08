import React from "react";
import "./Header.css";

import { CgProfile } from "react-icons/cg";

function Index() {
  return (
    <header className='header'>
      <h3 className='Logo'>MANAZIL</h3>
      <nav className='nav'>
        <li>Properties</li>
        <li>Attractions</li>
        <li>Popular</li>
      </nav>
      <CgProfile className='profile' />
    </header>
  );
}

export default Index;
