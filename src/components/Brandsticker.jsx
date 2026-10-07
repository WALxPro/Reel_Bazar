import React from "react";

// Replace with your real creator/client avatars + usernames
const people = [
  { name: "themartinmediaco", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "chriss.boustedt", avatar: "https://i.pravatar.cc/150?img=13" },
  { name: "tripiana.media", avatar: "https://i.pravatar.cc/150?img=14" },
  { name: "iamdjroc", avatar: "https://i.pravatar.cc/150?img=59" },
  { name: "iriverooo", avatar: "https://i.pravatar.cc/150?img=60" },
  { name: "ethanjcoyne", avatar: "https://i.pravatar.cc/150?img=15" },
  { name: "mattykay", avatar: "https://i.pravatar.cc/150?img=13" },
  { name: "mvvxl", avatar: "https://i.pravatar.cc/150?img=51" },
  { name: "iamgrantowens", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "jasoncooperson", avatar: "https://i.pravatar.cc/150?img=33" },
  { name: "ellieksnow", avatar: "https://i.pravatar.cc/150?img=32" },
];

const AvatarItem = ({ name, avatar }) => (
  <li className="flex shrink-0 flex-col items-center gap-2">
    <div
      className="h-14 w-14 shrink-0 rounded-full p-[2px] sm:h-16 sm:w-16"
      style={{
        background:
          "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)",
      }}
    >
      <img
        src={avatar}
        alt={name}
        className="h-full w-full rounded-full border-2 border-black object-cover"
      />
    </div>
    <span className="text-xs text-white/70">{name}</span>
  </li>
);

const BrandsTicker = () => {
  // duplicate the list so the scroll loop is seamless
  const loopItems = [...people, ...people, ...people];

  return (
    <div className="w-full bg-black px-4 py-5 sm:px-7">
      <style>{`
        @keyframes brands-ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .brands-ticker-track {
          animation: brands-ticker-scroll 35s linear infinite;
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
        <ul className="brands-ticker-track flex w-max list-none items-start gap-8 p-0 sm:gap-10">
          {loopItems.map((person, i) => (
            <AvatarItem key={i} name={person.name} avatar={person.avatar} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrandsTicker;