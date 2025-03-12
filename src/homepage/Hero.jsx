import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="vid-bg">
          <video src="/images/img/vid1.mp4" autoPlay muted loop></video>
        </div>
        <div className="overlay"></div>
        <div className="container">
          <div className="content">
            <div>
              <h2>
                Your clients deserve <br /> user-friendly products.
              </h2>
              <p>
                We're all about innovative software, creative designs, and
                impactful digital strategies that help businesses thrive.
                Whether you're a startup or an established brand, we connect you
                with your audience through tailored digital solutions.
              </p>
            </div>

            <div className="hero-btns">
              <Link
                to={"https://wa.link/hvn44z"}
                target="_blank"
                className="button"
              >
                <span>Can we help you?</span>
              </Link>
              <a href="#works" className="btn">
                <span>Our Latest Work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
