import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function Card({ project, index }) {
    // Random slight rotation for "handmade" feel, stable by index
    const rotation = index % 2 === 0 ? 1 : -1;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: rotation }}
            whileInView={{ opacity: 1, y: 0, rotate: rotation }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
            whileHover={{
                scale: 1.02,
                rotate: 0,
                zIndex: 10,
                boxShadow: "5px 15px 25px rgba(0,0,0,0.2)"
            }}
            className="relative bg-[#f0e6d2] p-4 font-hand text-ink card-shadow"
            style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"1\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"0.05\"/%3E%3C/svg%3E')"
            }}
        >
            {/* Masking Tape Visual - Top Center */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-accent-tape opacity-90 rotate-[-1deg] shadow-sm z-20"></div>

            {/* Image Container with "Cutout" border */}
            <div className="relative w-full h-48 mb-4 overflow-hidden border-2 border-ink/10 bg-white">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>

            <h3 className="text-2xl font-bold mb-2 border-b-2 border-ink/10 pb-1">{project.title}</h3>
            <p className="text-sm font-sans mb-4 leading-relaxed opacity-90 line-clamp-3">
                {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                    <span
                        key={i}
                        className="text-xs font-bold px-2 py-1 bg-white border border-ink/20 shadow-sm rotate-[-1deg]"
                    >
                        #{tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
                <a
                    href={project.liveLink}
                    className="flex items-center gap-1 font-bold hover:text-[#e74c3c] transition-colors"
                >
                    <ExternalLink size={18} /> Live
                </a>
                <a
                    href={project.githubLink}
                    className="flex items-center gap-1 font-bold hover:text-[#e74c3c] transition-colors"
                >
                    <Github size={18} /> Code
                </a>
            </div>
        </motion.div>
    );
}
