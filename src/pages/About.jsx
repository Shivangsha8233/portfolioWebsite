import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import '../styles/about.css';

export default function About() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            className="about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="about-container">
                {/* Left Column: Large Image */}
                <motion.div
                    className="about-hero-image-container"
                    initial={{ y: 50, opacity: 0, rotate: -5 }}
                    animate={{ y: 0, opacity: 1, rotate: -2 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
                >
                    <div className="about-hero-frame">
                        <div className="sticker-hello">Hello!</div>
                        <img
                            src="/about/me.jpg"
                            alt="Shivang"
                            className="about-hero-img"
                        />
                    </div>
                </motion.div>

                {/* Right Column: Bio */}
                <motion.div
                    className="about-bio"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>

                    <h1 className="about-heading">A Bit About Me</h1>

                    <div className="bio-text">
                        <p>
                            I'm a frontend developer and creative coder who loves turning static designs into living, breathing web experiences.
                        </p>
                        <br />
                        <p>
                            My journey started with simple HTML pages, but quickly evolved into a passion for interactive UI, animations, and 3D web graphics. I believe the web should be fun, not just functional.
                        </p>
                        <br />
                        <p>
                            <strong>Why Cardboard?</strong><br />
                            Digital spaces often feel too polished and sterile. I wanted to bring back the feeling of a messy, creative craft table—where ideas are cut, pasted, and taped together until they work.
                        </p>
                        <br />
                        <p>
                            When I'm not coding, you can find me exploring new coffee spots, sketching ideas on actual paper, or deconstructing retro board games to understand what made them fun.
                        </p>
                    </div>
                </motion.div>
            </div>
            <ContactSection />
        </motion.div>
    );
}
