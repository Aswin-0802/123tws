// All page copy lives here so sections stay presentational.
//
// Headings, labels, menu structure, URLs and figures follow the live 123tws.com homepage.
// Body paragraphs are written for this build; replace any `body`/`text` field with the
// official copy and the layout and animations adapt automatically.
import { site, u } from "./site";

export type NavLink = { label: string; href: string };
export type MenuGroup = { title?: string; links: NavLink[] };
export type NavItem =
  | { label: string; href: string }
  | { label: string; kind: "dropdown" | "mega"; groups: MenuGroup[] };

export const nav: NavItem[] = [
  { label: "Home", href: u("/") },
  {
    label: "Company Info",
    kind: "dropdown",
    groups: [
      {
        links: [
          { label: "About us", href: u("/about-us/") },
          { label: "Why us?", href: u("/why-choose-us/") },
          { label: "Outsource to Us", href: u("/outsourcing-services/") },
          { label: "Our Achievements", href: u("/achievements/") },
          { label: "Testimonials", href: u("/testimonials/") },
          { label: "Our Clients", href: u("/our-clients/") },
          { label: "Technologies", href: u("/our-technologies/") },
        ],
      },
    ],
  },
  {
    label: "Services",
    kind: "mega",
    groups: [
      {
        title: "Software Development",
        links: [
          { label: "Web Design / Development", href: u("/website-design/") },
          { label: "E-Commerce Development", href: u("/ecommerce-website-development/") },
          { label: "Wordpress Development", href: u("/cms-website-development/") },
          { label: "Portal Development", href: u("/portal-development/") },
          { label: "Mobile App Development", href: u("/mobile-app-development/") },
          { label: "Billing Software", href: u("/billing-software-development/") },
          { label: "Software Development", href: u("/custom-software-development/") },
          { label: "CRM", href: u("/crm-software-development/") },
          { label: "Web Maintenance", href: u("/website-maintenance/") },
        ],
      },
      {
        title: "Digital Marketing",
        links: [
          { label: "Digital Marketing Service", href: u("/digital-marketing/") },
          { label: "SEO (Search Engine Optimization)", href: u("/seo-services/") },
          { label: "Social Media Management", href: u("/social-media/") },
          { label: "Pay Per Click Advertising", href: u("/ppc-services/") },
        ],
      },
      {
        title: "Graphic Designing",
        links: [
          { label: "Graphic Designing", href: u("/graphic-design/") },
          { label: "Logo Designing", href: u("/logo-design/") },
          { label: "Brochure Designing", href: u("/brochure-design/") },
          { label: "Corporate Presentation (PPT)", href: u("/corporate-presentation/") },
          { label: "UI / UX Designing", href: u("/website-design/") },
        ],
      },
      {
        title: "Others",
        links: [
          { label: "Domain Registration", href: u("/domain/") },
          { label: "Business Email", href: u("/business-email-service-provider/") },
          { label: "Payment Gateway", href: u("/payment-gateway/") },
          { label: "PowerPoint Presentation", href: u("/powerpoint-presentation-service/") },
        ],
      },
    ],
  },
  {
    label: "Hosting",
    kind: "dropdown",
    groups: [
      {
        title: "Hosting Solutions",
        links: [
          { label: "Single Domain Hosting", href: u("/web-hosting/") },
          { label: "Shared Hosting Plans", href: u("/shared-hosting/") },
          { label: "Reseller Hosting Plan", href: u("/reseller-hosting/") },
          { label: "VPS Server", href: u("/vps-hosting/") },
          { label: "Dedicated Server", href: u("/dedicated-servers/") },
          { label: "Dedicated IP", href: u("/dedicated-ip/") },
          { label: "SSL", href: u("/ssl-certificate/") },
          { label: "Online Storage", href: u("/online-storage/") },
          { label: "Email Hosting Packages", href: u("/business-email-hosting/") },
        ],
      },
    ],
  },
  {
    label: "Products",
    kind: "mega",
    groups: [
      {
        title: "CRM Products",
        links: [
          { label: "Marketing CRM", href: u("/marketing-crm-software/") },
          { label: "Payroll Software", href: u("/payroll-software/") },
          { label: "Boutique CRM", href: u("/boutique-management-software/") },
          { label: "Architect CRM", href: u("/architect-crm-software/") },
          { label: "Real Estate CRM", href: u("/real-estate-crm-software/") },
          { label: "Dental CRM", href: "https://www.crmfordentists.com/" },
          { label: "Photography CRM", href: u("/photography-crm/") },
        ],
      },
      {
        title: "CRM Products",
        links: [
          { label: "Clinical CRM", href: u("/medical-crm-software/") },
          { label: "Computer Service CRM", href: u("/computer-repair-crm/") },
          { label: "Custom CRM Software", href: u("/custom-crm-development/") },
          { label: "Travel CRM", href: u("/travel-crm/") },
          { label: "UPVC CRM", href: u("/upvc-crm-software/") },
          { label: "Vehicle Management", href: u("/vehicle-management-software/") },
        ],
      },
      {
        title: "ERP Products",
        links: [{ label: "School Management ERP", href: u("/school-erp/") }],
      },
    ],
  },
  {
    label: "Portfolio",
    kind: "dropdown",
    groups: [
      {
        links: [
          { label: "Logo Design", href: u("/logos/") },
          { label: "Brochure Design", href: u("/brochures/") },
          { label: "Web Design & Development", href: u("/portfolio/") },
          { label: "2D/Animation Videos", href: u("/2d-animation-video/") },
          { label: "Social Media Posters", href: u("/social-media-posters/") },
        ],
      },
    ],
  },
  { label: "Contact", href: site.links.contact },
];

