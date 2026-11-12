import { useState } from "react";
import NavBar from "./NavBar";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./itemsContainer";
import { products, type ClothingProduct } from "../data/data";

export interface ItemCardFunctions extends ClothingProduct {
  handleQuantityChange: (id: number, delta: number) => void;
  handleOutOfStock: (quantity: number) => boolean;
  handleAddToCart: (id: number) => void;
}

export default function ThriftHappens() {
  const [items, setItems] = useState<ClothingProduct[]>(products);
  const [cartItems, setCart] = useState<ClothingProduct[]>([]);

  function handleQuantityChange(id: number, delta: number) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              itemQuantity: Math.min(
                item.quantity,
                Math.max(0, item.itemQuantity + delta),
              ),
            }
          : item,
      ),
    );
  }

  function handleOutOfStock(quantity: number) {
    return quantity === 0;
  }

  function handleAddToCart(id: number) {
    const product = items.find((item) => item.id === id);

    if (!product || product.itemQuantity === 0) {
      return;
    }
    const amount = product.itemQuantity;

    setCart((prevCart) => {
      const alreadyInCart = prevCart.find((cartItem) => cartItem.id === id);

      if (alreadyInCart) {
        return prevCart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, itemQuantity: cartItem.itemQuantity + amount }
            : cartItem,
        );
      }
      return [...prevCart, { ...product, itemQuantity: amount }];
    });

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - amount, itemQuantity: 0 }
          : item,
      ),
    );
  }

  return (
    <div>
      <NavBar />
      <CheckoutContainer cartItems={cartItems} />

      <ItemsContainer
        products={items}
        handleQuantityChange={handleQuantityChange}
        handleOutOfStock={handleOutOfStock}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
}
