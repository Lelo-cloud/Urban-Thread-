import { useParams, Link } from "react-router-dom";

function OrderSuccess() {
  const { orderId } = useParams();

  return (
    <section className="order-success-page">
      <div className="success-card">
        <div className="success-icon">🎉</div>
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been placed successfully.</p>

        <div className="order-details-box">
          <p>
            <strong>Order Reference ID:</strong>
          </p>
          <code className="order-id">{orderId}</code>
        </div>

        <p className="subtext">
          We’ve recorded your order details and our team is getting your items ready.
        </p>

        <div className="action-buttons">
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OrderSuccess;