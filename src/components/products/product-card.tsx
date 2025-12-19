"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Product } from "@/types/product.types";
import { useCart } from "@/hooks/useCart";

export const ProductCard = ({
  description,
  id,
  image,
  price,
  title,
}: Product) => {
  const { addToCart } = useCart();
  return (
    <div
      key={id}
      className="shadow flex flex-col bg-card rounded-lg overflow-hidden border border-border"
    >
      <div className="relative w-full aspect-video mb-4">
        <Image src={image} alt="" className="object-cover" fill />
      </div>
      <div className="px-4 space-y-2 flex-1">
        <h2
          title={title}
          className="font-semibold truncate text-card-foreground"
        >
          {title}
        </h2>
        <p
          title={description}
          className="text-sm line-clamp-4 text-muted-foreground"
        >
          {description}
        </p>
      </div>
      <div className="flex justify-between w-full p-4 gap-x-2">
        <span className="text-xl font-semibold">${price}</span>
        <Button asChild variant={"secondary"} className="ml-auto">
          <Link href={`/products/${id}`}>View Details</Link>
        </Button>
        <Button
          onClick={() => addToCart({ id, title, price, image })}
          className=""
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
