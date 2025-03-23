import React from "react";
import ServiceCard from "./ServiceCard";
import "./ServiceList.css";

const services = [
  { title: "Presentation Design", icon: "📊", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
  { title: "Audio - Visual Production", icon: "🎥", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
  { title: "Translation Services", icon: "🔤", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
  { title: "Graphic Design", icon: "🎨", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
  { title: "Research & Analytics", icon: "🔍", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
  { title: "Data Processing", icon: "📑", description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet" },
];

const ServiceList = () => {
  return (
  
      <div className="service-list">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      
  );
};

export default ServiceList;
