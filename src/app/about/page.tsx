// app/about-us/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Sobre Nosotros | Atlanta Towing",
    description:
        "Conoce al equipo detrás de Atlanta Towing: 15 años de experiencia, operadores certificados y protocolos de seguridad 24/7.",
    alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
    return (
        <main className="min-h-[100dvh] bg-[#0B0B10] text-white antialiased">
            {/* HERO */}
            <section className="relative isolate overflow-hidden">
                {/* Fondo: gradiente + trazas tipo “velocidad” */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B10] via-[#0F1020] to-[#0B0B10]" />
                    <div
                        className="absolute inset-0 opacity-70 mix-blend-screen"
                        style={{
                            background:
                                "radial-gradient(1200px 600px at 15% 70%, rgba(142,45,226,0.35), transparent 60%), radial-gradient(1200px 600px at 85% 20%, rgba(0,194,255,0.35), transparent 60%)",
                        }}
                    />
                    <SpeedLines />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
                    <div className="max-w-3xl space-y-5">
                        <span
                            className="inline-block rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-white/20"
                            style={{
                                borderImage: "linear-gradient(90deg,#8E2DE2,#00C2FF) 1",
                            }}
                        >
                            Atlanta Towing
                        </span>
                        <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-extrabold">
                            Sobre Nosotros
                        </h1>
                        <p className="text-base md:text-lg text-slate-300">
                            Somos un equipo especializado en remolque y asistencia vial con{" "}
                            <strong className="text-white">15+ años</strong> de experiencia.
                            Combinamos tiempos de respuesta rápidos, comunicación clara y
                            protocolos de seguridad que protegen tu vehículo en cada servicio.
                        </p>

                        {/* Highlights */}
                        <ul className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-3">
                            {[
                                "24/7 disponibilidad",
                                "ETA en tiempo real",
                                "Operadores WreckMaster",
                                "COI bajo solicitud",
                            ].map((t) => (
                                <li
                                    key={t}
                                    className="rounded-full px-3 py-2 text-sm font-medium text-white/90 ring-1 ring-white/15 bg-white/5 backdrop-blur"
                                    style={{ borderImage: "linear-gradient(90deg,#8E2DE2,#00C2FF) 1" }}
                                >
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECCIÓN: Misión / Historia / Stats */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
                <div className="grid gap-6 lg:grid-cols-3">
                    <Card>
                        <h3 className="text-xl font-bold">Nuestra Historia</h3>
                        <p className="mt-3 text-slate-300">
                            Desde <strong>2010</strong> hemos completado más de{" "}
                            <strong>50.000 servicios</strong> de remolque y asistencia en
                            carretera en la región.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <Stat kpi="15+" label="Años de experiencia" />
                            <Stat kpi="50k+" label="Servicios completados" />
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-xl font-bold">Nuestro Equipo</h3>
                        <p className="mt-3 text-slate-300">
                            Operadores certificados, entrenamiento continuo y estándares
                            de higiene del vehículo.
                        </p>
                        <div className="mt-5 flex -space-x-3">
                            {["/img/op-1.jpg", "/img/op-2.jpg", "/img/op-3.jpg"].map((src, i) => (
                                <Avatar key={i} src={src} alt={`Operador ${i + 1}`} />
                            ))}
                        </div>
                        <span className="mt-5 inline-block rounded-full border px-3 py-1 text-xs font-semibold border-white/15">
                            WRECKMASTER
                        </span>
                    </Card>

                    <Card>
                        <h3 className="text-xl font-bold">Nuestra Flota</h3>
                        <p className="mt-3 text-slate-300">
                            Camiones flatbed mantenidos, anclajes inspeccionados y accesorios
                            certificados para un traslado seguro.
                        </p>
                        <div className="mt-5 grid grid-cols-3 gap-3">
                            {["/img/fleet-1.jpg", "/img/fleet-2.jpg", "/img/fleet-3.jpg"].map(
                                (src, i) => (
                                    <div
                                        key={i}
                                        className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10"
                                    >
                                        <Image
                                            src={src}
                                            alt={`Unidad ${i + 1}`}
                                            width={480}
                                            height={360}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECCIÓN: Compromisos */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                    <h3 className="text-xl font-bold">Nuestros Compromisos</h3>
                    <ul className="mt-5 grid gap-3 md:grid-cols-3">
                        {[
                            "Protocolos de seguridad",
                            "Inspección previa del vehículo",
                            "Comunicación clara y precios transparentes",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-slate-300">
                                <CheckIcon />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="tel:+1XXXXXXXXXX"
                            className="rounded-xl px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/10"
                            style={{
                                background:
                                    "linear-gradient(12deg,#8E2DE2 0%,#4F46E5 45%,#00C2FF 100%)",
                            }}
                        >
                            Llamar ahora
                        </a>
                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl px-5 py-3 font-semibold text-white/90 ring-1 ring-white/20 hover:ring-white/40 transition"
                        >
                            Compartir ubicación por WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}

/* ---------- Subcomponentes ---------- */

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7"
            style={{
                boxShadow:
                    "0 1px 0 rgba(255,255,255,0.03) inset, 0 10px 30px rgba(0,0,0,0.25)",
            }}
        >
            {children}
        </div>
    );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-2xl font-extrabold bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg,#8E2DE2,#00C2FF)" }}>
                {kpi}
            </div>
            <div className="mt-1 text-sm text-slate-300">{label}</div>
        </div>
    );
}

function Avatar({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/20">
            <Image src={src} alt={alt} width={96} height={96} className="h-full w-full object-cover" />
        </div>
    );
}

function CheckIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"
            className="mt-1 flex-none">
            <path d="M20 6L9 17l-5-5" stroke="url(#g)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8E2DE2" />
                    <stop offset="100%" stopColor="#00C2FF" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function SpeedLines() {
    return (
        <svg className="absolute right-0 top-0 -z-10 h-full w-full opacity-60"
            viewBox="0 0 1200 600" fill="none" aria-hidden="true">
            <defs>
                <linearGradient id="speed" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8E2DE2" />
                    <stop offset="50%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#00C2FF" />
                </linearGradient>
            </defs>
            {[
                { y: 130, w: 920, h: 10, r: 12 },
                { y: 200, w: 800, h: 10, r: 12 },
                { y: 270, w: 680, h: 10, r: 12 },
                { y: 340, w: 560, h: 10, r: 12 },
            ].map((l, i) => (
                <rect key={i} x={1200 - l.w - 40} y={l.y} width={l.w} height={l.h} rx={l.r}
                    fill="url(#speed)" />
            ))}
        </svg>
    );
}
