export const site = {
  name: "RV Fixer",
  shortName: "RV FIXER",
  legalName: "Crestivate LLC",
  ownerName: "Eugene",
  logo: "/logo.png",
  tagline: "We Fix It Where You Park.",
  description:
    "Mobile RV repair in King & Snohomish County. $80 call near Seattle, $120 in both counties. Over 40 mi from Seattle: +$3/mi. Labor $120/hr after you approve.",
  phone: "(206) 280-6910",
  phoneRaw: "+12062806910",
  email: "crestivate@rvfixerwa.com",
  url: "https://rvfixerwa.com",
  city: "Seattle",
  counties: ["King County", "Snohomish County"],
  region: "King County & Snohomish County, WA",
  freeServiceCities: [
    "Seattle",
    "Bellevue",
    "Shoreline",
    "Tukwila",
    "Issaquah",
    "Renton",
  ],
  bookingUrl: "#contact",
  googleReviewsUrl:
    "https://www.google.com/maps/place/RV+FIXER/@47.6774662,-122.1777975,17z/data=!3m1!4b1!4m6!3m5!1s0x8911005daa1f7c19:0xb19931826298e48!8m2!3d47.6774662!4d-122.1777975!16s%2Fg%2F11zf693h2w",
  formAction: "https://api.web3forms.com/submit",
  web3formsAccessKey: "38de1670-d080-48ed-9748-9c6dc0839b79",
  serviceCallKingCounty: "$120",
  serviceCallSnohomish: "$120",
  serviceCallNearSeattle: "$80",
  mileageFromSeattleIncluded: 40,
  mileageExtraPerMile: "$3",
};

export const ui = {
  nav: {
    services: "Services",
    pricing: "Pricing",
    about: "About",
    reviews: "Reviews",
    contact: "Contact",
    cta: "Service Request",
    ctaHref: "#contact",
  },
  hero: {
    ctaFormTitle: "Service Request Form",
    ctaFormSubtitle: "Preferred · Pre-estimate",
    promo: "King & Snohomish County · $80 call near Seattle",
    badge: "King & Snohomish County",
  },
  services: {
    title: "What We Work On",
    subtitle: "From weekend rigs to full-time homes on wheels — we handle the systems that matter.",
    cta: "Get a Free Estimate",
  },
  pricing: {
    title: "Straightforward Pricing",
    subtitle: "You approve the quote before any paid repair work.",
    serviceCallHeading: "Service Call",
    countiesLabel: "Service call · both counties",
    snohomishNote: "Everett, Lynnwood, Edmonds, Marysville, Bothell (Snohomish Co.), and surrounding areas.",
    nearSeattleLabel: "Near Seattle — when your RV is in:",
    mileageLabel: "Over 40 miles from Seattle",
    mileageNote: "Added to your service call fee — quoted before we dispatch.",
    disclaimer:
      "* $80 service call only in the near-Seattle cities listed. $120 service call in King County and Snohomish County. Over 40 miles from Seattle: +$3/mile on the service call. Labor ($120/hr) and parts only after you approve. Emergency $180/hr may apply.",
    cta: "Call Now",
  },
  about: {
    title: "About",
    subtitle: "Mobile service at your campsite, driveway, or storage lot.",
  },
  reviews: {
    title: "Customer Stories",
    subtitle: "Real feedback from RV owners we've helped get rolling again.",
    cta: "Leave a Google Review",
    sourceLabel: "Google review",
  },
  contact: {
    formTitle: "Service Request Form",
    formSubtitle: "Preferred · Pre-estimate",
    serviceAreaPrefix: "Mobile RV repair — serving",
    name: "Name",
    email: "Email",
    phone: "Phone",
    rvYearMakeModel: "Year / Make / Model of RV",
    city: "City RV is located",
    serviceDescription: "What's the problem?",
    problemNote:
      "Describe the issue in detail — it helps us prepare your pre-estimate. After you submit, email photos to crestivate@rvfixerwa.com (iPhone photos are too large for this form).",
    messagePlaceholder: "Describe the problem...",
    appointmentTitle: "Preferred appointment window",
    appointmentNote:
      "Choose a day on the calendar and a time range that works for you — not an exact clock time. We'll confirm the visit by phone or email.",
    calendarHint: "Tap your preferred day (today and later)",
    timeRangeLabel: "Preferred time range",
    timeRangePlaceholder: "Select a range…",
    submit: "Submit",
  },
  footer: {
    serving: "Mobile RV repair across",
  },
};

