import { Product } from "@/types/product.types";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;

  // fetch post information
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.title,
    description: product.description,
  };
}

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product: Product = await fetch(
    `https://fakestoreapi.com/products/${id}`
  ).then((res) => res.json());

  return (
    <div className="py-10 space-y-8 min-h-screen">
      <div className="aspect-video w-full relative border">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6 p-6">
        <h1 className="text-4xl font-semibold text-foreground">
          {product.title}
        </h1>
        <p className="text-muted-foreground">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductPage;
