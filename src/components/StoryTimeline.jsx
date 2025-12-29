import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/storytelling.css';

const TimelineIcon = ({ d, scrollYProgress, triggerPoint }) => {
    // Show icon when scroll passes trigger point
    const opacity = useTransform(scrollYProgress,
        [triggerPoint - 0.05, triggerPoint, triggerPoint + 0.05],
        [0.3, 1, 0.3]
    );

    const scale = useTransform(scrollYProgress,
        [triggerPoint - 0.05, triggerPoint, triggerPoint + 0.05],
        [0.8, 1.2, 0.8]
    );

    return (
        <motion.div
            className="timeline-icon-wrapper"
            style={{ top: `${triggerPoint * 100}%`, opacity, scale }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" className="timeline-icon-svg">
                <path d={d} />
            </svg>
        </motion.div>
    );
};

export default function StoryTimeline() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className="story-timeline-container">
            {/* Background Line */}
            <svg height="100%" width="20" style={{ position: 'absolute' }}>
                <path d="M10 0 L10 400" stroke="#3b2f2f" strokeWidth="2" strokeOpacity="0.1" strokeDasharray="4 4" />
            </svg>

            {/* Progress Line */}
            <motion.div style={{ position: 'absolute', top: 0, left: '50%', width: 2, height: '100%', background: '#3b2f2f', originY: 0, scaleY, x: '-50%' }} />

            {/* Icons at approximate section locations */}

            {/* 1. Hero: Pencil */}
            <TimelineIcon
                triggerPoint={0.05}
                scrollYProgress={scrollYProgress}
                d="M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.5 7.5 M2 2l7.5 1.5 M2 2l1.5 7.5"
            />

            {/* 2. About Preview: Note */}
            <TimelineIcon
                triggerPoint={0.25}
                scrollYProgress={scrollYProgress}
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
            />

            {/* 3. Work: Folder */}
            <TimelineIcon
                triggerPoint={0.55}
                scrollYProgress={scrollYProgress}
                d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
            />

            {/* 4. Skills: Puzzle */}
            <TimelineIcon
                triggerPoint={0.80}
                scrollYProgress={scrollYProgress}
                d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"
            />

            {/* 5. Footer: Envelope */}
            <TimelineIcon
                triggerPoint={0.98}
                scrollYProgress={scrollYProgress}
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />

        </div>
    );
}
