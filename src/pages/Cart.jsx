import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";

function Cart() {
  const { cart } = useCart();

  console.log("Cart page render - cart:", cart);

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * (item.quantity || 1),
    0
  );

  return (
    <section className="cart-page">
      <h1>Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="btn-secondary">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <h2>Total: R{total.toFixed(2)}</h2>

          <div className="cart-actions">
            <Link to="/checkout" className="btn-primary checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;