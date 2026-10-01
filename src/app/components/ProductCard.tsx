import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductCard2Props {
  product: Product;
}

export default async function ProductCard2({ product }: ProductCard2Props) {
  return (
    <Link
      href={"./Products/" + product.id}
      className="group relative block w-full h-72 rounded-2xl overflow-hidden shadow-md"
    >
      <Image
        src={product.imageUrl}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={product.name}
        className="object-cover transform-gpu group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <h2 className="absolute bottom-4 left-5 right-5 text-white font-bold text-lg uppercase tracking-wide">
        {product.name}
      </h2>
    </Link>
  );
}