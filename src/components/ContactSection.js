import React from "react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Have questions or feedback? We'd love to hear from you.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
