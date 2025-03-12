// import React from "react";
// import Header from "../components/Header";
// import Theme from "../components/Theme";
// import { assets } from "../assets/Assets";
// import Chatbot from "../components/Chatbot";

// function PageNotFound() {
//   return (
//     <>
//       <Header />
//       <Theme />
//       <Chatbot/>

//       <div className="page-not-found">
//         <div className="vid-bg">
//           <video src={assets.bgVid} autoPlay loop muted></video>
//           <div className="overlay"></div>
//         </div>
//         <div className="container">
//           <div className="content"></div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PageNotFound;

import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaBehance,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaRobot,
} from "react-icons/fa";
import Chatbot from "../components/Chatbot";
import "../style/notfound.scss";

const PageNotFound = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="maintenance-page">
      <div className="content">
        <h1>Meyvn Agency is currently under maintenance</h1>
        <p>If you need assistance, reach out through the channels below.</p>

        {/* Social Media Links */}
        <div className="social-links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDribbble />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest />
          </a>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="tel" placeholder="Your Phone" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Chatbot Icon */}
      <button className="chatbot-btn" onClick={() => setShowChat(!showChat)}>
        <FaRobot />
      </button>

      {/* Chatbot Component */}
      {showChat && <Chatbot closeChat={() => setShowChat(false)} />}
    </div>
  );
};

export default PageNotFound;
