import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotificationToast from "@/components/NotificationToast";
import { LanguageProvider } from "@/context/LanguageContext";
import { AppProvider } from "@/context/AppContext";

export const metadata = {
  title: "DriveConnect - Your car. Our driver. Anywhere.",
  description: "Book verified, professional drivers on demand with direct WhatsApp coordination. Available in English, Hindi, and Marathi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900 min-h-screen flex flex-col relative">
        <LanguageProvider>
          <AppProvider>
            <Navbar />
            <NotificationToast />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
            <WhatsAppButton />
          </AppProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
