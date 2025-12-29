export default function Section({ children, className = "", id = "" }) {
    return (
        <section id={id} className={`relative py-20 px-6 md:px-12 ${className}`}>
            {children}
        </section>
    );
}
