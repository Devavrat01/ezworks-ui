import React, { useState } from "react";
import "./ContactForm.css";
import axios from "axios";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Email is required!");
      return; 
    }

    try {
      const response = await axios.post("https://test.ezworks.ai/api", { email });

      if (response.status === 200) {
        setMessage("Form Submitted");
      }
    } catch (error) {
      if (error.response?.status === 422) {
        setMessage("Invalid email (cannot end with @ez.works)");
      } else {
        setMessage("Submission failed!");
      }
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Contact Me</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default ContactForm;
