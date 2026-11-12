import CheckoutCard from "./CheckoutCard";
import type { ClothingProduct } from "../data/data";

interface CheckoutContainerProps {
  cartItems: ClothingProduct[];
}

export default function CheckoutContainer({
  cartItems,
}: CheckoutContainerProps) {
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.itemQuantity,
    0,
  );

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cartItems.length === 0 && <p>Cart Empty</p>}
      {cartItems.map((cartitem) => (
        <CheckoutCard key={cartitem.id} {...cartitem} />
      ))}
      <h3>Grand total: ${grandTotal.toFixed(2)}</h3>
    </div>
  );
}
