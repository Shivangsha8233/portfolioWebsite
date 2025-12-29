import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/aboutPreview.css';

export default function AboutPreview() {
    return (
        <section id="about" className="about-preview-section">
            <div className="about-preview-container">
                {/* Cardboard Photo Frame */}
                <motion.div
                    className="about-photo-frame"
                    initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
                    whileInView={{ rotate: -3, scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {/* Tapes */}
                    <div className="about-preview-tape tape-top"></div>
                    <div className="about-preview-tape tape-corner"></div>

                    <Link to="/about">
                        <div className="about-photo-inner">
                            <img
                                src="/about/me.jpg"
                                alt="Me"
                                className="about-photo"
                            />
                        </div>
                    </Link>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="about-preview-text"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h2 className="about-preview-title">Meet the Maker</h2>
                    <p className="about-preview-desc">
                        Hey! I'm Shivang. I build things for the web with a focus on creativity and interaction.
                        This portfolio itself is a little experiment in "digital cardboard".
                    </p>
                    <Link to="/about" className="about-link paper-rustle">
                        Read full story &rarr;
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
