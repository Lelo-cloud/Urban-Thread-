import { useCart } from "../context/CartContext.jsx";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  // Safely grab whichever field name is saved in your Firestore document
  const imageSrc =
    item.imageURL ||
    item.imagesURL ||
    item.imageUrl ||
    item.image ||
    "https://placehold.co/100x100?text=Product";

  return (
    <div className="cart-item">
      {/* 🖼️ Product Picture */}
      <img src={imageSrc} alt={item.name} className="cart-item-thumb" />

      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>Qty: {item.quantity || 1}</p>
        <p className="item-price">
          R{(Number(item.price) * (item.quantity || 1)).toFixed(2)}
        </p>
      </div>

      <button onClick={() => removeItem(item.id)} className="btn-remove">
        Remove
      </button>
    </div>
  );
};

export default CartItem;