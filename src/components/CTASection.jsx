
import Button from "./Button";
import { Reveal } from "./Motion";

const CTASection = () => {
  return (
    <section
      className="
        w-full
        bg-black
        md:px-5
        px-0
        flex
        justify-center
      "
    >
      <div
        className="
          relative
          flex
          w-full
          max-w-[1200px]
          flex-col
          items-center
          justify-center
          overflow-hidden
          rounded-[20px]
          px-6
          py-10
          md:pb-16
          md:pt-32
          text-center
          md:px-[60px]
          cta-gradient
        "
      >
        <Reveal className="relative z-10 max-w-3xl">
        

          <h2
            className="
              mt-3
              text-4xl
              font-bold
              leading-none
              tracking-[-0.08em]
              text-white
              md:text-[40px]
              text-[24px]
            "
          >
            Ready To Turn Your Raw Footage Into Content People Actually Watch?
          </h2>

        

          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            
            <Button text="View Our Work" to="/case-study"/>
            <Button text="Contact Us" to="/contact"/>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
