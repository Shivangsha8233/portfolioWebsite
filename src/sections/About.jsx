import Section from '../components/Section';

export default function About() {
    return (
        <div className="relative py-24 bg-[#dcd0b9]">
            <div className="absolute top-0 left-0 w-full h-12 bg-paper torn-edge-top -translate-y-6 z-10"></div>

            <Section>
                <div className="max-w-3xl mx-auto text-center relative">
                    {/* Sticker Decor */}
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#ffeb3b] rounded-full flex items-center justify-center shadow-md rotate-[-12deg] z-0 hidden md:flex">
                        <span className="font-hand font-bold text-ink">New!</span>
                    </div>

                    <h2 className="text-4xl font-hand font-bold mb-8 relative z-10 inline-block">
                        <span className="relative z-10">About Me</span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-[#e74c3c]/30 -z-0 -rotate-1"></span>
                    </h2>

                    <div className="bg-white p-6 md:p-10 shadow-paper rotate-1 relative z-10">
                        <div className="absolute -top-3 right-10 w-24 h-6 bg-accent-tape opacity-80 rotate-3"></div>
                        <p className="text-lg md:text-xl leading-relaxed font-hand">
                            I'm a developer who believes the web should feel tactile and human.
                            I specialize in building React applications that break the mold of
                            standard corporate templates. My goal is to bring a sense of
                            craftsmanship back to digital experiences.
                        </p>
                    </div>
                </div>
            </Section>

            <div className="absolute bottom-0 left-0 w-full h-12 bg-paper torn-edge-bottom translate-y-6 z-10"></div>
        </div>
    );
}
