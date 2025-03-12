import React from "react";
import { assets, CTAs } from "../assets/Assets";
import { Link } from "react-router-dom";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { CiBoxes } from "react-icons/ci";

const Action = () => {
  const toggleStart = () => {
    window.open("https://wa.link/hvn44z", "_blank");
  };

  return (
    <>
      <div className="home-actions">
        <div className="container">
          <div className="sec-title">
            <p>
              Expert services, pro training & useful resources — everything you
              need to grow your brand.
            </p>
            <h2>Industry—Leading Solutions, Personalized for Your Success</h2>
          </div>

          <div className="content">
            <div className="service-box cta-box">
              <div className="text">
                <span className="icon">
                  <FaWandMagicSparkles />
                </span>
                <h3>{CTAs.home.contact.title} </h3>
                <p>{CTAs.home.contact.description}</p>
                <Link
                  onClick={toggleStart}
                  //  to={CTAs.home.contact.button.url}
                >
                  {CTAs.home.contact.button.text}
                </Link>
              </div>
            </div>

            <div className="learn-box cta-box">
              <div className="text">
                <span className="icon">
                  <PiStudent />
                </span>
                <h3>{CTAs.home.academy.title} </h3>
                <p>{CTAs.home.academy.description}</p>
                <Link
                  onClick={toggleStart}
                  // to={CTAs.home.academy.button.url}
                >
                  {CTAs.home.academy.button.text}
                </Link>
              </div>
            </div>

            <div className="resource-box cta-box">
              <div className="text">
                <span className="icon">
                  <CiBoxes />
                </span>
                <h3>{CTAs.home.resources.title} </h3>
                <p>{CTAs.home.resources.description}</p>
                <Link
                  onClick={toggleStart}
                  // to={CTAs.home.resources.button.url}
                >
                  {CTAs.home.resources.button.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Action;
