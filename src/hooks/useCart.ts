import { useContext, useMemo } from "react";
import { CartContext } from "@/context/cart.context";

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  const {
    items,
    isCartOpen,
    addToCart,
    removeFromCart,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
  } = context;

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  return {
    items,
    totalItems,
    totalPrice,
    isCartOpen,
    addToCart,
    removeFromCart,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
  };
}
