import type { ClothingProduct } from "../data/data";
export default function CheckoutCard({
  image,
  name,
  price,
  quantity,
}: ClothingProduct) {
  return (
    <div className="checkout-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{quantity}</p>
      <p>subtotal: ${(price * quantity).toFixed(2)}</p>
    </div>
  );
}
