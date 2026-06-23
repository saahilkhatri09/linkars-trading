import Image from "next/image";
import { industrialSirens } from "../../data/product";

export default function IndustrialSirens() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">

      {/* Page Header */}

      <div className="text-center mb-12">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Industrial Sirens
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Explore our range of industrial sirens including
          motorized sirens, electronic sirens, flameproof sirens,
          emergency alarm systems and industrial warning devices.
        </p>

      </div>

      {/* Product Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

{industrialSirens.map((product) => ( <div
   key={product.id}
   className="
     bg-white
     rounded-2xl
     shadow-md
     overflow-hidden
     hover:shadow-xl
     transition
   "
 >


  <div className="p-2 md:p-4 bg-white flex justify-center items-center h-40 md:h-56">
    <Image
      src={product.image}
      alt={product.name}
      width={260}
      height={220}
    className="object-contain max-h-32 md:max-h-48 w-auto"
    />

  </div>

  <div className="p-4 border-t">

    <h3 className="font-bold text-base md:text-lg text-center min-h-[50px] flex items-center justify-center">
      {product.name}
    </h3>

  </div>

</div>

))}

</div>
{/* Bottom CTA */}

      <div className="mt-16 bg-sky-50 border rounded-2xl p-6 md:p-10 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Need Industrial Connectors?
        </h2>

        <p className="text-gray-600 mb-6">
          Contact us for pricing, technical specifications
          and product recommendations.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="tel:+919850844558"
            className="
              bg-sky-600
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
            "
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919850844558"
            className="
              bg-green-600
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
            "
          >
            WhatsApp Enquiry
          </a>

        </div>

      </div>

    </main>
  );
}