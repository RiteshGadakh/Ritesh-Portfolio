import React, { useRef } from 'react';
import '../CSS/style.css';
import whatsapp from '../assets/whatsapp.png';
import emailjs from '@emailjs/browser';

const FormDetails = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_owsut9a', 'template_0jo8zgh', form.current, { publicKey: 'QNWwcUML3mVRC86vW', })
      .then(() => {
          console.log('SUCCESS!');
          alert('Email sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error');
        },
      );
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Your form submission logic here
  // };

  return (
    <section id="form-details">
      <form ref={form} onSubmit={sendEmail}>

        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your Name" name='your_name' />
        <input type="text" placeholder="E-mail id" name='your_email' />
        <input type="number" placeholder="Mob_Number" name='your_number' />
        <textarea cols="30" rows="10" placeholder="Message" name='message'></textarea>
        <button type="Submit" className="normal">Submit</button>
      </form>
      <a href="https://api.whatsapp.com/send?phone=7030420411" target="_blank" rel="noopener noreferrer" className="whatsapp-button" >
        <img src={whatsapp} alt="WhatsApp Logo" />
      </a>
    </section>
  );
};

export default FormDetails;