/** Submitted as `preferred_time_range`; label is what you see in Formspree. */
export const appointmentTimeRanges = [
  { value: "8am-12pm", label: "Morning · 8:00 AM – 12:00 PM" },
  { value: "12pm-4pm", label: "Midday · 12:00 PM – 4:00 PM" },
  { value: "4pm-7pm", label: "Afternoon · 4:00 PM – 7:00 PM" },
  { value: "flexible", label: "Flexible · any time that day" },
];

export const navLinks = [
  { label: ui.nav.services, href: "#services" },
  { label: ui.nav.pricing, href: "#pricing" },
  { label: ui.nav.about, href: "#about" },
  { label: ui.nav.reviews, href: "#reviews" },
  { label: ui.nav.contact, href: "#contact" },
];

export const stats = [
  { compareAt: "$120", value: "$80", label: "Call near Seattle*" },
  { value: "$120", label: "King & Snohomish Co." },
  { value: "+$3/mi", label: "Over 40 mi from Seattle" },
];

export const services = [
  {
    icon: "⚡",
    title: "Electrical & Solar",
    description: "12V/120V diagnostics, batteries, inverters, solar, wiring, panels, and surge issues.",
  },
  {
    icon: "💧",
    title: "Plumbing & Tanks",
    description: "Leaks, pumps, fresh/gray/black tanks, heaters, toilets, and pressure problems.",
  },
  {
    icon: "🔥",
    title: "HVAC & Propane",
    description: "Furnaces, A/C, ducting, propane lines, regulators, and safety inspections.",
  },
  {
    icon: "🛠️",
    title: "Appliances & LP",
    description: "Fridges, stoves, microwaves, water heaters, generators, and LP systems.",
  },
  {
    icon: "🏕️",
    title: "Roof & Exterior",
    description: "Sealant, leak tracing, awning repair, window/door seals, and body work.",
  },
];

export const pricing = [
  {
    title: "Standard Labor",
    price: "$120/hr",
    note: "Diagnostic and repair after you approve the estimate. Clock starts when work begins on your RV.",
  },
  {
    title: "Emergency Rate",
    price: "$180/hr",
    note: "Urgent and after-hours roadside service when you need help fast.",
  },
];

export const whyUs = [
  {
    title: "We come to you",
    description: "Driveway, campground, storage yard — your rig stays put while we work.",
  },
  {
    title: "Clear quotes first",
    description: "You see the number before we turn a wrench. No hidden shop fees.",
  },
  {
    title: "Systems, not shortcuts",
    description: "Electrical, plumbing, propane, and structural — diagnosed properly.",
  },
  {
    title: "Road-ready focus",
    description: "We fix what keeps you safe and moving, not upsells you don't need.",
  },
];

export const about = {
  heading: "Your mobile RV technician",
  paragraphs: [
    `I'm ${site.ownerName}, owner of RV Fixer (Crestivate LLC), a certified mobile RV technician in King and Snohomish County. I have a B.S. in Electronics Engineering and years as an engineer before going full-time on RV work.`,
    "I repair electrical — 12V, 120V, batteries, solar, generators — and everything else that breaks on the road: plumbing, propane, heat and A/C, appliances, slides, leaks, and diagnostics. Same tech from call to fix; you approve the quote before repairs.",
    "Crestivate LLC is fully insured for mobile service.",
  ],
};

export const reviews = [
  {
    author: "Andrew Acia",
    text: "Smart, crafty and dedicated! Eugine was incredible. Replaced our water heater like nothing. Highly recommend!",
    rating: 5,
  },
  {
    author: "Vazhynskyi Vladyslav",
    text: "Great RV repair service! The technician was professional, knowledgeable, and took the time to explain everything clearly. The work was done efficiently and the quality was excellent. Very happy with the service and would definitely recommend them to anyone who needs RV repairs.",
    rating: 5,
  },
];

export const intro = {
  heading: "Breakdowns happen off the beaten path.",
  body: "That's why we're mobile. We diagnose and repair at your location — home, campground, or storage — so you skip the tow bill and get back to your trip faster.",
};
