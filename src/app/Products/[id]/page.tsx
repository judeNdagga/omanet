import PriceTag from "@/app/components/PriceTag";
import Image from "next/image";
import { incrementProductQuantity } from "./actions";
import prisma from "@/app/lib/prisma";
import { cache } from "react";
import ContactExpertsButton from "@/app/components/ContactExpertsButton";
import AddToCartButton from "./AddToCartButton";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
});

export async function generateMetadata({ params: { id } }: ProductPageProps) {
  const product = await getProduct(id);
  return {
    title: product ? `${product.name} - OMANET` : "Product - OMANET",
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <div className="overflow-hidden bg-white">
      {/* Product detail */}
      <section className="pt-36 pb-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <Image
                src={product!.imageUrl}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt={product!.name}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 lg:pt-4">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-green-800 border border-green-700 rounded-full px-4 py-1.5 mb-4">
              Organic Product
            </span>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {product!.name}
            </h1>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {product!.description}
            </p>

            <div className="border-t border-gray-100 pt-6 mb-6">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Price</p>
              <div className="text-2xl font-bold text-gray-900">
                <PriceTag price={product!.price} className="" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <AddToCartButton
                productId={product!.id}
                incrementProductQuantity={incrementProductQuantity}
              />
              <a
                href="/Contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold text-sm tracking-wide hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                Check Out
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-12 px-6 sm:px-12 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                NEED SOMETHING ELSE?
              </h2>
              <p className="text-green-100 text-base sm:text-lg leading-relaxed max-w-xl">
                Don't see what you want? We can provide custom products
                tailored to your exact requirements, and our experts are
                always on hand to advise on any related situation.
              </p>
            </div>
            <div className="shrink-0">
              <ContactExpertsButton />
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-10 sm:gap-16 items-center">
          <div className="sm:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              CUSTOMER SATISFACTION{" "}
              <span className="text-green-600">KNOWS NO BORDERS</span>
            </h2>
          </div>
          <div className="sm:w-1/2">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
              Our customers come from different industries but share a
              unanimous appreciation of our work together, reflected in
              their continued progress and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-green-50 py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white border border-green-100 shadow-sm p-8 sm:p-12">
            <p className="text-gray-700 text-2xl sm:text-3xl font-light leading-relaxed mb-8">
              &ldquo;Our customers' needs are our primary concern. Everything
              else is secondary. It is always a great pleasure to
              collaborate.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-green-500" />
              <div>
                <p className="font-bold text-gray-900">Jane Nalunga</p>
                <p className="text-sm text-green-600">Team Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
