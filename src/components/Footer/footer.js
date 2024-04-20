import React from 'react';
import '../CSS/style.css';

function Footer() {
  return (
    <footer>
      <div className="follow">
        <h4>Follow Us</h4>
        <div className="icon">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
          <a href="https://www.facebook.com/ritesh.gadakh.90"><i className="fab fa-facebook" style={{ color: 'blue' }}></i></a>
          <a href="https://www.instagram.com/ritesh.gadakh/"><i className="fab fa-instagram" style={{ color: 'rgb(195, 0, 255)' }}></i></a>
          <a href="www.linkedin.com/in/ritesh-gadakh"><i className="fab fa-linkedin" style={{ color: 'blue' }}></i></a>
          <a href="https://github.com/RiteshGadakh"><i className="fab fa-github" style={{ color: 'black' }}></i></a>
          <a href="https://mail.google.com/mail/u/0/compose=new"><i className="fab fa-google" style={{ color: 'red' }}></i></a>
          <a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter" style={{ color: 'blue' }}></i></a>
        </div>
      </div>
      <p>Copyright &#169; 2024 Ritesh Gadakh. All Rights Reserved. &#9829;</p>
    </footer>
  );
}

export default Footer;
