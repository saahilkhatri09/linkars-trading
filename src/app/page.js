"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
{
id: 1,
name: "Industrial Sirens",
slug: "industrial-siren",
image: "/categories/industrial-siren.jpg",
description: "Motorized, electronic, flameproof and emergency sirens.",
},
{
id: 2,
name: "Warning Lights",
slug: "warning-lights",
image: "/categories/warning-lights.jpg",
description: "LED strobes, aviation lights, revolving lights and flashers.",
},
{
id: 3,
name: "Emergency Systems",
slug: "emergency-systems",
image: "/categories/emergency-systems.jpg",
description: "Emergency lights,Hooters and industrial alarm systems.",
},
{
id: 4,
name: "Industrial Connectors",
slug: "industrial-connectors",
image: "/categories/industrial-connectors.jpg",
description: "Heavy duty industrial connectors, hoods and housings.",
},
{
id: 5,
name: "Cable Glands",
slug: "cable-glands",
image: "/categories/cable-glands.jpg",
description: "Plastic, brass, EMC and armoured cable glands.",
},
{
id: 6,
name: "Flexible Conduits",
slug: "flexible-conduits",
image: "/categories/flexible-conduits.jpg",
description: "Metallic and non-metallic conduit systems.",
},
{
id: 7,
name: "Hardware Tools",
slug: "hardware-tools",
image: "/categories/hardware-tools.webp",
description: "Cable ties, DIN rails,plumbing/carpentary and industrial tools.",
},
{
id: 8,
name: "Electrical Accessories",
slug: "electrical-accessories",
image: "/categories/electrical-accessories.jpg",
description: "Blowers,MCBs, pilot lights,wring ducts,panel accessories and electrical industrial accessories.",
},
];

