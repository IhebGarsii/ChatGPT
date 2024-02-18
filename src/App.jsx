import "./App.css";
import Navbar from "./componant/navbar/Navbar";
import Home from "./pages/home/Home";
import WhatIsGPT from "./pages/whatIsGPT/WhatIsGPT";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <WhatIsGPT />
    </div>
  );
}

export default App;
