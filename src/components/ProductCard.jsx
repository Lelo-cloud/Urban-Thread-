import { useCart } from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  // Safely grab whichever field name is in Firestore, or use a fallback placeholder [cite: 388, 398]
  const imageSrc =
    product.imageURL ||
    product.imageUrl ||
    product.image ||
    "https://placehold.co/400x400?text=Urban+Threads";

  return (
    <div className="product-card">
      {/* 🖼️ Product Image Element */}
      <img
        src={imageSrc}
        alt={product.name}
        className="product-image"
      />

      <h2>{product.name}</h2>
      {product.category && <span className="category-tag">{product.category}</span>}
      <p>{product.description}</p>
      <p className="price">R{Number(product.price).toFixed(2)}</p>

      <button
        onClick={() => {
          console.log("Add to Cart clicked:", product);
          addItem(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;