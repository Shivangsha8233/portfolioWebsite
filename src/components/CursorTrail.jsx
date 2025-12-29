import { useEffect, useRef } from 'react';
import '../styles/handmadeEffects.css';

export default function CursorTrail() {
    const canvasRef = useRef(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const trailRef = useRef([]);

    useEffect(() => {
        // Only run on devices with a fine pointer (mouse/trackpad)
        const mediaQuery = window.matchMedia('(pointer: fine)');
        if (!mediaQuery.matches) return;

        // 1. Setup Canvas
        const canvas = canvasRef.current;
        if (!canvas) return; // Guard against null ref if mixed with state

        const ctx = canvas.getContext('2d');

        // Resize handler
        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setSize();
        window.addEventListener('resize', setSize);

        // 2. Track Mouse
        const handleMouseMove = (e) => {
            positionRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Smooth position ref (LERP)
        let smoothPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const lerp = (start, end, factor) => start + (end - start) * factor;

        // 3. Animation Loop
        let animationFrameId;

        const render = () => {
            // LERP smoothing
            smoothPos.x = lerp(smoothPos.x, positionRef.current.x, 0.2);
            smoothPos.y = lerp(smoothPos.y, positionRef.current.y, 0.2);

            // Add smoothed position to trail
            trailRef.current.push({ ...smoothPos, age: 0 });

            // Clean canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Trail
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            for (let i = 0; i < trailRef.current.length - 1; i++) {
                const point = trailRef.current[i];
                const nextPoint = trailRef.current[i + 1];

                point.age++;

                // Fading logic
                const maxAge = 25; // How long trace lasts (frames)
                const opacity = 1 - (point.age / maxAge);

                if (opacity > 0) {
                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);

                    // Use Quadratic Curve for smoother segments
                    // We use the midpoint strategy for nicer connections
                    const midX = (point.x + nextPoint.x) / 2;
                    const midY = (point.y + nextPoint.y) / 2;
                    ctx.quadraticCurveTo(midX, midY, nextPoint.x, nextPoint.y);

                    // Fallback to simpler curve if needed, but this is better
                    // ctx.lineTo(nextPoint.x, nextPoint.y);

                    ctx.strokeStyle = `rgba(59, 47, 47, ${opacity * 0.4})`; // Slightly increased opacity for visibility
                    ctx.lineWidth = 3 * opacity; // Thicker line
                    ctx.stroke();
                }
            }

            // Remove old points
            trailRef.current = trailRef.current.filter(p => p.age < 25);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        // Cleanup
        return () => {
            window.removeEventListener('resize', setSize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="cursor-trail-canvas" />;
}