export const topbar = {
  proposal: { label: "Get a free proposal", href: site.links.contact },
  training: { label: "IT Training Courses", href: site.links.training },
};

export const hero = {
  // Each line is a mask for the load animation; `accent` segments render in brand red.
  lines: [
    [{ text: "Leading Web Development" }],
    [{ text: "Company For " }, { text: "Digital", accent: true }],
    [{ text: "Transformation", accent: true }],
  ] as { text: string; accent?: boolean }[][],
  text: "From the first wireframe to the first sale, we plan, build and promote websites that turn visitors into customers.",
  cta: { label: "Get Free Consultation Today", href: site.links.contact },
  partners: {
    src: "/images/live/home/partners.png",
    width: 2654,
    height: 250,
    alt: "GoDaddy Pro, Google Partner, Microsoft Partner Network and ISO 9001:2015 certification badges",
  },
  animation: {
    src: "/animations/banner.json",
    width: 1125,
    height: 807,
    label: "Animated illustration of a team designing, building and launching a website",
  },
  badge: {
    src: "/images/live/home/designrush-badge.png",
    width: 202,
    height: 214,
    alt: "123 Total Web Solutions featured on DesignRush as a top web development company, 2025",
  },
};

/** Client names; add `logo` (path in /public) to show the client's logo instead of the name. */
export const clients: { name: string; logo?: string }[] = [
  { name: "Messer Cutting", logo: "/images/live/home/clients/messer-client.png" },
  { name: "Parambara", logo: "/images/live/home/clients/parambara-client.png" },
  { name: "Vivekam School", logo: "/images/live/home/clients/vivekam-client.png" },
  { name: "Nangai Naturals", logo: "/images/live/home/clients/nangai-client-logo.png" },
  { name: "Party Favor Hub", logo: "/images/live/home/clients/party-favor-client-logo.png" },
  { name: "Yokohama Tires", logo: "/images/live/home/clients/yokohama-client-logo.png" },
  { name: "Grand Royal Tours", logo: "/images/live/home/clients/grand-royal-client-logo.png" },
  { name: "PPG College", logo: "/images/live/home/clients/ppg-client-logo.png" },
  { name: "Vertex Research Centre", logo: "/images/live/home/clients/vertex-client-logo.png" },
  { name: "Orange Sorting", logo: "/images/live/home/clients/orange-client-logo.png" },
  { name: "JP Masala", logo: "/images/live/home/clients/jp-client.png" },
  { name: "Aplus", logo: "/images/live/home/clients/aplus-client-logo.png" },
  { name: "Energy Fitness", logo: "/images/live/home/clients/energy-client-logo.png" },
];

export const intro = {
  heading: "Experience a comprehensive full-stack development approach designed to drive business growth and boost conversions.",
  sub: "Transform your online presence with our all-in-one digital solutions.",
};

