import prisma from "@/app/lib/prisma";
import ProductCard2 from "../components/ProductCard";
import ContactExpertsButton from "../components/ContactExpertsButton";

export const metadata = {
  title: "Products - OMANET",
};

export default async function Products() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 pt-36 pb-20 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-10 sm:gap-20 items-start">
          <div className="sm:w-1/2">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-emerald-300 border border-emerald-500/60 rounded-full px-4 py-1.5 mb-6">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08]">
              Explore Our Products
            </h1>
          </div>
          <div className="sm:w-1/2 sm:pt-16">
            <p className="text-base sm:text-lg text-green-100 leading-relaxed mb-4">
              Discover our range of certified organic products, grown and
              processed to the highest standards of quality and sustainability.
            </p>
            <p className="text-sm sm:text-base text-green-200/75 leading-relaxed">
              Every product reflects our commitment to supporting Ugandan
              farmers and delivering health-conscious choices to consumers
              and businesses alike.
            </p>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl mx-auto">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard2 product={product} key={product.id} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No products listed yet.</p>
            </div>
          )}
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
                always on hand to advise on related situations regardless
                of the field.
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
