"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];   // o React.ReactNode[] si prefieres
  initialScroll?: number;
}
type NeonIcon = React.ComponentType<{ className?: string }>;


import { StaticImageData } from "next/image";

type CardData = {
  category: string;
  title: string;
  src: string | StaticImageData;
  content: React.ReactNode;
  Icon: React.ComponentType<{ className?: string }>;
};


export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => { },
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardData;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth < 768;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <div>
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY a pantalla completa */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* CONTENEDOR FIJO DEL PANEL (centrado) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="fixed inset-0 z-[60] flex items-start md:items-center justify-center p-4 md:p-8"
              layoutId={layout ? `card-${card.title}` : undefined}
            >
              {/* Borde con gradiente + glow */}
              <div className="relative w-full max-w-[760px] rounded-3xl p-[1px]
                        bg-gradient-to-r from-[#8D43FF] via-[#4E5BFF] to-[#00D4FF]
                        shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                {/* Panel glass */}
                <div
                  ref={containerRef}
                  className="rounded-[calc(1.5rem-1px)] bg-black/80 backdrop-blur-xl
                       ring-1 ring-white/10 px-6 py-6 sm:px-8 sm:py-8 text-white relative"
                >
                  {/* Cerrar */}
                  <button
                    onClick={handleClose}
                    className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full
                         bg-white/10 ring-1 ring-white/20 hover:bg-white/15 transition"
                    aria-label="Close"
                  >
                    <IconX className="h-5 w-5 text-white" />
                  </button>

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <NeonSquare>
                      <card.Icon className="h-6 w-6" />
                    </NeonSquare>
                    <motion.p
                      layoutId={layout ? `category-${card.title}` : undefined}
                      className="text-xs font-semibold text-white/80 tracking-wide uppercase"
                    >
                      {card.category}
                    </motion.p>
                  </div>

                  {/* Título */}
                  <motion.h3
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="text-2xl sm:text-3xl font-extrabold leading-tight
                         bg-clip-text text-transparent
                         bg-gradient-to-r from-white to-white/85"
                  >
                    {card.title}
                  </motion.h3>

                  {/* Divider */}
                  <div className="mt-3 h-[2px] w-16 rounded-full
                            bg-gradient-to-r from-[#8D43FF] to-[#00D4FF]" />

                  {/* Contenido */}
                  <div className="mt-5 space-y-5 text-white/90">
                    <div className="[&_p]:leading-relaxed [&_p]:text-[15px]">
                      {card.content}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
      >


        <BlurImage
          src={card.src}
          alt={card.title}
          fill

          className=" inset-0 z-10 object-cover"
        />
      </motion.button>
      <div className="relative z-40 flex w-full gap-6 mt-5">
        <NeonSquare >
          <card.Icon className="h-12 w-12" />
        </NeonSquare>

        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
        >
          {card.title}
        </motion.p>
      </div>
    </div>
  );
};

type BlurImageProps = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  blurSrc?: string; // opcional
};

export const BlurImage = ({
  className,
  alt,
  ...rest
}: BlurImageProps) => {
  return (
    <Image
      {...rest}
      alt={alt ?? ""}
      placeholder="blur"
      className={cn("h-full w-full object-cover transition duration-300", className)}
    />
  );
};
function NeonSquare({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-16 w-16 sm:h-11 sm:w-11 rounded-xl ring-1 ring-white/15 bg-white/[0.03] grid place-items-center shrink-0">
      {/* glow sutil */}
      <span className="pointer-events-none absolute inset-0 rounded-xl"
        style={{ boxShadow: "0 0 24px rgba(0,212,255,.28), 0 0 18px rgba(141,67,255,.22) inset" }} />
      <div className="relative">{children}</div>
    </div>
  );
}
