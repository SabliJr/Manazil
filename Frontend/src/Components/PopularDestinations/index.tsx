import React from "react";
import "./Popular.css";

import Paris from "../../Assets/pexels-andras-stefuca-17646155.jpg";
import Spain from "../../Assets/b5036e1f0db0cdb638ccc22b64623fce.jpg";
import Moscow from "../../Assets/pexels-дмитрий-трепольский-8566648.jpg";
import Kenya from "../../Assets/Nairobi-national-Park.jpg";
import Bali from "../../Assets/ezgif.com-gif-maker-2023-02-23T113534.654.webp";
import Rio from "../../Assets/pexels-evandro-kluge-12271543.jpg";

const Index = () => {
  return (
    <main className='popMain'>
      <h3 className='pop'>Popular Destinations:</h3>
      <section className='popular'>
        <div className='parisDiv'>
          <h4 className='DesName parisName'>Paris</h4>
          <img src={Paris} alt='Paris' className='paris' />
        </div>
        <div className='pragueAndKenya'>
          <div>
            <h4 className='DesName naiName'>Nairobi</h4>
            <img src={Kenya} alt='Kenya' className='nairobi' />
          </div>
          <div>
            <h4 className='DesName mosName'>Moscow</h4>
            <img src={Moscow} alt='Moscow' className='Moscow' />
          </div>
        </div>
        <div className='spainDiv'>
          <h4 className='DesName barcaName'>Barcelona</h4>
          <img src={Spain} alt='Spain' className='spain' />
        </div>
        <div className='BaliAndNetherland'>
          <div>
            <h4 className='DesName baliName'>Bali</h4>
            <img src={Bali} alt='Bali' className='bali' />
          </div>
          <div>
            <h4 className='DesName rioName'>Rio</h4>
            <img src={Rio} alt='Rio' className='rio' />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
