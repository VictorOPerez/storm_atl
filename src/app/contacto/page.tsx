// app/contacto/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Contacto | Atlanta Towing",
    description:
        "Contáctanos 24/7. Llamadas de emergencia, WhatsApp, correo y formulario con tu ubicación.",
    alternates: { canonical: "/contacto" },
};

const GRADIENT = "linear-gradient(12deg,#8E2DE2 0%,#4F46E5 45%,#00C2FF 100%)";

export default function ContactoPage() {
    return (
        <main className="min-h-[100dvh] bg-[#0B0B10] text-white antialiased">
            {/* HERO con luces/velocidad */}
            <section className="relative isolate overflow-hidden">
                <BackgroundGlow />
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
                    <div className="max-w-3xl">
                        <span
                            className="inline-block rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-white/20"
                            style={{ borderImage: "linear-gradient(90deg,#8E2DE2,#00C2FF) 1" }}
                        >
                            Atención 24/7
                        </span>
                        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>
                                Contacto
                            </span>{" "}
                            — estamos listos para ayudarte
                        </h1>
                        <p className="mt-3 text-lg text-slate-300">
                            Dinos dónde estás, qué necesitas y te enviamos el camión más cercano.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENIDO */}
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 lg:grid-cols-5">
                {/* FORMULARIO */}
                <NeonCard className="lg:col-span-3">
                    <h2 className="text-xl font-bold">Formulario de contacto</h2>
                    <p className="mt-1 text-slate-300 text-sm">
                        Respuesta rápida. Si es emergencia, usa <strong>LLAMAR AHORA</strong>.
                    </p>

                    <form className="mt-5 grid grid-cols-1 gap-4" action="#" method="post">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Nombre" id="nombre">
                                <input id="nombre" name="nombre" type="text" required className={inputCls} />
                            </Field>
                            <Field label="Teléfono" id="telefono">
                                <input id="telefono" name="telefono" type="tel" inputMode="tel" required className={inputCls} />
                            </Field>
                        </div>

                        <Field label="Ubicación (dirección, cruce o milla en autopista)" id="ubicacion">
                            <input id="ubicacion" name="ubicacion" type="text" placeholder="Ej. I-75, mm 242 (sentido norte)" className={inputCls} />
                        </Field>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Tipo de servicio" id="servicio">
                                <select id="servicio" name="servicio" className={inputCls}>
                                    <option>Remolque</option>
                                    <option>Cambio de llanta</option>
                                    <option>Paso de corriente</option>
                                    <option>Apertura de puertas</option>
                                    <option>Entrega de combustible</option>
                                    <option>Winch out</option>
                                </select>
                            </Field>
                            <Field label="Placas / Modelo (opcional)" id="vehiculo">
                                <input id="vehiculo" name="vehiculo" type="text" className={inputCls} />
                            </Field>
                        </div>

                        <Field label="Detalles (opcional)" id="mensaje">
                            <textarea id="mensaje" name="mensaje" rows={4} className={inputCls} />
                        </Field>

                        <div className="mt-2 flex flex-wrap gap-3">
                            <button
                                type="submit"
                                className="rounded-xl px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/10"
                                style={{ background: GRADIENT }}
                            >
                                Enviar solicitud
                            </button>
                            <a
                                href="https://wa.me/?text=Hola%20necesito%20asistencia%20de%20gr%C3%BAa"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl px-5 py-3 font-semibold text-white/90 ring-1 ring-white/20 hover:ring-white/40 bg-white/5"
                            >
                                WhatsApp
                            </a>
                        </div>

                        <p className="mt-3 text-xs text-slate-400">
                            Al enviar aceptas ser contactado por nuestro equipo para coordinar tu servicio.
                        </p>
                    </form>
                </NeonCard>

                {/* CONTACTO RÁPIDO / INFO */}
                <div className="lg:col-span-2 grid gap-6">
                    <NeonCard>
                        <h3 className="text-lg font-bold">Emergencias</h3>
                        <p className="mt-1 text-slate-300 text-sm">Respuesta inmediata 24/7</p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <a
                                href="tel:+1XXXXXXXXXX"
                                className="rounded-xl px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/10"
                                style={{ background: GRADIENT }}
                            >
                                LLAMAR AHORA
                            </a>
                            <a
                                href="sms:+1XXXXXXXXXX?body=Necesito%20asistencia%20de%20gr%C3%BAa"
                                className="rounded-xl px-5 py-3 font-semibold text-white/90 ring-1 ring-white/20 hover:ring-white/40 bg-white/5"
                            >
                                SMS
                            </a>
                        </div>
                        <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                            <li className="flex items-center gap-2"><Dot /> ETA preciso en tiempo real</li>
                            <li className="flex items-center gap-2"><Dot /> Operadores certificados</li>
                            <li className="flex items-center gap-2"><Dot /> Cobertura en Atlanta y alrededores</li>
                        </ul>
                    </NeonCard>

                    <NeonCard>
                        <h3 className="text-lg font-bold">Datos de contacto</h3>
                        <div className="mt-3 grid gap-3 text-slate-300 text-sm">
                            <div className="flex items-center gap-3"><IconPhone /> +1 (XXX) XXX-XXXX</div>
                            <div className="flex items-center gap-3"><IconMail /> dispatch@atlantatowing.com</div>
                            <div className="flex items-center gap-3"><IconPin /> 1234 Service Rd, Atlanta GA</div>
                            <div className="flex items-center gap-3"><IconClock /> 24/7 — 365 días</div>
                        </div>
                    </NeonCard>

                    {/* Mapa estático embebido (sin dependencias cliente) */}
                    <NeonCard>
                        <h3 className="text-lg font-bold">Cobertura</h3>
                        <p className="mt-1 text-slate-300 text-sm">
                            ¿Fuera de zona? Escríbenos igual y vemos disponibilidad.
                        </p>
                        <div className="mt-3 overflow-hidden rounded-xl ring-1 ring-white/10">
                            <iframe
                                title="Mapa Atlanta"
                                className="h-[260px] w-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                // Puedes cambiar por tu propio mapa (MapTiler/Mapbox static) si quieres estilo custom
                                src="https://www.openstreetmap.org/export/embed.html?bbox=-84.62%2C33.60%2C-84.15%2C33.95&layer=mapnik&marker=33.749%2C-84.388"
                            />
                        </div>
                    </NeonCard>
                </div>
            </section>
        </main>
    );
}

