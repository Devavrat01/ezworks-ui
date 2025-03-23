import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <span className="title">
        <span className="icon">{icon}</span> {title}
      </span>
      <p className="description">{description}</p>
    </div>
  );
};

export default ServiceCard;
