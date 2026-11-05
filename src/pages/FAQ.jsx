import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import Button from "../components/Button";
import PageHero from "../components/PageHero";

const faqs = [
  {
    question: "What is your usual turnaround time?",
    answer:
      "Short-form edits are typically delivered in 24–48 hours. Long-form videos take 2–4 days depending on length and complexity. Bulk and rush schedules are agreed upfront.",
  },
  {
    question: "What services do you offer?",
    answer:
      "TheReelBazar offers video editing, social media management and website development. Choose one service or combine all three with a bundle quote.",
  },

  {
    question: "How do I send my footage?",
    answer:
      "Google Drive, Dropbox, Frame.io or WeTransfer all work. Send raw clips, audio, brand assets and any reference videos in one folder and we take it from there.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "Every project includes two rounds of revisions. Most edits are approved on the first pass, and extra rounds can be added for larger projects.",
  },
  {
    question: "How does bulk pricing work?",
    answer:
      "Bulk pricing is based on volume, video length and editing complexity. Tell us how many videos you publish per month and we send a custom quote with a fixed monthly rate.",
  },
  {
    question: "Which formats and aspect ratios do you deliver?",
    answer:
      "We deliver 9:16, 1:1 and 16:9 exports in MP4 or MOV, with burned-in or separate subtitle files, sized for Instagram, TikTok, YouTube, LinkedIn and paid ads.",
  },
  {
    question: "How do I get started?",
    answer: (
      <>
        Send a quote request through the contact form or email{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@thereelbazar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact@thereelbazar.com
        </a>
        . We reply with pricing, a start date and a footage checklist within one
        business day.
      </>
    ),
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Good to know"
        title="Questions,"
        accent="answered."
        description="The practical details behind a smooth creative partnership."
      />
      <section className="rb-section rb-faq-section">
        <div className="mx-auto px-3 grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.3fr]">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <p className="rb-eyebrow">Project bin</p>

            <h2>
              Good to <em>know.</em>
            </h2>

            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <video
                src="/fag.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[480px] w-full object-cover"
              />
            </div>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`rb-faq-item ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="rb-faq-question"
                  >
                    <span>{faq.question}</span>

                    <span
                      className={`rb-faq-icon ${isOpen ? "is-open" : ""}`}
                      aria-hidden="true"
                    >
                      {isOpen ? <X size={20} /> : <Plus size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="rb-faq-answer" id={`faq-answer-${index}`}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
