import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-col">
            <h4>AnimeWear</h4>
            <p>Timeless fashion crafted with elegance and quality.</p>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/new-arrivals">New Arrivals</Link>
            <Link to="/best-sellers">Best Sellers</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/returns">Returns</Link>
            <Link to="/faq">FAQs</Link>
          </div>
        </div>

        <div className="footer-bottom">© {new Date().getFullYear()} AnimeWear. All rights reserved.</div>
      </footer>
    </>
  );
}
