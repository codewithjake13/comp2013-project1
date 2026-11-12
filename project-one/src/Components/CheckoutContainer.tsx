import CheckoutCard from "./CheckoutCard";
import type { ClothingProduct } from "../data/data";

interface CheckoutContainerProps {
  cartItems: ClothingProduct[];
}
export default function CheckoutContainer({
  cartItems,
}: CheckoutContainerProps) {
  return (
    <div className="checkout-container">
      {cartItems.map((cartitem) => (
        <CheckoutCard key={cartitem.id} {...cartitem} />
      ))}
    </div>
  );
}
