import React from "react";
import "./MainContainer.style.css";

export const MainContainer = ({ children, className, noBorder, ...other }) => {
  return (
    <>
      <div className={`main-container ${className && className}`} {...other}>
        {children}
      </div>
      {!noBorder && <div className="seperator" />}
    </>
  );
};