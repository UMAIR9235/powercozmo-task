"use client";

import { useCart } from "@/hooks/useCart";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export default function CartModal() {
  const { items, isCartOpen, closeCart, totalPrice, clearCart } = useCart();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isCartOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isCartOpen && dialog.open) {
      dialog.close();
    }
  }, [isCartOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={closeCart}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1000 p-0 w-full h-full lg:w-1/2 lg:h-1/2 bg-white rounded-lg"
    >
      <div className="relative p-4 flex flex-col h-full">
        <Button
          variant={"outline"}
          className="absolute top-4 right-4"
          onClick={closeCart}
        >
          <X />
        </Button>

        <h2 className="text-xl font-semibold">Your Cart</h2>

        {items.length === 0 ? (
          <div className="flex-1 w-full h-full flex items-center justify-center">
            Cart is empty
          </div>
        ) : (
          <ul className="p-6 flex-1 space-y-2 max-h-full overflow-auto">
            {items.map((item) => (
              <li
                key={item.id}
                className="p-4 w-full flex justify-between bg-secondary rounded-lg"
              >
                <span className="text-xs lg:text-base">{item.title}</span>
                <span className="text-xs lg:text-base font-medium">
                  ₹{item.price}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex w-full justify-between items-center  p-6 ">
          <span className=" font-bold">Total: ₹{totalPrice}</span>
          <Button onClick={clearCart} variant={"secondary"}>
            Clear Cart
          </Button>
        </div>
      </div>
    </dialog>
  );
}
