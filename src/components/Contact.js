import React, { useRef } from "react";
import { FaLinkedin, FaGithub} from 'react-icons/fa'
import emailjs from "@emailjs/browser";

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
    <div className='contact-container'>
      <form className='form' ref={form} onSubmit={sendEmail}>
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
      <div className="icons">
        <a
          target="_blank"
          href="https://github.com/ericpeterson91?tab=repositories"
        >
          <FaGithub size={25} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/eric-peterson-110a62162/"
        >
          <FaLinkedin size={25} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
