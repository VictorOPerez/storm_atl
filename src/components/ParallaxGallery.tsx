"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type Props = { images?: string[] };

// Imágenes locales
const DEFAULT_IMAGES = [
    "/galeria/1.jpg",
    "/galeria/2.jpg",
    "/galeria/3.jpg",
    "/galeria/4.jpg",
    "/galeria/5.jpg",
    "/galeria/6.jpg",
    "/galeria/7.jpg",
    "/galeria/8.jpg",
    "/galeria/9.jpg",
    "/galeria/10.jpg",
    "/galeria/11.jpg",
    "/galeria/12.jpg",
];

// alturas por tarjeta en % de viewport (ciclo 3 items)
const HEIGHTS_VH = [46, 34, 52] as const;
// factores de parallax por columna (la 4ª es solo desktop)
const RATES = [0.5, 1.0, 0.5, 0.5] as const;

// ---- hook media query (Tailwind lg = 1024px) ----
function useMedia(query: string) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const m = window.matchMedia(query);
        const onChange = () => setMatches(m.matches);
        onChange();
        // compatibilidad
        m.addEventListener?.("change", onChange) ?? m.addListener(onChange);
        return () =>
            m.removeEventListener?.("change", onChange) ?? m.removeListener(onChange);
    }, [query]);
    return matches;
}

export default function ParallaxGallery({ images = DEFAULT_IMAGES }: Props) {
    const isDesktop = useMedia("(min-width: 1024px)");

    // Smooth scroll
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
        let rafId = requestAnimationFrame(function raf(t) {
            lenis.raf(t);
            rafId = requestAnimationFrame(raf);
        });
        return () => cancelAnimationFrame(rafId);
    }, []);

    const prefersReduced = useReducedMotion();
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const [vhPx, setVhPx] = useState(0);

    // altura del viewport (px) estable
    useEffect(() => {
        const onResize = () => setVhPx(window.innerHeight);
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // useScroll
    const { scrollYProgress } = useScroll({
        target: galleryRef,
        offset: ["start end", "end start"],
    });

    // Transforms por columna
    const y1 = useTransform(scrollYProgress, [0, 1], [-vhPx * 0.5, vhPx * RATES[0]]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-vhPx * 0.5, vhPx * RATES[1]]);
    const y3 = useTransform(scrollYProgress, [0, 1], [-vhPx * 0.5, vhPx * RATES[2]]);
    const y4 = useTransform(scrollYProgress, [0, 1], [-vhPx * 0.5, vhPx * RATES[3]]);
    const styles = [y1, y2, y3, y4].map((y) => (prefersReduced ? {} : { y }));

    // ------- Distribución base de imágenes -------
    // Desktop: 4 columnas balanceadas
    const desktopBase = useMemo(() => {
        const c = [[], [], [], []] as string[][];
        images.forEach((src, i) => c[i % 4].push(src));
        return c;
    }, [images]);

    // Mobile: exactamente 6 y 6 (sin repetir)
    const mobileBase = useMemo(() => {
        const first12 = images.slice(0, 12);
        return [first12.slice(0, 6), first12.slice(6, 12)];
    }, [images]);

    const baseCols = isDesktop ? desktopBase : mobileBase;

    // Calcular cuántas repeticiones necesitamos para cubrir parallax.
    // Solo repetimos en desktop; en móvil queremos NO repetir (6/6 exacto).
    const repeats = useMemo(() => {
        if (!isDesktop) return 1;
        const perCycleVh = HEIGHTS_VH.reduce((a, b) => a + b, 0); // 132vh
        const needVh = 100 + Math.max(...RATES) * 100; // 100vh + max translate
        return Math.max(2, Math.ceil(needVh / perCycleVh));
    }, [isDesktop]);

    // Convertir a [{src,key}] y aplicar repeticiones si corresponde
    type ImgItem = { src: string; key: string };
    const cols: ImgItem[][] = useMemo(() => {
        return baseCols.map((col) =>
            Array.from({ length: repeats }).flatMap((_, r) =>
                col.map((src, i) => ({ src, key: `${src}-${r}-${i}` }))
            )
        );
    }, [baseCols, repeats]);

    return (
        <section className="w-screen overflow-hidden bg-transparent h-[240vh]">
            <div ref={galleryRef} className="relative w-full">
                <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 px-0">
                    {cols.map((c, idx) => (
                        <Column
                            key={`col-${idx}`}
                            images={c}
                            style={styles[idx] ?? styles[0]}
                            vhPx={vhPx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// -------- Subcomponentes --------

type ImgItem = { src: string; key: string };

const Column = React.memo(function Column({
    images,
    style,
    className = "",
    vhPx,
}: {
    images: ImgItem[];
    style?: React.ComponentProps<typeof motion.div>["style"];
    className?: string;
    vhPx: number;
}) {
    return (
        <motion.div
            style={style}
            className={`relative flex flex-col gap-3 lg:gap-4 will-change-transform ${className}`}
        >
            {images.map((item, i) => {
                const hPx = Math.round(vhPx * (HEIGHTS_VH[i % HEIGHTS_VH.length] / 100));
                return (
                    <div
                        key={item.key}
                        className="relative w-full overflow-hidden rounded-2xl bg-black/20"
                        style={{ height: hPx, contain: "layout paint style" }}
                    >
                        <Image
                            src={item.src}
                            alt=""
                            fill
                            priority={false}
                            sizes="(min-width:1024px) 25vw, 50vw"
                            className="object-cover select-none"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                    </div>
                );
            })}
        </motion.div>
    );
});
