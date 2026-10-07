import BrandsTicker from "./Brandsticker";
import TagsTicker from "./Tagsticker";
import TiltedVideoCard from "./TiltedVideoCard";

const videos = [
  {
    videoUrl: "https://res.cloudinary.com/m4hnnyml/video/upload/v1791369394/client_review_2.mp4",
    transform: "rotate(-5deg) skewY(8deg)",
    borderRadius: "26px 26px 0 0",
    videoBorderRadius: "20px 20px 0 0",
    boxShadow:
      "0px 24px 52px 0px rgba(13,13,13,0.2), 0px -0.72px 1.01px -1.25px rgba(0,0,0,0.07), 0px -2.75px 3.84px -2.5px rgba(0,0,0,0.06), 0px -12px 16.8px -3.75px rgba(0,0,0,0.03)",
    buttonShadow: "0px 8px 32px 0px rgba(13,13,13,0.3)",
    autoPlay: true,
  },
  {
    videoUrl:
      "https://res.cloudinary.com/m4hnnyml/video/upload/v1791369394/client_review_2.mp4",
    transform: "rotate(0deg) skewY(0deg)",
    borderRadius: "26px 26px 0 0",
    videoBorderRadius: "20px 20px 0 0",
    boxShadow:
      "0px 24px 52px 0px rgba(13,13,13,0.2), 0px -0.72px 1.01px -1.25px rgba(0,0,0,0.07), 0px -2.75px 3.84px -2.5px rgba(0,0,0,0.06), 0px -12px 16.8px -3.75px rgba(0,0,0,0.03)",
    buttonShadow: "0px 8px 32px 0px rgba(13,13,13,0.3)",
    autoPlay: true,
  },
  {
    videoUrl:
      "https://res.cloudinary.com/m4hnnyml/video/upload/v1791369394/client_review_2.mp4",
    transform: "rotate(5deg) skewY(-8deg)",
    borderRadius: "26px 26px 0 0",
    videoBorderRadius: "20px 20px 0 0",
    boxShadow:
      "0px 24px 52px 0px rgba(13,13,13,0.2), 0px -0.72px 1.01px -1.25px rgba(0,0,0,0.07), 0px -2.75px 3.84px -2.5px rgba(0,0,0,0.06), 0px -12px 16.8px -3.75px rgba(0,0,0,0.03)",
    buttonShadow: "0px 8px 32px 0px rgba(13,13,13,0.3)",
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
        px-3
        py-12
        sm:px-6
        sm:py-16
        lg:py-20
      "
    >
      {/* MOBILE SLIDER */}
      <div className="sm:hidden">
        <div
          className="
            flex
            snap-x
            snap-mandatory
            gap-5
            overflow-x-auto
            px-5
            pb-8
            scrollbar-hide
          "
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="
                flex
                min-w-[82vw]
                snap-center
                justify-center
              "
            >
              <TiltedVideoCard
                {...video}
                width="320px"
                height="516px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* TABLET + DESKTOP — SAME AS BEFORE */}
      <div
        className="
          mx-auto
          hidden
          max-w-6xl
          items-end
          justify-center
          gap-4
          sm:flex
          md:gap-6
        "
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="
              min-w-0
              flex-1
              sm:scale-90
              md:scale-100
            "
          >
            <TiltedVideoCard {...video} />
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
          px-1
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