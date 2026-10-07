import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import Button from "../components/Button";

const faqs = [
  {
    question: "What is your usual turnaround time?",
    answer:
      "Short-form edits are typically delivered in 24–48 hours. Long-form videos take 2–4 days depending on length and complexity. Bulk and rush schedules are agreed upfront.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide video editing, custom video production, content strategy development, social media optimization, and more, tailored to meet your needs.",
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
    answer:
      "Send a quote request through the contact form or email contact@thereelbazar.com. We reply with pricing, a start date and a footage checklist within one business day.",
  },
  

];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-black px-5 pt-36 pb-24 sm:px-8 md:pt-44 md:pb-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.3fr]">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            FAQ
          </div>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Frequently asked questions about us
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

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-sm font-medium leading-snug text-white">
                Have a question?
                <br />
                Let's discuss it now!
              </p>

    
              <Button text="Book an appointment" to="/contact" />
            </div>
          </div>
        </div>

        {/* Right — accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[#141414] p-5 transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-[15px] font-semibold text-white sm:text-base">
                    {faq.question}
                  </span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                    {isOpen ? <X size={15} /> : <Plus size={15} />}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;