// app/page.tsx
"use client"
import { Carruselseccion } from "@/components/Carruselseccion";
import Hero from "@/components/Hero";
import ParallaxGallery from "@/components/ParallaxGallery";
import ServiciosSection from "@/components/ServiciosSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import DailyRoutineHeading from "@/components/TituloParalax";

export default function Page() {
  return (
    <div className=" -mt-15">

      {/* Tu navbar fijo arriba */}
      <Hero city="Atlanta" />
      <ServiciosSection />
      <DailyRoutineHeading text="Our daily life" className="py-10" />

      <ParallaxGallery />
      <TestimonialsSection />


    </div>
  );
}
