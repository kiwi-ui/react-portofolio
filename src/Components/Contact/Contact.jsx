import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
// import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iwiboin', 'service_iwiboin', form.current, 'hytpTezDjUaOnRSQM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_options-icon' />
            <h4>Email</h4>
            <h5>yusnianggara@gmail.com</h5>
            <a href="mailto:yusnianggara@gmail.com">Send Message</a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail />
            <h4>Linkedin</h4>
            <h5>yusnianggara@gmail.com</h5>
            <a href="mailto:yusnianggara@gmail.com">Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail   }>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact