import { motion } from 'framer-motion';
import '../styles/storytelling.css';

const tearVariants = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" }
};

const tearTransition = {
    duration: 0.8,
    ease: [0.43, 0.13, 0.23, 0.96] // Smooth paper Slide
};

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 }
            }}
            transition={{ duration: 0.5 }}
        >
            {/* Transition Overlay (Could be used for more complex effects, here we just fade content for simplicity and clean feel as per request "calm") 
                For a true tear effect between pages, we would need to restructure App.jsx heavily.
                Instead, we will use a subtle slide-up reveal with a tear edge on the entering page.
            */}
            <motion.div
                className="page-intro-tear"
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    background: '#f0e6d2', zIndex: 9999, pointerEvents: 'none'
                }}
            >
                <div style={{ position: 'absolute', bottom: -30, left: 0, width: '100%' }}>
                    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ width: '100%', height: '50px', transform: 'rotate(180deg)' }}>
                        <path fill="#f0e6d2" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </motion.div>

            {children}
        </motion.div>
    );
}
