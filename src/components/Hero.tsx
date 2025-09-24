"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroProps = { city?: string };

const DISPLAY_PHONE = "+1 (470)-573-0664"; // <- cámbialo
const PHONE_E164 = "14705730664";   // <- cámbialo (E.164)
const WA_NUMBER = "+14705730664";    // <- sin "+" para wa.me

export default function Hero({ city = "[Tu Ciudad]" }: HeroProps) {
    const [loc, setLoc] = useState("");
    const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
    const [geoReady, setGeoReady] = useState(false);
    // debajo de tus otros useState
    const [sheetOpen, setSheetOpen] = useState(false);

    // Intenta geolocalizar al cargar (no bloqueante)
    useEffect(() => {
        if (!("geolocation" in navigator)) return;
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                setCoords({ lat: coords.latitude, lng: coords.longitude });
                setGeoReady(true);
            },
            () => setGeoReady(false),
            { enableHighAccuracy: true, timeout: 8000 }
        );
    }, []);

    function mapsLinkGoogle() {
        return coords ? `https://maps.google.com/?q=${coords.lat},${coords.lng}` : "https://maps.google.com/";
    }
    function mapsLinkApple() {
        return coords ? `https://maps.apple.com/?q=${coords.lat},${coords.lng}` : "https://maps.apple.com/";
    }

    function openTel() {
        window.location.href = `tel:${PHONE_E164}`;
    }

    function openGoogleMaps() {
        window.open(mapsLinkGoogle(), "_blank");
    }
    function openAppleMaps() {
        window.open(mapsLinkApple(), "_blank");
    }

    function openWhatsApp() {
        const base = `https://wa.me/${WA_NUMBER}?text=`;
        const link = mapsLinkGoogle();
        const msg =
            `I need towing/roadside assistance.
Location (Google Maps): ${link}
Highway/City: ${city}
Reference/mile/exit: ${loc || "(no details)"}
Vehicle: [Make/Model/Color]  Plate: ______
Type of help: [Towing / Battery / Tire / Fuel / Lockout]
Safety notes: [Right shoulder / Parking lot / Level -2]`;
        window.open(base + encodeURIComponent(msg), "_blank");
    }

    return (
        <section className="relative overflow-hidden" aria-label="Towing & Roadside Assistance">
            {/* Fondo */}
            {/* VISUAL DESKTOP A LA DERECHA (no afecta móvil) */}
            <div
                aria-hidden
                className="hidden lg:block absolute inset-y-24 right-0 w-[48%] pointer-events-none"
            >
                {/* Glow morado/cian detrás del camión */}
                <div
                    className="absolute -top-10 -left-24 h-[520px] w-[520px] blur-3xl opacity-70"
                    style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(141,67,255,0.9) 0%, rgba(141,67,255,0) 70%)" }}
                />
                <div
                    className="absolute top-40 right-0 h-[420px] w-[420px] blur-3xl opacity-80"
                    style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,212,255,0.9) 0%, rgba(0,212,255,0) 70%)" }}
                />

                {/* Líneas de velocidad sutiles */}
                <div
                    className="absolute inset-0 opacity-25"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(110deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 12px)",
                    }}
                />

                {/* Camión recortado (PNG/WebP con fondo transparente) */}
                <div className="absolute bottom-0 right-6 w-[640px] max-w-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                    <Image
                        src="/fondo1.png"   // <- usa tu recorte transparente
                        alt="Tow truck"
                        width={1280}
                        height={720}
                        sizes="(min-width: 1024px) 640px, 0px"
                        priority
                        className="w-full h-auto select-none pointer-events-none"
                        quality={88}
                    />
                </div>

                {/* Vignette suave al borde para integrar con el fondo */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.25) 95%)" }} />
            </div>


            <div className="absolute inset-0 -z-10">
                <Image
                    src="/fondo1.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    quality={85}
                    className="block md:hidden object-cover object-center select-none pointer-events-none"
                />

            </div>

            {/* Contenedor pantalla completa para pegar CTA abajo */}
            <div
                className="relative mx-auto max-w-screen-lg px-5 pt-24 md:pt-28 lg:pt-32 pb-4 lg:pb-8 min-h-[100svh] flex flex-col
             before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px
             before:bg-gradient-to-r before:from-cyan-400/0 before:via-cyan-400/80 before:to-fuchsia-500/0"
                style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
                {/* Texto arriba */}
                <div className="max-w-2xl mt-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-extrabold text-white">
                        Towing Service and
                        <br />
                        Roadside Assistance in{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500">
                            {city}
                        </span>
                    </h1>

                    <p className="mt-4 text-white/90 text-base sm:text-lg">
                        Faster arrival. Accurate ETA and certified operators 24/7.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        {["24/7", "Real-time ETA", "Operators"].map((t) => (
                            <span
                                key={t}
                                className="group relative px-4 py-2 rounded-full text-sm text-white/95 bg-white/5 ring-1 ring-white/15
                     shadow-[0_0_22px_-6px_rgba(59,130,246,0.45)]
                     hover:bg-white/10 transition"
                            >
                                {/* halo sutil neón */}
                                <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition
                           bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),rgba(168,85,247,0.15)_60%,transparent_75%)]" />
                                <span className="relative z-10">{t}</span>
                            </span>
                        ))}
                    </div>
                </div>

                {/* === Lanzador flotante (EMERGENCIA 24/7) === */}
                <button
                    type="button"
                    onClick={() => setSheetOpen(true)}
                    aria-label="Open SOS — request emergency help"
                    className="absolute z-50 bottom-25 right-5 md:bottom-7 md:right-7
               flex items-center gap-2 h-14 rounded-full px-5
               text-white font-extrabold
               bg-gradient-to-br from-cyan-500 via-indigo-500 to-fuchsia-500
               shadow-[0_18px_50px_-10px_rgba(56,189,248,0.55)]
               ring-1 ring-cyan-400/40 backdrop-blur
               hover:opacity-95 transition"
                >
                    {/* Ping sutil de atención */}
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 rounded-full animate-ping bg-red-500/25"
                    />
                    <span className="whitespace-nowrap">Emergency 24/7</span>

                    {/* Badge SOS rojo para reforzar intención */}
                    <span className="ml-1 text-[10px] font-black bg-red-600 px-2 py-0.5 rounded-full">
                        SOS
                    </span>
                </button>

                {/* Overlay */}
                <div
                    onClick={() => setSheetOpen(false)}
                    className={`fixed inset-0 z-40 bg-black/60 transition-opacity
      ${sheetOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                />

                {/* Bottom Sheet con acciones */}
                <div
                    className={`fixed inset-x-0 bottom-0 z-50
      transition-transform duration-250 ease-out
      ${sheetOpen ? "translate-y-0" : "translate-y-full"}`}
                    style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
                    aria-hidden={!sheetOpen}
                >
                    <div
                        className="mx-auto max-w-screen-sm rounded-t-[24px] border-t border-white/10
                 bg-black/85 backdrop-blur-xl px-4 pt-3 pb-4 flex flex-col gap-3
                 shadow-[0_-18px_60px_-20px_rgba(99,102,241,0.55)]
                 before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px
                 before:bg-gradient-to-r before:from-cyan-400/0 before:via-cyan-400/80 before:to-fuchsia-500/0"
                    >
                        {/* handle */}
                        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/20" />
                        {/* Llamar ahora */}
                        <button
                            type="button"
                            onClick={openTel}
                            className=" w-full rounded-3xl px-5 py-3 text-xl font-extrabold text-white
                   bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500
                   hover:opacity-95 transition
                   ring-1 ring-cyan-400/40 shadow-[0_14px_36px_-12px_rgba(56,189,248,0.55)]
                   flex items-center justify-center gap-2"
                        >
                            <PhoneIcon className="h-14 w-14" />
                            Call Now • {DISPLAY_PHONE}
                        </button>
                        {/* CTA WhatsApp (más llamativo) */}
                        <button
                            type="button"
                            onClick={openWhatsApp}
                            aria-label="Send my location via WhatsApp"
                            className="group w-full mt-2 relative rounded-3xl px-4  text-lg font-extrabold text-white
                   [--g1:#28E576] [--g2:#25D366] [--g3:#1FB556]
                   bg-[linear-gradient(180deg,var(--g1),var(--g2)_60%,var(--g3))]
                   shadow-[0_18px_40px_rgba(37,211,102,0.35)]
                   ring-1 ring-emerald-300/35 overflow-hidden"
                        >
                            <span className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity bg-white" />
                            <span className="flex items-center justify-center gap-3">
                                <span className="grid place-items-center h-14 w-14 rounded-2xl bg-white/10 ring-1 ring-white/25 shadow-inner">
                                    <WhatsAppIcon className="h-10 w-10 text-white" />
                                </span>
                                Send Location on WhatsApp
                            </span>
                        </button>



                        {/* Botones de pin manual */}
                        <div className="mt-3 grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={openGoogleMaps}
                                className="rounded-2xl px-4 py-3 font-semibold text-white/95
                     ring-1 ring-white/20 bg-white/[0.04] hover:bg-white/10 transition
                     flex items-center justify-center gap-2"
                            >
                                <MapPinIcon className="h-5 w-5 text-cyan-300" />
                                Google Maps
                            </button>
                            <button
                                type="button"
                                onClick={openAppleMaps}
                                className="rounded-2xl px-4 py-3 font-semibold text-white/95
                     ring-1 ring-white/20 bg-white/[0.04] hover:bg-white/10 transition
                     flex items-center justify-center gap-2"
                            >
                                <MapPinIcon className="h-5 w-5 text-fuchsia-300" />
                                Apple Maps
                            </button>
                        </div>

                        {/* Nota para WhatsApp + enviar rápido */}
                        <div className="mt-3">
                            <label htmlFor="loc" className="block text-white/85 text-xs font-medium mb-1">
                                Note for the operator <span className="text-white/60">(will be sent via WhatsApp)</span>
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                                    <NoteIcon className="h-5 w-5 text-white/40" />
                                </div>
                                <input
                                    id="loc"
                                    value={loc}
                                    onChange={(e) => setLoc(e.target.value)}
                                    placeholder="Highway/mile or landmark (e.g., I-75 N, mm 245, right shoulder)"
                                    className="w-full text-white placeholder-white/60 bg-white/10 ring-1 ring-white/20
                       rounded-2xl pl-10 pr-12 py-3 outline-none
                       focus:ring-4 focus:ring-cyan-400/40"
                                />
                                <button
                                    type="button"
                                    onClick={openWhatsApp}
                                    aria-label="Send via WhatsApp"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center h-9 w-9 rounded-full
                       bg-[#25D366] ring-1 ring-black/10
                       shadow-[0_10px_24px_rgba(37,211,102,0.45)] hover:brightness-110"
                                >
                                    <SendIcon className="h-5 w-5 text-white" />
                                </button>
                            </div>
                            <p className="mt-1 text-[11px] text-white/70">
                                Tip: press and hold on the map to drop a pin and share it via WhatsApp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
}

/* === Iconos (inline, sin dependencias) === */
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.4 22 2 13.6 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" />
        </svg>
    );
}
function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
            <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.254.59 4.372 1.62 6.21L3.2 28.8l6.74-1.59a12.73 12.73 0 006.064 1.55c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 2.4c5.75 0 10.4 4.65 10.4 10.4s-4.65 10.4-10.4 10.4a10.3 10.3 0 01-5.19-1.38l-.37-.21-4.03.95.95-4.03-.21-.37A10.31 10.31 0 015.6 16c0-5.75 4.65-10.4 10.4-10.4zm5.9 14.93c-.13.37-.75.71-1.04.76-.27.05-.62.07-1 .07-.34 0-.87-.09-1.33-.22-1.21-.38-2.23-.99-3.24-1.91-1.02-.93-2-2.2-2.46-3.13-.46-.93-.68-2.05-.68-2.46 0-.41.26-.95.63-1.28.17-.15.38-.21.5-.21.12 0 .25 0 .36.01.11.01.28-.04.44.34.16.38.55 1.32.6 1.42.05.1.08.22.01.36-.07.14-.11.23-.22.36-.11.13-.24.29-.34.39-.11.11-.22.23-.1.45.12.22.54.89 1.17 1.45.81.72 1.49.94 1.71 1.05.22.11.35.1.48-.06.13-.16.56-.65.71-.87.15-.22.3-.18.5-.11.2.07 1.26.59 1.48.7.22.11.37.16.42.25.05.09.05.53-.08.9z" />
        </svg>
    );
}
function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <path d="M12 22s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z" />
            <circle cx="12" cy="11" r="3" />
        </svg>
    );
}
function LifebuoyIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3.5" />
            <path d="M5.6 5.6l3 3M18.4 5.6l-3 3M5.6 18.4l3-3M18.4 18.4l-3-3" />
        </svg>
    );
}
function SendIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M3.4 20.6l17.7-8.2c.5-.2.5-.9 0-1.1L3.4 3.1c-.5-.2-1 .2-.9.7l1.9 6.1c.1.4.5.6.9.6h6.6c.2 0 .3.3.1.4l-5.8 4.1c-.3.2-.4.7-.2 1l2.8 4.5c.3.5 1 .3 1.1-.2l1.2-4.7c.1-.3-.1-.6-.4-.7l-3.7-1.3c-.2-.1-.2-.4 0-.6l12.5-8.8" />
        </svg>
    );
}

function NoteIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M8 9h8M8 13h8M8 17h5" />
        </svg>
    );
}
function SirenIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <path d="M7 11V9a5 5 0 0 1 10 0v2" />
            <rect x="4" y="11" width="16" height="7" rx="2" />
            <path d="M6 18h12" />
            <path d="M2 8l2 1" />
            <path d="M20 8l-2 1" />
            <path d="M12 3v2" />
        </svg>
    );
}
