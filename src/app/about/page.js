export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">

      {/* Page Heading */}

      <div className="text-center mb-12">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          About Linkars Trading Company
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Trusted supplier of industrial electrical products,
          safety systems and automation solutions since 1996.
        </p>

      </div>

      {/* About Content */}

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-10">

          <p className="text-base md:text-lg text-gray-800 mb-6 leading-8">
            Linkars Trading Company is a trusted supplier of
            industrial electrical, safety and automation products.
            Based in Pune, we have been serving industries across
            India with reliable products and technical support for
            over two decades.
          </p>

          <p className="text-base md:text-lg text-gray-800 mb-6 leading-8">
            We specialize in industrial sirens, warning lights,
            emergency systems, industrial connectors, cable glands,
            flexible conduits, electrical accessories and various
            industrial hardware products used in factories,
            warehouses, infrastructure projects and process plants.
          </p>

          <p className="text-base md:text-lg text-gray-800 mb-6 leading-8">
            As authorized dealers of leading brands including
            Kheraj, Indo Electricals, Supa Flex, Siemens,
            Schneider Electric, Finolex, Helukabel, SMC and
            Polycab, we are committed to providing quality
            products, competitive pricing and dependable
            customer service.
          </p>

          <p className="text-base md:text-lg text-gray-800 leading-8">
            Our goal is to deliver reliable industrial solutions
            that help businesses operate safely, efficiently and
            without interruption.
          </p>

        </div>

      </div>

      {/* Company Highlights */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center shadow-sm">

          <h3 className="font-bold text-4xl text-blue-700 mb-2">
            25+
          </h3>

          <p className="text-gray-700 font-medium">
            Years Experience
          </p>

        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center shadow-sm">

          <h3 className="font-bold text-2xl text-blue-700 mb-2">
            Authorized
          </h3>

          <p className="text-gray-700 font-medium">
            Dealer Network
          </p>

        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-center shadow-sm">

          <h3 className="font-bold text-2xl text-blue-700 mb-2">
            PAN India
          </h3>

          <p className="text-gray-700 font-medium">
            Supply & Support
          </p>

        </div>

      </div>

      {/* Why Customers Trust Us */}

      <div className="mt-16 bg-slate-50 rounded-2xl p-6 md:p-10 border">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Customers Trust Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold mb-2">Quality Products</h3>
            <p className="text-gray-600 text-sm">
              Reliable industrial products from leading manufacturers.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="font-bold mb-2">Technical Expertise</h3>
            <p className="text-gray-600 text-sm">
              Assistance in selecting the right industrial solutions.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold mb-2">Customer Commitment</h3>
            <p className="text-gray-600 text-sm">
              Dedicated support and long-term customer relationships.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}