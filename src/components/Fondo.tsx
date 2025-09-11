

const Fondo = () => {
    return (
        <>
            {/* Fondo gradiente y luces tipo 'speed lines' */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        // capa base
                        "linear-gradient(180deg,#0B0D1C 0%, #0E1030 35%, #0A1B3D 100%)",
                }}
            />
            {/* halo morado izquierda */}
            <div
                aria-hidden
                className="absolute -left-1/3 top-0 -z-10 h-[60dvh] w-[90dvw] blur-3xl opacity-70"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(141,67,255,0.9) 0%, rgba(141,67,255,0) 70%)",
                }}
            />
            {/* halo cian derecha */}
            <div
                aria-hidden
                className="absolute right-[-20%] top-[15%] -z-10 h-[55dvh] w-[70dvw] blur-3xl opacity-80"
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(0,212,255,0.9) 0%, rgba(0,212,255,0) 70%)",
                }}
            />
            {/* líneas de velocidad diagonales sutiles */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-30"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(110deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
                }}
            />

        </>

    )
}
export default Fondo