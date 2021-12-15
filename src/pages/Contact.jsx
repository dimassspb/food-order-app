import React from "react";
import "../styles/Contact.css"
import PizzaLeft from "../assets/fooda.jpeg";

const Contact = () => {
  return (
    <div className='contact'>
      <div
        className='leftSide'
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className='rightSide'>
        <h1>Contact us</h1>
        <form id='contact-form' method='post'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' name='name' placeholder='Enter your name' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='Enter your email' />
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            type='text'
            rows='7'
            placeholder='Enter your message'
          />
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
