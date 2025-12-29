import React from 'react';
import { motion } from 'framer-motion';
import '../styles/skills.css';
import '../styles/deskNarrative.css'; // Reusing for consistent feel

export default function Skills() {
    // Animation staggers
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const boxVariants = {
        hidden: { opacity: 0, scale: 0.9, rotate: -2 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { type: "spring", bounce: 0.4 }
        }
    };

    return (
        <motion.div
            className="skills-page-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* 1. Intro Section */}
            <section className="skills-intro">
                <motion.h1 className="skills-title" variants={itemVariants}>
                    The Workshop
                </motion.h1>
                <motion.p className="skills-philosophy" variants={itemVariants}>
                    I believe in building systems, not just features. While tools change,
                    <span style={{ fontWeight: 'bold' }}> fundamental architectural principles</span> remain.
                    My "desk" is organized to solve complex backend problems while delivering
                    smooth, tangible frontend experiences.
                </motion.p>
            </section>

            {/* 2. Backend Skills (Primary) */}
            <section className="backend-section">
                <div className="section-heading-wrapper">
                    <motion.h2 className="handwritten-heading" variants={itemVariants}>
                        Backend Architecture
                        <span className="heading-underline"></span>
                    </motion.h2>
                </div>

                <div className="backend-grid">
                    {/* Group 1 */}
                    <motion.div className="cardboard-box" variants={boxVariants} style={{ transform: 'rotate(-1deg)' }}>
                        <div className="box-flap"></div>
                        <span className="box-label">API & Logic</span>
                        <ul className="skill-list">
                            <li className="skill-point"><span className="skill-bullet"></span>RESTful API Design</li>
                            <li className="skill-point"><span className="skill-bullet"></span>GraphQL Schemas</li>
                            <li className="skill-point"><span className="skill-bullet"></span>Microservices Logic</li>
                            <li className="skill-point"><span className="skill-bullet"></span>Serverless Functions</li>
                        </ul>
                    </motion.div>

                    {/* Group 2 */}
                    <motion.div className="cardboard-box" variants={boxVariants} style={{ transform: 'rotate(1.5deg)' }}>
                        <div className="box-flap"></div>
                        <span className="box-label">Data & Modeling</span>
                        <ul className="skill-list">
                            <li className="skill-point"><span className="skill-bullet"></span>Relational DBs (Postgres)</li>
                            <li className="skill-point"><span className="skill-bullet"></span>NoSQL Documents (Mongo)</li>
                            <li className="skill-point"><span className="skill-bullet"></span>Data Aggregation Pipelines</li>
                            <li className="skill-point"><span className="skill-bullet"></span>Schema Normalization</li>
                        </ul>
                    </motion.div>

                    {/* Group 3 */}
                    <motion.div className="cardboard-box" variants={boxVariants} style={{ transform: 'rotate(-0.5deg)' }}>
                        <div className="box-flap"></div>
                        <span className="box-label">Security & Auth</span>
                        <ul className="skill-list">
                            <li className="skill-point"><span className="skill-bullet"></span>JWT/Session Auth Flows</li>
                            <li className="skill-point"><span className="skill-bullet"></span>OAuth Integrations</li>
                            <li className="skill-point"><span className="skill-bullet"></span>Role-Based Access Control</li>
                            <li className="skill-point"><span className="skill-bullet"></span>Input Sanitization</li>
                        </ul>
                    </motion.div>

                    {/* Group 4 */}
                    <motion.div className="cardboard-box" variants={boxVariants} style={{ transform: 'rotate(2deg)' }}>
                        <div className="box-flap"></div>
                        <span className="box-label">DevOps & Infra</span>
                        <ul className="skill-list">
                            <li className="skill-point"><span className="skill-bullet"></span>Docker & Containerization</li>
                            <li className="skill-point"><span className="skill-bullet"></span>CI/CD Pipelines</li>
                            <li className="skill-point"><span className="skill-bullet"></span>Cloud Deployment (AWS/Vercel)</li>
                            <li className="skill-point"><span className="skill-bullet"></span>Log Monitoring</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* 3. Frontend Skills (Secondary) */}
            <section className="frontend-section">
                <div className="section-heading-wrapper">
                    <motion.h3 className="handwritten-heading" variants={itemVariants} style={{ fontSize: '2rem' }}>
                        Frontend Execution
                    </motion.h3>
                </div>

                <motion.div
                    className="frontend-container"
                    variants={itemVariants}
                >
                    <div className="paper-grid">
                        <div className="paper-column">
                            <h4>Component Arch</h4>
                            <ul className="skill-list">
                                <li className="skill-point">React Composition</li>
                                <li className="skill-point">Custom Hooks</li>
                                <li className="skill-point">Atomic Design</li>
                            </ul>
                        </div>
                        <div className="paper-column">
                            <h4>State Management</h4>
                            <ul className="skill-list">
                                <li className="skill-point">Context API</li>
                                <li className="skill-point">Redux / Zustand</li>
                                <li className="skill-point">Server State (React Query)</li>
                            </ul>
                        </div>
                        <div className="paper-column">
                            <h4>Performance</h4>
                            <ul className="skill-list">
                                <li className="skill-point">Code Splitting</li>
                                <li className="skill-point">Memoization</li>
                                <li className="skill-point">Asset Optimization</li>
                            </ul>
                        </div>
                        <div className="paper-column">
                            <h4>Interaction</h4>
                            <ul className="skill-list">
                                <li className="skill-point">Framer Motion</li>
                                <li className="skill-point">Accessible Forms</li>
                                <li className="skill-point">Responsive Layouts</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 4. Tools & Workflow */}
            <section className="tools-section">
                <div className="tools-grid">
                    <motion.div className="sticky-note sticky-yellow" variants={boxVariants}>
                        <div className="sticky-title">Git & Versioning</div>
                        <p>Clean commits, branching strategies, and effective merge conflict resolution.</p>
                    </motion.div>

                    <motion.div className="sticky-note sticky-pink" variants={boxVariants}>
                        <div className="sticky-title">Debugging</div>
                        <p>Systematic root-cause analysis, browser tools, and server logging.</p>
                    </motion.div>

                    <motion.div className="sticky-note sticky-blue" variants={boxVariants}>
                        <div className="sticky-title">Environment</div>
                        <p>VS Code mastery, terminal efficiency, and package management (npm/yarn).</p>
                    </motion.div>

                    <motion.div className="sticky-note sticky-green" variants={boxVariants}>
                        <div className="sticky-title">Testing</div>
                        <p>Unit testing logic, integration tests for APIs, and end-to-end user flows.</p>
                    </motion.div>
                </div>
            </section>

            {/* 5. Learning & Growth */}
            <section className="growth-section">
                <motion.h3 className="handwritten-heading" variants={itemVariants} style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
                    Philosophy of Growth
                </motion.h3>
                <motion.p className="growth-text" variants={itemVariants}>
                    I do not chase every new framework. I focus on <span style={{ fontWeight: 'bold' }}>mastering the fundamentals</span>—how the web works, how data flows, and how to write clean, maintainable code. My goal is to build software that lasts, not just software that works today.
                </motion.p>
            </section>

        </motion.div>
    );
}
