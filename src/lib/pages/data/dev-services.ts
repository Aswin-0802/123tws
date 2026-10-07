import type { Block, Img, LinkItem, PageDef } from "../types";

// Development and technical service pages. Section order follows the live 123tws.com pages.
// Facts (platforms, features, gateways, domain extensions, published prices) come from the
// business; all copy is original. Images under /images/live/<slug>/ are the site's own.

const consult: LinkItem = { label: "Get Free Consultation Today", href: "/contact-us/" };

const cta = (lines: [string, string], label = "Get started today"): Block => ({
  type: "cta",
  eyebrow: "Let's Chat",
  lines,
  button: { label, href: "/contact-us/" },
});

const closingCta = cta(["Have a Project,", "Let's Start Today"]);

/** Image from the live site, saved under /images/live/<slug>/. */
const live = (slug: string, file: string, alt: string, fit: Img["fit"] = "contain"): Img => ({
  src: `/images/live/${slug}/${file}`,
  alt,
  fit,
});

/** Client logo strip shown on the live website-design, ecommerce and CRM pages (stored once). */
const clientLogos = (heading: string): Block => ({
  type: "gallery",
  heading,
  items: (
    [
      ["Messer Cutting", "messer-client.png"],
      ["Parambara", "parambara-client.png"],
      ["Vivekam School", "vivekam-client.png"],
      ["Nangai Naturals", "nangai-client-logo.png"],
      ["Party Favor Hub", "party-favor-client-logo.png"],
      ["Yokohama Tires", "yokohama-client-logo.png"],
      ["Grand Royal Tours", "grand-royal-client-logo.png"],
      ["PPG College", "ppg-client-logo.png"],
      ["Vertex Research Centre", "vertex-client-logo.png"],
      ["Orange Sorting", "orange-client-logo.png"],
      ["JP Masala", "jp-client.png"],
      ["Aplus", "aplus-client-logo.png"],
      ["Energy Fitness", "energy-client-logo.png"],
    ] as const
  ).map(([title, file]) => ({ title, image: live("website-design", `clients/${file}`, `${title} logo`) })),
});

/** Logo tile for a gallery (shown whole, never cropped). */
const logo = (slug: string, file: string, title: string) => ({ title, image: live(slug, file, `${title} logo`) });

const stock = {
  web: { src: "/images/service-web.jpg", alt: "Open laptop beside a sketch notebook on a wooden desk" },
  ecommerce: { src: "/images/service-ecommerce.jpg", alt: "Boutique interior with clothing and accessories on display" },
  crm: { src: "/images/service-crm.jpg", alt: "iMac and keyboard next to a tablet showing a calendar" },
  marketing: { src: "/images/service-marketing.jpg", alt: "Finger tapping the screen of a tablet" },
  workspace: { src: "/images/hero-workspace.jpg", alt: "Person typing on a laptop" },
};

