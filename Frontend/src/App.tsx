import "./index.css";

import Header from "./Components/Header/index";
import Hero from "./Components/Hero/index";
import Choices from "./Components/Choices/index";
import PopularDestinations from "./Components/PopularDestinations/index";
import NewsLetter from "./Components/NewsLetter/index";
import Footer from "./Components/Footer/index";

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Choices />
      <PopularDestinations />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