export const about = {
  eyebrow: "About Us",
  heading: "Over 17+ Years Helping Brands Reach Their Full Potential",
  body: [
    "123 Total Web Solutions (123TWS) is a web development company based in Coimbatore. More than 1500 clients have trusted us with over 2500 projects, from first websites for new ventures to platforms for established firms.",
    "Our designers, developers and marketers work as one team, following ISO 9001:2015 certified processes, so every site we hand over is tested, search-ready and built to be maintained.",
  ],
  cta: { label: "Talk To An Expert", href: site.links.contact },
  cards: [
    { title: "Web Development", body: "Websites, portals and web apps engineered to load quickly and grow with you.", icon: "code", iconSrc: "/images/live/home/icons/web-development-icon.svg" },
    { title: "UI and UX", body: "Interfaces designed around how your customers browse and buy.", icon: "layout", iconSrc: "/images/live/home/icons/ui-ux-icon.svg" },
    { title: "Digital Marketing", body: "Campaigns planned around measurable goals, reported in plain numbers.", icon: "chart", iconSrc: "/images/live/home/icons/dm-icon.svg" },
    { title: "CRM", body: "One place for leads, follow-ups and customer history.", icon: "users", iconSrc: "/images/live/home/icons/crm-icon.svg" },
  ],
} as const;

export const approach = [
  {
    heading: "Elevate your brand's digital identity with our custom website design services",
    body: "A good website explains what you do in seconds and makes the next step obvious. We start from your audience and your offer, then shape layouts, imagery and page structure around them, with search visibility planned in from the first sketch.",
  },
  {
    heading: "We are customer-centric",
    body: "Projects start with a conversation about where your business is heading. You get a named contact, honest timelines and pricing agreed before work begins, and that approach has kept many of our clients with us for years.",
  },
];

