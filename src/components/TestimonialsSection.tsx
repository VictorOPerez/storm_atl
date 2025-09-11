"use client"
import Fondo from "./Fondo";
import Stars from "./Stars";
import { AnimatedTestimonials } from "./ui/animated-testimonials";



const testimonials = [
    {
        quote:
            "Camino a una reunión se me averió el coche. Llegaron en 12 minutos, aseguraron con amarres de 4 puntos y no hubo ni un rasguño. ETA exacto y trato profesional.",
        name: "Javier G.",
        designation: "Fundador de Startup Tecnológica",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "En un rodaje nocturno me quedé sin batería. Hicieron un jump start con equipo protegido y revisaron carga del sistema. Pudimos continuar a tiempo.",
        name: "Sofía L.",
        designation: "Directora Creativa",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Pinché en la I-85 y el técnico cambió la llanta rápido, manteniéndome seguro fuera del acotamiento. Precio claro, sin sorpresas.",
        name: "Carlos M.",
        designation: "Consultor Financiero",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Llegaron al hospital para abrir mi auto sin dañar biseles ni burletes. Trabajo limpio y certificado (WreckMaster). Servicio muy confiable.",
        name: "Dra. Isabel Peña",
        designation: "Médico de Familia",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Con los niños en el carro me quedé sin combustible. Me llevaron el correcto y luego remolcaron hasta el taller. Coordinación por WhatsApp y atención 24/7 de primera.",
        name: "Marcela V.",
        designation: "Gerente de Proyectos",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]



export function TestimonialsSection() {
    return (
        <section className=" relative md:py-22 px-4 sm:px-6 lg:px-8 py-10 overflow-hidden pt-20">
            <div className="  h-full w-full">

                <Fondo />
            </div>
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    Lo que dicen nuestros clientes
                </h2>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md  sm:p-10 flex flex-col sm:flex-row gap-6 items-start border border-[#275B59]/20">

                <div className="text-left flex-1">
                    <AnimatedTestimonials testimonials={testimonials} />
                    <Stars size={20} className="mb-2" />
                </div>
            </div>
        </section>
    );
}