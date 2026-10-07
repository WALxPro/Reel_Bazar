import React from "react";

const ProjectFilter = ({
  search,
  setSearch,
  category,
  setCategory,
}) => {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        gap-5
        rounded-[10px]
        border
        border-white/30
        bg-[#121212]
        p-4
        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      {/* Project Search */}
      <label className="flex w-full flex-col gap-2 md:w-[300px]">
        <p className="text-[18px] text-white">
          Project
        </p>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            h-10
            w-full
            rounded-md
            border
            border-white/20
            bg-transparent
            px-3
            text-sm
            text-white
            outline-none
            placeholder:text-white/50
            focus:border-white/40
          "
        />
      </label>

      {/* Category */}
      <label className="flex w-full flex-col gap-2 md:w-[300px]">
        <p className="text-[18px] tracking-[-0.02em] text-white">
          Category
        </p>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
            h-10
            w-full
            cursor-pointer
            rounded-md
            border
            border-white/20
            bg-[#121212]
            px-3
            text-sm
            text-white
            outline-none
          "
        >
          <option value="all">All</option>
          <option value="Short Form">Short Form</option>
          <option value="Explainer">Explainer</option>
          <option value="Long Form">Long Form</option>
        </select>
      </label>
    </div>
  );
};

export default ProjectFilter;