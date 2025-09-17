import React from "react";

// ===== Footer Neon – Atlanta Towing =====
// • TailwindCSS only (sin dependencias externas)
// • Diseño oscuro con acentos neón (azul/morado)
// • Totalmente responsive (móvil → desktop)
// • CTA de Emergencia 24/7 pegajoso en el footer
// • Accesible (aria-labels y semántica nav/address)
//
// 👉 Cómo usar:
// <Footer
//   brand="Atlanta Towing"
//   phone="(404) 555-0199"
//   whatsapp="(404) 555-0199"  // opcional
//   email="help@atlantatowing.com" // opcional
// />
//
// Ajusta enlaces de servicios en LINKS más abajo.

// Utilidad simple: limpiar numero para tel:// y wa.me
const digits = (s?: string) => (s || "").replace(/\D/g, "");

// Iconitos inline (evitamos librerías)
const IconPhone: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden
    >
        <path
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.89.33 1.76.62 2.6a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.48-1.48a2 2 0 012.11-.45c.84.29 1.71.5 2.6.62A2 2 0 0122 16.92z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const IconWhatsapp: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M12.04 2a10 10 0 00-8.67 15l-1.2 4.38 4.51-1.18A10 10 0 1012.04 2zm5.78 14.32a2.83 2.83 0 01-1.94 1.34c-.52.1-1.2.18-3.49-.74-2.94-1.22-4.84-4.23-4.99-4.43s-1.2-1.6-1.2-3.06a3.26 3.26 0 011.07-2.45 1.08 1.08 0 01.77-.32h.54c.17 0 .41-.07.64.49.24.6.83 2.07.9 2.22.07.15.12.33.02.53-.1.22-.17.36-.33.55-.16.19-.34.42-.49.56-.16.15-.33.32-.14.62.2.3.88 1.45 1.9 2.34 1.31 1.13 2.41 1.48 2.76 1.64.35.15.56.14.77-.09.2-.22.88-1.02 1.12-1.37.24-.36.48-.3.8-.18.33.11 2.1.99 2.46 1.17.36.17.6.27.69.42.09.16.09.9-.42 1.5z" />
    </svg>
);

const IconClock: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
    </svg>
);

const IconMapPin: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 10.5C21 16 12 22 12 22S3 16 3 10.5a9 9 0 1118 0z" />
        <circle cx="12" cy="10.5" r="3" />
    </svg>
);

const IconShield: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

const LINKS = {
    servicios: [
        { label: "24/7 Towing", href: "/servicios/remolque" },
        { label: "Tire Change", href: "/servicios/llanta" },
        { label: "Jump Start", href: "/servicios/jump-start" },
        { label: "Lockout", href: "/servicios/lockout" },
        { label: "Fuel Delivery", href: "/servicios/combustible" },
    ],
    empresa: [
        { label: "Certified Operators", href: "/equipo" },
        { label: "Coverage in Atlanta", href: "/cobertura" },
        { label: "Pricing", href: "/precios" },
        { label: "Contact", href: "/contacto" },
    ],
};

export type FooterProps = {
    brand?: string;
    phone?: string;
    whatsapp?: string;
    email?: string;
    addressHtml?: string; // puedes pasar <>Atlanta, GA</>
};

const GlowLine: React.FC<{ className?: string }> = ({ className }) => (
    <div
        className={
            "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-fuchsia-500/0 blur-[0.5px] " +
            (className || "")
        }
    />
);

const NeonDot: React.FC<{ className?: string }> = ({ className }) => (
    <div
        className={
            "absolute -z-10 h-64 w-64 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),rgba(147,51,234,0.15)_60%,transparent_70%)] " +
            (className || "")
        }
    />
);

