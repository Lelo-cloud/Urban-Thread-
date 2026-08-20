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
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <h2>Total: R{total.toFixed(2)}</h2>
        </>
      )}
    </section>
  );
}

export default Cart;