import type { ClothingProduct } from "../data/data";
export default function CheckoutCard({
  image,
  name,
  price,
  itemQuantity,
}: ClothingProduct) {
  return (
    <div className="checkout-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{itemQuantity}</p>
      <p>subtotal: ${(price * itemQuantity).toFixed(2)}</p>
    </div>
  );
}
