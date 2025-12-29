import '../styles/doodles.css';

export default function DoodleLayer() {
    return (
        <div className="doodle-layer">
            {/* Rocket Doodle */}
            <svg className="doodle doodle-rocket" viewBox="0 0 100 100" style={{ '--r': '-15deg' }}>
                <path d="M50 20 L70 50 L60 50 L65 80 L50 70 L35 80 L40 50 L30 50 Z" />
                <path d="M50 20 Q50 10 50 10" />
                <circle cx="50" cy="40" r="5" />
            </svg>

            {/* Star Doodle */}
            <svg className="doodle doodle-star-1" viewBox="0 0 100 100" style={{ '--r': '10deg' }}>
                <path d="M50 10 L60 35 L90 35 L65 55 L75 80 L50 65 L25 80 L35 55 L10 35 L40 35 Z" />
            </svg>

            {/* Cloud Doodle */}
            <svg className="doodle doodle-cloud" viewBox="0 0 100 60" style={{ '--r': '0deg' }}>
                <path d="M10 50 Q0 50 0 40 Q0 20 20 20 Q30 0 50 0 Q70 0 80 20 Q100 20 100 40 Q100 50 90 50 Z" />
            </svg>

            {/* Curly Arrow Doodle */}
            <svg className="doodle doodle-arrow" viewBox="0 0 100 100" style={{ '--r': '10deg' }}>
                <path d="M20 80 Q50 20 80 50" fill="none" />
                <path d="M70 45 L80 50 L75 60" fill="none" />
            </svg>

            {/* Spiral Doodle */}
            <svg className="doodle doodle-spiral" viewBox="0 0 100 100" style={{ '--r': '0deg' }}>
                <path d="M50 50 Q60 50 60 40 Q60 30 50 30 Q40 30 40 40 Q40 60 60 60 Q80 60 80 40 Q80 10 50 10" fill="none" />
            </svg>

            {/* Sun Doodle */}
            <svg className="doodle doodle-sun" viewBox="0 0 100 100" style={{ '--r': '0deg' }}>
                <circle cx="50" cy="50" r="20" />
                <path d="M50 20 L50 10 M50 80 L50 90 M80 50 L90 50 M20 50 L10 50 M70 30 L80 20 M30 70 L20 80 M70 70 L80 80 M30 30 L20 20" />
            </svg>
        </div>
    );
}
