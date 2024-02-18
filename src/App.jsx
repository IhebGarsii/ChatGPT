import "./App.css";
import Badges from "./componant/badges/Badges";
import Navbar from "./componant/navbar/Navbar";
import Home from "./pages/home/Home";
import WhatIsGPT from "./pages/whatIsGPT/WhatIsGPT";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Badges />
      <WhatIsGPT />
    </div>
  );
}

export default App;
