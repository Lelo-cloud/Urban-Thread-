import { useCart } from "../context/CartContext.jsx";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="cart-item">
      <h2>{item.name}</h2>

      <p>{item.description}</p>

      <p>Price: R{Number(item.price).toFixed(2)}</p>

      <p>Quantity: {item.quantity || 1}</p>

      <p>
        Subtotal: R
        {(Number(item.price) * (item.quantity || 1)).toFixed(2)}
      </p>

      <button onClick={() => removeItem(item.id)}>
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;