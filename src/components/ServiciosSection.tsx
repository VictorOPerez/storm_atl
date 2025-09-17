// components/ServiciosSection.tsx
"use client";

import { useId } from "react";
import { Carruselseccion } from "./Carruselseccion";
import DailyRoutineHeading from "./TituloParalax";

export default function ServiciosSection() {
    const trust = [
        { title: "+ 50,000", subtitle: "Completed Services", Icon: TrophyNeon },
        { title: "15", subtitle: "Years of Experience", Icon: CalendarNeon },
        { title: "Operators", subtitle: "WreckMaster Certified", Icon: ShieldNeon },
    ];


    return (
        <section className="relative bg-black text-white">
            <div className="mx-auto max-w-screen-lg px-5 py-8 sm:py-10">
                {/* Barra de Confianza */}
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4">
                    {trust.map(({ title, subtitle, Icon }, i) => (
                        <div
                            key={i}
                            className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur  shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex items-center flex-col gap-4 text-center p-4"
                        >
                            <NeonSquare>
                                <Icon className="h-6 w-6" />
                            </NeonSquare>
                            <p className="text-lg font-black tracking-tight">{title}</p>
                            <p className="text-sm text-white/85">{subtitle}</p>
                        </div>
                    ))}
                </div>

                {/* Título */}
                <DailyRoutineHeading text=" CORE SERVICES" className="mt-15" />

                <Carruselseccion />

            </div>
        </section>
    );
}

/* ---------- UI helpers ---------- */
function NeonSquare({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl ring-1 ring-white/15 bg-white/[0.03] grid place-items-center">
            {/* glow sutil */}
            <span className="pointer-events-none absolute inset-0 rounded-xl"
                style={{ boxShadow: "0 0 24px rgba(0,212,255,.28), 0 0 18px rgba(141,67,255,.22) inset" }} />
            <div className="relative">{children}</div>
        </div>
    );
}

/* ---------- Iconos NEÓN (stroke con degradado + glow) ---------- */
// Cada icono define su propio <linearGradient> con useId para evitar colisiones
function TrophyNeon({ className }: { className?: string }) {
    const id = useId();
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={`url(#${id})`} strokeWidth={2} className={className}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,.6))" }}>
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8D43FF" />
                    <stop offset="1" stopColor="#00D4FF" />
                </linearGradient>
            </defs>
            <path d="M8 21h8" />
            <path d="M12 17v4" />
            <path d="M7 4h10v4a5 5 0 01-10 0V4z" />
            <path d="M5 5H3a3 3 0 003 3" />
            <path d="M19 5h2a3 3 0 01-3 3" />
        </svg>
    );
}
function CalendarNeon({ className }: { className?: string }) {
    const id = useId();
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={`url(#${id})`} strokeWidth={2} className={className}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,.6))" }}>
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8D43FF" />
                    <stop offset="1" stopColor="#00D4FF" />
                </linearGradient>
            </defs>
            <rect x="3" y="4" width="18" height="17" rx="3" />
            <path d="M8 2v4M16 2v4M3 10h18" />
            <rect x="9" y="13" width="6" height="5" rx="1" />
        </svg>
    );
}
function ShieldNeon({ className }: { className?: string }) {
    const id = useId();
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={`url(#${id})`} strokeWidth={2} className={className}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,.6))" }}>
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8D43FF" />
                    <stop offset="1" stopColor="#00D4FF" />
                </linearGradient>
            </defs>
            <path d="M12 2l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V5l7-3z" />
            <path d="M9.5 12.5l1.8 1.8L15 10.5" />
        </svg>
    );
}

/* ---- Servicios ---- */
function TowNeon({ className }: { className?: string }) {
    const id = useId();
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={`url(#${id})`} strokeWidth={2} className={className}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,.6))" }}>
            <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8D43FF" /><stop offset="1" stopColor="#00D4FF" /></linearGradient></defs>
            <path d="M3 16h13l4-5-3-2-4 5H9l-2-3H3z" />
            <circle cx="7" cy="18" r="2" />
            <circle cx="17" cy="18" r="2" />
        </svg>
    );
}
function TireNeon({ className }: { className?: string }) {
    const id = useId();
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={`url(#${id})`} strokeWidth={2} className={className}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,.6))" }}>
            <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8D43FF" /><stop offset="1" stopColor="#00D4FF" /></linearGradient></defs>
            <circle cx="12" cy="12" r="6" />
            <path d="M12 6v12M6 12h12M8.5 8.5l7 7M15.5 8.5l-7 7" />
        </svg>
    );
}
function BatteryNeon({ className }: { className?: string }) {
    const id = useId();
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={`url(#${id})`} strokeWidth={2} className={className}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,.6))" }}>
            <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8D43FF" /><stop offset="1" stopColor="#00D4FF" /></linearGradient></defs>
            <rect x="2" y="7" width="18" height="10" rx="2" />
            <path d="M22 10v4" />
            <path d="M10 9l-2 3h3l-2 3" />
        </svg>
    );
}
function DoorNeon({ className }: { className?: string }) {
    const id = useId();
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={`url(#${id})`} strokeWidth={2} className={className}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,.6))" }}>
            <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8D43FF" /><stop offset="1" stopColor="#00D4FF" /></linearGradient></defs>
            <rect x="7" y="3" width="10" height="18" rx="2" />
            <circle cx="12" cy="12" r="1.5" />
        </svg>
    );
}
function FuelNeon({ className }: { className?: string }) {
    const id = useId();
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={`url(#${id})`} strokeWidth={2} className={className}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,.6))" }}>
            <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8D43FF" /><stop offset="1" stopColor="#00D4FF" /></linearGradient></defs>
            <path d="M7 3h7l3 3v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
            <path d="M14 3v5H7" />
            <path d="M18 7l3 3v7a2 2 0 0 1-2 2h-2" />
        </svg>
    );
}
function WinchNeon({ className }: { className?: string }) {
    const id = useId();
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={`url(#${id})`} strokeWidth={2} className={className}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,.6))" }}>
            <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8D43FF" /><stop offset="1" stopColor="#00D4FF" /></linearGradient></defs>
            <path d="M3 15h13a4 4 0 1 0-4-4v4" />
            <path d="M3 15a3 3 0 1 0 6 0" />
            <path d="M20 7v10" />
        </svg>
    );
}
