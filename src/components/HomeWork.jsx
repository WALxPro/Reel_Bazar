import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Homeprojects } from "../data";
import HomeFilter from "./HomeFilter";
import { Reveal } from "./Motion";

const HomeWork = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Long Form");

  const filteredProjects = Homeprojects.filter((project) => {
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
    <section className="w-full px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <Reveal>
          <HomeFilter onChange={setCategory} />
        </Reveal>

        {filteredProjects.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <Reveal
                key={project.number}
                variant="card"
                delay={index * 0.1}
              >
                <ProjectCard {...project} />
              </Reveal>
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

export default HomeWork;