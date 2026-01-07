'use client';
import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            // Check if the click is outside the referenced element
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        // Attach the listeners to the document
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [callback]);

    return ref;
}