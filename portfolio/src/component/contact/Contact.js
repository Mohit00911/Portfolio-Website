import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'    
import {RiMessengerLine} from 'react-icons/ri'   
import {BsWhatsapp} from 'react-icons/bs'    
import emailjs from '@emailjs/browser';
import {useRef} from 'react'; 

const Contact = () => {
  const form=useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fivax1l', 'service_fivax1l', form.current, 'dqCb--k68Zz4W9RCJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
       <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>rawat009111@gmail.com</h5>
          <a href="mailto:rawat009111@gmail.com">Send a message</a>
        </article>
        <article className='contact__option'>
       <RiMessengerLine className='contact__option-icon'/>
          <h4>messanger</h4>
          <h5>Mohit Rawat</h5>
          <a href="https://m.me/profile.php?id=100069372529840">Send a message</a>
        </article>
        <article className='contact__option'>
       <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+917015317899</h5>
          <a href="https://api.whatsapp.com/send?phone+91 7015317899">Send a message</a>
        </article>
      </div>
      {/*end of contact option*/}
      <form ref={form} onsubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='your mail' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required/><textarea/>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact