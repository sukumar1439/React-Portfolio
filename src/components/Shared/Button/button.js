import React from "react";
import "./button.style.css";

export const Button = ({
  children,
  className,
  icon,
  redirectURL,
  download,
  target,
  ...others
}) => {
  return (
    <div>
      {redirectURL ? (
        <a href={redirectURL} download={download} target={target}>
          <button className={`btn-cv ${className}`} {...others}>
            {children} {icon && icon}
          </button>
        </a>
      ) : (
        <button className={`btn-cv ${className}`} {...others}>
          {children} {icon && icon}
        </button>
      )}
    </div>
  );
};