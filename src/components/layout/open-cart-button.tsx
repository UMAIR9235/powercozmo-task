"use client";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils";

function OpenCartButton({ className }: { className?: string }) {
  const { items, openCart } = useCart();
  return (
    <Button onClick={openCart} className={cn(className)}>
      <ShoppingCart />
      Cart
      {items.length > 0 && <span>{items.length}</span>}
    </Button>
  );
}

export default OpenCartButton;
