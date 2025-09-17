// app/precios/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | Atlanta Towing",
    description:
        "Full transparency 24/7. Atlanta Towing’s towing and roadside assistance rates.",
    alternates: { canonical: "/precios" },
};

export default function PreciosPage() {
    return (
        <main className="min-h-[100dvh] bg-[#0A0A0A] text-white antialiased">
            <div className="mx-auto w-full max-w-[780px] px-5 py-10 sm:py-14">
                {/* Título */}
                <h1 className="text-center text-[52px] leading-none font-extrabold tracking-[0.04em] sm:text-[68px]">
                    PRICING
                </h1>
                <p className="mt-3 text-center text-[18px] sm:text-[20px] tracking-[0.2em] text-white/60 uppercase">
                    24/7 FULL TRANSPARENCY
                </p>

                {/* línea roja */}
                <div className="mt-6 h-[2px] w-full bg-[#D3413C]/90"></div>

                {/* --------- TARIFAS DE REMOLQUE --------- */}
                <SectionTitle>Towing Rates</SectionTitle>

                <Box>
                    <Row label="Hook-up fee" price="$XX" />
                    <Divider />
                    <Row label="Per mile" price="$X.X" />
                    <Divider />
                    <Row
                        label="Surcharges"
                        price={
                            <>
                                After-hours
                                <br />
                                Over 30 miles
                                <br />
                                4x4
                            </>
                        }
                    />
                </Box>

                {/* --------- TARIFAS FIJAS DE ASISTENCIA VIAL --------- */}
                <SectionTitle>Flat Roadside Assistance Rates</SectionTitle>

                <Box>
                    <Row label="Tire change" price="$XX" />
                    <Divider />
                    <Row label="Jump start" price="$XX" />
                    <Divider />
                    <Row label="Lockout (door unlock)" price="$XX" />
                    <Divider />
                    <Row label="Fuel delivery" price="$XX" />
                    <Divider />
                    <Row label="Winch-out" price="$XX" />
                </Box>

                {/* Aclaración */}
                <div className="mt-8 text-[15px] leading-relaxed">
                    <span className="font-extrabold tracking-wide">NOTE</span>
                    <span className="text-white/85">
                        {" "}
                        These are our standard prices. The operator will confirm the final
                        cost based on distance, vehicle type, and service conditions.
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
