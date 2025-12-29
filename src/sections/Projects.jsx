import Section from '../components/Section';
import Card from '../components/Card';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <Section id="projects" className="bg-paper">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-hand font-bold text-ink mb-4 inline-block border-b-4 border-ink/10 pb-2 rotate-[-1deg]">
                        Selected Works
                    </h2>
                    <p className="text-ink/60 font-hand text-xl mt-2">Stuff I've built with cardboard & code</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
                    {projects.map((project, index) => (
                        <Card key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
