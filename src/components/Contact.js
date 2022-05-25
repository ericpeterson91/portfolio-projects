import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {

 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_1uu9i9c', e.target, 'ayyGYnL-Zut8YCKQJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return(
   
      <div className="contact-container">
        <form onSubmit={sendEmail}>
                <div className="">
                    <div className="">
                        <input type="text" className="" placeholder="Name" name="name"/>
                    </div>
                    <div className="">
                        <input type="email" className="" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="">
                        <input type="text" className="" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="">
                        <textarea className="" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="">
                        <input type="submit" className="" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    
)
}


export default Contact