import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuSwatchBook } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";

import "./../style/component.scss";
import { headerSliderTags, navLinks } from "../assets/Assets";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();

  const toggleStart = () => {
    window.location.href = "https://wa.link/hvn44z";
  };

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < headerSliderTags[index].length) {
        setText((prev) => prev + headerSliderTags[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % headerSliderTags.length);
      } else if (!isDeleting && charIndex === headerSliderTags[index].length) {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <header className="header">
      {/* Top Banner */}
      <div className="top-nav">
        <div className="container">
          <div className="content">
            <div className="top-typer">
              <span className="icon">
                <LuSwatchBook />
              </span>
              <span className="text">{text}</span>
            </div>
            <div>
              <a href="#services" id="learn-more">
                Learn more
              </a>
              <Tooltip anchorId="learn-more" content="Get to know more" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="content">
            <Link to="/" className="logo">
              <h2>meyvn</h2>
            </Link>

            {/* <ul className="navlinks">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    activeDropdown === index ? "open" : ""
                  }`}
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.sublinks ? (
                    <button className="nav-btn">{item.name}</button>
                  ) : (
                    <Link to={item.link} className="nav-link">
                      {item.name}
                    </Link>
                  )}

                  {item.sublinks && (
                    <div className="nav-dropdown">
                      <ul>
                        {item.sublinks.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                              className="sub-link"
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul> */}

            {/* Start Project Button */}
            <div className="nav-button">
              <button onClick={toggleStart}>
                <span>Start a Project</span>
                <span>
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
