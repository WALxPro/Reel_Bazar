import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Clock, CheckCircle2 } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Button from "../components/Button";

const CONTACT_EMAIL = "contact@thereelbazar.com";
const INSTAGRAM_HANDLE = "@_thereelbazar";

const inputClasses = `
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
`;

const Field = ({ label, children }) => (
  <label className="flex w-full flex-col gap-2">
    <p className="text-[18px] tracking-[-0.02em] text-white">{label}</p>

    {children}
  </label>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "Short-Form Video Editing",
    videos: 1,
    format: "Short Form",
    details: "",
    budget: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const update = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    const templateParams = {
      name: form.name,
      email: form.email,
      company: form.company,
      service: form.service,
      videos: form.videos,
      format: form.format,
      details: form.details,
      budget: form.budget,
    };

    try {
      await emailjs.send(
        "service_qqch8vu",
        "template_1x062ys",
        templateParams,
        {
          publicKey: "6aqOX3WEGiqBAlkG5",
        },
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        company: "",
        service: "Short-Form Video Editing",
        videos: 1,
        format: "Short Form",
        details: "",
        budget: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="w-full bg-black px-5 pt-36 pb-24 sm:px-8 md:pt-44 md:pb-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.4fr]">
        {/* LEFT */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-[18px] font-bold leading-none tracking-[-0.08em] text-white md:text-[23px]">
              Let's talk.
            </h3>

            <h2 className="mt-3 text-[24px] font-bold leading-none tracking-[-0.08em] text-white md:text-[40px]">
              Bring your project to life.
            </h2>

            <p className="mt-5 max-w-[420px] text-xs leading-relaxed text-white/80 md:text-[16px]">
              Tell us about your project and we'll get back with a plan,
              timeline, and pricing tailored to your content.
            </p>
          </div>

          {/* DIRECT */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium tracking-[0.2em] text-white/40">
              DIRECT
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 text-white transition hover:text-white/70"
            >
              <Mail size={18} className="text-white/60" />
              {CONTACT_EMAIL}
            </a>

            <a
              href="https://instagram.com/_thereelbazar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-white transition hover:text-white/70"
            >
              <FaInstagram size={18} className="text-white/60" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          {/* RESPONSE TIME */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs font-medium tracking-[0.2em] text-white/40">
              RESPONSE TIME
            </p>

            <div className="mt-4 flex gap-3">
              <Clock size={18} className="mt-[2px] shrink-0 text-white/60" />

              <p className="text-sm leading-relaxed text-white/60">
                We reply to every request within one business day, including a
                footage checklist so editing can start immediately.
              </p>
            </div>
          </div>

          {/* WHAT YOU GET */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs font-medium tracking-[0.2em] text-white/40">
              WHAT YOU GET
            </p>

            <ul className="mt-4 flex flex-col gap-3">
              {[
                "Dedicated editor for your brand",
                "Unlimited revisions until you're happy",
                "Fast turnaround, most edits in 48–72h",
                "Direct communication, no middlemen",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/60"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-[2px] shrink-0 text-white/50"
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[10px]  p-6 sm:p-8"
          style={{
            "--border-bottom-width": "1px",
            "--border-color": "rgba(171, 171, 171, 0.2)",
            "--border-left-width": "1px",
            "--border-right-width": "1px",
            "--border-style": "solid",
            "--border-top-width": "1px",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            background: "rgba(0, 0, 0, 0)",

            border: "1px solid rgba(171, 171, 171, 0.2)",
            boxShadow: "rgba(0, 0, 0, 0.25) 2px 5px 10px 0px",
          }}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* NAME */}
            <Field label="Name">
              <input
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={update("name")}
                className={inputClasses}
              />
            </Field>

            {/* EMAIL */}
            <Field label="Email">
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={form.email}
                onChange={update("email")}
                className={inputClasses}
              />
            </Field>

            {/* COMPANY */}
            <Field label="Company / Channel">
              <input
                type="text"
                placeholder="Brand or channel name"
                value={form.company}
                onChange={update("company")}
                className={inputClasses}
              />
            </Field>

            {/* SERVICE */}
            <Field label="Service Required">
              <select
                value={form.service}
                onChange={update("service")}
                className={`${inputClasses} cursor-pointer bg-[#121212]`}
              >
                <option>Short-Form Video Editing</option>
                <option>Long-Form Video Editing</option>
                <option>Explainer Video</option>
                <option>Full Content Management</option>
              </select>
            </Field>

            {/* NUMBER OF VIDEOS */}
            <Field label="Number of Videos">
              <input
                type="number"
                min={1}
                value={form.videos}
                onChange={update("videos")}
                className={inputClasses}
              />
            </Field>

            {/* FORMAT */}
            <Field label="Format">
              <div className="flex h-10 gap-3">
                {["Short Form", "Long Form"].map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        format: opt,
                      }))
                    }
                    className={`
                      flex-1
                      rounded-md
                      border
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wide
                      transition
                      ${
                        form.format === opt
                          ? "border-white bg-white text-black"
                          : "border-white/20 bg-transparent text-white/50 hover:border-white/40"
                      }
                    `}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </Field>
          </div>

          {/* PROJECT DETAILS */}
          <div className="mt-6">
            <Field label="Project Details">
              <textarea
                rows={5}
                placeholder="Video length, style references, deadlines, where it will be published..."
                value={form.details}
                onChange={update("details")}
                className="
                  w-full
                  resize-none
                  rounded-md
                  border
                  border-white/20
                  bg-transparent
                  px-3
                  py-2
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-white/50
                  focus:border-white/40
                "
              />
            </Field>
          </div>

          {/* BUDGET */}
          <div className="mt-6">
            <Field label="Budget">
              <input
                type="text"
                placeholder="e.g. $300 / month"
                value={form.budget}
                onChange={update("budget")}
                className={inputClasses}
              />
            </Field>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={sending}
            className="
    mt-8
    w-full
    rounded-md
     border-white/30
        bg-white/30
    px-6
    py-3
    text-sm
    font-semibold
    
    transition
    hover:bg-white/30
    text-white
    disabled:cursor-not-allowed
    disabled:opacity-60
  "
          >
            {sending ? "Sending..." : "Send My Request"}
          </button>

          {/* STATUS */}
          {status === "success" && (
            <p className="mt-4 text-center text-sm text-green-400">
              Your request has been sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-center text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
