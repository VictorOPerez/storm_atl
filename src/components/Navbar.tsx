// components/Navbar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    // { label: "Pricing", href: "/precios" },
    { label: "Coverage", href: "/covertura" }, // verifica la ruta si es "cobertura"
    { label: "Contact", href: "/contacto" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);

    // Bloquea scroll al abrir el menú
    useEffect(() => {
        const root = document.documentElement;
        if (open) {
            const prev = root.style.overflow;
            root.style.overflow = "hidden";
            return () => {
                root.style.overflow = prev;
            };
        }
    }, [open]);

    // Cerrar con ESC y clic afuera
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        function onClick(e: MouseEvent) {
            if (!open) return;
            const target = e.target as Node;
            if (
                panelRef.current &&
                !panelRef.current.contains(target) &&
                btnRef.current &&
                !btnRef.current.contains(target)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("keydown", onKey);
        document.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("click", onClick);
        };
    }, [open]);

    return (
        <>
            {/* Header fijo */}
            <header
                className="fixed top-0 inset-x-0 z-50 bg-black h-15 border-b border-white/10"
                style={{ paddingTop: "env(safe-area-inset-top)" }}
            >
                <div className="mx-auto max-w-6xl px-4 h-16 flex items-center gap-3">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 shrink-0 absolute top-3 z-20"
                        aria-label="Go to home"
                    >
                        <Image
                            src="/logo/logo.png"
                            alt="Logo"
                            width={120}
                            height={40}
                            className="h-25 w-auto"
                            priority
                        />
                    </Link>

                    {/* Links desktop */}
                    <nav className="hidden md:flex items-center gap-6 ml-90">
                        {NAV_ITEMS.map((it) => (
                            <Link
                                key={it.href}
                                href={it.href}
                                className="text-sm text-white/80 hover:text-white transition-colors"
                            >
                                {it.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Botón hamburguesa (móvil) */}
                    <div className="ml-auto md:hidden">
                        <button
                            ref={btnRef}
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label="Open menu"
                            className="p-2 rounded-lg border border-white/15 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                        >
                            <BurgerIcon open={open} />
                        </button>
                    </div>
                </div>

                {/* Menú móvil desplegable */}
                <div
                    id="mobile-menu"
                    ref={panelRef}
                    className={`md:hidden bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/55 will-change-transform origin-top transition-transform duration-200 ease-out ${open ? "scale-y-100" : "scale-y-0"
                        }`}
                >
                    <div className="px-4 pt-15 pb-4 bg-black/85 border-t border-white/10">
                        <nav className="flex flex-col">
                            {NAV_ITEMS.map((it) => (
                                <Link
                                    key={it.href}
                                    href={it.href}
                                    onClick={() => setOpen(false)}
                                    className="py-3 text-base text-white/90 border-b border-white/10 last:border-b-0"
                                >
                                    {it.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Espaciador para no tapar el contenido (altura del header) */}
            <div className="h-16" />
        </>
    );
}

function BurgerIcon({ open }: { open: boolean }) {
    return (
        <svg
            className="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            aria-hidden="true"
        >
            {/* línea superior */}
            <path
                d="M4 6H20"
                className={`transition-transform duration-200 ease-out origin-center [transform-box:fill-box] ${open ? "translate-y-[6px] rotate-45" : ""
                    }`}
            />
            {/* línea media */}
            <path
                d="M4 12H20"
                className={`transition-opacity duration-150 ease-out ${open ? "opacity-0" : "opacity-100"
                    }`}
            />
            {/* línea inferior */}
            <path
                d="M4 18H20"
                className={`transition-transform duration-200 ease-out origin-center [transform-box:fill-box] ${open ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
            />
        </svg>
    );
}