export const stats = [
  { value: 2500, suffix: "+", label: "Successful Projects" },
  { value: 1500, suffix: "+", label: "Happy Clients" },
  { value: 17, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Energetic Employees" },
];

export const services = {
  heading: "Services we do",
  sub: "Pick one service or combine several. Each is scoped to your business, not sold from a template.",
  items: [
    {
      id: "marketing",
      animation: { src: "/animations/dm.json", width: 1200, height: 1200, label: "Animated illustration of digital marketing: ads, analytics and social media" },
      title: "Digital Marketing",
      body: "Plans that connect search, social media and content to one goal: more enquiries. We track what each channel brings in and move budget to what works.",
      cta: { label: "Skyrocket Your Success With us!", href: u("/digital-marketing/") },
      image: { src: "/images/service-marketing.jpg", alt: "Close-up of a hand tapping a tablet screen" },
    },
    {
      id: "web",
      animation: { src: "/animations/web-design.json", width: 1200, height: 1200, label: "Animated illustration of a website being designed and built" },
      title: "Website Design and Development",
      body: "Custom sites built around your brand, written for your customers and easy for your staff to update. Need a logo or brochure to match? The same studio handles it.",
      cta: { label: "Design your Website", href: u("/website-design/") },
      image: { src: "/images/service-web.jpg", alt: "Laptop and notebook with a website layout sketch on a wooden desk" },
    },
    {
      id: "crm",
      animation: { src: "/animations/crm.json", width: 1200, height: 1200, label: "Animated illustration of a CRM dashboard managing customers and leads" },
      title: "Our CRM Products are",
      body: "Ready-made CRMs for payroll, travel agencies, clinics, real estate and dental practices, plus custom builds when your process does not fit an off-the-shelf tool.",
      cta: { label: "Request a CRM Demo", href: u("/crm-software-development/") },
      image: { src: "/images/service-crm.jpg", alt: "Desktop computer, keyboard and tablet showing a calendar on a dark desk" },
    },
    {
      id: "ecommerce",
      animation: { src: "/animations/ecommerce.json", width: 855, height: 612, label: "Animated illustration of an online store with cart and payments" },
      title: "Ecommerce development",
      body: "Stores with clear product pages, quick checkout and reliable payment integration, backed by an admin your team can run day to day.",
      cta: { label: "Build your Ecommerce Website", href: u("/ecommerce-website-development/") },
      image: { src: "/images/service-ecommerce.jpg", alt: "Boutique retail interior with clothing, prints and accessories on display" },
    },
    {
      id: "seo",
      animation: { src: "/animations/seo.json", width: 1200, height: 537, label: "Animated illustration of search engine optimisation and rising rankings" },
      title: "Search engine optimization",
      body: "Audits, on-page fixes and content plans that move the pages you care about up the results, measured month by month.",
      cta: { label: "Get your site at the top", href: u("/seo-services/") },
      image: { src: "/images/service-seo.jpg", alt: "Black and white photo of a hand on a mouse beside a keyboard and coffee mug" },
    },
  ],
  closing: {
    text: "Planning a new website or a redesign? Talk to",
    link: { label: "our web design team in Coimbatore", href: u("/website-design/") },
  },
  extras: [
    { title: "CMS", body: "WordPress, Shopify, OpenCart and Odoo sites that non-technical teams can edit.", icon: "browser", iconSrc: "/images/live/home/icons/cms-icon.svg", href: u("/cms-website-development/") },
    { title: "Graphics design", body: "Brand marks, print material and social posts in one consistent style.", icon: "pen", iconSrc: "/images/live/home/icons/graphic-design-icon.svg", href: u("/graphic-design/") },
    { title: "E-commerce", body: "Catalogues, carts and payments set up so you can start selling quickly.", icon: "cart", iconSrc: "/images/live/home/icons/e-commerce-icon.svg", href: u("/ecommerce-website-development/") },
  ],
} as const;

export const whyUs = {
  heading: "Why choose us for your Customized Web Design and Development Services",
  reasons: [
    { title: "All-in-One Digital Solutions", body: "One partner for the site, the software behind it and the marketing that fills it, so nothing falls between suppliers." },
    { title: "Unique and customized designs", body: "No recycled themes. Each design is drawn up for your brand, your products and the people you sell to." },
    { title: "Skilled Team of Designers and Developers", body: "Specialists in design, front-end, back-end and SEO who review each other's work before anything ships." },
    { title: "Timely project delivery", body: "A schedule agreed at kick-off, weekly progress updates and launch dates we plan around, not past." },
    { title: "All-Inclusive and Budget-Friendly Packages", body: "Hosting, domain, design and setup bundled into clear packages, with options for growing budgets." },
    { title: "Premium customer service", body: "After go-live you still have a team to call for updates, fixes, backups and advice." },
  ],
};

export const industries = {
  heading: "Our Industry Expertise",
  items: [
    { name: "Healthcare", icon: "health", iconSrc: "/images/live/home/icons/healthcare-icon.svg" },
    { name: "Education", icon: "education", iconSrc: "/images/live/home/icons/education-icon.svg" },
    { name: "Construction", icon: "construction", iconSrc: "/images/live/home/icons/construction-icon.svg" },
    { name: "Travel", icon: "travel", iconSrc: "/images/live/home/icons/travel-icon.svg" },
    { name: "Software", icon: "software", iconSrc: "/images/live/home/icons/web-development-icon.svg" },
    { name: "Textile", icon: "textile", iconSrc: "/images/live/home/icons/textiles-icon.svg" },
    { name: "Fitness and Wellness", icon: "fitness", iconSrc: "/images/live/home/icons/muscle-icon.svg" },
    { name: "Food Services", icon: "food", iconSrc: "/images/live/home/icons/food-icon.svg" },
  ],
} as const;

export const callToAction = {
  eyebrow: "Let's Chat",
  lines: ["Have a Project,", "Let's Start Today"],
  cta: { label: "Get started today", href: site.links.contact },
};

export const contact = {
  eyebrow: "Call us now",
  heading: "Ready to Grow Your Business Faster?",
  body: "Book a free 30-minute strategy call. Tell us what you sell and who you want to reach, and we will map out the website, marketing or CRM steps that make sense for your budget.",
  formTitle: "Request a quote !!",
  trustTitle: "The Trust We've Earned Based on Our Customers' Reviews",
  trustBadges: [
    { src: "/images/live/home/review-google-rating.png", width: 275, height: 67, alt: "Google rating badge" },
    { src: "/images/live/home/review-trustpilot.png", width: 275, height: 67, alt: "Trustpilot badge" },
    { src: "/images/live/home/review-clutch.png", width: 275, height: 67, alt: "Clutch badge" },
    { src: "/images/live/home/designrush-badge.png", width: 202, height: 214, alt: "Featured on DesignRush badge" },
  ],
  services: ["Web Designing", "Web Development", "E-Commerce", "Mobile App Development", "SEO", "Digital Marketing", "CRM", "Real Estate CRM", "Others"],
  countryCodes: [
    { label: "India (+91)", value: "+91" },
    { label: "UAE (+971)", value: "+971" },
    { label: "USA / Canada (+1)", value: "+1" },
    { label: "UK (+44)", value: "+44" },
    { label: "Singapore (+65)", value: "+65" },
    { label: "Malaysia (+60)", value: "+60" },
    { label: "Australia (+61)", value: "+61" },
    { label: "Saudi Arabia (+966)", value: "+966" },
    { label: "Qatar (+974)", value: "+974" },
    { label: "Other", value: "other" },
  ],
};

/**
 * "Our Happy Clients". Add real client reviews here (quote, name, company) to show the section.
 * Left empty on purpose: reviews must come from actual customers.
 */
export const testimonials: { quote: string; name: string; company?: string }[] = [];

export const faq = {
  heading: "Frequently Asked Question",
  items: [
    {
      q: "Why should I do my web design and development from 123 Total Web Solutions?",
      a: "You work with one team for strategy, design, development, hosting and marketing. With more than 17 years of projects across industries, we know which decisions matter for your kind of business.",
    },
    {
      q: "How to find the best web design company in India?",
      a: "Look at work in your industry, ask who will build your site, check how support works after launch and insist on a written scope with costs. We share all of that before you commit.",
    },
    {
      q: "Do you do custom website design or use pre-built templates?",
      a: "We design custom layouts around your brand and audience. Where a proven CMS such as WordPress fits your needs, we build on it so your team can manage content easily.",
    },
    {
      q: "In which technology should I do my web development?",
      a: "It depends on what the site has to do. Content-led sites suit a CMS, stores need a commerce platform and complex workflows call for custom development. We recommend a stack once we understand your goals.",
    },
    {
      q: "What services does a web development company like 123 Total Web Solutions?",
      a: "Website design and development, e-commerce, CRM and ERP products, mobile apps, SEO, social media and paid advertising, graphic and logo design, hosting, domains and business email.",
    },
  ],
};

export const footer = {
  columns: [
    {
      title: "Software Development",
      links: [
        { label: "Web Design / Development", href: u("/website-design/") },
        { label: "CRM", href: u("/crm-software-development/") },
        { label: "E- Commerce Development", href: u("/ecommerce-website-development/") },
        { label: "Mobile App Development", href: u("/mobile-app-development/") },
      ],
    },
    {
      title: "Graphic Designing",
      links: [
        { label: "Graphic Designing", href: u("/graphic-design/") },
        { label: "Logo Designing", href: u("/logo-design/") },
        { label: "Brochure Designing", href: u("/brochure-design/") },
        { label: "Corporate Presentation", href: u("/corporate-presentation/") },
      ],
    },
    {
      title: "Pricing",
      links: [
        { label: "Website Development Packages", href: u("/free-quotes/") },
        { label: "Digital Marketing Packages", href: u("/digital-marketing-packages/") },
      ],
    },
    {
      title: "Digital Marketing",
      links: [
        { label: "Digital Marketing Services", href: u("/digital-marketing/") },
        { label: "SEO (Search Engine Optimization)", href: u("/seo-services/") },
        { label: "Social Media Management", href: u("/social-media/") },
        { label: "SEM (Search Engine Marketing)", href: u("/search-engine-marketing/") },
      ],
    },
    {
      title: "Knowledge",
      links: [
        { label: "Article", href: u("/blog/") },
        { label: "Case Studies", href: u("/case-study/") },
        { label: "Research", href: u("/research/") },
      ],
    },
  ] as MenuGroup[],
  locations: [{ label: "Madurai", href: u("/madurai/digital-marketing-company/") }],
  otherServices: [
    { label: "Content Management System", href: u("/cms-website-development/") },
    { label: "Content Writing", href: u("/content-writing/") },
    { label: "Bulk SMS", href: u("/bulk-sms-coimbatore/") },
    { label: "Social Media Optimization", href: u("/social-media/") },
    { label: "Domain Registration", href: u("/domain/") },
    { label: "Dedicated Server", href: u("/dedicated-servers/") },
    { label: "Software Development", href: u("/custom-software-development/") },
    { label: "Request your quote", href: u("/free-quotes/") },
    { label: "Payment Gateway", href: u("/payment-gateway/") },
    { label: "Email Marketing", href: u("/bulk-email-service/") },
    { label: "Live Video Streaming", href: u("/live-video-streaming/") },
    { label: "Video Production", href: u("/video-production/") },
    { label: "Payment Mode & Options", href: u("/payment-mode-options/") },
    { label: "SEO Packages", href: u("/seo-packages/") },
    { label: "Careers", href: u("/careers/") },
    { label: "Internship", href: u("/internship/") },
  ],
};
