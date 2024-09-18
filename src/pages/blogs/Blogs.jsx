import React from "react";

import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

import "./blogs.css";
function Blogs() {
  return (
    <div className="blog">
      <h1>
        A lot is happening,
        <br /> We are blogging about it.
      </h1>
      <div className="blogs-container">
        <div className="firstB">
          <img src={blog1} alt="" width={420} height={280} />
          <div className="desc">
            <div className="">
              <span>22 sep,2021</span>
              <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            </div>
            <span>Read Full Article</span>
          </div>
        </div>
        <div className="blog-right">
          <div className="secondB">
            <img src={blog2} alt="" width={327} height={130} />
            <div className="desc-right">
              <div className="">
                <span>22 sep,2021</span>
                <h2 className="desc-right-title">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h2>
              </div>
              <span>Read Full Article</span>
            </div>
          </div>
          <div className="secondB">
            <img src={blog3} alt="" width={327} height={130} />
            <div className="desc-right">
              <div className="">
                <span>22 sep,2021</span>
                <h2 className="desc-right-title">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h2>
              </div>
              <span>Read Full Article</span>
            </div>
          </div>
          <div className="secondB">
            <img src={blog4} alt="" width={327} height={130} />
            <div className="desc-right">
              <div className="">
                <span>22 sep,2021</span>
                <h2 className="desc-right-title">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h2>
              </div>
              <span>Read Full Article</span>
            </div>
          </div>
          <div className="secondB">
            <img src={blog5} alt="" width={327} height={130} />
            <div className="desc-right">
              <div className="">
                <span>22 sep,2021</span>
                <h2 className="desc-right-title">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h2>
              </div>
              <span>Read Full Article</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
