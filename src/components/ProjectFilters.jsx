import { portfolioProjects } from "../data/projects";

const filters = [
  { label: "Video editing", type: "Video editing" },
  { label: "Websites", type: "Websites" },
  { label: "Social media", type: "Social media" },
  
];

export default function ProjectFilters({ active, onChange }) {
  const count = (type) =>
    portfolioProjects.filter((project) => project.type === type).length;

  return (
    <div
      className="rb-project-filters"
      role="group"
      aria-label="Filter projects by service"
    >
      {filters.map(({ label, type }) => (
        <button
          key={type}
          type="button"
          className={active === type ? "is-active" : ""}
          aria-pressed={active === type}
          onClick={() => onChange(type)}
        >
          {label}<span>{count(type)}</span>
        </button>
      ))}
    </div>
  );
}