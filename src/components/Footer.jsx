import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <h3 className="footer-logo">Urban Threads</h3>
          <p className="footer-desc">
            Trendy casual streetwear for young adults. Oversized fits, premium
            heavyweight cotton, and timeless street style.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/shop">Hoodies</Link></li>
            <li><Link to="/shop">T-shirts</Link></li>
            <li><Link to="/shop">Sneakers</Link></li>
            <li><Link to="/shop">Accessories</Link></li>
          </ul>
        </div>

        {/* Support & Account */}
        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/signup">Register</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Urban Threads. All rights reserved.</p>
        <p className="footer-credit">Built with React & Firebase</p>
      </div>
    </footer>
  );
}

export default Footer;