export const devServicePages: PageDef[] = [
  // ------------------------------------------------------------------ website-design
  {
    slug: "website-design",
    section: "Services",
    metaTitle: "Website Design and Development Company in Coimbatore",
    metaDescription:
      "Custom website design and development in Coimbatore by 123TWS. Responsive, search-ready business websites built on WordPress, Shopify or custom code.",
    hero: {
      eyebrow: "AI-Ready Web Development",
      title: "Website Design and Development Company in Coimbatore",
      intro:
        "We design and build websites for people and for the AI tools they now search with. Every site is planned to be found, understood and trusted, then to turn visitors into enquiries.",
      image: stock.workspace,
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Websites made for AI search, not merely made with AI",
        paragraphs: [
          "Buyers increasingly meet a business through Google's AI results, ChatGPT, Claude or Perplexity before they ever reach its homepage. We structure your site so those systems can read it accurately, while keeping it fast and pleasant for the humans who arrive.",
          "From our base in Coimbatore, Tamil Nadu, we focus on websites that are easy to use, quick to load and built to convert. The aim is simple: more qualified leads from the traffic you already have.",
        ],
        bullets: ["Strategy", "Design", "Technology"],
        image: stock.web,
      },
      {
        type: "features",
        heading: "An AI-ready digital presence",
        intro: "We plan every site around four outcomes, covering search, automation, user experience and growth.",
        items: [
          { title: "Rank: get indexed", body: "Clean structure and technical SEO help search engines discover and list every important page.", icon: "search" },
          { title: "Crawl: be understood", body: "Structured data and clear headings let search engines and AI assistants grasp what you offer.", icon: "lightning" },
          { title: "Score: make an impression", body: "Fast loading, mobile-friendly layouts and attention to Core Web Vitals give visitors a strong first impression.", icon: "star" },
          { title: "Convert: drive engagement", body: "Focused calls to action and simple forms turn interest into enquiries and sales.", icon: "target" },
        ],
      },
      clientLogos("Chosen by 1500+ founders, brands and business owners"),
      {
        type: "gallery",
        heading: "Cloud and AI platforms behind our builds",
        items: [
          logo("website-design", "icons/aws.svg", "AWS"),
          logo("website-design", "icons/gcp.svg", "Google Cloud"),
          logo("website-design", "icons/azure.svg", "Microsoft Azure"),
          logo("website-design", "icons/nvidia.svg", "NVIDIA"),
          logo("website-design", "icons/openai.svg", "OpenAI"),
          logo("website-design", "icons/anthropic.svg", "Anthropic"),
          logo("website-design", "icons/gemini.svg", "Gemini"),
          logo("website-design", "icons/grok.png", "Grok"),
          logo("website-design", "icons/perplexity.svg", "Perplexity"),
          logo("website-design", "icons/googleai.svg", "Google AI"),
        ],
      },
      {
        type: "gallery",
        heading: "Find our reviews on",
        items: [
          logo("website-design", "icons/designrush.svg", "DesignRush"),
          logo("website-design", "icons/trustpilot.png", "Trustpilot"),
          logo("website-design", "icons/justdial.png", "Justdial"),
        ],
      },
      { type: "stats" },
      {
        type: "gallery",
        heading: "Website development and design work from Coimbatore",
        intro: "A selection of recent builds across retail, education, healthcare, corporate and property.",
        items: [
          {
            title: "Zash Jewels",
            caption: "Ecommerce: a jewellery store on WordPress and WooCommerce with product discovery and secure checkout.",
            image: live("website-design", "zash-jewels-website.png", "Zash Jewels jewellery website shown on desktop, laptop, tablet and phone screens"),
          },
          {
            title: "Akshaya College of Arts",
            caption: "Education: an institutional WordPress site with admissions, course information and student engagement features.",
            image: live("website-design", "akshaya-college-website.png", "Akshaya College of Arts website shown on several device screens"),
          },
          {
            title: "Business website redesign",
            caption: "Redesign: a full refresh of design, speed, security and SEO with minimal disruption to the business.",
            image: live("website-design", "business-website-redesign.png", "Redesigned business website shown on several device screens"),
          },
          {
            title: "Healthcare platform",
            caption: "Healthcare: a patient-focused site with appointment booking, service pages and accessibility in mind.",
            image: live("website-design", "healthcare-platform-website.png", "Healthcare platform website shown on several device screens"),
          },
          {
            title: "Corporate business website",
            caption: "Corporate: a professional site built to establish credibility and capture qualified leads.",
            image: live("website-design", "corporate-business-website.png", "Corporate business website shown on several device screens"),
          },
          {
            title: "Real estate property portal",
            caption: "Real estate: property listings, project showcases, virtual tours and lead capture.",
            image: live("website-design", "real-estate-portal-website.png", "Real estate property portal shown on several device screens"),
          },
        ],
      },
      { type: "testimonials" },
      cta(["Your website could be", "the next one we launch"], "Plan my website"),
      {
        type: "contact",
        heading: "Tell us what your business needs",
        body: "Share a few details and we will discuss how an AI-ready website could help you rank, convert and grow online.",
      },
      {
        type: "faq",
        heading: "Frequently asked questions",
        items: [
          { q: "Which kinds of websites can 123TWS build for me?", a: "Our team works on business websites, ecommerce and Shopify stores, WordPress sites and custom web applications. Redesigns, UI/UX design, ongoing maintenance and sites built for AI search are part of the service too." },
          { q: "What is a typical timeline for a new website?", a: "That comes down to scope. A standard business site is quicker to deliver than an online store, a custom web application or a large enterprise site, and your quotation confirms the schedule once requirements are clear." },
          { q: "Will search engines and AI assistants be able to read my site?", a: "They will. Every build includes technical SEO, responsive layouts, structured data and work on Core Web Vitals, so search engines and AI platforms can find and understand your pages." },
          { q: "Is it possible to rebuild my current site without disrupting trade?", a: "It is. We refresh the design, speed, security and SEO of your current site and plan the switchover carefully so that downtime is kept to a minimum." },
          { q: "What experience does 123TWS bring to a website project?", a: "More than 17 years in the business, over 2500 completed projects and 1500+ clients. Our focus is on fast, secure websites that support real business results." },
          { q: "How is 123TWS different from a typical web design agency?", a: "Design, development and digital marketing sit under one roof here. So from the first day, your site is planned for visibility in search and AI answers, quick loading, strong security and more enquiries." },
          { q: "Will you look after my site once it is live?", a: "Absolutely. Maintenance, security updates, performance monitoring, content changes, SEO improvements, technical support and digital marketing are all available after launch." },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Ecommerce Website Development", href: "/ecommerce-website-development/" },
          { label: "CMS Website Development", href: "/cms-website-development/" },
          { label: "Website Maintenance", href: "/website-maintenance/" },
          { label: "SEO Services", href: "/seo-services/" },
          { label: "Portfolio", href: "/portfolio/" },
          { label: "Web Hosting", href: "/web-hosting/" },
        ],
      },
      cta(["A sharper online presence", "begins with one conversation"], "Share your project"),
    ],
  },

  // ------------------------------------------------------------------ ecommerce-website-development
  {
    slug: "ecommerce-website-development",
    section: "Services",
    metaTitle: "Ecommerce Website Development Company in Coimbatore",
    metaDescription:
      "Online store development in Coimbatore on Shopify, WooCommerce, OpenCart or custom PHP, with secure payments, mobile-first design and ongoing support.",
    hero: {
      eyebrow: "Ecommerce",
      title: "E-Commerce Website Development Company in Coimbatore",
      intro:
        "From the first product upload to steady growth, 123TWS handles your online store end to end. With more than 17 years behind us, we create secure, scalable stores designed to turn browsers into buyers, whether you sell in Coimbatore or worldwide.",
      image: stock.ecommerce,
      cta: consult,
    },
    blocks: [
      {
        type: "contact",
        heading: "Planning a store that pays its way?",
        body: "Tell us what you sell and who you sell to, and we will suggest the right platform and features for your store.",
      },
      clientLogos("Some of the businesses we work with"),
      {
        type: "gallery",
        heading: "E-commerce platforms we specialise in",
        intro: "We work across the major platforms, so the recommendation always follows your needs.",
        items: [
          {
            title: "Shopify",
            caption: "Fast to launch and easy to scale. An all-in-one hosted platform with 100+ payment gateways and a large app ecosystem.",
            image: live("ecommerce-website-development", "shopify-logo.png", "Shopify logo"),
          },
          {
            title: "WooCommerce",
            caption: "Flexible and SEO-friendly for small and medium businesses on WordPress. Full control, thousands of plugins and lower transaction fees.",
            image: live("ecommerce-website-development", "woocommerce-logo.png", "WooCommerce logo"),
          },
          {
            title: "OpenCart",
            caption: "Economical and feature-rich. Lightweight and fast, with multi-store management and a built-in affiliate system.",
            image: live("ecommerce-website-development", "opencart-logo.png", "OpenCart logo"),
          },
          {
            title: "Custom PHP",
            caption: "Bespoke online stores with secure payment integration and straightforward order management.",
            image: live("ecommerce-website-development", "php-logo.png", "PHP logo"),
          },
        ],
      },
      {
        type: "features",
        heading: "Why choose 123TWS",
        intro: "Technical skill paired with an understanding of how retail actually works.",
        items: [
          { title: "Expertise and experience", body: "Over a decade of building online stores that support measurable business growth.", icon: "trophy" },
          { title: "Customised solutions", body: "Each store reflects your goals, your brand and the customers you want to reach.", icon: "puzzle" },
          { title: "Modern technology stack", body: "React, Node.js, PHP, Laravel, MongoDB, MySQL, Shopify, WooCommerce and OpenCart, among others.", icon: "code" },
          { title: "Conversion-driven UX/UI", body: "Shopping journeys designed to feel effortless, which helps reduce abandoned carts.", icon: "palette" },
          { title: "Secure and scalable", body: "Multiple payment gateways and strong security to protect you and your customers.", icon: "shield" },
          { title: "End-to-end support", body: "Strategy, build and launch, followed by ongoing tuning to keep the store performing.", icon: "headset" },
        ],
      },
      {
        type: "videos",
        heading: "Our ecommerce work in action",
        intro: "See how our ecommerce solutions make online selling simpler and day-to-day operations easier to run.",
        items: [{ title: "123TWS ecommerce solutions overview", youtubeId: "TSq92CX7z0c" }],
      },
      {
        type: "gallery",
        heading: "Stores we have built",
        items: [
          {
            title: "Avvai Naturals",
            caption: "An organic shop offering herbal, wellness and planet-friendly goods online.",
            image: live("ecommerce-website-development", "avvai-naturals-store.png", "Avvai Naturals online store shown on desktop, laptop, tablet and phone screens"),
          },
          {
            title: "Herb Oasis",
            caption: "Herbal and organic product store with clear product presentation.",
            image: live("ecommerce-website-development", "herb-oasis-store.png", "Herbs Oasis herbal products store shown on desktop, laptop, tablet and phone screens"),
          },
          {
            title: "Zash",
            caption: "Jewellery store with smooth browsing and secure online checkout.",
            image: live("ecommerce-website-development", "zash-jewellery-store.png", "Zash jewellery online store shown on desktop, laptop, tablet and phone screens"),
          },
          {
            title: "MyPlant Shop",
            caption: "A shop for houseplants and plant care supplies, with simple order handling behind the scenes.",
            image: live("ecommerce-website-development", "myplant-shop-store.png", "MyPlant Shop online plant store shown on several device screens"),
          },
        ],
      },
      {
        type: "split",
        heading: "Fixing what stops shoppers from buying",
        paragraphs: [
          "Small frustrations add up to lost sales. A slow page, a fiddly mobile checkout or an unfamiliar payment screen is often all it takes for a shopper to leave.",
          "We build stores that are quick, mobile-friendly and designed around conversion. Customers move smoothly from browsing to a secure payment, which lifts both satisfaction and sales.",
        ],
        bullets: [
          "Slow pages that lead to abandoned carts",
          "Poor mobile experience and lost sales",
          "Complicated checkout that drives buyers away",
          "Payment processing that buyers do not trust",
          "Generic designs that fail to build brand trust",
        ],
      },
      {
        type: "features",
        heading: "Our e-commerce services",
        intro: "Everything needed to build, improve and grow your online store.",
        items: [
          { title: "Custom e-commerce development", body: "Stores coded from scratch around the way you trade and the look of your brand.", icon: "cart", iconSrc: "/images/live/ecommerce-website-development/icons/custom-ecommerce-development.svg" },
          { title: "E-commerce app development", body: "Shopping apps for Android and iOS customers, designed for small screens first.", icon: "phone", iconSrc: "/images/live/ecommerce-website-development/icons/ecommerce-app-development.svg" },
          { title: "Payment gateway integration", body: "Secure, multi-currency payments through the major providers for a smooth checkout.", icon: "card", iconSrc: "/images/live/ecommerce-website-development/icons/payment-gateway-integration.svg" },
          { title: "B2B and B2C solutions", body: "Handle bulk orders, transactions and customer relationships with ease.", icon: "briefcase", iconSrc: "/images/live/ecommerce-website-development/icons/b2b-b2c-solutions.svg" },
          { title: "E-commerce strategy", body: "Guidance on platform choice, market positioning and future growth.", icon: "chart", iconSrc: "/images/live/ecommerce-website-development/icons/ecommerce-strategy.svg" },
          { title: "Maintenance and support", body: "Regular updates, performance checks and security improvements.", icon: "wrench", iconSrc: "/images/live/ecommerce-website-development/icons/maintenance-support.svg" },
        ],
      },
      {
        type: "steps",
        heading: "Our development process",
        intro: "A structured path from first idea to a live, well-supported store.",
        steps: [
          { title: "Discovery and planning", body: "We research your business, audience and goals, then shape a strategy around them." },
          { title: "UX design", body: "Designers create clear interfaces and visuals that guide shoppers through to purchase." },
          { title: "Development", body: "Developers build the store on a tech stack suited to your requirements and expected scale." },
          { title: "Testing", body: "Every part of the store is checked for performance, security and ease of use." },
          { title: "Launch", body: "We deploy carefully so the move to live trading is smooth and uninterrupted." },
          { title: "Support", body: "Ongoing monitoring, updates and improvements keep the store at its best." },
        ],
      },
      {
        type: "gallery",
        heading: "Payments",
        intro: "We integrate trusted payment providers, including UPI, so customers can pay the way they prefer.",
        items: [
          { title: "PayPal", image: live("ecommerce-website-development", "paypal-logo.png", "PayPal logo") },
          { title: "Razorpay", image: live("ecommerce-website-development", "razorpay-logo.png", "Razorpay logo") },
          { title: "Stripe", image: live("ecommerce-website-development", "stripe-logo.png", "Stripe logo") },
          { title: "PayU Money", image: live("ecommerce-website-development", "payu-money-logo.png", "PayU Money logo") },
          { title: "Worldline", image: live("ecommerce-website-development", "worldline-logo.png", "Worldline logo") },
          { title: "UPI", caption: "Unified Payments Interface for instant bank-to-bank payments." },
        ],
      },
      {
        type: "gallery",
        heading: "Technologies we use",
        intro: "Proven technologies for fast, dependable ecommerce.",
        items: [
          logo("ecommerce-website-development", "icons/react.svg", "React"),
          logo("ecommerce-website-development", "icons/nodejs.svg", "Node.js"),
          logo("ecommerce-website-development", "icons/php.svg", "PHP"),
          logo("ecommerce-website-development", "icons/laravel.svg", "Laravel"),
          logo("ecommerce-website-development", "icons/shopify.svg", "Shopify"),
          logo("ecommerce-website-development", "icons/woocommerce.svg", "WooCommerce"),
          logo("ecommerce-website-development", "icons/opencart.svg", "OpenCart"),
          logo("ecommerce-website-development", "icons/mongodb.svg", "MongoDB"),
          logo("ecommerce-website-development", "icons/mysql.svg", "MySQL"),
          logo("ecommerce-website-development", "icons/aws.svg", "AWS"),
          logo("ecommerce-website-development", "icons/docker.svg", "Docker"),
          logo("ecommerce-website-development", "icons/stripe.svg", "Stripe"),
        ],
      },
      {
        type: "audience",
        heading: "Industries we serve",
        items: [
          { title: "Healthcare", icon: "stethoscope", iconSrc: "/images/live/ecommerce-website-development/icons/healthcare.svg" },
          { title: "Education", icon: "graduation", iconSrc: "/images/live/ecommerce-website-development/icons/education.svg" },
          { title: "Construction", icon: "building", iconSrc: "/images/live/ecommerce-website-development/icons/construction.svg" },
          { title: "Travel", icon: "airplane", iconSrc: "/images/live/ecommerce-website-development/icons/travel.svg" },
          { title: "Software", icon: "code", iconSrc: "/images/live/ecommerce-website-development/icons/web-development.svg" },
          { title: "Textile", icon: "shirt", iconSrc: "/images/live/ecommerce-website-development/icons/textiles.svg" },
          { title: "Fitness and wellness", icon: "heart", iconSrc: "/images/live/ecommerce-website-development/icons/muscle.svg" },
          { title: "Food services", icon: "truck", iconSrc: "/images/live/ecommerce-website-development/icons/food.svg" },
        ],
      },
      { type: "testimonials" },
      {
        type: "faq",
        heading: "FAQ",
        items: [
          { q: "How quickly can my online store go live?", a: "That depends on how complex the store is. A standard store is quicker than an advanced build with custom features, and the schedule is confirmed once the scope is agreed." },
          { q: "Shopify, WooCommerce or OpenCart: which suits my shop?", a: "For a fast launch, Shopify is hard to beat, while WooCommerce gives the most flexibility and OpenCart keeps costs down. We help you weigh these against your catalogue and budget." },
          { q: "How much will an ecommerce store cost me?", a: "Pricing follows the platform, the features and how much customisation you need. Contact us for a free quote based on your requirements." },
          { q: "Can you look after the store after launch?", a: "Certainly. Regular updates, security checks and performance improvements are all available once you are trading." },
        ],
      },
      {
        type: "related",
        heading: "Useful next steps",
        links: [
          { label: "Payment Gateway Integration", href: "/payment-gateway/" },
          { label: "Mobile App Development", href: "/mobile-app-development/" },
          { label: "Website Maintenance", href: "/website-maintenance/" },
          { label: "SEO Services", href: "/seo-services/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
          { label: "Portfolio", href: "/portfolio/" },
        ],
      },
      cta(["Your products deserve", "a store that sells"], "Get free consultation"),
    ],
  },

  // ------------------------------------------------------------------ cms-website-development
  {
    slug: "cms-website-development",
    section: "Services",
    metaTitle: "CMS Website Development Company in Coimbatore | 123TWS",
    metaDescription:
      "CMS websites from 123TWS in Coimbatore let your team edit pages, images and documents without touching code, while the design and structure stay intact.",
    hero: {
      eyebrow: "Update Content, Keep the Design",
      title: "Content Management System in Coimbatore",
      intro:
        "A content management system lets you run your own website content and publish it quickly. We build CMS websites that your team can update without touching the design.",
      image: live(
        "cms-website-development",
        "content-management-banner.png",
        "Illustration of a laptop with a CMS label, content blocks, an upload arrow and a settings gear",
      ),
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "What a CMS does for your business",
        paragraphs: [
          "A CMS is a web application for managing and delivering website content. Once it is in place, the people who own the content can maintain it themselves.",
          "More broadly, content management is the set of procedures used to organise work and information, whether on a computer or by hand. That information can take many forms, from documents and pictures to videos and phone numbers.",
        ],
      },
      {
        type: "split",
        heading: "A flexible CMS from 123TWS",
        paragraphs: [
          "Our CMS lets users create, edit, update and manage content while the site's design and structure stay untouched. You change what the page says, not how it is built.",
          "Different levels and permissions make it easy to manage changes without confusion. The result is a user-friendly system that also helps you keep website costs under control.",
        ],
        reverse: true,
      },
      {
        type: "checklist",
        heading: "Content management types",
        columns: [
          {
            items: [
              "Web group content management system",
              "Web content management system",
              "Component content management system",
              "Enterprise content management system",
            ],
          },
        ],
      },
      {
        type: "features",
        heading: "Content management system benefits",
        items: [
          { title: "Edit pages quickly", body: "Update text and images in minutes through a simple editor.", icon: "pen" },
          { title: "Routine changes made easy", body: "Everyday website updates no longer need a developer.", icon: "wrench" },
          { title: "Database-driven", body: "Content is stored in a database and presented through consistent templates.", icon: "database" },
          { title: "Less time spent", body: "Changes go live faster, freeing your team for other work.", icon: "clock" },
          { title: "Search-friendly pages", body: "Pages are created with a structure that search engines can read well.", icon: "search" },
          { title: "Scheduled updates", body: "Prepare content in advance and set it to publish at the right moment.", icon: "calendar" },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Website Design", href: "/website-design/" },
          { label: "Portal Development", href: "/portal-development/" },
          { label: "Website Maintenance", href: "/website-maintenance/" },
          { label: "Content Writing", href: "/content-writing/" },
          { label: "Shared Hosting", href: "/shared-hosting/" },
        ],
      },
      closingCta,
    ],
  },

  // ------------------------------------------------------------------ portal-development
  {
    slug: "portal-development",
    section: "Services",
    metaTitle: "Web Portal Development Company in Coimbatore | 123TWS",
    metaDescription:
      "Custom web portals from 123TWS in Coimbatore: job, education, real estate, news, matrimonial and B2B portals with secure logins and personalised access.",
    hero: {
      eyebrow: "Web Development",
      title: "Portal Development in Coimbatore",
      intro:
        "A portal gives users one place to reach the information, products and services they need. We build portals that are personalised, secure and easy to use.",
      image: live(
        "portal-development",
        "portal-development-banner.png",
        "Illustration of a person working on a laptop in front of an infinity loop, folders, code window and gears",
      ),
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "One point of access for your users",
        paragraphs: [
          "A web portal brings information and products together behind a single entry point. It can confirm who a user is and then show them a personalised interface built around their needs.",
          "Behind the scenes, a portal lets you add and exchange data, connect communication channels and keep every component secure. A custom portal turns scattered resources into one organised service that users can rely on.",
        ],
      },
      {
        type: "audience",
        heading: "Portals we build",
        items: [
          { title: "Information portal", icon: "globe" },
          { title: "Education portal", icon: "graduation" },
          { title: "Real estate portal", icon: "house" },
          { title: "Job portal", icon: "briefcase" },
          { title: "Matrimonial portal", icon: "heart" },
          { title: "News portal", icon: "file" },
          { title: "Blog solution portal", icon: "pen" },
          { title: "Used cars portal", icon: "car" },
          { title: "E-commerce solution", icon: "cart" },
        ],
      },
      {
        type: "split",
        heading: "Built around the way each user works",
        paragraphs: [
          "Different users need different things from the same organisation. A portal offers a simple, customised and manageable way to deliver products and services to each group.",
          "Information that would otherwise be spread across many places is connected and presented online in a way that matches how each type of user operates.",
        ],
        reverse: true,
      },
      {
        type: "checklist",
        heading: "Advantages",
        columns: [
          {
            items: [
              "Comfortable, consistent and steady data management",
              "Easier access to complex business processes",
              "Personalised applications that look good and stay live",
              "Better control of client service, efficiency, appraisal and marketing, using current technology",
            ],
          },
          {
            items: [
              "A single access point for all clients to your processes and systems",
              "B2B portal solutions including e-commerce, smart cards and online payments",
              "Room to adapt as your requirements change over time",
            ],
          },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Custom Software Development", href: "/custom-software-development/" },
          { label: "Payment Gateway", href: "/payment-gateway/" },
          { label: "Mobile App Development", href: "/mobile-app-development/" },
          { label: "VPS Hosting", href: "/vps-hosting/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
        ],
      },
      cta(["Give your users", "one place to go"]),
    ],
  },

  // ------------------------------------------------------------------ mobile-app-development
  {
    slug: "mobile-app-development",
    section: "Services",
    metaTitle: "Mobile App Development Company in Coimbatore | 123TWS",
    metaDescription:
      "Android, iOS and cross-platform app development in Coimbatore. Native Kotlin and Swift apps or Flutter and React Native builds, with design and support.",
    hero: {
      eyebrow: "Apps People Enjoy Using",
      title: "Custom Mobile App Development Company in Coimbatore",
      intro:
        "We create fast, dependable Android, iOS and cross-platform apps that help businesses grow and keep customers engaged.",
      image: stock.marketing,
      cta: consult,
    },
    blocks: [
      {
        type: "contact",
        heading: "Tell us about your app",
        body: "Share your idea or the problem you want solved, and our app team will get back to you.",
      },
      {
        type: "checklist",
        heading: "From app headaches to working solutions",
        columns: [
          {
            title: "What clients tell us",
            items: [
              "Online engagement with the brand is low",
              "Mobile users drop off and opportunities slip away",
              "An app idea exists, but the route to building it is unclear",
              "The existing app feels sluggish and people abandon it",
              "Slow performance is eating into retention and revenue",
            ],
          },
          {
            title: "How we respond",
            items: [
              "Your idea is shaped into a working app",
              "Lean, optimised code keeps things smooth",
              "Interfaces that feel natural to use",
              "A secure foundation built to handle growth",
              "Continued updates and support after release",
            ],
          },
        ],
      },
      {
        type: "videos",
        heading: "See one of our apps in use",
        items: [{ title: "123TWS mobile app walkthrough", youtubeId: "arttS9I4jBM" }],
      },
      {
        type: "features",
        heading: "Why work with us on your app",
        intro: "Chosen by startups and established businesses in Coimbatore and beyond.",
        items: [
          { title: "17+ years of experience", body: "Deep experience across WordPress, Shopify, Odoo and modern development stacks.", icon: "trophy", iconSrc: "/images/live/mobile-app-development/icons/experience.svg" },
          { title: "End-to-end support", body: "From the first concept to maintenance after launch, one team covers it all.", icon: "headset", iconSrc: "/images/live/mobile-app-development/icons/heaset.svg" },
          { title: "Transparent pricing", body: "Clear written quotes, so you know what you are paying for.", icon: "wallet", iconSrc: "/images/live/mobile-app-development/icons/coin.svg" },
          { title: "Coimbatore based", body: "A local team you can meet, working to global standards.", icon: "map", iconSrc: "/images/live/mobile-app-development/icons/location.svg" },
        ],
      },
      {
        type: "features",
        heading: "Customised mobile app development services",
        items: [
          { title: "Android app development", body: "Built natively in Java or Kotlin to Material Design guidelines, tested across devices and optimised for the Play Store.", icon: "phone", iconSrc: "/images/live/mobile-app-development/icons/android.png" },
          { title: "iOS app development", body: "Native apps in Swift that follow Apple's Human Interface Guidelines, meet App Store rules and fit the Apple ecosystem.", icon: "device", iconSrc: "/images/live/mobile-app-development/icons/apple.png" },
          { title: "Cross-platform development", body: "One React Native or Flutter codebase for iOS and Android, giving near-native performance at a lower cost.", icon: "stack", iconSrc: "/images/live/mobile-app-development/icons/cross-platform.png" },
          { title: "Enterprise mobile apps", body: "Internal workflow tools with role-based access, data encryption and offline capability.", icon: "building", iconSrc: "/images/live/mobile-app-development/icons/ui-design.png" },
          { title: "UI/UX design for apps", body: "User journey mapping, prototyping and testing, with screens that match your brand.", icon: "palette", iconSrc: "/images/live/mobile-app-development/icons/web-design.png" },
          { title: "App maintenance", body: "Regular updates, bug fixes and OS compatibility work to keep your app running well.", icon: "wrench", iconSrc: "/images/live/mobile-app-development/icons/tools-and-apps.png" },
        ],
      },
      {
        type: "gallery",
        heading: "Technologies we use",
        items: [
          logo("mobile-app-development", "icons/flutter.png", "Flutter"),
          logo("mobile-app-development", "icons/react.svg", "React"),
          logo("mobile-app-development", "icons/java.png", "Java"),
          // The live Kotlin logo (assets/images/kotlin.jpg) returns 404, so this tile is typographic.
          { title: "Kotlin" },
          logo("mobile-app-development", "icons/swift.png", "Swift"),
          logo("mobile-app-development", "icons/php.svg", "PHP"),
          logo("mobile-app-development", "icons/laravel.svg", "Laravel"),
          logo("mobile-app-development", "icons/nodejs.svg", "Node JS"),
          logo("mobile-app-development", "icons/mysql.svg", "MySQL"),
        ],
      },
      {
        type: "audience",
        heading: "Industries we serve",
        intro: "Our app clients range from young local ventures to large international firms.",
        items: [
          { title: "E-Commerce", icon: "cart", iconSrc: "/images/live/mobile-app-development/icons/ecommerce.png" },
          { title: "Healthcare", icon: "stethoscope", iconSrc: "/images/live/mobile-app-development/icons/healthcare.svg" },
          { title: "Education", icon: "graduation", iconSrc: "/images/live/mobile-app-development/icons/education.svg" },
          { title: "Travel", icon: "airplane", iconSrc: "/images/live/mobile-app-development/icons/travel.svg" },
          { title: "Real Estate", icon: "house", iconSrc: "/images/live/mobile-app-development/icons/construction.svg" },
          { title: "Finance", icon: "wallet", iconSrc: "/images/live/mobile-app-development/icons/finance.png" },
          { title: "Startups", icon: "rocket", iconSrc: "/images/live/mobile-app-development/icons/start-up.png" },
          { title: "Logistics", icon: "truck", iconSrc: "/images/live/mobile-app-development/icons/logistic.png" },
        ],
      },
      cta(["Got an app idea?", "Let's make it real"], "Discuss my app"),
      {
        type: "steps",
        heading: "Six stages from concept to launch",
        intro: "An open, collaborative process that keeps you in control at every stage.",
        steps: [
          { title: "Discovery and planning", body: "We pin down your goals, target audience and technical requirements." },
          { title: "UI/UX wireframing", body: "Visual prototypes let you give feedback before development begins." },
          { title: "Development", body: "We write the code, connect the APIs and build every planned feature." },
          { title: "Testing and QA", body: "Security, speed and functionality are tested thoroughly." },
          { title: "Launch", body: "We publish to the app stores and help with the initial marketing setup." },
          { title: "Support and maintenance", body: "Updates, performance monitoring and improvements continue after launch." },
        ],
      },
      {
        type: "gallery",
        heading: "Apps we have delivered",
        items: [
          {
            title: "TNEB BMS",
            caption: "Events: a secure app that keeps federation members informed with news, alerts, shared resources and official notices.",
            image: live("mobile-app-development", "tneb-bms-app.png", "TNEB BMS app sign-in screen shown on a phone and a tablet"),
          },
          {
            title: "Loan Bazzar",
            caption: "Business: an app that helps a loan agency log each enquiry, keep borrower details together and chase every application to completion.",
            image: live("mobile-app-development", "loan-bazzar-app.png", "Loan Bazzaar app sign-in screen shown on a phone and a tablet"),
          },
          {
            title: "Sushfresh",
            caption: "E-commerce: a fresh meat ordering app built for quick, simple ordering and delivery.",
            image: live("mobile-app-development", "sushfresh-app.png", "Sushfresh app phone number login screen shown on a phone and a tablet"),
          },
          {
            title: "Marketing CRM App",
            caption: "Lead management: a single app for running campaigns, following up leads and keeping customers engaged.",
            image: live("mobile-app-development", "marketing-crm-app.png", "Marketing CRM app sign-in screen with the 123TWS logo shown on a phone and a tablet"),
          },
        ],
      },
      { type: "testimonials" },
      cta(["Put your business", "in your customers' pockets"], "Contact us"),
      {
        type: "faq",
        heading: "Frequently asked questions",
        items: [
          { q: "What timeline should I expect for my app?", a: "Complexity and features drive the schedule. A simple app is far quicker than an enterprise solution, so a detailed timeline follows once we understand your requirements." },
          { q: "What makes a design responsive?", a: "Flexible layouts and elements resize to fit the screen they are viewed on. That gives users a consistent, comfortable experience on phones, tablets and desktops." },
          { q: "Will you support the app after release?", a: "Of course. Our maintenance packages are flexible and cover bug fixes, performance tuning, OS compatibility updates and new features." },
          { q: "What budget should I plan for an app?", a: "Features, platforms and design complexity set the price. As a guide, a basic app begins at around ₹1,50,000, and larger, more involved builds typically sit between ₹5,00,000 and ₹15,00,000. Prices are indicative and confirmed on quotation." },
          { q: "Is 123TWS a good fit for a startup?", a: "Very much so. Founders can begin with a minimum viable product, release features in phases and choose pricing that suits an early-stage budget." },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Ecommerce Website Development", href: "/ecommerce-website-development/" },
          { label: "Custom Software Development", href: "/custom-software-development/" },
          { label: "CRM Software Development", href: "/crm-software-development/" },
          { label: "Graphic Design", href: "/graphic-design/" },
          { label: "Our Technologies", href: "/our-technologies/" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ billing-software-development
  {
    slug: "billing-software-development",
    section: "Services",
    metaTitle: "GST Billing Software Development in Coimbatore | 123TWS",
    metaDescription:
      "Custom GST billing software for retail shops, supermarkets and restaurants. Bulk product import, sales reports, client SMS and online or offline use.",
    hero: {
      eyebrow: "Free Demo Available",
      title: "Billing Software in Coimbatore",
      intro:
        "Run your counter with confidence using billing software shaped around how you sell. Ask us for a free demo to see it working.",
      image: live(
        "billing-software-development",
        "billing-software-banner.png",
        "Illustration of a phone with a Pay Now button printing a long receipt beside a payment card and bar chart",
      ),
      cta: { label: "Book a Free Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Product addition",
        paragraphs: [
          "Our billing software gives you two ways to get products into the system, so setup suits both small and large catalogues.",
        ],
        bullets: [
          "Manual: type in the name, quantity, price and code, then save to list the product",
          "Bulk: prepare your product details in an Excel sheet and import them in one step",
        ],
        image: live("billing-software-development", "product-addition.png", "Illustration of two people reviewing a large monitor with a progress bar and alert icons"),
      },
      {
        type: "split",
        heading: "Online and offline billing",
        paragraphs: [
          "The software runs online or offline, and we can customise it and connect it to your website. Raise bills, produce financial reports and handle invoice calculations without fuss.",
          "It suits many kinds of counters, including supermarket billing, retail billing and restaurant billing.",
        ],
        image: live("billing-software-development", "online-offline-billing.png", "Illustration of a presenter on a monitor and a woman with a laptop sitting on books under a Wi-Fi symbol"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Report generation",
        paragraphs: ["See how the business is performing over any period with ready-made reports."],
        bullets: ["Day-wise reports", "Weekly reports", "Monthly reports", "Till-date reports", "Billing reports"],
        image: live("billing-software-development", "report-generation.png", "Illustration of three people working with a large report showing bar and line charts"),
      },
      {
        type: "split",
        heading: "Product analysis report",
        paragraphs: [
          "Track every product individually and generate an analysis report that shows which items outperform the rest. Use that insight to plan strategies that lift slower sellers.",
        ],
        image: live("billing-software-development", "product-analysis-report.png", "Illustration of a man holding a checklist in front of a monitor with rising bar charts and a shopping bag"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Turnover report",
        paragraphs: [
          "Alongside your turnover figures, the software lets you send SMS to many clients in one go. Share wishes, offers, payment reminders and thank-you notes to keep relationships strong.",
        ],
        image: live("billing-software-development", "turnover-report.png", "Illustration of two people examining rising bar charts with a magnifying glass above stacks of coins"),
      },
      {
        type: "features",
        heading: "Why choose us",
        items: [
          { title: "User-friendly interface", body: "Screens your staff can learn quickly and use comfortably at a busy counter.", icon: "layout", iconSrc: "/images/live/billing-software-development/icons/design.png" },
          { title: "Mobile-friendly design", body: "Check bills and reports from a phone or tablet as well as a desktop.", icon: "device", iconSrc: "/images/live/billing-software-development/icons/login.png" },
          { title: "Fully secured", body: "Built with security in mind to protect your business data.", icon: "shield", iconSrc: "/images/live/billing-software-development/icons/cyber-security.png" },
          { title: "Dedicated server and frequent backups", body: "Your records are held on a dedicated server and backed up regularly.", icon: "server", iconSrc: "/images/live/billing-software-development/icons/data-recovery.png" },
          { title: "Fully customised", body: "Fields, bill layouts and reports are shaped to your business.", icon: "puzzle", iconSrc: "/images/live/billing-software-development/icons/customization.png" },
        ],
      },
      {
        type: "split",
        heading: "Why build your billing software with 123TWS",
        paragraphs: [
          "Choosing 123TWS gives you billing software that is customised, scalable, secure and efficient. Your billing becomes faster, more accurate and better connected to the rest of the business.",
          "Billing is only one part of your operations, so we make sure it works smoothly with accounting software, CRM tools and other systems. That avoids data silos and repeated data entry.",
          "We specialise in GST billing software and keep it up to date with current technology. Book a free demo to explore the features and options.",
        ],
        reverse: true,
      },
      {
        type: "faq",
        heading: "Frequently asked questions",
        items: [
          { q: "Will it suit a small shop?", a: "Definitely. It can be set up for businesses of any size, including small shops with a single counter." },
          { q: "Can the bills carry our own branding?", a: "They can. Your logo and brand colours can be added to the software and the bills it produces." },
          { q: "Where does the software save us money?", a: "Automating billing reduces manual work and cuts down on errors, which lowers day-to-day operating costs." },
          { q: "How safe is our billing data?", a: "Security is built in. Data is protected with encryption and stored securely, with regular backups." },
          { q: "Can customers pay in different ways?", a: "Certainly. It supports a range of payment methods, which is convenient for both you and your customers." },
        ],
      },
      {
        type: "related",
        heading: "Related software",
        links: [
          { label: "Custom Software Development", href: "/custom-software-development/" },
          { label: "CRM Software Development", href: "/crm-software-development/" },
          { label: "Payroll Software", href: "/payroll-software/" },
          { label: "Boutique Management Software", href: "/boutique-management-software/" },
          { label: "Bulk SMS", href: "/bulk-sms-coimbatore/" },
        ],
      },
      closingCta,
    ],
  },

  // ------------------------------------------------------------------ custom-software-development
  {
    slug: "custom-software-development",
    section: "Services",
    metaTitle: "Custom Software Development Company in Coimbatore",
    metaDescription:
      "Custom software, ERP, payroll, HRMS, inventory and school management systems built in Coimbatore for manufacturers, retailers and service businesses.",
    hero: {
      eyebrow: "Business Software",
      title: "Software Development in Coimbatore",
      intro:
        "We write and maintain software that fits the way your organisation works, from single billing tools to ERP systems that connect the whole business.",
      image: live(
        "custom-software-development",
        "software-development-banner.png",
        "Illustration of a developer at a desk with PHP, HTML, CSS and JS bubbles floating above the monitor",
      ),
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Software development and ERP",
        paragraphs: [
          "Software development covers writing source code and keeping it maintained, following a defined method from idea to working product.",
          "Enterprise Resource Planning (ERP) brings internal and external management information together across an entire organisation. It also includes modules for finance and human resources.",
        ],
      },
      {
        type: "audience",
        heading: "IT services and software for many sectors",
        intro: "Alongside billing software, ERP and CRM solutions, we build software for businesses such as these.",
        items: [
          { title: "Automobile", icon: "car" },
          { title: "Pump manufacturing", icon: "gear" },
          { title: "Rubber products", icon: "puzzle" },
          { title: "Finance companies", icon: "wallet" },
          { title: "Beauty shops", icon: "star" },
          { title: "Car decoration", icon: "wrench" },
          { title: "Mobile shops", icon: "phone" },
          { title: "Fruit shops", icon: "cart" },
          { title: "Engineering companies", icon: "building" },
          { title: "Real estate", icon: "house" },
        ],
      },
      {
        type: "split",
        heading: "How our software is organised",
        paragraphs: [
          "Our systems are built from modules, so each organisation gets the parts it needs, along with reports and user rights.",
        ],
        bullets: [
          "Inventory management: inventory, marketing, service and accounts modules, with user rights and profiles",
          "Human resource management system: HRMS modules and reports",
          "Chit fund and finance management system: modules, reports, user rights and profiles",
          "School management system: modules and reports",
        ],
        image: live(
          "custom-software-development",
          "software-flow-diagram.jpg",
          "Diagram of software development modules for inventory management, HRMS, chit fund and finance management, and school management",
        ),
        reverse: true,
      },
      {
        type: "checklist",
        heading: "Software we develop",
        columns: [
          {
            items: [
              "School management software",
              "College management software",
              "Inventory management software",
              "Billing software",
              "Material management software",
              "Manufacturing ERP",
              "Attendance management software",
              "Jewellery manufacturing software",
            ],
          },
          {
            items: [
              "Payroll software (Windows)",
              "Human resource management software (Windows)",
              "HRIS (Windows)",
              "HRMS (Windows)",
              "Payroll software (web)",
              "Human resource management software (web)",
              "HRIS (web)",
              "HRMS (web)",
            ],
          },
        ],
      },
      {
        type: "related",
        heading: "Explore our software",
        links: [
          { label: "Billing Software", href: "/billing-software-development/" },
          { label: "CRM Software Development", href: "/crm-software-development/" },
          { label: "Payroll Software", href: "/payroll-software/" },
          { label: "School ERP", href: "/school-erp/" },
          { label: "Vehicle Management Software", href: "/vehicle-management-software/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
        ],
      },
      closingCta,
    ],
  },

  // ------------------------------------------------------------------ crm-software-development
  {
    slug: "crm-software-development",
    section: "Services",
    metaTitle: "Custom CRM Software Development Company in Coimbatore",
    metaDescription:
      "Custom CRM software from 123TWS for leads, sales, customers, inventory and billing, with WhatsApp, Tally and Razorpay integrations. Free consultation and demo.",
    hero: {
      eyebrow: "CRM from ₹24,999, Lifetime Access",
      title: "Custom CRM Software Development Company in Coimbatore",
      intro:
        "We build CRM software around your own business processes, so leads, customers, sales, inventory, staff workflows and reports all live on one secure platform. Startups, manufacturers, healthcare providers, schools, retailers and service firms use it to automate routine work and decide faster.",
      image: stock.crm,
      cta: { label: "Book a CRM Consultation", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "contact",
        heading: "Talk to us about your CRM",
        body: "Tell us how your team manages customers today and we will show you what a custom CRM could do.",
      },
      {
        type: "split",
        heading: "The case for a CRM of your own",
        paragraphs: [
          "Spreadsheets and a patchwork of separate tools work for a while, then start to hold a growing team back. Records drift out of sync, data gets typed twice, follow-ups are forgotten and customers notice.",
          "A custom CRM puts customer data in one place, automates repetitive work, simplifies communication and gives you live insight. Your team can then spend its time growing the business instead of maintaining spreadsheets.",
        ],
        bullets: [
          "Contact details scattered across files and inboxes",
          "Prospects who never get a second call",
          "Leads with no single owner or home",
          "Quotes and invoices typed up by hand",
          "Reports that take hours and still say little",
          "No clear view of how each team member is doing",
        ],
        image: stock.workspace,
      },
      clientLogos("Some of the businesses we work with"),
      {
        type: "features",
        heading: "Why choose us for CRM development",
        intro: "Secure, reliable and fully customised CRM software, supported from planning through to updates after launch.",
        items: [
          { title: "Fast and secure CRM development", body: "Secure coding, encrypted data and an architecture that scales with you.", icon: "lock" },
          { title: "Custom workflow automation", body: "Your business processes automated with workflows designed around them.", icon: "lightning" },
          { title: "User-friendly dashboard", body: "Customers, tasks and reports managed from one simple screen.", icon: "layout" },
          { title: "Third-party integrations", body: "Links your CRM to WhatsApp, email, SMS, payment providers and other tools you rely on.", icon: "link" },
          { title: "Mobile responsive CRM", body: "Log in securely from a desktop, tablet or phone.", icon: "device" },
          { title: "Dedicated support", body: "Ongoing support, maintenance, updates and feature improvements.", icon: "headset" },
        ],
      },
      {
        type: "plans",
        heading: "Custom CRM from ₹24,999",
        intro: "Our published entry offer for businesses ready to move off spreadsheets.",
        note: "Prices are indicative and confirmed on quotation. Final cost depends on the modules, integrations and number of users you need.",
        plans: [
          {
            name: "Custom CRM",
            price: "₹24,999",
            period: "with lifetime access",
            features: [
              "Built around your workflow",
              "Only the modules you need",
              "Free consultation and live demo",
              "Ongoing support available",
            ],
            highlight: true,
          },
        ],
      },
      {
        type: "videos",
        heading: "A CRM we built, on screen",
        intro: "Take a quick tour of the screens, automated tasks and reporting you can expect from a CRM we build.",
        items: [{ title: "Tour of a 123TWS CRM", youtubeId: "t2X77Dl4Re0" }],
      },
      {
        type: "features",
        heading: "CRM modules to choose from",
        intro: "Your CRM includes only the modules you need, which keeps it simple, efficient and ready to scale.",
        items: [
          { title: "Lead management", body: "Capture, assign and track leads from your website, WhatsApp, social media and campaigns.", icon: "target" },
          { title: "Sales pipeline", body: "Follow each opportunity from first enquiry to closed deal through your own sales stages.", icon: "chart" },
          { title: "Customer management", body: "One customer database holding communication history, documents, quotations and transactions.", icon: "users" },
          { title: "Inventory management", body: "Live view of stock levels, purchase orders, suppliers, warehouses and stock movement.", icon: "database" },
          { title: "Invoice and billing", body: "Raise quotes and GST invoices, send payment reminders and see financial summaries without retyping data.", icon: "receipt" },
          { title: "Employee management", body: "Track who is in, who is doing what, which approvals and leave requests are pending and how each person is performing.", icon: "user" },
          { title: "Reports and analytics", body: "Charts and dashboards that show how sales, customer numbers, revenue and day-to-day efficiency are trending.", icon: "chart" },
          { title: "Workflow automation", body: "Follow-ups, reminders, approvals, notifications and customer messages handled automatically.", icon: "lightning" },
        ],
      },
      {
        type: "steps",
        heading: "Our CRM development process",
        intro: "An open, collaborative process that keeps you in control at every stage.",
        steps: [
          { title: "Discovery and consultation", body: "We learn your goals, challenges, workflows and software needs." },
          { title: "Business process analysis", body: "Current processes are mapped and the best opportunities for automation identified." },
          { title: "UI/UX and CRM development", body: "Clear interfaces are designed and scalable modules built around your operations." },
          { title: "Testing and quality assurance", body: "Functionality, performance, security and usability are all tested before rollout." },
          { title: "Deployment and user training", body: "We launch the CRM and train your team so it is adopted quickly." },
          { title: "Ongoing support and improvements", body: "Maintenance, updates, new features and technical support as you grow." },
        ],
      },
      {
        type: "checklist",
        heading: "Integrations",
        intro: "Connecting your everyday applications removes duplicate work and keeps data consistent.",
        columns: [
          { items: ["WhatsApp Business API", "Google Workspace", "Microsoft 365", "Payment gateway", "Tally"] },
          { items: ["Razorpay", "SMS gateway", "Email automation", "HRMS", "REST APIs"] },
        ],
      },
      {
        type: "features",
        heading: "Sector-specific CRM builds",
        intro: "Each of these was shaped around how that industry actually runs, and we work well beyond this list.",
        items: [
          { title: "Real estate", body: "Leads, follow-ups, property listings and appointments in one place.", icon: "house" },
          { title: "Travel and tourism", body: "Itineraries, bookings and traveller history managed end to end.", icon: "airplane" },
          { title: "Retail and electronics", body: "Stock levels, repeat customers and service after the sale, all tracked together.", icon: "cart" },
          { title: "Healthcare and medical", body: "Secure handling of patient details, bookings and follow-up reminders.", icon: "stethoscope" },
          { title: "Engineering and industrial", body: "Simpler tracking of projects, suppliers and service requests.", icon: "gear" },
          { title: "Marketing CRM", body: "Campaigns, lead nurturing and customer relationship management.", icon: "megaphone" },
        ],
      },
      {
        type: "checklist",
        heading: "Custom CRM compared with off-the-shelf software",
        columns: [
          {
            title: "Custom CRM",
            items: [
              "Workflow: designed for your workflow",
              "Scalability: easy to scale",
              "Integrations: better integrations",
              "Cost: pay only for the modules you need",
              "Flexibility: higher flexibility",
              "Ownership: full ownership",
            ],
          },
          {
            title: "Ready-made CRM",
            items: [
              "Workflow: generic features",
              "Scalability: limited customisation",
              "Integrations: restricted integrations",
              "Cost: pay for features you do not use",
              "Flexibility: fixed processes",
              "Ownership: vendor limitations",
            ],
          },
        ],
      },
      {
        type: "gallery",
        heading: "CRMs we have delivered",
        items: [
          {
            title: "Kovai Mobiles",
            caption: "Mobile service: a CRM for repair management, service tracking and customer updates.",
            image: live("crm-software-development", "kovai-mobiles-crm.png", "Kovai Mobiles service centre CRM dashboard shown on desktop, laptop, tablet and phone"),
          },
          {
            title: "Core Automotive",
            caption: "Service business: a ticketing CRM for service requests and issue tracking.",
            image: live("crm-software-development", "core-automotive-crm.png", "Core Automotive CRM dashboard with lead, follow-up and ticket counts shown on several devices"),
          },
          {
            title: "Sushfresh",
            caption: "Online meat selling: an all-in-one billing CRM for invoicing, stock tracking and sales insight.",
            image: live("crm-software-development", "sushfresh-crm.png", "Sushfresh admin dashboard with vendor and order panels shown on several devices"),
          },
          {
            title: "Marketing CRM",
            caption: "Lead management: one CRM for campaigns, leads and customer engagement.",
            image: live("crm-software-development", "marketing-crm.png", "Marketing CRM dashboard with lead counts and a meeting calendar shown on several devices"),
          },
        ],
      },
      { type: "testimonials" },
      cta(["Your team deserves", "a CRM that fits"], "Call us"),
      {
        type: "checklist",
        heading: "What you can count on from 123TWS",
        columns: [
          {
            items: [
              "More than 17 years building business software",
              "A team that develops CRMs day in, day out",
              "Clear project updates at every stage",
              "Technical help that continues after launch",
            ],
          },
          {
            items: [
              "Cloud hosting that grows with your user base",
              "Security designed into the system from the start",
              "Room to customise as your needs change",
            ],
          },
        ],
      },
      {
        type: "faq",
        heading: "CRM questions answered",
        items: [
          { q: "What do you mean by a custom CRM?", a: "A customer relationship management system designed around your particular workflow. Sales, stock, staff tasks, customer records and reporting all sit together in one system." },
          { q: "Is a bespoke CRM better than an off-the-shelf product?", a: "For most growing firms, a bespoke system follows your processes, bends more easily, connects to the software you already use and scales with you, without charging for features you never touch." },
          { q: "What will my CRM cost?", a: "Our CRM starts at ₹24,999 with lifetime access. The final price depends on the modules, integrations, number of users and level of customisation, and we quote once we understand your requirements." },
          { q: "How soon can my CRM be ready?", a: "That depends on the complexity and the features you need. We agree a timeline with you after the discovery stage." },
          { q: "Will the CRM work with WhatsApp?", a: "Through the WhatsApp Business API, the CRM can send customer messages, chase leads, push alerts and handle support conversations automatically." },
          { q: "Does it connect to Tally or my accounts package?", a: "It does. We link the CRM with Tally, other accounting packages, ERP systems, payment gateways and the other business apps you use." },
          { q: "What kinds of organisations get the most from a CRM?", a: "We have seen strong results for factories, shops, clinics, schools and colleges, lenders, property firms, travel agents, distributors and service providers." },
          { q: "How do you protect the data in my CRM?", a: "Our CRMs use role-based access, encrypted databases, secure authentication, regular backups and established security practices." },
          { q: "Can we add features after launch?", a: "Whenever you are ready, we can extend the system with extra modules, more user accounts, new reports or further integrations." },
          { q: "What sets 123TWS apart as a CRM developer?", a: "With more than 17 years of experience, we take a business-first approach and build CRMs that are secure, scalable and easy to use, tailored to each client's workflow." },
        ],
      },
      {
        type: "related",
        heading: "Industry CRM solutions",
        links: [
          { label: "Real Estate CRM", href: "/real-estate-crm-software/" },
          { label: "Travel CRM", href: "/travel-crm/" },
          { label: "Medical CRM", href: "/medical-crm-software/" },
          { label: "Marketing CRM", href: "/marketing-crm-software/" },
          { label: "Computer Repair CRM", href: "/computer-repair-crm/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
        ],
      },
      cta(["Less admin, more selling", "starts with the right CRM"], "Book a CRM consultation"),
    ],
  },

  // ------------------------------------------------------------------ website-maintenance
  {
    slug: "website-maintenance",
    section: "Services",
    metaTitle: "Website Maintenance Services in Coimbatore | 123TWS",
    metaDescription:
      "Website maintenance from 123TWS: content updates, WordPress plugin updates, security fixes, ecommerce product changes and SEO-aware page edits.",
    hero: {
      eyebrow: "Build and Reload Your Website on a Strong Foundation",
      title: "Web Maintenance in Coimbatore",
      intro:
        "Maintenance keeps a website current, secure and useful long after launch. We handle the regular updates so your site keeps pace with your business.",
      image: live(
        "website-maintenance",
        "web-maintenance-banner.png",
        "Illustration of a person carrying a gear beside a monitor showing a wrench icon and a traffic cone",
      ),
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Why website maintenance matters",
        paragraphs: [
          "Running a website well means updating it in a steady, planned way. Maintenance covers changes to text, images, promotions and advertisements as your business moves on.",
          "Our service protects your site through continual optimisation and looks after both its technical needs and its content. Regular, SEO-aware updates also help your rankings improve over time.",
        ],
      },
      {
        type: "split",
        heading: "Fresh content without extra overhead",
        paragraphs: [
          "Organisations are always looking to cut costs while adding value, and well-planned maintenance does both. Once your site is live, it needs regular updates to keep the content fresh.",
          "Our maintenance packages are designed so that anyone in your organisation can manage the site's upkeep, whatever type of business you run.",
          "We also offer annual maintenance for WordPress sites, including plugin updates. If a site is ever hacked, our qualified technical and support team will resolve it promptly and courteously.",
        ],
        reverse: true,
      },
      {
        type: "split",
        heading: "What maintenance covers",
        paragraphs: ["A complete care service for the content, security and structure of your website."],
        bullets: [
          "Regular updates so nothing falls out of date",
          "Security cover for the whole site",
          "Content management on your behalf",
          "Scheduled changes, plus new product listings for online stores",
          "Fast, reliable loading for visitors",
          "Full redesigns when the time comes",
          "Edits to the home page and inner pages",
          "Search-friendly updates to listings and registrations",
        ],
        image: live(
          "website-maintenance",
          "website-maintenance-illustration.png",
          "Illustration of people around a laptop showing an update screen, with a large wrench, gears and a padlock shield",
        ),
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Website Design", href: "/website-design/" },
          { label: "CMS Website Development", href: "/cms-website-development/" },
          { label: "SEO Services", href: "/seo-services/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
          { label: "Web Hosting", href: "/web-hosting/" },
        ],
      },
      cta(["Keep your website", "in good shape"], "Ask about maintenance"),
    ],
  },

  // ------------------------------------------------------------------ payment-gateway
  {
    slug: "payment-gateway",
    section: "Services",
    metaTitle: "Payment Gateway Integration Services in India | 123TWS",
    metaDescription:
      "Payment gateway integration for websites and apps: Razorpay, CCAvenue, PayU, PayPal and Worldline, with cards, net banking, UPI and recurring billing.",
    hero: {
      eyebrow: "Payments",
      title: "Payment Gateway",
      intro:
        "Accepting payments online opens your business to customers well beyond your city. We integrate trusted payment gateways into your website so buyers can pay with confidence.",
      image: live(
        "payment-gateway",
        "payment-gateway-banner.png",
        "Illustration of a person sitting on coins beside phones showing a credit card payment and a bank transfer",
      ),
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Online payments for your business",
        paragraphs: [
          "More and more businesses now trade online, and customers expect to pay the same way. 123 Total Web Solutions provides payment gateway integration so you can meet that expectation.",
          "We take a merchant-centred approach and value quality over quantity. A payment gateway handles card processing, billing, reporting and settlement with acquiring and issuing banks, and moves authorised funds into accounts such as your company's current account.",
        ],
      },
      {
        type: "split",
        heading: "PayU Money gateway integration",
        paragraphs: ["PayUmoney is a straightforward way for smaller businesses to start taking payments online."],
        bullets: [
          "No system cost",
          "No special documents needed to start receiving payments",
          "Little technical skill required to get going",
          "A dedicated team to handle buyer disputes and claims",
        ],
        image: live("payment-gateway", "payumoney-logo.jpg", "PayUmoney logo"),
      },
      {
        type: "split",
        heading: "PayPal gateway integration",
        paragraphs: [
          "PayPal integration is a core skill for our programmers. We build websites that use PayPal for online purchases, so you can run an online market for your goods.",
          "PayPal is a well-known, flexible payment option on modern websites, and its IPN (Instant Payment Notification) API keeps your orders updated automatically.",
        ],
        image: live("payment-gateway", "paypal-logo.jpg", "PayPal logo"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Worldline gateway integration",
        paragraphs: [
          "Worldline offers payment acceptance for merchants both online and in store, from POS terminals at the counter to payment gateways for ecommerce websites.",
          "It also provides digital banking solutions for financial institutions and helps businesses set up and run online stores, covering payment processing, security and customer experience.",
        ],
        image: live("payment-gateway", "worldline-logo.png", "Worldline logo"),
      },
      {
        type: "split",
        heading: "CCAvenue payment gateway integration",
        paragraphs: [
          "Since 2001, CCAvenue has served e-merchants around the world with fast, secure and complete online transaction processing.",
          "We integrate CCAvenue to suit your requirements, so you can receive payments from customers wherever they are, with less risk of delay.",
        ],
        image: live("payment-gateway", "ccavenue-logo.jpg", "CCAvenue logo"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Razorpay payment gateway integration",
        paragraphs: [
          "Razorpay lets businesses accept payments through several channels with a smooth, secure checkout.",
          "Payment links let you share a custom link and collect money without a full online store, and Razorpay subscriptions make recurring billing simple for subscription-based services.",
        ],
        image: live("payment-gateway", "razorpay-logo.png", "Razorpay logo"),
      },
      {
        type: "features",
        heading: "What integration gives you",
        items: [
          { title: "Works with most shopping carts", body: "We integrate gateways with almost any cart to accept credit cards, debit cards and net banking.", icon: "cart" },
          { title: "Your own merchant account", body: "You manage your own merchant account and settlements.", icon: "wallet" },
          { title: "No payment delays", body: "Send and receive payments without waiting on manual processing.", icon: "lightning" },
          { title: "Buy at any time", body: "Customers can purchase whenever it suits them, day or night.", icon: "clock" },
          { title: "Major bank cards accepted", body: "Credit cards from almost all major banks are supported.", icon: "card" },
          { title: "Faster sales", body: "Sales close quickly and within the expected time frame.", icon: "check" },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Ecommerce Website Development", href: "/ecommerce-website-development/" },
          { label: "Portal Development", href: "/portal-development/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
          { label: "Mobile App Development", href: "/mobile-app-development/" },
          { label: "Website Design", href: "/website-design/" },
        ],
      },
      cta(["Start accepting", "payments online"], "Request a demo"),
    ],
  },

  // ------------------------------------------------------------------ domain
  {
    slug: "domain",
    section: "Services",
    metaTitle: "Domain Name Registration in Coimbatore | 123TWS",
    metaDescription:
      "Register .com, .in, .co.in, .org and many more domain extensions with 123TWS in Coimbatore. Availability checks, multiple domains and transfers handled.",
    hero: {
      eyebrow: "A Name Only Your Business Owns",
      title: "Domain Registration in Coimbatore",
      intro:
        "Your domain name is how people find and remember your website. We help you choose an available name and register it with the extension that suits your business.",
      image: live(
        "domain",
        "domain-registration-banner.png",
        "Illustration of a woman arranging .com, .net, .org and .info blocks on a monitor with gold coins above",
      ),
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Why register a domain name?",
        paragraphs: [
          "A domain name identifies your website. One web server can host many domains, but each domain points to a single destination, which makes your site easy to locate and recognise.",
          "Registering a domain gives you the exclusive right to use it. It also forms part of every URL on your site, so visitors can identify individual pages at a glance.",
        ],
      },
      {
        type: "checklist",
        heading: "Domain registration extensions",
        columns: [
          { title: "Generic", items: [".COM (Commercial)", ".ORG (Organisation)", ".NET (Network)", ".INFO (Informational)", ".BIZ (Business)", ".NAME"] },
          { title: "India", items: [".IN", ".CO.IN", ".CO"] },
          { title: "Country", items: [".US (United States)", ".CO.UK (United Kingdom)", ".CA (Canada)", ".CN (China)"] },
          { title: "Specialist", items: [".TV (Television)", ".MOBI (Mobile)", ".WS (Website)", ".ME"] },
        ],
      },
      {
        type: "steps",
        heading: "Domain registration process",
        intro: "Here is the information we need to complete a registration.",
        steps: [
          { title: "The name you want", body: "Tell us the name you would like to use for your website." },
          { title: "Availability check", body: "We confirm whether the name is free to register." },
          { title: "Registrant details", body: "Your name, correct address, phone number and email address are recorded." },
          { title: "Registration term", body: "Choose how long you want to register the domain for." },
          { title: "Payment information", body: "Once payment is complete, the domain is registered and ready to use." },
        ],
      },
      {
        type: "split",
        heading: "Register more than one name",
        paragraphs: [
          "When all the details are in place, your domain is registered and ready to use. You can register several domain names at the same time to protect your brand.",
          "If you already own a domain elsewhere, transferring it to us is also possible.",
        ],
        reverse: true,
      },
      {
        type: "features",
        heading: "Benefits of registering a domain",
        items: [
          { title: "Hold the name long term", body: "Hold on to your chosen name for as long as you keep it registered.", icon: "clock" },
          { title: "Easier to find in search", body: "A clear, relevant name helps people locate you through search engines.", icon: "search" },
          { title: "Domain registration transfer", body: "Move existing domains so they are managed alongside your other services.", icon: "link" },
          { title: "Instant recognition", body: "Visitors can quickly understand what your website is about from its name.", icon: "globe" },
        ],
      },
      {
        type: "split",
        heading: "Search for your domain",
        paragraphs: [
          "We register new domain names using a search tool that shows which names are available, and we handle the registration the way you want it. Ask us about our current offers.",
          "To check a name, enter it with the extension you want, such as .com, .in, .co.in or .org, and search. If the name is available, you can go straight on to register it, for immediate use or to hold for the future.",
        ],
      },
      {
        type: "related",
        heading: "Complete your online presence",
        links: [
          { label: "Web Hosting", href: "/web-hosting/" },
          { label: "Business Email", href: "/business-email-service-provider/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
          { label: "Website Design", href: "/website-design/" },
          { label: "Logo Design", href: "/logo-design/" },
        ],
      },
      cta(["Find the right name", "for your brand"], "Search for a domain"),
    ],
  },

  // ------------------------------------------------------------------ business-email-service-provider
  {
    slug: "business-email-service-provider",
    section: "Services",
    metaTitle: "Business Email Service Provider in Coimbatore | 123TWS",
    metaDescription:
      "Professional email on your own domain with Google Workspace, Microsoft 365, Zoho Mail or GoDaddy Workspace Email, set up and supported by 123TWS.",
    hero: {
      eyebrow: "Email That Builds Trust",
      title: "Business Email",
      intro:
        "Every business needs dependable email, and that starts with the right email hosting. As a dedicated GoDaddy Pro reseller, we can also offer competitive pricing on email plans.",
      image: live(
        "business-email-service-provider",
        "business-email-banner.png",
        "Illustration of an open envelope holding a letter, with an @ symbol and a paper plane",
      ),
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "What business email does for you",
        paragraphs: [
          "Business email is the address you use for your organisation's work, usually in the form yourname@companyname. Everyone in the company shares the same pattern after the @ sign.",
          "Because the address carries your company name, it builds trust with customers and quietly promotes your brand. It also helps customers recognise other addresses that belong to your organisation.",
          "Third-party providers offer both free and paid plans. The right one depends on how many addresses you need, how much you use them, the attachment sizes you send and the features each plan includes.",
        ],
        image: live(
          "business-email-service-provider",
          "business-email-illustration.png",
          "Illustration of a man holding a phone beside a large smartphone showing a new email notification",
        ),
      },
      {
        type: "gallery",
        heading: "Business email service providers",
        intro: "Trusted providers we set up for businesses.",
        items: [
          { title: "Google Workspace", image: live("business-email-service-provider", "google-workspace-logo.jpg", "G Suite logo") },
          { title: "GoDaddy", image: live("business-email-service-provider", "godaddy-logo.jpg", "GoDaddy logo") },
          { title: "Microsoft Office 365", image: live("business-email-service-provider", "microsoft-office-logo.jpg", "Microsoft Office logo") },
          { title: "Zoho", image: live("business-email-service-provider", "zoho-logo.jpg", "Zoho logo") },
        ],
      },
      {
        type: "split",
        heading: "Google Workspace",
        paragraphs: [
          "Looking for reliable email with productivity and collaboration tools built in? Google Workspace, formerly G Suite, brings together Gmail, Meet, Drive, Calendar, Chat, Docs, Sheets, Slides, Keep, Sites, Forms and Currents, along with Apps Script and Cloud Search.",
          "You can tailor Workspace to your business with add-ons for customer support, extra cloud storage and stronger security.",
        ],
        bullets: [
          "Generous email storage per user",
          "Video meetings for large groups",
          "Admin controls and enhanced security",
          "Docs, Sheets, Slides, Chat, Calendar and Gmail in the browser",
        ],
        image: live(
          "business-email-service-provider",
          "google-workspace-illustration.png",
          "Illustration of a tidy office desk with a monitor, desk lamp, files and a potted plant",
        ),
      },
      {
        type: "split",
        heading: "Zoho business email",
        paragraphs: [
          "Zoho Mail combines a clean, ad-free interface with powerful features designed for business and professional use. Its fast webmail offers features that match or exceed many desktop email clients.",
          "It works for both business and personal email, letting users send and receive messages for official or private use.",
        ],
        image: live(
          "business-email-service-provider",
          "zoho-mail-illustration.png",
          "Illustration of two people reading and sending emails around a large screen showing an inbox",
        ),
        reverse: true,
      },
      {
        type: "split",
        heading: "GoDaddy Workspace Email",
        paragraphs: [
          "As a dedicated GoDaddy Pro reseller, we offer competitive pricing on email plans through our reseller website. GoDaddy provides paid business email plans for single or multiple domains, covering single users up to 100 users.",
        ],
        bullets: [
          "Access email from a smartphone, tablet, desktop client or web browser",
          "Outlook configuration",
          "Catch-all account",
          "A complete webmail experience on phone and computer",
          "Personal and shared calendars with online storage included",
        ],
        image: live(
          "business-email-service-provider",
          "godaddy-workspace-illustration.png",
          "Illustration of a woman reading a letter beside a large open envelope and a mailbox",
        ),
      },
      {
        type: "split",
        heading: "Microsoft Office 365",
        paragraphs: [
          "Microsoft Office 365 is a software-as-a-service subscription that combines Microsoft Office with email, collaboration and other services delivered from Microsoft's cloud. It also includes desktop functionality.",
        ],
        image: live(
          "business-email-service-provider",
          "microsoft-365-illustration.png",
          "Illustration of two people arranging files and charts around a large tablet screen",
        ),
        reverse: true,
      },
      {
        type: "checklist",
        heading: "Features of Microsoft Office 365",
        intro: "Combined features across the available plans.",
        columns: [
          {
            title: "Email and calendaring",
            items: [
              "Mailbox hosting on your own domain, such as yourname@yourcompany.com",
              "Business-class Exchange email on phones, tablets, desktops and the web",
              "Shared calendars, meeting scheduling and reminders",
              "Manage users and restore deleted accounts from anywhere",
            ],
          },
          {
            title: "File and storage",
            items: [
              "OneDrive file storage and sharing",
              "Changes saved to OneDrive or SharePoint sync across your devices",
              "Share files with external contacts through access or guest links",
              "Sync files on PC, Mac and mobile",
            ],
          },
          {
            title: "Security and compliance",
            items: [
              "Exchange Online Protection against spam, malware and known threats",
              "Security groups to control who can access business information",
              "Password policies that require regular resets",
            ],
          },
          {
            title: "Teamwork and communication",
            items: [
              "Online meetings and video calls in Microsoft Teams",
              "Team chats, meetings, files and apps together in one place",
              "SharePoint team sites to share content across your intranet",
            ],
          },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Business Email Hosting", href: "/business-email-hosting/" },
          { label: "Domain Registration", href: "/domain/" },
          { label: "Web Hosting", href: "/web-hosting/" },
          { label: "Online Storage", href: "/online-storage/" },
          { label: "Bulk Email Service", href: "/bulk-email-service/" },
        ],
      },
      cta(["Professional email", "for your whole team"]),
    ],
  },

  // ------------------------------------------------------------------ powerpoint-presentation-service
  {
    slug: "powerpoint-presentation-service",
    section: "Services",
    metaTitle: "PowerPoint Presentation Design Service in Coimbatore",
    metaDescription:
      "Custom PowerPoint design for conferences, investor meetings, pitches, business plans and internal reviews. Send your content and our designers do the rest.",
    hero: {
      eyebrow: "Presentation Design",
      title: "PowerPoint Presentation in Coimbatore",
      intro:
        "PowerPoint is the main tool for a strong presentation, but the craft lies in how it is put together. Our designers turn your content into slides that help you present with confidence.",
      image: live(
        "powerpoint-presentation-service",
        "powerpoint-banner.png",
        "Illustration of a monitor displaying two pie charts, a cycle icon and a colourful bar chart",
      ),
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Professional presentations for every occasion",
        paragraphs: [
          "Hands-on work with corporates and many different sectors has given us a professional approach to every kind of PowerPoint presentation. We specialise in custom design and development of presentations to your exact requirements.",
          "Whenever you need creative support with a deck, we are ready to help. Presentation design is one of our core strengths, and we use it to show your organisation at its best as it grows.",
        ],
      },
      {
        type: "audience",
        heading: "Presentations our creative team prepares",
        items: [
          { title: "Conferences", icon: "users" },
          { title: "Internal meetings", icon: "building" },
          { title: "Investor meets", icon: "chart" },
          { title: "Business plans", icon: "briefcase" },
          { title: "Pitches", icon: "target" },
          { title: "Any other purpose", icon: "presentation" },
        ],
      },
      {
        type: "split",
        heading: "Start with just an email",
        paragraphs: [
          "Our presentation design service begins with a simple email. A dedicated designer studies your content to understand exactly what you are looking for.",
          "Turnaround time depends on how much content and graphic work the presentation needs, and we confirm it once we have reviewed your material.",
        ],
        reverse: true,
      },
      {
        type: "related",
        heading: "Related design services",
        links: [
          { label: "Corporate Presentation", href: "/corporate-presentation/" },
          { label: "Graphic Design", href: "/graphic-design/" },
          { label: "Brochure Design", href: "/brochure-design/" },
          { label: "Logo Design", href: "/logo-design/" },
          { label: "2D Animation Video", href: "/2d-animation-video/" },
        ],
      },
      closingCta,
    ],
  },
];
