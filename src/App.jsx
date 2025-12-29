import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutPreview from './components/AboutPreview';
import WorkShowcase from './components/WorkShowcase';
import DoodleLayer from './components/DoodleLayer';
import AnimeDoodleLayer from './components/AnimeDoodleLayer';
import SkillsSection from './sections/Skills';
import Footer from './sections/Footer';
import About from './pages/About';
import SkillsPage from './pages/Skills';
import CursorTrail from './components/CursorTrail';

import CrayonDivider from './components/CrayonDivider';
import DeskTransition from './components/DeskTransition';
import PrintModeToggle from './components/PrintModeToggle';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-paper overflow-hidden selection:bg-[#e74c3c] selection:text-white">
                <CustomCursor />
                <Navbar />

                <PrintModeToggle />
                <CursorTrail />
                {/* <CareerTimeline /> Removed by user request */}

                <Routes>
                    <Route path="/" element={
                        <DeskTransition>
                            <DoodleLayer />
                            <AnimeDoodleLayer />
                            <Hero />
                            <CrayonDivider rotate={-1} />
                            <AboutPreview />
                            <CrayonDivider rotate={1} />
                            <WorkShowcase />
                            <CrayonDivider rotate={-0.5} />
                            <SkillsSection />
                        </DeskTransition>
                    } />
                    <Route path="/about" element={
                        <DeskTransition>
                            <About />
                        </DeskTransition>
                    } />
                    <Route path="/skills" element={
                        <DeskTransition>
                            <SkillsPage />
                        </DeskTransition>
                    } />
                </Routes>

                <Footer />
            </div>
        </Router>
    )
}

export default App
