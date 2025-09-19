"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailJSContactForm({
    inputCls,
    gradient,
}: {
    inputCls: string;
    gradient: string;
}) {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        // Asunto sugerido dinámico para tu template {{title}}
        const servicio = (formRef.current.elements.namedItem("servicio") as HTMLSelectElement)?.value ?? "Service";
        const ubicacion = (formRef.current.elements.namedItem("ubicacion") as HTMLInputElement)?.value ?? "";
        const titleInput = formRef.current.elements.namedItem("title") as HTMLInputElement;
        if (titleInput) titleInput.value = `Tow request: ${servicio}${ubicacion ? ` — ${ubicacion}` : ""}`;

        try {
            setStatus("sending");
            emailjs.init({ publicKey: PUBLIC_KEY });
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current);
            setStatus("ok");
            formRef.current.reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <form ref={formRef} onSubmit={onSubmit} className="mt-5 grid grid-cols-1 gap-4">
            {/* Campo oculto para {{title}} en tu template */}
            <input type="hidden" name="title" value="" />

            <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" id="nombre">
                    <input id="nombre" name="name" type="text" required className={inputCls} />
                </Field>
                <Field label="Phone" id="telefono">
                    <input id="telefono" name="telefono" type="tel" inputMode="tel" required className={inputCls} />
                </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" id="email">
                    <input id="email" name="email" type="email" required className={inputCls} />
                </Field>
                <Field label="Plates / Model (optional)" id="vehiculo">
                    <input id="vehiculo" name="vehiculo" type="text" className={inputCls} />
                </Field>
            </div>

            <Field label="Location (address, cross street, or highway mile marker)" id="ubicacion">
                <input
                    id="ubicacion"
                    name="ubicacion"
                    type="text"
                    placeholder="E.g. I-75, mm 242 (northbound)"
                    className={inputCls}
                />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Service type" id="servicio">
                    <select id="servicio" name="servicio" className={inputCls}>
                        <option>Towing</option>
                        <option>Tire change</option>
                        <option>Jump start</option>
                        <option>Lockout</option>
                        <option>Fuel delivery</option>
                        <option>Winch-out</option>
                    </select>
                </Field>
            </div>

            <Field label="Details (optional)" id="mensaje">
                <textarea id="mensaje" name="message" rows={4} className={inputCls} />
            </Field>

            {/* Honeypot anti-spam */}
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="mt-2 flex flex-wrap gap-3">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-xl px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/10 disabled:opacity-60"
                    style={{ background: gradient }}
                >
                    {status === "sending" ? "Sending..." : "Send request"}
                </button>
            </div>

            <p className="mt-2 text-xs text-slate-400">
                {status === "ok" && "✓ Message sent. We’ll contact you shortly."}
                {status === "error" && "There was an error sending your message. Please try again."}
            </p>
        </form>
    );
}

/* Reuso tu subcomponente de etiqueta */
function Field({
    label,
    id,
    children,
}: {
    label: string;
    id: string;
    children: React.ReactNode;
}) {
    return (
        <label htmlFor={id} className="block">
            <span className="text-sm font-semibold text-white/90">{label}</span>
            <div className="mt-1">{children}</div>
        </label>
    );
}
