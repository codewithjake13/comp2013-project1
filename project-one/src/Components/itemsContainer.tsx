import ItemCard from "./itemCard";
import type { ClothingProduct } from "../data/data";
interface ItemsContainerProps {
  products: ClothingProduct[];
}
export default function ItemsContainerProps({ products }: ItemsContainerProps) {
  return (
    <div className="items-container">
      {products.map((product) => (
        <ItemCard key={product.id} {...product} />
      ))}
    </div>
  );
}
