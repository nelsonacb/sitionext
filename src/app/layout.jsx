import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Restaurant with Nextjs App",
  description: "Restaurant with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
