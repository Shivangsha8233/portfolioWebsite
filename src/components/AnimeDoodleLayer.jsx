import React from 'react';
import { motion } from 'framer-motion';

export default function AnimeDoodleLayer() {
    // Shared transition for the floating effect
    const floatTransition = {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
    };

    return (
        <div className="anime-doodle-layer" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
            overflow: 'hidden'
        }}>
            {/* SVG Defs for Crayon Filter */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="crayon">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                    </filter>
                </defs>
            </svg>

            {/* 1. Chibi Head (Top Right) */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '12%',
                    right: '8%',
                    width: '120px',
                    opacity: 0.15,
                    rotate: '10deg',
                    filter: 'url(#crayon)'
                }}
                animate={{ y: [0, -15, 0], rotate: [10, 12, 10] }}
                transition={floatTransition}
            >
                <svg viewBox="0 0 100 100" fill="none" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Face Shape */}
                    <circle cx="50" cy="50" r="35" />
                    {/* Spiky Hair */}
                    <path d="M15 40 L10 25 L25 30 L30 15 L45 25 L50 10 L65 25 L80 15 L80 30 L95 25 L85 40" />
                    {/* Eyes */}
                    <path d="M35 55 Q35 60 40 60 Q45 60 45 55" />
                    <path d="M55 55 Q55 60 60 60 Q65 60 65 55" />
                    {/* Smile */}
                    <path d="M45 70 Q50 75 55 70" />
                </svg>
            </motion.div>

            {/* 2. Ninja Star / Shuriken (Bottom Left) */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '5%',
                    width: '80px',
                    opacity: 0.12,
                    color: '#3b2f2f',
                    filter: 'url(#crayon)'
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
                    <circle cx="50" cy="50" r="5" />
                </svg>
            </motion.div>

            {/* 3. Sweat Drops (Near Skills / Work area middle-right) */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '45%',
                    right: '15%',
                    width: '60px',
                    opacity: 0.2,
                    color: '#2980b9',
                    filter: 'url(#crayon)'
                }}
                animate={{ y: [0, 10, 0], opacity: [0.1, 0.05, 0.1] }}
                transition={{ ...floatTransition, duration: 4 }}
            >
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M50 20 Q70 60 50 80 Q30 60 50 20 Z" />
                    <path d="M70 40 Q80 60 70 70 Q60 60 70 40 Z" />
                </svg>
            </motion.div>

            {/* 4. Magical Sparkles (Top Left) */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '100px',
                    opacity: 0.15,
                    color: '#f1c40f',
                    filter: 'url(#crayon)'
                }}
                animate={{ scale: [1, 1.1, 1], rotate: [-5, 5, -5] }}
                transition={floatTransition}
            >
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" />
                    <path d="M80 20 L82 35 L95 37 L82 40 L80 55 L78 40 L65 37 L78 35 Z" />
                </svg>
            </motion.div>

            {/* 5. Cat Ears / Neko (Bottom Right) */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '90px',
                    opacity: 0.15,
                    color: '#3b2f2f',
                    rotate: '-10deg',
                    filter: 'url(#crayon)'
                }}
                animate={{ y: [0, -10, 0] }}
                transition={floatTransition}
            >
                <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Head Arc */}
                    <path d="M10 50 Q10 20 20 15 L30 40 L70 40 L80 15 Q90 20 90 50" />
                    {/* Ears */}
                    <path d="M20 15 L15 5 L35 15" />
                    <path d="M80 15 L85 5 L65 15" />
                </svg>
            </motion.div>

            {/* 6. Smiley Slime (Middle Left) */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '55%',
                    left: '3%',
                    width: '70px',
                    opacity: 0.15,
                    color: '#2ecc71',
                    filter: 'url(#crayon)'
                }}
                animate={{ scale: [1, 1.1, 0.9, 1], rotate: [-5, 5, -5] }}
                transition={{ ...floatTransition, duration: 6 }}
            >
                <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 80 Q0 80 0 60 Q10 10 50 10 Q90 10 100 60 Q100 80 90 80 Z" />
                    {/* Face */}
                    <circle cx="35" cy="45" r="3" fill="currentColor" />
                    <circle cx="65" cy="45" r="3" fill="currentColor" />
                    <path d="M45 55 Q50 60 55 55" />
                </svg>
            </motion.div>

            {/* 7. Onigiri / Rice Ball (Top Center-Right) */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '8%',
                    left: '55%',
                    width: '60px',
                    opacity: 0.12,
                    color: '#3b2f2f',
                    filter: 'url(#crayon)'
                }}
                animate={{ y: [0, 10, 0] }}
                transition={floatTransition}
            >
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M50 10 L10 80 Q50 90 90 80 Z" />
                    <path d="M30 60 L70 60 L65 82 L35 82 Z" fill="currentColor" fillOpacity="0.1" />
                </svg>
            </motion.div>

            {/* 8. Vertical Speed Lines (Bottom Center) */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '45%',
                    width: '50px',
                    opacity: 0.1,
                    color: '#e74c3c',
                    filter: 'url(#crayon)'
                }}
                animate={{ y: [5, -5, 5], opacity: [0.1, 0.05, 0.1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
                <svg viewBox="0 0 50 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="10" y1="100" x2="10" y2="20" />
                    <line x1="25" y1="90" x2="25" y2="0" />
                    <line x1="40" y1="100" x2="40" y2="30" />
                </svg>
            </motion.div>

            {/* 9. Anime Exclamation (Top Middle-Left) */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '25%',
                    width: '40px',
                    opacity: 0.18,
                    color: '#e67e22',
                    rotate: '-15deg',
                    filter: 'url(#crayon)'
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg viewBox="0 0 50 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M25 10 L20 70 L30 70 Z" />
                    <circle cx="25" cy="85" r="4" fill="currentColor" />
                    <path d="M10 20 L5 30 M40 20 L45 30" strokeWidth="2" />
                </svg>
            </motion.div>

            {/* 10. Floating Spirit / Ghost (Right Middle) */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '65%',
                    right: '5%',
                    width: '65px',
                    opacity: 0.14,
                    color: '#9b59b6',
                    filter: 'url(#crayon)'
                }}
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ ...floatTransition, duration: 10 }}
            >
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M50 10 Q90 10 90 50 L90 80 L70 70 L50 80 L30 70 L10 80 L10 50 Q10 10 50 10" />
                    <circle cx="35" cy="40" r="4" fill="currentColor" />
                    <circle cx="65" cy="40" r="4" fill="currentColor" />
                    <path d="M45 50 Q50 45 55 50" />
                </svg>
            </motion.div>
        </div>
    );
}
