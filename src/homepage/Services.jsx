import React from "react";
import { homeService } from "../assets/Assets";
import { SiInfracost } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward, IoMdArrowRoundForward } from "react-icons/io";

const ServiceSec = () => {

  const toggleStart = () => {
    window.open("https://wa.link/hvn44z", "_blank");
};



  return (
    <>
      <div className="services" id="services">
        <div className="container">
          <div className="content">
            <div className="sec-title">
              <p>We Craft Digital Experiences That Drive Results</p>
              <h3>
                From web development to branding, we transform ideas into
                powerful digital solutions. Let’s build something extraordinary
                together.
              </h3>
            </div>
            <div className="boxes">
              {homeService.map((service, index) => (
                <div className="box" key={index}>
                  <div>
                    <span className="icon">
                      {React.createElement(service.icon)}
                    </span>

                    <div>
                      <span className="subtitle">{service.subtitle}</span>
                      <h2>{service.title}</h2>
                      <p>{service.descr}</p>
                    </div>
                    <Link 
                    // to={service.url}
                    onClick={toggleStart}
                    >
                      <span>Learn more</span>
                      <span>
                        <IoIosArrowRoundForward />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSec;
