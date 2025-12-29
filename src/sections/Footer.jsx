import '../styles/footer.css';
import ContactSection from '../components/ContactSection';

export default function Footer() {
    return (
        <footer id="footer" className="footer-section">
            <ContactSection />
            <div className="footer-content">
                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Shivang. Handcrafted with React & Cardboard.
                </p>
            </div>
        </footer>
    );
}
