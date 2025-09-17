"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useId } from "react";
import remolque from "../../public/servicios/remolque.webp";
import bateria from "../../public/servicios/bateria.png";
import bateriaheavy from "../../public/servicios/bateriaheavy.webp";
import tire from "../../public/servicios/tire.webp";
import openImg from "../../public/servicios/open.webp";
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
        category: "Service",
        title: "Safe Towing 24/7",
        src: remolque,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    Fast, careful towing for breakdowns or accidents. Modern fleet, WreckMaster
                    operators, and 4-point tie-downs for zero damage.
                </p>
                {/* Remolque Seguro 24/7 */}
                <FancyList
                    items={[
                        "Flatbed and wheel-lift as needed",
                        "Transport to your shop or destination",
                        "Real-time ETA and confirmed price",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Ideal for: mechanical breakdowns, collisions, scheduled moves.
                </p>
            </div>
        ),
        Icon: TowNeon,
    },

    {
        category: "Service",
        title: "Heavy Duty Jump Starter",
        src: bateriaheavy,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    Professional heavy-duty <em>jump start</em> for trucks, buses, RVs, and equipment.
                    12/24V commercial-grade booster with safe connection sequence to protect the ECM
                    and sensitive electronics.
                </p>
                {/* Arranque de Batería (Heavy Duty) */}
                <FancyList
                    items={[
                        "12/24V high-amperage booster for diesel engines",
                        "Safe, ECM-friendly connection for trucks, buses & machinery",
                        "Voltage check and alternator test when possible",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Useful when: no crank, dim lights, repeated clicking, or after long idle time.
                </p>
            </div>
        ),
        Icon: BatteryNeon,
    },
    {
        category: "Service",
        title: "Battery Jump Start",
        src: bateria,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    Basic diagnostics and a safe <em>jump start</em>. We use protected equipment to
                    avoid damaging your electronics.
                </p>
                {/* Arranque de Batería */}
                <FancyList
                    items={[
                        "Battery voltage test",
                        "Protected boost/jump",
                        "Recommendations if replacement is needed",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Useful when: dim lights, starter click, dead battery.
                </p>
            </div>
        ),
        Icon: BatteryNeon,
    },

    {
        category: "Service",
        title: "On-Road Tire Change",
        src: tire,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    We replace your flat with the spare quickly and safely, so you don’t risk
                    yourself on the shoulder.
                </p>
                {/* Cambio de Llanta en Ruta */}
                <FancyList
                    items={[
                        "Proper tools and correct torque",
                        "Spare’s pressure check",
                        "Advice if the spare is not usable",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Have ready: location, wheel type, and whether you have a spare.
                </p>
            </div>
        ),
        Icon: TireNeon,
    },

    {
        category: "Service",
        title: "No-Damage Lockout",
        src: openImg,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    Professional door unlocks without harming trim or weatherstrips. Non-invasive
                    techniques and careful finish work.
                </p>
                {/* Apertura sin Daños */}
                <FancyList
                    items={[
                        "Model-specific tools",
                        "Basic ownership verification",
                        "Check door-lock operation afterward",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Have on hand: ID and vehicle details.
                </p>
            </div>
        ),
        Icon: DoorNeon,
    },

    {
        category: "Service",
        title: "Winch-Out / Recovery",
        src: lodo,
        content: (
            <div className="space-y-4 text-neutral-400 dark:text-neutral-200">
                <p>
                    Safe extraction of vehicles stuck in mud, ditches, or slopes. We assess anchor
                    points and angles to avoid damage.
                </p>
                {/* Rescate / Winch-Out */}
                <FancyList
                    items={[
                        "Winch, straps, and protective gear",
                        "Controlled maneuver by certified operators",
                        "Post-recovery visual inspection",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Share: terrain type, vehicle drivetrain, and any obstacles.
                </p>
            </div>
        ),
        Icon: WinchNeon,
    },

    {
        category: "Service",
        title: "Fuel Delivery",
        src: gas,
        content: (
            <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
                <p>
                    We bring the correct fuel so you can continue your trip without hassle.
                </p>
                {/* Entrega de Combustible */}
                <FancyList
                    items={[
                        "Regular, premium gasoline or diesel",
                        "Clean and safe fueling",
                        "Start-up verification",
                    ]}
                />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Tell us: fuel type and approximate amount.
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