/* ---------------- Subcomponentes ---------------- */

function NeonCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`relative ${className}`}>
            {/* Glow exterior morado→azul */}
            <div
                aria-hidden
                className="pointer-events-none absolute -inset-[1px] rounded-2xl blur-[18px] opacity-70"
                style={{ background: GRADIENT }}
            />
            {/* Contenedor */}
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6 backdrop-blur-sm">
                {/* Borde interno sutil con gradiente */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                        mask: "linear-gradient(#000,transparent 40%)",
                        borderImage: "linear-gradient(90deg,#8E2DE2,#00C2FF) 1",
                    }}
                />
                {children}
            </div>
        </div>
    );
}

function Field({
    label,
    id,
    children,
}: {
    label: string;
    id: string;
    children: React.ReactNode;
}) {
    return (
        <label htmlFor={id} className="block">
            <span className="text-sm font-semibold text-white/90">{label}</span>
            <div className="mt-1">{children}</div>
        </label>
    );
}

const inputCls =
    "w-full rounded-xl bg-white/95 text-slate-900 placeholder-slate-500 px-4 py-3 outline-none ring-2 ring-transparent focus:ring-2 focus-visible:ring-2 transition";

function Dot() {
    return (
        <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: GRADIENT }}
        />
    );
}

/* ------- Iconos (SVG básicos) ------- */
function IconPhone() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.16 10.8 19.79 19.79 0 0 1 .09 2.18 2 2 0 0 1 2.11 0h2a2 2 0 0 1 2 1.72 12.66 12.66 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L5.38 7.91a16 16 0 0 0 6.71 6.71l1.27-1.02a2 2 0 0 1 2.11-.45 12.66 12.66 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" fill="currentColor" />
        </svg>
    );
}
function IconMail() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
            <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
function IconPin() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M12 22s7-4.33 7-11a7 7 0 1 0-14 0c0 6.67 7 11 7 11Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
function IconClock() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

/* Fondo con “luces” y líneas de velocidad */
function BackgroundGlow() {
    return (
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B10] via-[#0E0F1B] to-[#0B0B10]" />
            <div
                className="absolute inset-0 opacity-70 mix-blend-screen"
                style={{
                    background:
                        "radial-gradient(900px 420px at 12% 78%, rgba(142,45,226,0.35), transparent 60%), radial-gradient(900px 420px at 88% 18%, rgba(0,194,255,0.35), transparent 60%)",
                }}
            />
            <SpeedLines />
        </div>
    );
}

function SpeedLines() {
    return (
        <svg className="absolute right-0 top-0 -z-10 h-full w-full opacity-50" viewBox="0 0 1200 600" fill="none" aria-hidden="true">
            <defs>
                <linearGradient id="speed" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8E2DE2" />
                    <stop offset="50%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#00C2FF" />
                </linearGradient>
            </defs>
            {[120, 190, 260, 330].map((y, i) => (
                <rect key={i} x={1200 - (920 - i * 120) - 40} y={y} width={920 - i * 120} height={10} rx={12} fill="url(#speed)" />
            ))}
        </svg>
    );
}
