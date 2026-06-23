
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import  FaWhatsapp from "./components/WhatsappButton";
import TopBar from "./components/TopBar";

export const metadata = {
  title: "Linkars Trading Company",
  description: "Industrial Electrical Products Supplier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
          <TopBar />

        <Navbar />

        {children}

         < FaWhatsapp />
        <Footer />

      </body>

    </html>
  );
}