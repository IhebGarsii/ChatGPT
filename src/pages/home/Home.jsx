import React from "react";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <div className="left-home">
        <h1 className="home-title">
          Lets Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="home-paragraph">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="input-container">
          <input type="text" className="home-inupt" placeholder="Your Email Address" />
          <button>Get Started</button>
        </div>
      </div>
      <div className="right-home"></div>
    </div>
  );
}

export default Home;
