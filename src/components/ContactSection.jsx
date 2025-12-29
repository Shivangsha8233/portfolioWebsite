import React from 'react';
import { motion } from 'framer-motion';
import PaperHover from './PaperHover';
import '../styles/contact.css';

export default function ContactSection() {
    return (
        <section className="contact-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Let's Connect
            </motion.h2>

            <div className="contact-grid">
                {/* GitHub */}
                <PaperHover
                    as="a"
                    href="https://github.com/gaadhekig-lang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card paper-rustle"
                >
                    <div className="contact-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="contact-icon">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                    </div>
                    <span className="contact-label">GitHub</span>
                    <span className="contact-link-text">/gaadhekig-lang</span>
                </PaperHover>

                {/* LinkedIn */}
                <PaperHover
                    as="a"
                    href="https://www.linkedin.com/in/shivang-sharma-b1868234a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card paper-rustle"
                >
                    <div className="contact-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="contact-icon">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </div>
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-link-text">in/shivang-sharma</span>
                </PaperHover>

                {/* Email */}
                <PaperHover
                    as="a"
                    href="mailto:shivangsha8233@gmail.com"
                    className="contact-card paper-rustle"
                >
                    <div className="contact-icon-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="contact-icon">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <span className="contact-label">Email</span>
                    <span className="contact-link-text">shivangsha8233@gmail.com</span>
                </PaperHover>
            </div>
        </section>
    );
}
