import React from "react";
import "./badges.css";
import atlassian from "../../assets/atlassian.png";
import drop from "../../assets/dropbox.png";
import google from "../../assets/google.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";
function Badges() {
  return (
    <div>
      <div className="logos">
        <img src={atlassian} alt="" srcset="" />
        <img src={drop} alt="" srcset="" />{" "}
        <img src={google} alt="" srcset="" />{" "}
        <img src={shopify} alt="" srcset="" />{" "}
        <img src={slack} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Badges;
