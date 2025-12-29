import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // Center offset
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                rotate: isHovering ? -15 : 0,
                scale: isHovering ? 1.2 : 1,
            }}
        >
            {/* Box Cutter Icon SVG */}
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                {/* Handle */}
                <rect x="25" y="10" width="10" height="40" rx="2" transform="rotate(-45 30 30)" fill="#e74c3c" stroke="#3b2f2f" strokeWidth="2" />
                {/* Grip Lines */}
                <line x1="28" y1="20" x2="36" y2="20" transform="rotate(-45 30 30)" stroke="#3b2f2f" strokeWidth="1" opacity="0.5" />
                <line x1="28" y1="25" x2="36" y2="25" transform="rotate(-45 30 30)" stroke="#3b2f2f" strokeWidth="1" opacity="0.5" />
                <line x1="28" y1="30" x2="36" y2="30" transform="rotate(-45 30 30)" stroke="#3b2f2f" strokeWidth="1" opacity="0.5" />
                {/* Blade */}
                <path d="M28 45 L25 55 L31 51 Z" transform="rotate(-45 30 30)" fill="#bdc3c7" stroke="#3b2f2f" strokeWidth="1" />
            </svg>
        </motion.div>
    );
}
