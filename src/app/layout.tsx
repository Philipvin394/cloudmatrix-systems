import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CloudMatrix Systems | Modern Cloud Engineering & Cybersecurity",
  description:
    "Helping startups and enterprise businesses build, secure, and scale modern digital infrastructure with cloud and AI-powered solutions.",
  icons: {
    icon: [
      { url: "/cm.png?v=2" },
      { url: "/cm.png?v=2", type: "image/png" },
    ],
    shortcut: "/cm.png?v=2",
    apple: "/cm.png?v=2",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#030712] text-slate-100 min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-1 pt-20">{children}</div>
        <Footer />
        
        {/* Modern Toast Notification Container */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0f172a",
              color: "#f8fafc",
              border: "1px solid #1e293b",
              borderRadius: "0.75rem",
              fontSize: "0.875rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
            },
            success: {
              iconTheme: {
                primary: "#0ea5e9",
                secondary: "#0f172a",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#0f172a",
              },
            },
          }}
        />
      </body>
    </html>
  );
}