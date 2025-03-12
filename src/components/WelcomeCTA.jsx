import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const WelcomeCTA = () => {
  return (
    <>
      <div className="welcome-cta">
        <div className="content">
          <div className="cta-title">
            <div>
              <h2>Here's $500 for your personal travel</h2>
              <p>
                Earn big for your next vacation by getting your company on Meyvn
              </p>
            </div>
            <div>
              <button className="close">
                <IoCloseOutline />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeCTA;
