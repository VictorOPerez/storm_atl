import React from "react";

type DailyRoutineHeadingProps = {
    text: string;
    className?: string; // opcional por si quieres ajustar márgenes/tamaños externamente
};

const DailyRoutineHeading: React.FC<DailyRoutineHeadingProps> = ({ text, className = "" }) => {
    return (
        <div className={`${className}`}>
            <h3
                className={`relative mx-auto w-fit text-center font-extrabold tracking-tight
                  text-3xl sm:text-5xl lg:text-6xl `}
            >
                {/* Línea glow superior */}
                <span
                    aria-hidden
                    className="pointer-events-none absolute -top-3 left-0 right-0 h-px
                   bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-fuchsia-500/0
                   blur-[0.5px]"
                />

                {/* Capa glow (texto difuminado detrás) */}
                <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 select-none
                   bg-clip-text text-transparent
                   bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500
                   opacity-60 blur-md"
                >
                    {text}
                </span>

                {/* Texto nítido */}
                <span
                    className="relative bg-clip-text text-transparent
                   bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400
                   drop-shadow-[0_0_12px_rgba(56,189,248,0.45)]"
                >
                    {text}
                </span>
            </h3>   </div>
    );
};

export default DailyRoutineHeading;
