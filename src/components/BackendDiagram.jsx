import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/deskNarrative.css';

const DiagramBlock = ({ title, icon, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="diagram-block"
            onClick={() => setIsOpen(!isOpen)}
            layout
        >
            <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{icon}</div>
            <div style={{ fontWeight: 'bold', fontFamily: 'var(--font-hand)' }}>{title}</div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="block-expanded-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {details}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Arrow = () => (
    <div className="diagram-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    </div>
);

export default function BackendDiagram() {
    return (
        <div className="backend-diagram-container">
            <DiagramBlock
                title="Client"
                icon="💻"
                details="React / Vite Frontend. Consumes JSON APIs."
            />
            <Arrow />
            <DiagramBlock
                title="API Gateway"
                icon="🚪"
                details="REST/GraphQL Endpoints. Rate Limiting."
            />
            <Arrow />
            <DiagramBlock
                title="Business Logic"
                icon="⚙️"
                details="Node.js / Python Controllers. Validation."
            />
            <Arrow />
            <DiagramBlock
                title="Database"
                icon="💾"
                details="PostgreSQL / MongoDB. Data Persistence."
            />
        </div>
    );
}
