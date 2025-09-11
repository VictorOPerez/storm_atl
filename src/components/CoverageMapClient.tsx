"use client";
import dynamic from "next/dynamic";

// IMPORTA *ESTE* archivo (CoverageMapInner), no otro:
const CoverageMapInner = dynamic(() => import("./CoverageMapInner"), {
    ssr: false,
    loading: () => (
        <div className="h-[min(60vh,560px)] w-full rounded-2xl bg-white/5 animate-pulse ring-1 ring-white/10" />
    ),
});
export default function CoverageMapClient() {
    return <CoverageMapInner />;
}
