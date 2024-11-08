import React from "react";
import "./card.style.css";

export const Card = ({ icon, title, info }) => {
  return (
    <div className="main-card">
      <div className="icon-card" children={icon} />
      <article className="card-detail">
        <h1 children={title} />
        {info}
      </article>
    </div>
  );
};