import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CompanyInfo } from "../assets/asset";
import {
  FaDribbble,
  FaGithub,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa6";
import { BsBehance, BsFacebook } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

import "./../style/component.scss";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="main">
        <div className="container">
          <div className="content">
            {/* Company Branding */}
            <div className="brand">
              <Link to="/" aria-label="Go to homepage">
                <img
                  src={CompanyInfo.logo_icon}
                  alt="Kampus Agency Logo"
                  loading="lazy"
                />
              </Link>
              <div>
                <h2>Kampus agency.</h2>
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
              </div>
            </div>

            {/* Footer Grids */}
            <div className="grids">
              {/* Contact */}
              <section className="links" aria-labelledby="footer-contact">
                <h3 id="footer-contact">Contact</h3>
                <ul>
                  <li>
                    <a href={`mailto:${CompanyInfo.email1}`} className="email">
                      {CompanyInfo.email1}
                    </a>
                  </li>
                  <li>
                    <address>Musanze — North, Rwanda</address>
                  </li>
                  <li>
                    <a href={`tel:${CompanyInfo.phone1}`} className="phone">
                      {CompanyInfo.phone1}
                    </a>
                  </li>
                </ul>

                <div className="socials" aria-label="Social media links">
                  {CompanyInfo.social.behance && (
                    <li>
                      <a href="#" id="behance" aria-label="Behance" role="link">
                        <BsBehance />
                      </a>
                      <Tooltip anchorId="behance" content="Behance" />
                    </li>
                  )}
                  {CompanyInfo.social.pinterest && (
                    <li>
                      <a
                        href={CompanyInfo.social.pinterest}
                        id="pin"
                        aria-label="Pinterest"
                        role="link"
                      >
                        <FaPinterestP />
                      </a>
                      <Tooltip anchorId="pin" content="Pinterest" />
                    </li>
                  )}
                  {CompanyInfo.social.instagram && (
                    <li>
                      <a
                        href={CompanyInfo.social.instagram}
                        id="ig"
                        aria-label="Instagram"
                        role="link"
                      >
                        <FaInstagram />
                      </a>
                      <Tooltip anchorId="ig" content="Instagram" />
                    </li>
                  )}
                  {CompanyInfo.social.github && (
                    <li>
                      <a
                        href={CompanyInfo.social.github}
                        id="git"
                        aria-label="GitHub"
                        role="link"
                      >
                        <FaGithub />
                      </a>
                      <Tooltip anchorId="git" content="GitHub" />
                    </li>
                  )}
                  {CompanyInfo.social.dribbble && (
                    <li>
                      <a
                        href={CompanyInfo.social.dribbble}
                        id="dribbble"
                        aria-label="Dribbble"
                        role="link"
                      >
                        <FaDribbble />
                      </a>
                      <Tooltip anchorId="dribbble" content="Dribbble" />
                    </li>
                  )}
                  {CompanyInfo.social.facebook && (
                    <li>
                      <a
                        href={CompanyInfo.social.facebook}
                        id="fb"
                        aria-label="Dribbble"
                        role="link"
                      >
                        <BsFacebook />
                      </a>
                      <Tooltip anchorId="fb" content="Facebook" />
                    </li>
                  )}
                  {CompanyInfo.social.youtube && (
                    <li>
                      <a
                        href={CompanyInfo.social.youtube}
                        id="utube"
                        aria-label="Dribbble"
                        role="link"
                      >
                        <FaDribbble />
                      </a>
                      <Tooltip anchorId="utube" content="YouTube" />
                    </li>
                  )}
                </div>
              </section>

              <section className="links" aria-labelledby="quick-links">
                <h3 id="quick-links">Quick Links</h3>
                <ul>
                  <li>
                    <NavLink to="/">
                      <span className="line" aria-hidden="true"></span>
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects">
                      <span className="line" aria-hidden="true"></span>
                      <span>Past Projects</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">
                      <span className="line" aria-hidden="true"></span>
                      <span>Services</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/resources">
                      <span className="line" aria-hidden="true"></span>
                      <span>Resources</span>
                    </NavLink>
                  </li>
                </ul>
              </section>

              <section className="links" aria-labelledby="company-links">
                <h3 id="company-links">Company</h3>
                <ul>
                  <li>
                    <NavLink to="/company/products">
                      <span className="line" aria-hidden="true"></span>
                      <span>Products</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/who-we-are">
                      <span className="line" aria-hidden="true"></span>
                      <span>Who we are</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/terms-and-conditions">
                      <span className="line" aria-hidden="true"></span>
                      <span>Terms & Conditions</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">
                      <span className="line" aria-hidden="true"></span>
                      <span>Contacts</span>
                    </NavLink>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
