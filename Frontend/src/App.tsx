import "./index.css";

import Header from "./Components/Header/index";
import Hero from "./Components/Hero/index";
import Choices from "./Components/Choices/index";
import PopularDestinations from "./Components/PopularDestinations/index";

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Choices />
      <PopularDestinations />
    </div>
  );
}

export default App;
