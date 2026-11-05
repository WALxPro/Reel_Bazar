export const servicePlans = {
 video: {
  name: "Video editing",
  accent: "var(--tl)",
  unit: "per project",

  buildSteps: [
    { number: "01", name: "Brief", detail: "Your footage, idea and goals." },
    { number: "02", name: "Edit", detail: "Cuts, pacing, captions and sound." },
    { number: "03", name: "Review", detail: "You send feedback, we refine." },
    { number: "04", name: "Deliver", detail: "Final files in every format you need." },
  ],

  plans: [
    {
      name: "Reels Editing",
      price: "$25–$30",
      suffix: "/ video",
      subtitle: "Reels, Shorts & TikTok",
      delivery: "1–2 days",
      features: [
        "Up to 60 seconds",
        "Professional cuts & transitions",
        "Subtitles & animated captions",
        "Background music & sound effects",
        "Basic color correction",
        "Social media ready formats",
      ]
    },
    {
      name: "Long-form Editing",
      price: "$100–$150",
      suffix: "/ video",
      featured: true,
      subtitle: "YouTube & professional videos",
      delivery: "3–5 days",
      features: [
        "Up to 10 to 15 minutes",
        "Cinematic cuts & storytelling",
        "Advanced transitions & pacing",
        "Motion graphics & lower thirds",
        "Professional color grading",
        "Sound design & audio enhancement",
        "Subtitles & captions",
      ]
    },
    {
      name: "Custom Editing",
      price: "Let's Talk",
      suffix: "",
      subtitle: "Bulk videos & ongoing editing",
      delivery: "Flexible turnaround",
      custom: true,
      features: [
        "Bulk Reels, Shorts & long-form videos",
        "Custom monthly editing packages",
        "Consistent branding & editing style",
        "Batch video production & delivery",
        "Advanced motion graphics & animations",
        "Multiple social media formats",
        "Dedicated editing workflow",
        "Priority delivery options",
        "Custom pricing based on project scope"
      ]
    }
  ],
},
  website: {
    name: "Website development",
    accent: "var(--tl)",
    unit: "one-time",
    buildSteps: [
      { number: "01", name: "Plan", detail: "Goals, pages, content and sitemap." },
      { number: "02", name: "Design", detail: "A custom look in your brand style." },
      { number: "03", name: "Build", detail: "Fast, responsive code with SEO built in." },
      { number: "04", name: "Launch", detail: "Testing, go-live and Google setup." },
    ],
    plans: [
      { name: "Starter", price: 150, subtitle: "Landing / portfolio site", delivery: "3–5 days", features: ["Up to 3 pages", "Mobile-responsive design", "Contact form + WhatsApp button", "Basic on-page SEO", "Social media links", "2 rounds of revisions"] },
      { name: "Business", price: 300, featured: true, subtitle: "Full business website", delivery: "7–10 days", features: ["Up to 6 pages", "Custom design in your brand style", "SEO setup: meta tags, sitemap, schema", "Speed optimization", "Google Analytics & Search Console", "Blog / news section", "3 rounds of revisions"] },
      { name: "Premium", price: 500, subtitle: "Online store or advanced site", delivery: "10–14 days", features: ["Up to 10 pages or online store", "Product catalog & secure checkout", "Booking / payment integrations", "Advanced SEO & speed tuning", "Admin panel", "30 days of free support", "Unlimited minor revisions"] },
    ],
    
  },
  social: {
    name: "Social media management",
    accent: "var(--sun)",
    unit: "per month",
    platforms: ["Instagram", "Facebook", "TikTok", "YouTube", "LinkedIn"],
    cycle: ["Research", "Plan", "Create", "Publish", "Engage", "Report"],
    plans: [
      { name: "Starter", price: 250, suffix: "/mo", subtitle: "1 platform", features: ["1 platform (Instagram or Facebook)", "12 designed posts / month", "Captions & hashtag research", "Posting & scheduling", "Monthly performance report"] },
      { name: "Growth", price: 450, suffix: "/mo", featured: true, subtitle: "2 platforms", features: ["2 platforms", "16 posts + 8 reels / month", "Monthly content calendar & strategy", "Community replies & engagement", "Competitor & hashtag research", "Monthly report + strategy call"] },
      { name: "Pro", price: 800, suffix: "/mo", subtitle: "3–4 platforms", features: ["3–4 platforms", "24 posts + 12 reels / month", "Full strategy & content calendar", "Daily community management", "Ad campaign management (ad spend extra)", "Weekly updates + monthly report", "Priority support"] },
    ],
    addons: ["Extra reel — $20 each", "Extra platform — $120 / mo", "Paid ads management — from $100 / mo", "Shoot day — custom quote", "Profile setup & branding — $60 one-time", "Influencer outreach — custom quote"],
  },
};