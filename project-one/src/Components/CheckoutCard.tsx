import type { ClothingProduct } from "../data/data";

interface CheckOutCardProps extends ClothingProduct {
  handleRemoveFromCart: (id: number) => void;
}

export default function CheckoutCard({
  id,
  image,
  name,
  price,
  itemQuantity,
  handleRemoveFromCart,
}: CheckOutCardProps) {
  return (
    <div className="checkout-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Quantity: {itemQuantity}</p>
      <p>subtotal: ${(price * itemQuantity).toFixed(2)}</p>
      <button onClick={() => handleRemoveFromCart(id)}>remove</button>
    </div>
  );
}
