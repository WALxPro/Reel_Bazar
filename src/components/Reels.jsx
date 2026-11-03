import ProjectCard from "./ProjectCard";
import { Reveal } from "./Motion";

const reelProjects = [
  {
    id: "client-review-one",
    type: "Video editing",
    brand: "Client review",
    label: "Client testimonial reel",
    description: "A client review shared as a short-form video.",
    deliverables: ["Short-form edit", "Social-ready video"],
    colors: ["#32d6c0", "#ffd23f", "#ff3d1f"],
    videoUrl: "https://res.cloudinary.com/daterfw1n/video/upload/v1792626435/Test_cmewvw.mp4",
  },
  {
    id: "client-review-two",
    type: "Video editing",
    brand: "Client review",
    label: "Client testimonial reel",
    description: "A client review shared as a short-form video.",
    deliverables: ["Short-form edit", "Social-ready video"],
    colors: ["#32d6c0", "#ffd23f", "#ff3d1f"],
    videoUrl: "https://res.cloudinary.com/m4hnnyml/video/upload/v1791369394/client_review_2.mp4",
  },
];

export default function Reels() {
  return (
    <section className="rb-section rb-reels" aria-labelledby="rb-reels-title">
      <div className="rb-wrap">
        <Reveal variant="heading">
          <p className="rb-eyebrow">Client reels</p>
          <h2 id="rb-reels-title">
            Real clients. <em>Real reels.</em>
          </h2>
          <p className="rb-subtitle">
            A closer look at the video edits we created for our clients.
          </p>
        </Reveal>

        <div className="rb-project-grid">
          {reelProjects.map((project) => (
            <Reveal key={project.id} variant="card">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}