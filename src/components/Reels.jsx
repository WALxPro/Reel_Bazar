
import BrandsTicker from "./Brandsticker";
import TagsTicker from "./Tagsticker";
import TiltedVideoCard from "./TiltedVideoCard";

const videos = [
  {
    videoUrl:
      "https://res.cloudinary.com/daterfw1n/video/upload/v1792626435/Test_cmewvw.mp4",
    transform: "none",
    autoPlay: true,
  },
  {
    videoUrl:
      "https://res.cloudinary.com/m4hnnyml/video/upload/v1791369394/client_review_2.mp4",
    transform: "none",
    autoPlay: true,
  },
];

export default function Reels() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        px-0
        py-12
        sm:px-6
        sm:py-16
        lg:py-20
      "
    >
      {/* MOBILE SLIDER */}
      <div className="w-full sm:hidden">
        <div
          className="
            flex
            w-full
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            px-[calc((100vw-72vw)/2)]
            pb-8
            scrollbar-hide
            overscroll-x-contain
          "
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="
                w-[72vw]
                shrink-0
                snap-center
              "
            >
              <TiltedVideoCard
                {...video}
                width="100%"
                height="auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* TABLET + DESKTOP */}
      <div
        className="
          mx-auto
          hidden
          w-full
          max-w-6xl
          items-center
          justify-center
          gap-6
          sm:flex
          md:gap-10
        "
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="
              w-[220px]
              shrink-0
              md:w-[260px]
              lg:w-[292px]
            "
          >
            <TiltedVideoCard
              {...video}
              width="100%"
              height="auto"
            />
          </div>
        ))}
      </div>

      {/* TICKERS */}
      <div
        className="
          relative
          z-10
          mx-auto
          -mt-4
          flex
          w-full
          max-w-6xl
          flex-col
          gap-2
          px-4
          sm:-mt-8
          sm:w-[calc(100%-3.5rem)]
          sm:gap-4
          sm:px-0
          md:-mt-12
        "
      >
        <TagsTicker />
        <BrandsTicker />
        <TagsTicker />
      </div>
    </section>
  );
}
