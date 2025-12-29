import { motion, AnimatePresence } from 'framer-motion';
import PaperHover from './PaperHover';
import { useState } from 'react';
import '../styles/work.css';
import '../styles/storytelling.css';

export default function WorkItem({ project, index }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Zipper pattern: Even index = Left align, Odd index = Right align
    const isLeft = index % 2 === 0;
    const alignmentClass = isLeft ? 'align-left' : 'align-right';

    // Stable rotation values for cardboard feel
    const rotation = isLeft ? -1 : 1;

    return (
        <div className={`work-item ${alignmentClass}`}>
            {/* Image Side */}
            {/* Image Side */}
            <PaperHover
                className="work-image-container"
                rotationOverride={rotation} // Use existing rotation logic
                initial={{ opacity: 0, scale: 0.9, y: 100 }} // PaperHover handles rotation
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            >
                {/* Visual Tapes */}
                <div className="work-tape tape-top-left"></div>
                <div className="work-tape tape-bottom-right"></div>

                <div className="work-image-inner">
                    <img src={project.image} alt={project.title} className="work-image" />
                </div>
            </PaperHover>

            {/* Content Side */}
            <motion.div
                className="work-content"
                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <span className="work-number">0{index + 1}</span>
                <h3 className="work-project-title">{project.title}</h3>
                <p className="work-project-desc">{project.description}</p>

                <div style={{ marginBottom: '1.5rem' }}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="work-link">
                        Visit Live Site &rarr;
                    </a>
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="work-link paper-rustle"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
                >
                    {isExpanded ? "Close Case Study" : "View Case Study"} <span>{isExpanded ? "×" : "↓"}</span>
                </button>

                {/* Expandable Case Study Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            className="case-study-details"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <div className="case-study-content">
                                <div className="case-study-section">
                                    <h4 className="cs-heading">The Challenge</h4>
                                    <p>Create a unique digital experience that stands out in a crowded market.</p>
                                </div>
                                <div className="case-study-section">
                                    <h4 className="cs-heading">Solution</h4>
                                    <p>Used React and Framer Motion to build a custom physics-based interaction system.</p>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
