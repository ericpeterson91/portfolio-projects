import React, { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m4dbcui",
        "template_1uu9i9c",
        form.current,
        "ayyGYnL-Zut8YCKQJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <h2>Send Eric an email below:</h2>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Subject</label>
          <input type="text" name="subject" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="icon-container">
        <h2>Links:</h2>
        <div className="icons">
        <a
          target="_blank"
          href="https://github.com/ericpeterson91?tab=repositories"
        >
          <FaGithub size={45} className='github'/>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/eric-peterson-110a62162/"
        >
          <FaLinkedin size={45} className='linkedin' />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
