import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
            {/* Background Decor: Scattered Paper Scraps */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, rotate: 0 }}
                    animate={{ opacity: 0.3, rotate: 10 }}
                    transition={{ duration: 2 }}
                    className="absolute top-10 left-10 w-32 h-32 bg-white/40 skew-x-12"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-20 right-20 w-40 h-40 bg-ink/10 rotate-[-5deg] rounded-full"
                />
            </div>

            {/* Main Name Tag */}
            <motion.div
                initial={{ y: -500, rotate: -20 }}
                animate={{ y: 0, rotate: -2 }}
                transition={{ type: "spring", damping: 15, stiffness: 120 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="relative bg-white p-8 md:p-12 max-w-2xl w-full mx-4 shadow-paper-lift transform"
            >
                {/* Tape overlapping top */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-accent-tape opacity-90 rotate-2 shadow-sm"></div>

                <div className="border-4 border-double border-[#e74c3c] p-6 text-center">
                    <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#e74c3c] mb-2 font-hand">
                        Hello, I am
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-ink mb-4 font-hand" style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}>
                        SHIVANG
                    </h1>
                    <div className="h-1 w-full bg-ink/10 my-4 rounded"></div>
                    <p className="text-lg md:text-xl font-sans font-medium text-ink/80">
                        Creative Frontend/Backend Engineer & UI Designer
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
