import { useEffect, useRef } from "react";

type OutsideClickEvent = MouseEvent | TouchEvent;
type OutsideClickHandler = (event: OutsideClickEvent) => void;

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
    ref: React.RefObject<T>,
    callback: OutsideClickHandler
) {
    // Mantén siempre la última referencia del callback sin re-suscribir listeners
    const cbRef = useRef<OutsideClickHandler>(callback);
    useEffect(() => {
        cbRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const listener = (event: OutsideClickEvent) => {
            const el = ref.current;
            if (!el) return;
            const target = event.target as Node | null;
            if (target && el.contains(target)) return;
            cbRef.current(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener, { passive: true });

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref]);
}
