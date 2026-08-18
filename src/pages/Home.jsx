import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-container">
      {/* 1. Hero Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Streetwear Redefined</h1>
          <p>Discover trendy casual streetwear for young adults.</p>
          <Link to="/shop" className="btn-hero">
            Shop Now
          </Link>
        </div>
      </section>

      {/* 2. Categories Showcase (Rubric Requirement) */}
      <section className="category-showcase">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <Link to="/shop" className="category-card hoodie-bg">
            <div className="category-overlay">
              <h3>Hoodies</h3>
              <span>View Collection &rarr;</span>
            </div>
          </Link>

          <Link to="/shop" className="category-card tshirt-bg">
            <div className="category-overlay">
              <h3>T-shirts</h3>
              <span>View Collection &rarr;</span>
            </div>
          </Link>

          <Link to="/shop" className="category-card sneaker-bg">
            <div className="category-overlay">
              <h3>Sneakers</h3>
              <span>View Collection &rarr;</span>
            </div>
          </Link>

          <Link to="/shop" className="category-card accessory-bg">
            <div className="category-overlay">
              <h3>Accessories</h3>
              <span>View Collection &rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Brand Highlights / Perks */}
      <section className="perks-grid">
        <div className="perk-card">
          <h4>🚚 Fast Delivery</h4>
          <p>Nationwide shipping directly to your door.</p>
        </div>
        <div className="perk-card">
          <h4>🔥 Premium Streetwear</h4>
          <p>Heavyweight cotton and high-grade quality.</p>
        </div>
        <div className="perk-card">
          <h4>🔒 Secure Checkout</h4>
          <p>Encrypted transactions & Firebase authentication.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;