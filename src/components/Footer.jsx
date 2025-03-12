import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { hotLinks, socialLinks } from "../assets/Assets";
import Theme from "./Theme";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  const year = new Date().getFullYear();

  const toggleStart = () => {
    window.open("https://wa.link/hvn44z", "_blank");
  };

  return (
    <>
      <div className="footer">
        <div className="footer-cont">
          <div className="left">
            <div className="container">
              <div className="content">
                <div>
                  <p>Entrust Design to Professionals</p>
                  <h2>
                    Allow us to establish a lasting reputation for your
                    business.
                  </h2>
                  <div>
                    <Link className="button" onClick={toggleStart}>
                      <span>Get the Offer</span>
                      <span className="icon">
                        <IoIosArrowRoundForward />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="overlay"></div>
            <div className="container">
              <div className="content">
                <div className="grids">
                  <div className="grid">
                    <h2>Hot links</h2>
                    {hotLinks.map((link, index) => (
                      <>
                        <li key={index}>
                          <Link id={link.id} to={link.url}>
                            {link.title}
                          </Link>
                        </li>
                        <Tooltip anchorId={link.id} content={link.title} />
                      </>
                    ))}
                  </div>
                  <div className="grid">
                    <h2>Say hello 👋🏽</h2>
                    <ul>
                      <li>
                        <Link to="mailto:meyvnagency@gmail.com">
                          meyvnagency@gmail.com
                        </Link>
                      </li>
                      <li>
                        <Link to="tel:250786969572">250 78 6969 572</Link>
                      </li>
                    </ul>
                    <div className="socials">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon; // Extract the icon component
                        return (
                          <>
                            <Link
                              key={index}
                              to={social.url}
                              target="_blank"
                              id={social.title}
                              rel="noopener noreferrer"
                            >
                              <IconComponent />{" "}
                              {/* Render the icon component */}
                            </Link>
                            <Tooltip
                              anchorId={social.title}
                              content={social.title}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="copy">
                  <ul>
                    <li>
                      <Link>Contact us</Link>
                    </li>
                    <li>
                      <Link>Privacy Policy</Link>
                    </li>
                  </ul>
                  <p>&copy; meyvnagency {year}. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
