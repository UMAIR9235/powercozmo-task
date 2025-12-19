import { Product } from "@/types/product.types";

import { ProductCard } from "./product-card";

async function ProductList() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  w-full">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default ProductList;
