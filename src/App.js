import React from "react";
import Header from "./components/Header";
import ServiceList from "./components/ServiceList";
import ContactForm from "./components/ContactForm";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <ContactForm />
      </div>
      <ServiceList />
    </div>
  );
};

export default App;
