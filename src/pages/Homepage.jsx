import React from "react";

import "./../style/home.scss";
import Hero from "../homepage/Hero";
import { assets } from "../assets/Assets";
import OurPartners from "../homepage/Partners";
import ServiceSec from "../homepage/Services";
import InWords from "../homepage/InWords";
import Projects from "../homepage/Projects";
import Action from "../homepage/Action";
import InVideo from "../homepage/InVideo";
import Homend from "../homepage/Homend";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <Hero />
        {/* <div className="img-bg">
          <img src={assets.imigongo} alt="" />
        </div> */}
        <OurPartners />
        <ServiceSec />
        <InWords />
        <Projects />
        <Action />
        <InVideo />
        {/* <Homend /> */}
      </div>
    </>
  );
}

export default Homepage;
