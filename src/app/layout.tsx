import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer Neon";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Atlanta Towing",
  description: "Servicio de grúa y asistencia vial 24/7 en Atlanta",
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
            phone="(404) 555-0199"
            whatsapp="(404) 555-0199"
            email="help@atlantatowing.com"
          />
        </div>
      </body>
    </html>
  );
}
