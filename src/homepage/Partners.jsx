import React from "react";
import { partners } from "../assets/Assets";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

const OurPartners = () => {
  // Limit displayed partners to 9, show "View More" if there are more than 10
  const displayedPartners = partners.slice(0, 15);
  const hasMorePartners = partners.length > 16;

  return (
    <div className="ourpartners">
      <div className="the-title">
        <div className="line"></div>
        <div>
          <h2>Trusted by hundreds of companies</h2>
        </div>
        <div className="line"></div>
      </div>
      <div className="container">
        <div className="content">
          <div className="grids">
            {displayedPartners.map((user, index) => (
              <div className="grid" key={index}>
                <img src={user.icon} id={user.title} alt={user.title} />
                <Tooltip anchorId={user.title} content={user.title} />
              </div>
            ))}

            {hasMorePartners && (
              <div className="grid view-more">
                <Link to="/partners">View All</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