export default function Home() {
return ( <main className="bg-white text-slate-900">

  {/* HERO */}
<section className="relative h-[850px] md:h-[650px]">
    <Image
      src="/hero/industrial-banner-og.png"
      alt="Industrial Products"
      fill
      className="object-cover"
    />

    <div className="absolute inset-0 bg-black/4" />

    <div className="absolute inset-0 flex items-center pt-20 md:pt-0">
  <div className="max-w-3xl px-4 md:px-0 md:pl-12 text-white">
<h2 className="text-2xl sm:text-3xl md:text-6xl font-black leading-tight">
  Trusted Industrial and Electrical
  <br />
  Products Supplier Since 1996
</h2>

       <p className="text-base md:text-xl mt-4 md:mt-6 max-w-2xl text-gray-200">
  Authorized dealer of Kheraj, Indo Electricals,
  Supaflex and other leading industrial brands.
  Supplying industrial sirens, warning lights,
  cable glands, connectors, electrical accessories and many more industrial market products range
  across India.
</p>

<div className="flex flex-col sm:flex-row gap-4 mt-8">

  <span className="bg-white/20 px-4 py-2 rounded-full">
    25+ Years Experience
  </span>

  <span className="bg-white/20 px-4 py-2 rounded-full">
    Pan India Supply
  </span>

  <span className="bg-white/20 px-4 py-2 rounded-full">
    Authorized Dealers
  </span>

</div>
       <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <a
            href="https://wa.me/919850844558"
            className="bg-green-600 px-8 py-4 rounded-xl"
          >
            Get Quote on WhatsApp
          </a>

          <a
            href="#categories"
            className="border px-8 py-4 rounded-xl"
          >
            View Product Categories
          </a>

        </div>

      </div>
    </div>

  </section>

  {/* ABOUT */}
  <section className="py-20 bg-slate-50">

   <div className="max-w-7xl mx-auto px-4 md:px-6 text-black">

      <h2 className="text-4xl font-bold mb-6">
        About Linkars Trading Company
      </h2>

      <p className="text-lg text-gray-600 leading-8">
        Linkars Trading Company is a trusted supplier of industrial
        electrical products, safety systems, cable management solutions
        and automation components. Based in Pune, we serve customers
        across India.
      </p>

    </div>

  </section>

  {/* WHY CHOOSE US */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold mb-4">
        Why Choose Linkars?
      </h2>

      <p className="text-lg text-gray-600">
        Trusted industrial supplier serving customers across India since 1996.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-blue-50 p-8 rounded-3xl shadow-md text-center">

        <div className="text-5xl mb-4">
          🏆
        </div>

        <h3 className="text-2xl font-bold mb-3">
          25+ Years Experience
        </h3>

        <p className="text-gray-600">
          Supplying industrial electrical products and solutions since 1996.
        </p>

      </div>

      <div className="bg-blue-50 p-8 rounded-3xl shadow-md text-center">

        <div className="text-5xl mb-4">
          🇮🇳
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Pan India Supply
        </h3>

        <p className="text-gray-600">
          Serving industries, contractors and businesses across India.
        </p>

      </div>

      <div className="bg-blue-50 p-8 rounded-3xl shadow-md text-center">

        <div className="text-5xl mb-4">
          🤝
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Authorized Dealers
        </h3>

        <p className="text-gray-600">
          Associated with trusted industrial brands and manufacturers.
        </p>

      </div>

      <div className="bg-blue-50 p-8 rounded-3xl shadow-md text-center">

        <div className="text-5xl mb-4">
          ⚙️
        </div>

        <h3 className="text-2xl font-bold mb-3">
          Quality Industrial Solutions
        </h3>

        <p className="text-gray-600">
          Reliable products for industrial, electrical and safety applications.
        </p>

      </div>

    </div>

  </div>

</section>

  {/* PRODUCT CATEGORIES */}
  <section id="categories" className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-4 md:px-6 text-black">

      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold mb-4">
          Product Categories
        </h2>

        <p className="text-lg text-gray-600">
          Industrial products from leading manufacturers.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {categories.map((category) => (
          <Link
            href={`/categories/${category.slug}`}
            key={category.id}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              block
            "
          >

            <Image
              src={category.image}
              alt={category.name}
              width={450}
              height={280}
             className="w-full h-40 md:h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-bold mb-3">
                {category.name}
              </h3>

              <p className="text-gray-600">
                {category.description}
              </p>

            </div>

          </Link>
        ))}

      </div>

    </div>

  </section>

  {/* BRANDS */}
  <section className="py-10 bg-slate-20">

   <div className="max-w-7xl mx-auto px-4 md:px-6 text-black">

      <h2 className="text-center text-5xl font-bold mb-20">
        Authorized Brands
      </h2>

     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12">

        <div className="bg-white rounded-xl p-3 md:p-6 shadow text-center">
          <Image
            src="/logo/kheraj-logo.webp"
            alt="Kheraj"
            width={240}
            height={180}
            className="mx-auto"
          />
          
        </div>

       <div className="bg-white rounded-xl p-3 md:p-6 shadow text-center">
         <Image
            src="/logo/supaflex-logo.webp"
            alt="Supa Flex"
            width={240}
            height={180}
            className="mx-auto"
          /> 
        </div>

      <div className="bg-white rounded-xl p-3 md:p-6 shadow text-center">
          <Image
            src="/logo/supaflex-logo.webp"
            alt="Supa Flex"
            width={240}
            height={180}
            className="mx-auto"
          />
          
        </div>

       <div className="bg-white rounded-xl p-3 md:p-6 shadow text-center">
          <Image
            src="/logo/ploycab logo.png"
            alt="Polycab"
            width={400}
            height={290}
            className="mx-auto"
          />
          
        </div>

       <div className="bg-white rounded-xl p-3 md:p-6 shadow text-center">
          <Image
            src="/logo/Schneider_Electric-Logo.png"
            alt="Schneider"
            width={400}
            height={290}
            className="mx-auto"
          />
         
        </div>
<div className="bg-white rounded-xl p-3 md:p-6 shadow text-center">
          <Image
            src="/logo/siemens-logo.webp"
            alt="Siemens"
            width={400}
            height={290}
            className="mx-auto"
          />
          
        </div>

          <div className="bg-white rounded-xl p-3 md:p-6 shadow text-center">
          <Image
            src="/logo/SMC-logo.webp"
            alt="SMC"
            width={400}
            height={290}
            className="mx-auto"
          />
          
        </div>

          <div className="bg-white rounded-xl p-3 md:p-6 shadow text-center">
          <Image
            src="/logo/Finolex-Logo.jpg"
            alt="Finolex"
            width={400}
            height={290}
            className="mx-auto"
          />
          
        </div>

           <div className="bg-white rounded-xl p-3 md:p-6 shadow text-center">
          <Image
            src="/logo/helukabel_logo.png"
            alt="Helukabel"
            width={400}
            height={290}
            className="mx-auto"
          />
          
        </div>

      </div>
      </div>

  </section>

  {/* CALL TO ACTION */}

<section className="py-24 bg-sky-700 text-white">
<div className="max-w-7xl mx-auto px-4 md:px-6 text-white">

<h2 className="text-5xl font-bold mb-6">
  Need Industrial Electrical Products?
</h2>

<p className="text-xl text-sky-100 mb-10">
  Contact Linkars Trading Company for industrial sirens,
  warning lights, cable glands, industrial connectors,
  flexible conduits and electrical accessories and all 
  other industrial and electricals market demand products 
  gand materials.
</p>

<div className="flex flex-col md:flex-row justify-center gap-4">

  <a
    href="tel:+919850844558"
    className="
      bg-white
      text-sky-700
      px-8
      py-4
      rounded-xl
      font-bold
    "
  >
    Call Now
  </a>

  <a
    href="https://wa.me/919850844558"
    className="
      bg-green-500
      text-white
      px-8
      py-4
      rounded-xl
      font-bold
    "
  >
    WhatsApp Enquiry
  </a>

</div>

  </div>

</section>


  {/* CONTACT */}
  <section className="bg-sky-700 text-white py-20">

    <div className="max-w-7xl mx-auto px-4 md:px-6 text-white">
      <h2 className="text-5xl font-bold mb-6">
        Contact Us
      </h2>

      <p className="text-xl">
        +91-9850844558
      </p>

      <p className="mt-2">
        linkars2007@rediffmail.com
      </p>

      <a
        href="https://wa.me/919850844558"
      className="bg-sky-500 px-8 md:px-8 py-7 md:py-4 rounded-xl text-center"
      >
        WhatsApp Now
      </a>

    </div>

  </section>

</main>

);
}
