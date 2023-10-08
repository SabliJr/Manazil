import React from "react";
import "./Popular.css";

import Paris from "../../Assets/pexels-andras-stefuca-17646155.jpg";
import Prague from "../../Assets/Prague-1920x720_tcm9-5976.jpg";
import Spain from "../../Assets/b5036e1f0db0cdb638ccc22b64623fce.jpg";
import Netherlands from "../../Assets/pexels-дмитрий-трепольский-8566648.jpg";
import Kenya from "../../Assets/Nairobi-national-Park.jpg";
import Bali from "../../Assets/ezgif.com-gif-maker-2023-02-23T113534.654.webp";
import TeAviv from "../../Assets/pexels-evandro-kluge-12271543.jpg";

const Index = () => {
  return (
    <main>
      <h3 className='pop'>Popular Destinations</h3>
      <section className='popular'>
        <div className='parisDiv'>
          <img src={Paris} alt='Paris' className='paris' />
        </div>
        <div className='pragueAndKenya'>
          <img src={Kenya} alt='Kenya' className='nairobi' />
          <img src={Netherlands} alt='Netherlands' className='amsterdam' />
        </div>
        <div className='spainDiv'>
          <img src={Spain} alt='Spain' className='spain' />
        </div>
        <div className='BaliAndNetherland'>
          <img src={Bali} alt='Bali' className='bali' />
          <img src={TeAviv} alt='Prague' className='rio' />
        </div>
      </section>
    </main>
  );
};

export default Index;
