import { motion } from 'framer-motion';
import Section from '../components/Section';
import BackendDiagram from '../components/BackendDiagram';
import PaperHover from '../components/PaperHover';
import { useMemo } from 'react';

const SKILLS_DATA = [
    "React", "Javascript", "TailwindCSS", "Framer Motion", "Three.js", "Node.js", "Git", "Figma"
];

export default function Skills() {
    // Stabilize random values so they don't change on re-renders/hover
    // This prevents layout thrashing
    const skills = useMemo(() => {
        return SKILLS_DATA.map(skill => ({
            name: skill,
            rotation: Math.random() * 6 - 3,
            hoverRotation: Math.random() * 10 - 5
        }));
    }, []);

    return (
        <Section className="bg-[#e8e0d5] relative overflow-hidden">
            {/* Background Grid Lines (Notebook style) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#3b2f2f 1px, transparent 1px)", backgroundSize: "100% 2rem" }}></div>

            <div className="max-w-4xl mx-auto text-center relative z-10 max-y-20">
                <h2 className="text-4xl font-hand font-bold mb-12">Tools & Toys</h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map((skill, i) => (
                        <PaperHover
                            key={skill.name}
                            rotationOverride={skill.rotation}
                            className="bg-white px-6 py-3 font-bold font-hand text-xl shadow-paper border-2 border-ink/5 relative"
                            style={{
                                borderRadius: "2px"
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            {/* Pin Effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-800 shadow-sm border border-red-900"></div>
                            {skill.name}
                        </PaperHover>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-hand font-bold mb-8 opacity-80">System Architecture</h3>
                    <BackendDiagram />
                </div>
            </div>
        </Section >
    );
}
