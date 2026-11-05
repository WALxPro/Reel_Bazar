import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero";

const CONTACT_EMAIL = "contact@thereelbazar.com";
const PHONE_NUMBER = "+923422755150";
const WHATSAPP_NUMBER = "923422755150";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I want to know more about your services.")}`;
const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/_thereelbazar/", Icon: FaInstagram },
  { label: "X (Twitter)", href: "https://x.com/TheReelBazar", Icon: FaXTwitter },
  { label: "YouTube", href: "https://www.youtube.com/@TheReelBazar-g8h", Icon: FaYoutube },
];

const inputClasses = "rb-contact-input";
const serviceOptions = [
  { value: "Video editing", label: "Video editing" },
  { value: "Website development", label: "Website development" },
  { value: "Social media management", label: "Social media management" },
];

const escapeEmailHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const emailValue = (value) => escapeEmailHtml(value || "Not provided");

const buildServiceSections = (form) => {
  const sections = [];
  const addSection = (title, rows) => {
    sections.push(`
      <div style="padding: 24px 30px;">
        <div style="font-size: 13px; font-weight: 700; letter-spacing: 1.5px; color: #999999; margin-bottom: 14px;">${title}</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 10px 0; color: #888888; width: 160px;">${label}</td>
                  <td style="padding: 10px 0; font-weight: 600;">${value}</td>
                </tr>`,
            )
            .join("")}
        </table>
      </div>
      <div style="height: 1px; background-color: #eeeeee; margin: 0 30px;"></div>
    `);
  };

  if (form.services.includes("Video editing")) {
    addSection("VIDEO EDITING DETAILS", [
      ["Videos per month", emailValue(form.videos)],
      ["Video format", emailValue(form.format)],
    ]);
  }

  if (form.services.includes("Website development")) {
    addSection("WEBSITE DETAILS", [
      ["Website type", emailValue(form.websiteType)],
      ["Approx. number of pages", emailValue(form.websitePages)],
    ]);
  }

  if (form.services.includes("Social media management")) {
    addSection("SOCIAL MEDIA DETAILS", [
      ["Platforms", emailValue(form.socialPlatforms)],
    ]);
  }

  return sections.join("");
};

const Field = ({ label, children }) => (
  <label className="flex w-full flex-col gap-2">
    <span className="text-[18px] tracking-[-0.02em] text-white">{label}</span>

    {children}
  </label>
);

const Contact = () => {
  const [searchParams] = useSearchParams();
  const requestedPlan = searchParams.get("plan") || "";
  const initialServices = serviceOptions
    .filter(({ value }) => requestedPlan.toLowerCase().includes(value.toLowerCase()))
    .map(({ value }) => value);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    services: initialServices,
    videos: 1,
    format: "Short Form",
    websiteType: "",
    websitePages: "",
    socialPlatforms: "",
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

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.services.length === 0) {
      setStatus("service-required");
      return;
    }

    setSending(true);
    setStatus("");

    const templateParams = {
      name: form.name,
      email: form.email,
      company: form.company,
      service: form.services.join(", "),
      services: form.services.join(", "),
      selected_services: form.services.join(", "),
      plan: requestedPlan,
      videos: form.videos,
      format: form.format,
      website_type: form.websiteType,
      website_pages: form.websitePages,
      social_platforms: form.socialPlatforms,
      details: form.details,
      budget: form.budget,
      service_sections: buildServiceSections(form),
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
        services: [],
        videos: 1,
        format: "Short Form",
        websiteType: "",
        websitePages: "",
        socialPlatforms: "",
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
    <><PageHero eyebrow="Start a conversation" title="Let’s build" accent="something noticed." description="Tell us what you are making and we’ll shape the right creative plan." /><section className="rb-contact-section w-full bg-black px-5 py-24 sm:px-8 md:py-32">
      <div className="rb-contact-layout mx-auto grid px-3 w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.4fr]">
        {/* LEFT */}
        <div className="rb-contact-info flex flex-col gap-8">
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
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 text-white transition hover:text-white/70"
            >
              <Phone size={18} className="text-white/60" />
              +92 342 2755150
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white transition hover:text-white/70"
            >
              <FaWhatsapp size={18} className="text-white/60" />
              Message us on WhatsApp
            </a>

            <div className="rb-footer-socials rb-contact-socials" aria-label="Social media">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit TheReelBazar on ${label}`}
                  title={label}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* RESPONSE TIME */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs font-medium tracking-[0.2em] text-white/40">
              RESPONSE TIME
            </p>

            <div className="mt-4 flex gap-3">
              <Clock size={18} className="mt-[2px] shrink-0 text-white/60" />

              <p className="text-sm leading-relaxed text-white/60">
                We reply to every request within one business day with next steps
                tailored to the services you need.
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
                "A clear plan for your selected services",
                "Transparent scope, timelines, and pricing",
                "One creative team across video, web, and social",
                "Direct communication from start to finish",
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
          className="rb-contact-form rounded-[10px] p-6 sm:p-8"
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

          </div>

          <fieldset className="rb-contact-services mt-6">
            <legend>What do you need? <span>Select all that apply.</span></legend>
            <div className="rb-contact-service-options">
              {serviceOptions.map(({ value, label }) => (
                <label key={value} className="rb-contact-service-option">
                  <input
                    type="checkbox"
                    value={value}
                    checked={form.services.includes(value)}
                    onChange={() => toggleService(value)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            {requestedPlan && <p className="rb-contact-plan">Enquiring about: {requestedPlan}</p>}
            {status === "service-required" && (
              <p className="rb-contact-error" role="alert">Please select at least one service.</p>
            )}
          </fieldset>

          {form.services.includes("Video editing") && (
            <div className="rb-contact-service-details">
              <h3>Video editing details</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Videos per month">
                  <input type="number" min={1} value={form.videos} onChange={update("videos")} className={inputClasses} />
                </Field>
                <fieldset className="rb-contact-format">
                  <legend>Video format</legend>
                  <div className="flex h-10 gap-3">
                    {["Short Form", "Long Form"].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        aria-pressed={form.format === opt}
                        onClick={() => setForm((prev) => ({ ...prev, format: opt }))}
                        className={`rb-format-button ${form.format === opt ? "is-active" : ""}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          )}

          {form.services.includes("Website development") && (
            <div className="rb-contact-service-details">
              <h3>Website details</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Website type">
                  <select value={form.websiteType} onChange={update("websiteType")} className={`${inputClasses} cursor-pointer`}>
                    <option value="">Choose a type</option>
                    <option>Business website</option>
                    <option>Portfolio / landing page</option>
                    <option>Online store</option>
                    <option>Other / not sure</option>
                  </select>
                </Field>
                <Field label="Approx. number of pages">
                  <input type="number" min={1} placeholder="e.g. 5" value={form.websitePages} onChange={update("websitePages")} className={inputClasses} />
                </Field>
              </div>
            </div>
          )}

          {form.services.includes("Social media management") && (
            <div className="rb-contact-service-details">
              <h3>Social media details</h3>
              <Field label="Platforms you want help with">
                <input type="text" placeholder="Instagram, TikTok, Facebook..." value={form.socialPlatforms} onChange={update("socialPlatforms")} className={inputClasses} />
              </Field>
            </div>
          )}

          {/* PROJECT DETAILS */}
          <div className="mt-6">
            <Field label="Project Details">
              <textarea
                rows={5}
                placeholder="Goals, references, deadlines, current website or social links, and anything else we should know..."
                value={form.details}
                onChange={update("details")}
                className="rb-contact-input rb-contact-textarea"
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
            className="rb-button rb-contact-submit"
          >
            {sending ? "Sending..." : "Send My Request"}
          </button>

          {/* STATUS */}
          {status === "success" && (
            <p className="rb-contact-success">
              Your request has been sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="rb-contact-error" role="alert">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section></>
  );
};

export default Contact;
