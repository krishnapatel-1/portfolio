import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Krishna Patel. All rights reserved.</p>

      <div className="footer-links">
        <a href="https://github.com" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}
