import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-subtitle">
        Feel free to reach out for collaborations or any inquiries.
      </p>

      {/* CONTACT INFO */}
      <div className="contact-info">
        <p><strong>Email:</strong> your-email@gmail.com</p>
        <p><strong>Location:</strong> India</p>

        <div className="contact-links">
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </div>

      {/* CONTACT FORM */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
