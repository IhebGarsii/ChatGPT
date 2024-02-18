import React from "react";
import "./whatIsGPT.css";

import atlassian from "../../assets/atlassian.png";
import drop from "../../assets/dropbox.png";
import google from "../../assets/google.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";

function WhatIsGPT() {
  return (
    <div className="what-is-gpt">
      <div className="logos">
        <img src={atlassian} alt="" srcset="" />
        <img src={drop} alt="" srcset="" />{" "}
        <img src={google} alt="" srcset="" />{" "}
        <img src={shopify} alt="" srcset="" />{" "}
        <img src={slack} alt="" srcset="" />
      </div>
      <div className="hero"></div>
    </div>
  );
}

export default WhatIsGPT;
