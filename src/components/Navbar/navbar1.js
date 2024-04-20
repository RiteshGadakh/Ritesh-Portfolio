import React from 'react';
import '../CSS/style.css';
function ContactSection() {
  return (
      <nav id="desktop-nav" className="desktop-nav2">
        <div>
          <ul className="nav-links2">
            <li className="fas fa-mobile-alt" style={{ color: 'rgba(101, 10, 101, 0.805)' }}>+91 7030420411</li>
            <span></span><span></span><span></span><span></span>
            <li className="fas fa-envelope" style={{ color: 'rgb(128, 18, 77)' }}>riteshgadakh24@gmail.com</li>
            <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            <a href="https://www.facebook.com/ritesh.gadakh.90"><li className="fab fa-facebook" style={{ color: 'blue' }}></li></a>
            <a href="https://www.instagram.com/ritesh.gadakh/"><li className="fab fa-instagram" style={{ color: 'rgb(195, 0, 255)' }}></li></a>
            <a href="https://github.com/RiteshGadakh"><li className="fab fa-github" style={{ color: 'black'  }}></li></a>
            <a href="www.linkedin.com/in/ritesh-gadakh"><li className="fab fa-linkedin" style={{ color: 'blue' }}></li></a>
            <a href="https://mail.google.com/mail/u/0/compose=new"><li className="fab fa-google" style={{ color: 'red' }}></li></a>
          </ul>
        </div>
      </nav>
  );
}

export default ContactSection;
