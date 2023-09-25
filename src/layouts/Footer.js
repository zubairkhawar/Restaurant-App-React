import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Contact Us</h3>
        <ul>
          <li>Address: Dha Lahore </li>
          <li>Email: abc@littlelemon.com</li>
          <li>Phone: 0321 321 1177</li>
        </ul>
      </nav>
      <nav>
        <h3>Opening hours</h3>
        <ul>
          <li>Monday - Friday: 9:00 - 22:00</li>
          <li>Saturday - Sunday: 10:00 - 24:00</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;