export default function Footer({
    brand = "Atlanta Towing",
    phone = "(404) 555-0199",
    whatsapp,
    email = "help@atlantatowing.com",
    addressHtml = "Atlanta, GA"
}: FooterProps) {
    const tel = digits(phone);
    const wa = digits(whatsapp || phone);

    return (
        <footer className="relative pt-15  bg-neutral-950 text-neutral-200">
            <GlowLine />

            {/* CTA superior dentro del footer */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <section className="relative -translate-y-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-sky-500/10 via-blue-500/5 to-fuchsia-500/10 p-5 sm:p-6 lg:p-8 shadow-[0_0_40px_-10px_rgba(59,130,246,0.35)]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs tracking-widest text-cyan-300/80">EMERGENCY 24/7</p>
                            <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                                Towing & Roadside Assistance — {brand}
                            </h3>
                            <p className="mt-1 text-sm text-neutral-300">
                                Accurate ETA, certified operators and 4-point tie-downs.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href={`tel:${tel}`}
                                className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_-6px_rgba(34,211,238,0.6)] transition hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                                aria-label="Call now"
                            >
                                <IconPhone className="h-4 w-4" />
                                Call now
                            </a>

                            <a
                                href={`https://wa.me/${wa}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_-6px_rgba(16,185,129,0.6)] transition hover:bg-emerald-400/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                                aria-label="WhatsApp"
                            >
                                <IconWhatsapp className="h-4 w-4" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* Contenido principal del footer */}
            <div className="mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6 lg:pt-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
                    {/* Marca / Address */}
                    <address className="not-italic">
                        <div className="flex items-center gap-2">
                            <span className="rounded-lg bg-white/5 px-2 py-1 text-xs font-bold tracking-wider text-white ring-1 ring-white/10">
                                {brand}
                            </span>
                            <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-300 ring-1 ring-cyan-400/30">
                                24/7
                            </span>
                        </div>

                        <p className="mt-4 flex items-center gap-2 text-sm text-neutral-300">
                            <IconMapPin className="h-4 w-4 text-cyan-300" />
                            <span dangerouslySetInnerHTML={{ __html: addressHtml }} />
                        </p>

                        <p className="mt-2 flex items-center gap-2 text-sm text-neutral-300">
                            <IconClock className="h-4 w-4 text-cyan-300" />
                            24/7 Service — Real-time ETA
                        </p>

                        <p className="mt-2 flex items-center gap-2 text-sm text-neutral-300">
                            <IconShield className="h-4 w-4 text-cyan-300" />
                            Licensed, insured, and WreckMaster
                        </p>

                        <div className="mt-4 flex flex-col gap-2 text-sm">
                            <a href={`tel:${tel}`} className="text-white/90 hover:text-white">
                                Phone: {phone}
                            </a>
                            <a href={`mailto:${email}`} className="text-white/90 hover:text-white">
                                {email}
                            </a>
                        </div>
                    </address>

                    {/* Servicios */}
                    <nav aria-label="Services">
                        <h4 className="text-sm font-semibold text-white">Services</h4>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                            {LINKS.servicios.map((l) => (
                                <li key={l.href}>
                                    <a
                                        className="inline-flex items-center gap-2 rounded-md px-1 py-1 hover:text-white hover:underline/30"
                                        href={l.href}
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Empresa */}
                    <nav aria-label="Company">
                        <h4 className="text-sm font-semibold text-white">Company</h4>
                        <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                            {LINKS.empresa.map((l) => (
                                <li key={l.href}>
                                    <a
                                        className="inline-flex items-center gap-2 rounded-md px-1 py-1 hover:text-white hover:underline/30"
                                        href={l.href}
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Bloque de acción rápida */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                        <p className="text-sm text-neutral-300">Need help now?</p>
                        <a
                            href={`tel:${tel}`}
                            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)] transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                        >
                            <IconPhone className="h-4 w-4" /> Emergency 24/7
                        </a>

                        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                            <a
                                href={`https://wa.me/${wa}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-white/90 hover:text-white"
                            >
                                WhatsApp
                            </a>
                            <a
                                href="/eta"
                                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-white/90 hover:text-white"
                            >
                                Real-time ETA
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-400 sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} {brand}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="/privacidad" className="hover:text-white">Privacy</a>
                        <a href="/terminos" className="hover:text-white">Terms</a>
                        <a href="#top" className="rounded-md border border-white/10 px-2 py-1 text-white/80 hover:text-white">Back to top</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
