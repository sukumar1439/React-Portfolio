import { useState } from "react";
import { RiCircleFill, RiRadioButtonFill } from "react-icons/ri";

import "./customcarousel.style.css";

export const Customcarousel = ({ children, array, indicator }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <section className="carousel-div">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIdx * 100}%)` }}
      >
        {children}
      </div>
      <div className="indicators">
        {array.map((item, index) =>
          indicator === "bullet" ? (
            <div
              key={index}
              onClick={() => setActiveIdx(index)}
              className="bullets"
              style={{
                background: activeIdx !== index && "none",
                marginRight: array?.length - 1 !== index && "10px",
              }}
            />
          ) : (
            <button
              key={index}
              className="indicator-buttons"
              onClick={() => setActiveIdx(index)}
            >
              {activeIdx === index ? (
                <RiCircleFill className="indicator-icon" size={"20px"} />
              ) : (
                <RiRadioButtonFill className="indicator-icon" size={"20px"} />
              )}
            </button>
          )
        )}
      </div>
    </section>
  );
};