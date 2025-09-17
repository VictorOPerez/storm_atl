"use client"
import Fondo from "./Fondo";
import Stars from "./Stars";
import { AnimatedTestimonials } from "./ui/animated-testimonials";



const testimonials = [
    {
        quote:
            "Running late to a meeting, my car died. They gave a 15-min ETA and arrived in 12, loaded with four tie-downs, and handled everything carefully. Clear pricing and very professional.",
        name: "Javier G.",
        designation: "Tech Startup Founder",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Overnight shoot, dead battery. They used protected jump equipment, checked charging, and explained what to watch after. We were filming again in under twenty minutes. Total lifesavers.",
        name: "Sofía L.",
        designation: "Creative Director",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Flat on I-85. The tech had me pull over somewhere safe, swapped the spare with the right torque, and checked pressure. They charged exactly what they’d quoted. Fast and straightforward.",
        name: "Carlos M.",
        designation: "Financial Consultant",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Locked my keys in the car at the hospital. They arrived quickly and opened it without scratching trim or weatherstrips. Careful work, clearly certified (WreckMaster). Highly recommended.",
        name: "Juan Peña",
        designation: "Family Physician",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        quote:
            "Ran out of gas with the kids. They brought the right fuel, verified the start, and, as a safety step, towed us to the shop. Coordinated everything over WhatsApp. Kind and patient.",
        name: "Marcelo V.",
        designation: "Project Manager",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];


export function TestimonialsSection() {
    return (
        <section className=" relative md:py-22 px-4 sm:px-6 lg:px-8 py-10 overflow-hidden pt-20">
            <div className="  h-full w-full">

                <Fondo />
            </div>
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    What our customers are saying
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