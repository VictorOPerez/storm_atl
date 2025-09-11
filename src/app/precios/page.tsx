// app/precios/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Precios | Atlanta Towing",
    description:
        "Transparencia total 24/7. Tarifas de remolque y asistencia vial de Atlanta Towing.",
    alternates: { canonical: "/precios" },
};

export default function PreciosPage() {
    return (
        <main className="min-h-[100dvh] bg-[#0A0A0A] text-white antialiased">
            <div className="mx-auto w-full max-w-[780px] px-5 py-10 sm:py-14">
                {/* Título */}
                <h1 className="text-center text-[52px] leading-none font-extrabold tracking-[0.04em] sm:text-[68px]">
                    PRECIOS
                </h1>
                <p className="mt-3 text-center text-[18px] sm:text-[20px] tracking-[0.2em] text-white/60 uppercase">
                    TRANSPARENCIA TOTAL 24/7
                </p>

                {/* línea roja */}
                <div className="mt-6 h-[2px] w-full bg-[#D3413C]/90"></div>

                {/* --------- TARIFAS DE REMOLQUE --------- */}
                <SectionTitle>Tarifas de Remolque</SectionTitle>

                <Box>
                    <Row label="Enganche" price="$XX" />
                    <Divider />
                    <Row label="Por milla" price="$X.X" />
                    <Divider />
                    <Row
                        label="Recargos"
                        price={
                            <>
                                Fuera de horario
                                <br />
                                Km &gt; 30 millas
                                <br />
                                4x4
                            </>
                        }
                    />
                </Box>

                {/* --------- TARIFAS FIJAS DE ASISTENCIA VIAL --------- */}
                <SectionTitle>Tarifas fijas de asistencia vial</SectionTitle>

                <Box>
                    <Row label="Cambio de llanta" price="$XX" />
                    <Divider />
                    <Row label="Paso de corriente" price="$XX" />
                    <Divider />
                    <Row label="Apertura de puertas" price="$XX" />
                    <Divider />
                    <Row label="Entrega de combustible" price="$XX" />
                    <Divider />
                    <Row label="Winch out" price="$XX" />
                </Box>

                {/* Aclaración */}
                <div className="mt-8 text-[15px] leading-relaxed">
                    <span className="font-extrabold tracking-wide">ACLARACIÓN</span>
                    <span className="text-white/85">
                        {" "}
                        Estos son nuestros precios estándar. El operador confirmará el costo
                        final según distancia, tipo de vehículo y condiciones del servicio.
                    </span>
                </div>
            </div>
        </main>
    );
}

/* ---------- Subcomponentes ---------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mt-8 mb-3 text-[26px] sm:text-[28px] font-extrabold uppercase tracking-wide">
            {children}
        </h2>
    );
}

function Box({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="rounded-2xl border border-white/80"
            style={{
                background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
            }}
        >
            {children}
        </div>
    );
}

function Divider() {
    return <div className="h-px w-full bg-white/60"></div>;
}

function Row({
    label,
    price,
}: {
    label: React.ReactNode;
    price: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-[1fr,auto] items-center px-5 sm:px-6 py-5 sm:py-6">
            <div className="text-[22px] sm:text-[24px]">{label}</div>
            <div className="text-right text-[22px] sm:text-[24px] font-semibold whitespace-pre-line">
                {price}
            </div>
        </div>
    );
}
