import { useEffect } from "react";

type OutsideClickHandler = (event: MouseEvent | TouchEvent) => void;

export function useOutsideClick(
    ref: React.RefObject<HTMLElement>,
    callback: OutsideClickHandler
) {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const el = ref.current;
            if (!el) return;
            const target = event.target as Node | null;
            if (target && el.contains(target)) return;
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener, { passive: true });

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
}
