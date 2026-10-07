import React from "react";

const tags = [
  "Viral Short Edits",
  "YouTube Growth Edits",
  "Scroll-Stopping Ads",
  "Social Media Growth",
];

const Dot = () => (
  <span className="inline-block h-[7px] w-[7px] shrink-0 rounded-full bg-white/70" />
);

const TagItem = ({ text }) => (
  <li className="flex shrink-0 items-center gap-2">
    <Dot />
    <h4 className="whitespace-nowrap text-xl font-medium text-white sm:text-xl">
      {text}
    </h4>
  </li>
);

const TagsTicker = () => {
  const loopItems = [...tags, ...tags, ...tags, ...tags];

  return (
    <div className="w-full bg-black px-4 py-6 sm:px-7">
      <style>{`
        @keyframes tags-ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-25%);
          }
        }

        .tags-ticker-track {
          animation: tags-ticker-scroll 22s linear infinite;
        }
      `}</style>

      <div
        className="relative flex h-full w-full items-center overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
        }}
      >
        <ul className="tags-ticker-track flex w-max list-none items-center gap-8 p-0">
          {loopItems.map((tag, i) => (
            <TagItem key={i} text={tag} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagsTicker;