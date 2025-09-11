"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useId } from "react";
import remolque from "../../public/servicios/remolque.png";
import bateria from "../../public/servicios/bateria.png";
import tire from "../../public/servicios/tire.png";
import openImg from "../../public/servicios/open.png";
import lodo from "../../public/servicios/lodo.png";
import gas from "../../public/servicios/gas.png";
import { StaticImageData } from "next/image";


export function Carruselseccion() {
    const cards = data.map((card, index) => (
        <Card key={`${card.title}-${index}`} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-5">
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <img
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};
export function FancyList({ items }: { items: string[] }) {
    return (
        <ul className="mt-3 space-y-2.5">
            {items.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed">
                    <span
                        className="mt-2 h-1.5 w-1.5 rounded-full
                       bg-gradient-to-r from-[#8D43FF] to-[#00D4FF]" />
                    <span className="text-white/90">{t}</span>
                </li>
            ))}
        </ul>
    );
}


type NeonIcon = React.ComponentType<{ className?: string }>;

type CardData = {
    category: string;
    title: string;
    src: string | StaticImageData;
    content: React.ReactNode;
    Icon: React.ComponentType<{ className?: string }>;
};


// Usa tus propias imágenes si quieres (colócalas en /public/images/services/*)
const data: CardData[] = [
    {
        category: "Servicio",
        title: "Remolque Seguro 24/7",
        src: remolque,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    Remolque rápido y cuidadoso para averías o accidentes. Flota moderna, operadores
                    WreckMaster y amarres de 4 puntos para cero daños.
                </p>
                {/* Remolque Seguro 24/7 */}
                <FancyList
                    items={[
                        "Plataforma y arrastre según el vehículo",
                        "Traslado a tu taller o destino",
                        "ETA en tiempo real y precio confirmado",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Ideal para: fallas mecánicas, colisiones, traslados programados.
                </p>
            </div>
        ),
        Icon: TowNeon,
    },

    {
        category: "Servicio",
        title: "Arranque de Batería",
        src: bateria,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    Diagnóstico básico y <em>jump start</em> seguro. Usamos equipos protegidos para
                    no dañar tu electrónica.
                </p>
                {/* Arranque de Batería */}
                <FancyList
                    items={[
                        "Prueba de voltaje de batería",
                        "Booster/puenteo con protección",
                        "Recomendaciones si requiere reemplazo",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Útil cuando: luces débiles, clic del arrancador, batería descargada.
                </p>
            </div>
        ),
        Icon: BatteryNeon,
    },

    {
        category: "Servicio",
        title: "Cambio de Llanta en Ruta",
        src: tire,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    Sustituimos tu llanta pinchada por la de repuesto de forma rápida y segura, sin
                    que te arriesgues en el acotamiento.
                </p>
                {/* Cambio de Llanta en Ruta */}
                <FancyList
                    items={[
                        "Herramientas adecuadas y torque correcto",
                        "Revisión de presión del repuesto",
                        "Asesoría si el repuesto no es usable",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Ten a mano: ubicación, tipo de rin y si tienes tu llanta de repuesto.
                </p>
            </div>
        ),
        Icon: TireNeon,
    },

    {
        category: "Servicio",
        title: "Apertura sin Daños",
        src: openImg,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    Apertura profesional de puertas sin afectar biseles ni burletes. Técnicas
                    no invasivas y cuidado del acabado.
                </p>
                {/* Apertura sin Daños */}
                <FancyList
                    items={[
                        "Herramientas específicas por modelo",
                        "Verificación básica de propiedad",
                        "Revisión de funcionamiento de seguros",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Ten a mano: identificación y datos del vehículo.
                </p>
            </div>
        ),
        Icon: DoorNeon,
    },

    {
        category: "Servicio",
        title: "Rescate / Winch-Out",
        src: lodo,
        content: (
            <div className="space-y-4 text-neutral-400 dark:text-neutral-200">
                <p>
                    Extracción segura de vehículos atascados en lodo, cunetas o pendientes.
                    Evaluamos puntos de anclaje y ángulos para evitar daños.
                </p>
                {/* Rescate / Winch-Out */}
                <FancyList
                    items={[
                        "Cabresto, eslingas y protecciones",
                        "Maniobra controlada por operadores certificados",
                        "Inspección visual posterior",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Comparte: tipo de terreno, tracción del vehículo y si hay obstáculos.
                </p>
            </div>
        ),
        Icon: WinchNeon,
    },

    {
        category: "Servicio",
        title: "Entrega de Combustible",
        src: gas,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    Te llevamos el combustible correcto para que continúes tu ruta sin
                    complicaciones.
                </p>
                {/* Entrega de Combustible */}
                <FancyList
                    items={[
                        "Gasolina regular, premium o diésel",
                        "Carga segura y limpia",
                        "Verificación de arranque",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Indica: tipo de combustible y cantidad aproximada.
                </p>
            </div>
        ),
        Icon: FuelNeon,
    },
];
/* ---------- UI helpers ---------- */

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
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,.6))" }}
            aria-hidden
        >
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8D43FF" />
                    <stop offset="1" stopColor="#00D4FF" />
                </linearGradient>
            </defs>

            <g
                stroke={`url(#${id})`}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* borde izquierdo y derecho de la vía (perspectiva) */}
                <path d="M4 20 L9 4" />
                <path d="M20 20 L15 4" />

                {/* línea discontinua central */}
                <path d="M12 20 L12 8" strokeDasharray="2.5 3.5" />

                {/* base/horizonte */}
                <path d="M3 20 H21" />
            </g>
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
