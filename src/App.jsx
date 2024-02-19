import "./App.css";
import Badges from "./componant/badges/Badges";
import Banner from "./componant/banner/Banner";
import Navbar from "./componant/navbar/Navbar";
import Blogs from "./pages/blogs/Blogs";
import Footer from "./pages/footer/Footer";
import Future from "./pages/future/Future";
import Home from "./pages/home/Home";
import Possibility from "./pages/possibility/Possibility";
import WhatIsGPT from "./pages/whatIsGPT/WhatIsGPT";

function App() {
  return (
    <>
      <div className="aapp">
        <Navbar />
        <Home />
        <Badges />
        <WhatIsGPT />
        <Future />
        <Possibility />
        <Banner />
        <Blogs />
      </div>
      <Footer />
    </>
  );
}

export default App;
