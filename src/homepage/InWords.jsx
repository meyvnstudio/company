import React from "react";
import { in3words } from "../assets/Assets";

const InWords = () => {
  return (
    <>
      <div className="inwords">
        <div className="container">
          <div className="content">
            <div className="boxes">
              {in3words.map((word, index) => (
                <div className="word" key={index}>
                  <div className="preview">
                    {/* Check if preview is a video or an image */}
                    {word.preview.includes(".mp4") ? (
                      <video autoPlay loop muted>
                        <source src={word.preview} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={word.preview} alt={word.title} />
                    )}
                  </div>
                  <div className="details">
                    <div className="num">{word.id}</div>
                    <div className="descr">
                      <h3>{word.title}</h3>
                      <p>{word.descr} </p>
                    </div>
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

export default InWords;
