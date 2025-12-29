import { motion } from 'framer-motion';
import '../styles/deskNarrative.css';

const deskVariants = {
    initial: {
        opacity: 0,
        rotate: -2,
        y: 20,
        scale: 0.98,
        filter: "blur(2px)"
    },
    animate: {
        opacity: 1,
        rotate: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)"
    },
    exit: {
        opacity: 0,
        rotate: 1,
        y: -20,
        scale: 0.98,
        filter: "blur(2px)"
    }
};

const transitionSettings = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96] // Fluid paper movement
};

export default function DeskTransition({ children }) {
    return (
        <motion.div
            className="desk-transition-wrapper"
            variants={deskVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transitionSettings}
        >
            {children}
        </motion.div>
    );
}
