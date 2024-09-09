import React from 'react';
import '../css/contact.css';
import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p>If you have any questions or need further information, feel free to reach out to us through the following methods:</p>

        <div className="contact-columns">
          {/* Column 1: Social Media and Email */}
          <div className="contact-column">
            <h3>CONNECT WITH US</h3>
            <ul>
              <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FaFacebookF /> Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /> LinkedIn</a></li>
              <li><a href="mailto:info@nexonautomation.com"><FaEnvelope /> Email Us</a></li>
            </ul>
          </div>

          {/* Column 2: Location */}
          <div className="contact-column">
            <h3>LOCATIONS</h3>
            <div className="location">
              <h4><FaMapMarkerAlt /> México</h4>
              <p>Blvd. Jaime Benavides 1039<br/>Villas del Nogalar<br/>Ramos Arizpe, Coah 25900</p>
            </div>
            <div className="location">
              <h4><FaMapMarkerAlt /> USA</h4>
              <p>1701 W. Northwest Hwy<br/>Suite 100<br/>Grapevine, Tx 76051</p>
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="contact-column">
            <h3>CONTACT DETAILS</h3>
            <div className="contact-details">
              <div className="contact-group">
                <h4>México</h4>
                <p><FaPhoneAlt /> Ventas: +52 (844) 365 5079<br/><FaPhoneAlt /> Ingeniería y Manufactura: +52 (844) 488 5060 y 61<br/><FaPhoneAlt /> Administración: +52 (844) 430 9412</p>
              </div>
              <div className="contact-group">
                <h4>USA</h4>
                <p><FaPhoneAlt /> Ventas: +1 (817) 329 8056</p>
              </div>
              <div className="contact-group">
                <h4>Email</h4>
                <p><FaEnvelope /> <a href="mailto:info@nexonautomation.com" className="email-link">info@nexonautomation.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
