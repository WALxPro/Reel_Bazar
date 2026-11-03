import { Reveal } from "./Motion";

const testimonials = [
  {
    name: "Ryan Mitchell",
    role: "Founder, Lifestyle Brand",
    service: "Video",
    rating: 5,
    text: "TheReelBazar took our raw footage and turned it into content that actually feels like our brand. The pacing, transitions, and overall flow were exactly what we were looking for.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Olivia Carter",
    role: "Content Creator",
    service: "Video",
    rating: 5,
    text: "I’ve worked with different editors before, but what stood out with TheReelBazar was their understanding of the content. They didn’t just edit clips, they knew what moments needed attention.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Marcus Lee",
    role: "Social Media Manager",
    service: "Social",
    rating: 5,
    text: "Our videos used to feel flat. TheReelBazar helped us create edits that keep people watching longer and made our content look much more professional.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Emma Wilson",
    role: "YouTube Creator",
    service: "Video",
    rating: 5,
    text: "The process was simple from start to finish. I shared my ideas, and they handled the creative side really well. The final videos were better than what I had imagined.",
    avatar: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Daniel Brooks",
    role: "Creator & Entrepreneur",
    service: "Video",
    rating: 5,
    text: "What I appreciate most is their attention to small details. The timing, music choices, and transitions always make the videos feel intentional.",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
  {
    name: "Sophia Adams",
    role: "Brand Consultant",
    service: "Web",
    rating: 5,
    text: "TheReelBazar feels less like an editing service and more like a creative partner. They understand the goal behind the content, not just the footage itself.",
    avatar: "https://i.pravatar.cc/100?img=60",
  },
  {
    name: "James Parker",
    role: "Marketing Lead",
    service: "Social",
    rating: 5,
    text: "Fast communication, clean edits, and consistent quality. They’ve become our go-to team whenever we need video content done right.",
    avatar: "https://i.pravatar.cc/100?img=68",
  },
  {
    name: "Jason Cooper",
    role: "Digital Creator",
    service: "Video",
    rating: 5,
    text: "TheReelBazar transformed our video content with strong storytelling, polished visuals, and editing that keeps the audience engaged.",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    name: "Matty Kay",
    role: "Content Creator",
    service: "Video",
    rating: 5,
    text: "TheReelBazar upgraded our content through polished editing, smooth transitions, and visuals that aligned perfectly with our brand.",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
];

function TestimonialCard({ testimonial }) {
  const serviceClass = testimonial.service.toLowerCase();
  return (
    <article className="rb-testimonial-card">
      <span className="rb-quote-mark" aria-hidden="true">“</span>
      <p className="rb-testimonial-copy">{testimonial.text}</p>
      <div className="rb-testimonial-footer">
        <img src={testimonial.avatar} alt="" loading="lazy" />
        <div>
          <strong>{testimonial.name}</strong>
          <span className="rb-testimonial-role">{testimonial.role}</span>
        </div>
        <span className={`rb-testimonial-service ${serviceClass}`}>{testimonial.service}</span>
      </div>
    </article>
  );
}

function MarqueeRow({ items, reverse = false, duration = 40 }) {
  return (
    <div className="rb-testimonial-row">
      <div className={`rb-testimonial-track ${reverse ? "reverse" : ""}`} style={{ "--duration": `${duration}s` }}>
        {[...items, ...items].map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="rb-section rb-testimonials" aria-labelledby="testimonials-title">
      <div className="rb-wrap">
        <Reveal variant="heading">
          <p className="rb-eyebrow">Good words</p>
          <h2 id="testimonials-title">Loved by brands that <em>create.</em></h2>
          <p className="rb-subtitle">What creators and brands say about our video editing, social media and website work.</p>
        </Reveal>
      </div>
      <div className="rb-testimonial-rows">
        <MarqueeRow items={testimonials.slice(0, 3)} duration={110} />
        <MarqueeRow items={testimonials.slice(3, 6)} reverse duration={130} />
        <MarqueeRow items={testimonials.slice(6, 9)} duration={100} />
      </div>
    </section>
  );
}
