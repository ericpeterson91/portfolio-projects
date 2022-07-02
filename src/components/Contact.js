import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const nameChange = (e) => {
    setValues({ ...values, name: e.target.value });
  };

  const subjectChange = (e) => {
    setValues({ ...values, subject: e.target.value });
  };

  const emailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const messageChange = (e) => {
    setValues({ ...values, message: e.target.value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (values.name && values.subject && values.email && values.message) {
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
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <h2>Send Eric an email:</h2>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label>Your Name</label>
          <input
            disabled={submitted}
            onChange={nameChange}
            value={values.name}
            type="text"
            name="name"
          />
          <label>Subject</label>
          <input
            disabled={submitted}
            onChange={subjectChange}
            value={values.subject}
            type="text"
            name="subject"
          />
          <label>Your Email Address</label>
          <input
            disabled={submitted}
            onChange={emailChange}
            value={values.email}
            type="email"
            name="email"
          />
          <label>Message</label>
          <textarea
            disabled={submitted}
            onChange={messageChange}
            value={values.message}
            name="message"
          />
          <input className="submit" type="submit" value="Send" />

          {submitted ? (
            <div className="success">Email sent succesfully!</div>
          ) : null}
        </form>
      </div>
      <div className="icon-container">
        <h1>Links:</h1>
        <div className="icons">
          <a
            target="_blank"
            href="https://github.com/ericpeterson91?tab=repositories"
          >
            <FaGithub size={60} className="github" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/eric-peterson-110a62162/"
          >
            <FaLinkedin size={60} className="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
