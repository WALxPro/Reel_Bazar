import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";
import { portfolioProjects } from "../data/projects";
import { Reveal } from "./Motion";

export default function Work() {
  const [filter, setFilter] = useState("Websites");

  const visibleProjects = useMemo(
    () => portfolioProjects.filter((project) => project.type === filter),
    [filter]
  );

  return (
    <section className="rb-section rb-portfolio" aria-label="Portfolio projects">
      <div className="rb-wrap">
        <Reveal variant="heading">
          <p className="rb-eyebrow">On the timeline</p>
          <h2>Work that <em>speaks.</em></h2>
          <p className="rb-subtitle">
            Websites, social media campaigns and videos. Select a project to see what we delivered.
          </p>
        </Reveal>

        <ProjectFilters active={filter} onChange={setFilter} />

        <div className="rb-project-grid">
          {visibleProjects.map((project) => (
            <Reveal key={project.id} variant="card">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="rb-bundle rb-portfolio-cta">
          <p>Next up</p>
          <h3>Your project could be <em>next.</em></h3>
          <Link className="rb-button rb-glow" to="/contact">
            Start a project ↗
          </Link>
        </div>
      </div>
    </section>
  );
}