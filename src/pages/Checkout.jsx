import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function Checkout() {
  const { cart: cartItems, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalPrice =
    cartItems?.reduce(
      (sum, item) => sum + Number(item.price) * (item.quantity || 1),
      0
    ) || 0;

  async function handlePlaceOrder() {
    if (!cartItems || cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1. Create order object
   const orderPayload = {
  userId: currentUser?.uid || "guest",
  customerEmail: currentUser?.email || "anonymous@urbanthreads.com",
  items: cartItems.map((item) => ({
    id: item.id || "",
    name: item.name || "Product",
    price: Number(item.price) || 0,
    quantity: Number(item.quantity) || 1,
  })),
  totalAmount: Number(totalPrice) || 0,
  status: "pending",
  createdAt: serverTimestamp(),
};

      // 2. Save order to Firestore 'orders' collection
      const docRef = await addDoc(collection(db, "orders"), orderPayload);

      // 3. Clear the cart
      clearCart();

      // 4. Redirect to the OrderSuccess screen
      navigate(`/order-success/${docRef.id}`);
    } catch (err) {
      console.error("Error saving order to Firestore:", err);
      setError("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="checkout-page">
      <h1>Checkout</h1>

      {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}

      <p>
        Customer: <strong>{currentUser?.email}</strong>
      </p>

      {cartItems?.map((item) => (
        <div key={item.id} className="checkout-item">
          <span>
            {item.name} × {item.quantity || 1}
          </span>
          <span>
            R{(Number(item.price) * (item.quantity || 1)).toFixed(2)}
          </span>
        </div>
      ))}

      <h2>Total: R{totalPrice.toFixed(2)}</h2>

      <button
        onClick={handlePlaceOrder}
        disabled={loading || !cartItems || cartItems.length === 0}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </section>
  );
}

export default Checkout;