import React, { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import {projects} from "../data";
import { Reveal } from "./Motion";

const Work = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

 const filteredProjects = projects.filter((project) => {
  const searchWords = search.toLowerCase().trim().split(/\s+/);

  const searchableText = `
    ${project.title}
    ${project.type}
    ${project.category}
  `.toLowerCase();

  const matchesSearch = searchWords.every((word) =>
    searchableText.includes(word)
  );

  const matchesCategory =
    category === "all" || project.type === category;

  return matchesSearch && matchesCategory;
});
  return (
    <section className="w-full bg-black px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <Reveal><ProjectFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        /></Reveal>

        {filteredProjects.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {filteredProjects.map((project) => (
              <Reveal key={project.number} variant="card" delay={filteredProjects.indexOf(project) * 0.1}><ProjectCard {...project} /></Reveal>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[250px] w-full items-center justify-center rounded-2xl border border-white/20 bg-[#121212]">
            <div className="text-center">
              <h3 className="text-xl font-medium text-white">
                No projects found
              </h3>

              <p className="mt-2 text-sm text-white/50">
                Try a different search or category.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
