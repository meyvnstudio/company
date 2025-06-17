import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "./../style/component.scss";
import { CompanyInfo } from "../assets/asset";

const Header = () => {
  return (
    <header className="header" role="banner">
      {/* Announcement Bar */}
      <div
        className="top_navbar"
        role="complementary"
        aria-label="Course Announcement"
      >
        <div className="container">
          <div className="content">
            <p>
              <span className="big">
                Next cohort for our courses starting soon.
              </span>
              <Link
                to="/courses"
                className="phoned"
                aria-label="Register for courses"
              >
                Register for our courses..
              </Link>
              <Link
                to="/courses"
                className="big"
                aria-label="Learn more about courses"
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="container">
          <div className="content">
            {/* Logo */}
            <Link to="/" className="logo" aria-label="Homepage">
              <h1>{CompanyInfo.brand_aka}.</h1>
            </Link>

            {/* Nav Links */}
            <ul>
              <li>
                <NavLink to="/company/products" aria-label="View our products">
                  <span>Product</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" aria-label="Explore our services">
                  <span>Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/case-studies" aria-label="Read our case studies">
                  <span>Case Study</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/who-we-are" aria-label="Learn about our company">
                  <span>Company</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/resources" aria-label="Browse resources">
                  <span>Resources</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" aria-label="Contact us">
                  <span>Contacts</span>
                </NavLink>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="cta">
              <Link to="/contact" className="button" aria-label="Hire us">
                <span>Hire us</span>
                <span>
                  <IoIosArrowRoundForward />
                </span>
              </Link>
            </div>

            {/* Menu Toggle (Mobile) */}
            <div className="menu">
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded="false"
                aria-controls="mobile-menu"
              >
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
