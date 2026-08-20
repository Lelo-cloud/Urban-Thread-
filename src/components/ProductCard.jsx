import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const imageSrc =
    product.imageURL ||
    product.imagesURL ||
    product.imageUrl ||
    product.image ||
    "https://placehold.co/400x400?text=Urban+Threads";

  const handleAddToCart = () => {
    // 1. Add item to the CartContext and localStorage
    addItem(product);

    // 2. Direct user to the cart page
    navigate("/cart");
  };

  return (
    <div className="product-card">
      <img src={imageSrc} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      {product.category && <span className="category-tag">{product.category}</span>}
      <p>{product.description}</p>
      <p className="price">R{Number(product.price).toFixed(2)}</p>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;