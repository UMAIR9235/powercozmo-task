import { getProducts } from "@/services/product.services";
import { ProductCard } from "./product-card";

async function ProductList() {
  let products = [];

  try {
    products = await getProducts();
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center w-full">
        <p className="text-center text-muted-foreground">
          Failed to load products
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center w-full">
        <p className="text-center text-muted-foreground">No products found</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ul>
  );
}

export default ProductList;
