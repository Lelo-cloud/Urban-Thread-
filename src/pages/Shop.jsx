import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../firebase/productService";

function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const productData = await getProducts();
        console.log("Products from Firebase:", productData);
        setProducts(productData);
      } catch (error) {
        console.error("Firebase error:", error);
        setError("Products could not be loaded.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="shop-page">
      <h1>Shop Urban Threads</h1>

      <div className="category-buttons">
        {["All", "Hoodies", "T-shirts", "Sneakers", "Accessories"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => {
            console.log("Rendering product card:", product);
            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Shop;