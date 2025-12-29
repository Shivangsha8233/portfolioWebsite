import React from 'react';
import { motion } from 'framer-motion';
import PaperHover from './PaperHover';
import { useLocation } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const getLink = (href) => {
        // If it's a hash link and we are not on home, prefix with /
        if (href.startsWith('#') && !isHome) {
            return `/${href}`;
        }
        return href;
    };

    const navItems = [
        { name: 'About', href: '#about' }, // Scrolls to preview
        { name: 'Projects', href: '#work' }, // Updated to match section ID
        { name: 'Skills', href: '/skills' }, // Pointing to dedicated page
        { name: 'Contact', href: '#footer' } // Pointing to footer as contact
    ];

    return (
        <motion.div
            className="navbar-container"
            initial={{ y: -100, rotate: -2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 1
            }}
        >
            <div className="navbar-cardboard">
                {/* Brand */}
                <div className="navbar-brand">
                    Shivang
                </div>

                {/* Links */}
                <ul className="navbar-links">
                    {navItems.map((item) => (
                        <PaperHover
                            as={motion.li}
                            key={item.name}
                            className="navbar-link-item"
                            initial={{ y: 0 }} // Override PaperHover initial if needed, or let it handle
                            whileHover={{ scale: 1.05, y: -2 }} // Combining PaperHover effects manual override if needed or trust defaults
                        // Actually PaperHover handles hover. Let's use PaperHover defaults but add the specific scale if we want
                        >
                            <a href={getLink(item.href)} className="paper-rustle block w-full h-full">
                                {item.name}
                                <motion.div
                                    className="link-underline"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </a>
                        </PaperHover>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

