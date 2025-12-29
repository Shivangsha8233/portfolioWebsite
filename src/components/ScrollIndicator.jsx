import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import '../styles/handmadeEffects.css';

export default function ScrollIndicator() {
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll value
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="scroll-indicator-container">
            {/* Background Sketch Line (Faint) */}
            <svg height="100%" width="100%" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0 }}>
                <path
                    d="M3 0 Q4 50 2 100 Q4 150 3 200 Q2 250 3 300"
                    fill="none"
                    stroke="#3b2f2f"
                    strokeWidth="2"
                    strokeOpacity="0.1"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>

            {/* Filling Line (Pencil Stroke) */}
            <motion.div style={{ height: '100%', scaleY, transformOrigin: 'top', width: '100%', position: 'relative' }}>
                <svg height="100%" width="100%" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                    <path
                        d="M3 0 Q2 50 4 100 Q1 150 3 200 Q4 250 2 300"
                        fill="none"
                        stroke="#3b2f2f"
                        strokeWidth="3"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        style={{ filter: "url(#pencilRoughness)" }}
                    />
                </svg>
            </motion.div>

            {/* Pencil Texture Filter */}
            <svg width="0" height="0">
                <defs>
                    <filter id="pencilRoughness">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
