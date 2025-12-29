import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/paperPhysics.css';

export default function PaperHover({
    children,
    className = "",
    rotationOverride = null,
    as: ComponentProp = "div",
    ...props
}) {
    // Resolve string tags to motion components if they are strings (e.g. "a" -> motion.a)
    // If it's already a component (e.g. motion.div), usage is direct.
    // Default to motion.div if no 'as' is provided and we fall back to "div" logic, 
    // but here we set default to "div" string to trigger this logic, or keep usage of motion.div default.

    // Better logic:
    // If ComponentProp is a string (e.g. 'a', 'div'), use motion[ComponentProp]
    // If it's a component (function/object), use it directly.

    const Component = typeof ComponentProp === 'string' && motion[ComponentProp]
        ? motion[ComponentProp]
        : ComponentProp;

    // If compProp was not a string, or not found in motion, we use it as is.
    // But if default was "motion.div" (from previous code), that's an object, so it passes through.
    // The previous default was `motion.div`. Let's keep that default if possible, or change default to "div".
    // Actually, let's keep the prop name as `as`.

    const [hoverRotation, setHoverRotation] = useState(0);

    useEffect(() => {
        // Calculate a random rotation between -1.5 and 1.5 degrees on mount
        // This ensures the "imperfection" is consistent for the component's lifecycle
        const randomRot = (Math.random() * 3) - 1.5;
        setHoverRotation(rotationOverride !== null ? rotationOverride : randomRot);
    }, [rotationOverride]);

    return (
        <Component
            className={`paper-hover-wrapper ${className}`}
            initial={{ y: 0, boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)" }}
            whileHover={{
                y: -4,
                rotate: hoverRotation,
                boxShadow: "0 8px 16px rgba(59, 47, 47, 0.1)",
                transition: {
                    duration: 0.24,
                    ease: [0.22, 1, 0.36, 1]
                }
            }}
            whileFocus={{
                y: -4,
                rotate: hoverRotation,
                boxShadow: "0 8px 16px rgba(59, 47, 47, 0.1)",
                transition: {
                    duration: 0.24,
                    ease: [0.22, 1, 0.36, 1]
                }
            }}
            whileTap={{
                y: 0,
                scale: 0.98,
                boxShadow: "0 2px 4px rgba(59, 47, 47, 0.1)"
            }}
            {...props}
        >
            {children}
        </Component>
    );
}
