import React from "react";
import { assets } from "../assets/Assets";
import { FaPlay } from "react-icons/fa6";

const InVideo = () => {
  const toggleStart = () => {
    window.open("https://wa.link/hvn44z", "_blank");
  };

  return (
    <>
      <div className="thevideo">
        <div className="container">
          <div className="sec-title">
            <p>From startups to industry leaders—</p>
            <h2>meyvn powers growth with innovation.</h2>
          </div>
          <div className="content">
            <div className="text">
              <p>
                We don’t just create websites, apps, or campaigns—we create
                pathways to success. Clients trust us because we embrace their
                goals as our own, offering comprehensive support from strategy
                to launch and beyond.
              </p>

              <button onClick={toggleStart}>Request a demo</button>
            </div>
            <div className="video-cont">
              <video src={assets.videoIntro} autoPlay loop muted></video>

              <div className="overlay"></div>
              <button>
                <span>
                  <FaPlay />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InVideo;
