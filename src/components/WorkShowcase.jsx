import WorkItem from './WorkItem';
import { projects } from '../data/projects';
import '../styles/work.css';

export default function WorkShowcase() {
    return (
        <section id="work" className="work-section">
            <div className="work-header">
                <h2 className="work-title">Work</h2>
            </div>

            <div className="work-list">
                {projects.map((project, index) => (
                    <WorkItem key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
