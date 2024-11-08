import React from "react";
import { SocialIcons } from "../../components/Shared/Reused-Icons/Icons";
import "./footer.style.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="icon-div">
        {SocialIcons.map((icon) => (
          <a key={icon.id} href={icon.href} rel="noreferrer" target="_blank">
            {icon.icon}
          </a>
        ))}
      </div>
      <p className="cpyryt">
        Copyright &#169; Shafi 2022 - {year}. All Rights Reserved.
      </p>
    </footer>
  );
};