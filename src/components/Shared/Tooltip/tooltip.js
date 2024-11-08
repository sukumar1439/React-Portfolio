import React, { useState } from "react";
import "./tooltip.style.css";

export const Tooltip = ({ children, text, href, newClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {href ? <a href={href}>{children}</a> : children}
      {isVisible && <div className={`tooltip ${newClass}`}>{text}</div>}
    </div>
  );
};