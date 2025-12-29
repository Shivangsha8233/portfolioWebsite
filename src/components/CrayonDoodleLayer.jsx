import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DOODLES = [
    '/doodles/butterfly.png',
    '/doodles/leaf.png',
    '/doodles/star.png',
    '/doodles/cloud.png',
    '/doodles/bird.png'
];

export default function CrayonDoodleLayer() {
    const [doodles, setDoodles] = useState([]);

    useEffect(() => {
        // Generate random positions for doodles
        const newDoodles = DOODLES.map((src, i) => ({
            id: i,
            src,
            top: `${Math.random() * 80 + 10}%`, // Avoid very top/bottom
            left: `${Math.random() * 80 + 10}%`, // Avoid very edges
            rotation: Math.random() * 360,
            scale: Math.random() * 0.4 + 0.3, // Small scale (0.3 - 0.7)
            duration: Math.random() * 4 + 6, // 6-10s duration
        }));
        setDoodles(newDoodles);
    }, []);

    return (
        <div className="crayon-doodle-layer" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }}>
            {doodles.map((doodle) => (
                <motion.img
                    key={doodle.id}
                    src={doodle.src}
                    alt=""
                    style={{
                        position: 'absolute',
                        top: doodle.top,
                        left: doodle.left,
                        width: '80px', // Base size
                        height: 'auto',
                        opacity: 0.08, // Very subtle as requested
                        rotate: doodle.rotation,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        rotate: [doodle.rotation, doodle.rotation + 10, doodle.rotation],
                    }}
                    transition={{
                        duration: doodle.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
}
