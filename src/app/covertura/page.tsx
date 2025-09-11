import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Área de Cobertura | Atlanta Towing",
    description:
        "Cobertura de servicio de grúa y asistencia vial en Atlanta y alrededores: ciudades, condados y autopistas.",
    alternates: { canonical: "/area-de-cobertura" },
};

import CoverageMapClient from "@/components/CoverageMapClient";

const GRADIENT =
    "linear-gradient(12deg,#8E2DE2 0%,#4F46E5 45%,#00C2FF 100%)";

export default function CoveragePage() {
    return (
        <main className="min-h-[100dvh] bg-[#0B0B10] text-white">
            {/* Header con logo + CTAs (como tu mockup) */}


            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
                <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Área de Cobertura
                </h1>

                {/* Mapa incrustado con polígono */}
                <section className="mt-6">
                    <CoverageMapClient />
                </section>

                {/* Listas: ciudades, condados, autopistas */}
                <SectionCard title="Ciudades">
                    <ul className="space-y-1 text-lg">
                        <li>• Atlanta, Decatur, Marietta, Sandy Springs, etc.</li>
                    </ul>
                </SectionCard>

                <SectionCard title="Condados">
                    <ul className="space-y-1 text-lg">
                        <li>• Fulton, DeKalb, Cobb, Gwinnett, Clayton</li>
                    </ul>
                </SectionCard>

                <SectionCard title="Autopistas y referencias">
                    <ul className="space-y-1 text-lg">
                        <li>• I-285 · I-75 · I-85 · 20 · GA-400 · I-675</li>
                        <li>• Hartsfield-Jackson</li>
                    </ul>
                </SectionCard>
            </div>
        </main>
    );
}

function SectionCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mt-5">
            <div
                className="rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-4"
                style={{
                    boxShadow:
                        "0 1px 0 rgba(255,255,255,0.03) inset, 0 10px 30px rgba(0,0,0,0.15)",
                }}
            >
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <div className="text-slate-200">{children}</div>
            </div>
        </section>
    );
}
