import '../styles/handmadeEffects.css';

export default function CrayonDivider({ color = "#3b2f2f", rotate = 1 }) {
    return (
        <div className="crayon-divider-container" style={{ transform: `rotate(${rotate}deg)` }}>
            <svg
                width="800"
                height="30"
                viewBox="0 0 800 30"
                className="crayon-divider-path"
                style={{ stroke: color }}
            >
                {/* Wavy hand-drawn path */}
                <path d="M10 15 Q 50 5, 100 15 T 200 15 T 300 15 T 400 15 T 500 15 T 600 15 T 700 15 T 790 15" />

                {/* Overlapping stroke for crayon look */}
                <path d="M15 15 Q 55 25, 105 15 T 205 15 T 305 15 T 405 15 T 505 15 T 605 15 T 705 15 T 795 15"
                    style={{ strokeWidth: 2, opacity: 0.5 }} />
            </svg>
        </div>
    );
}
