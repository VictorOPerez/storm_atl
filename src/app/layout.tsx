import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer Neon";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Atlanta Towing",
  description: "Servicio de grúa y asistencia vial 24/7 en Atlanta",
  metadataBase: new URL("https://tu-dominio.com"), // <-- importante: dominio real
  openGraph: {
    type: "website",
    url: "https://tu-dominio.com/",
    title: "Atlanta Towing",
    description: "Servicio de grúa y asistencia vial 24/7 en Atlanta",
    images: [
      {
        url: "/servicios/og-image.jpg", // 1200x630
        width: 1200,
        height: 630,
        alt: "Atlanta Towing — 24/7",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlanta Towing",
    description: "Servicio de grúa y asistencia vial 24/7 en Atlanta",
    images: ["/servicios/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-white antialiased mt-15">
        {/* Wrapper en flex para empujar el footer hacia abajo */}
        <Navbar />
        <div className="flex min-h-dvh flex-col">
          {/* Header / Nav (opcional) */}
          {/* <Header /> */}

          {/* Contenido que crece */}

          <main className="flex-1">{children}</main>

          {/* Footer al final */}
          <Footer
            brand="Atlanta Towing"
            phone="+14705730664"
            whatsapp="+14705730664"
            email="atltowingnearme@gmail.com"
          />
        </div>
      </body>
    </html>
  );
}
