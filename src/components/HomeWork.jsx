import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { portfolioProjects } from "../data/projects";
import { Reveal } from "./Motion";

const featuredProjects = ["Websites", "Social media", "Video editing"].map((type) =>
  portfolioProjects.find((project) => project.type === type),
).filter(Boolean);

export default function HomeWork() {
  return (
    <section className="rb-section rb-home-work">
      <div className="rb-wrap">
        <Reveal variant="heading">
          <p className="rb-eyebrow">Latest from the timeline</p>
          <h2 className="rb-homework">Work that <em>speaks.</em></h2>
        </Reveal>
        <div className="rb-project-grid rb-home-project-grid">
          {featuredProjects.map((project) => (
            <Reveal key={project.id} variant="card">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <div className="rb-home-work__action">
          <Link className="rb-button rb-yellow" to="/case-study">View full portfolio ↗</Link>
        </div>
      </div>
    </section>
  );
}
