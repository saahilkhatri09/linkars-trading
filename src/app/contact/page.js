export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">

      {/* Heading */}

      <div className="text-center mb-12 md:mb-16">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Get in touch with Linkars Trading Company for product enquiries,
          quotations, technical assistance and industrial product requirements.
        </p>

      </div>

      {/* Contact Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white rounded-xl shadow-md p-6 text-center border">

          <h3 className="text-xl md:text-2xl font-bold mb-3">
            📞 Phone
          </h3>

          <a
            href="tel:+919850844558"
            className="text-sky-600 font-semibold"
          >
            +91 9850844558
          </a>

          <p className="text-gray-500 mt-2">
            Tel: 24460764
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center border">

          <h3 className="text-xl md:text-2xl font-bold mb-3">
            📧 Email
          </h3>

          <a
            href="mailto:linkars2007@rediffmail.com"
            className="text-sky-600 break-all"
          >
            <p>
           linkars2007@rediffmail.com
          </p>

          <p>
            linkars2007@gmail.com
          </p>



            linkars2007@gmail.com
          </a>

        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center border">

          <h3 className="text-xl md:text-2xl font-bold mb-3">
            📍 Location
          </h3>

          <p className="text-gray-600">
            Pune, Maharashtra
          </p>

        </div>

      </div>

      {/* Office Address */}

      <div className="bg-blue-50 rounded-2xl shadow-md p-6 md:p-8 border mb-16">

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Office Address
        </h2>

        <div className="text-center text-gray-700 leading-8">

          <p className="font-semibold text-lg">
            Linkars Trading Company
          </p>

          <p>
            Vishnu Bhavan, Office No. 203, Second Floor
          </p>

          <p>
            471, Budhwar Peth, Pune - 411002
          </p>

          <p>
            Maharashtra, India
          </p>

        </div>

      </div>

      {/* Map Heading */}

      <div className="text-center mb-8">

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Visit Our Office
        </h2>

        <p className="text-gray-600">
          Find us at our Pune office for industrial electrical products,
          technical assistance and business enquiries.
        </p>

      </div>

      {/* Google Map */}

      <div className="rounded-2xl overflow-hidden shadow-md mb-16">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2595190966776!2d73.85476307502543!3d18.51717098257566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06f25555555%3A0x6971d26b44ae9cf8!2sLinkars%20Trading%20Co!5e0!3m2!1sen!2sin!4v1781243765333!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

      </div>

      {/* Enquiry Form */}

      <div className="bg-orange-50 rounded-2xl p-5 md:p-8 shadow-md">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Send an Enquiry
        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 md:p-4"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="w-full border rounded-lg p-3 md:p-4"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-lg p-3 md:p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 md:p-4"
          />

          <input
            type="text"
            placeholder="Product Requirement"
            className="w-full border rounded-lg p-3 md:p-4"
          />

          <textarea
            rows="5"
            placeholder="Enter your enquiry..."
            className="w-full border rounded-lg p-3 md:p-4"
          ></textarea>

          <button
            type="submit"
            className="
              w-full md:w-auto
              bg-sky-600
              hover:bg-sky-700
              text-white
              px-8
              py-3 md:py-4
              rounded-xl
              font-bold
              transition
            "
          >
            Send Enquiry
          </button>

        </form>

      </div>

    </main>
  );
}