import type { Block, Img, LinkItem, PageDef } from "../types";

// Digital marketing, design and media service pages, plus the Madurai location page.
// Sections follow the order of the live pages on 123tws.com. Copy is original; facts
// (channels, deliverables, package details, published prices) come from the business.
// Images under /images/live/ are the site's own artwork.

const IMG = {
  marketing: { src: "/images/service-marketing.jpg", alt: "A finger tapping the screen of a tablet" },
  seo: { src: "/images/service-seo.jpg", alt: "Black and white photo of a keyboard, mouse and coffee mug on a desk" },
  desk: {
    src: "/images/hero-desk.jpg",
    alt: "Top-down view of a dark desk with a monitor, keyboard, tablet, glasses and notebooks",
  },
  workspace: { src: "/images/hero-workspace.jpg", alt: "A person typing on a laptop" },
  contact: {
    src: "/images/contact-desk.jpg",
    alt: "A laptop, phone and pen holder on a wooden desk beside a window with blinds",
  },
  team: { src: "/images/about-team.jpg", alt: "Black and white photo of a team working at long tables" },
  tower: { src: "/images/hero-tower.jpg", alt: "A glass office tower seen from street level against a grey sky" },
} satisfies Record<string, Img>;

const LIVE = "/images/live";

const HERO_CTA: LinkItem = { label: "Get Free Consultation Today", href: "/contact-us/" };

const CTA: Block = {
  type: "cta",
  eyebrow: "Let's Chat",
  lines: ["Have a Project,", "Let's Start Today"],
  button: { label: "Get started today", href: "/contact-us/" },
};

/** Tool and platform logos shown on the Madurai page, in the live page's order. */
const MADURAI_TOOLS: { title: string; file: string }[] = [
  { title: "Ahrefs", file: "ahref.png" },
  { title: "Facebook", file: "facebook.png" },
  { title: "Google Analytics", file: "analytics.png" },
  { title: "React", file: "react-icon.svg" },
  { title: "PHP", file: "php-icon.svg" },
  { title: "Instagram", file: "insta.png" },
  { title: "WordPress", file: "wordpress-icon.svg" },
  { title: "Shopify", file: "shopify-icon.svg" },
  { title: "Hotjar", file: "jar.png" },
  { title: "Wati", file: "wati.png" },
  { title: "Snapchat Ads", file: "snaps.png" },
  { title: "LinkedIn", file: "linkedin.png" },
  { title: "Semrush", file: "semrush.png" },
  { title: "WhatsApp", file: "watsapp.png" },
  { title: "Microsoft Clarity", file: "microsoftclarity.png" },
  { title: "Meta", file: "meta.png" },
  { title: "Google Search Console", file: "searchconsole.png" },
  { title: "Google Ads", file: "googleadds.png" },
  { title: "Screaming Frog", file: "screamingfrog.png" },
  { title: "Photoshop", file: "photoshop.png" },
  { title: "Illustrator", file: "illustrator.png" },
  { title: "Gemini", file: "gemni.png" },
  { title: "Mailchimp", file: "mailchimp.png" },
  { title: "Firefox", file: "firefox.png" },
  { title: "Google Tag Manager", file: "tag.png" },
  { title: "Perplexity", file: "perplexity.png" },
  { title: "Grok", file: "grok.png" },
  { title: "Claude", file: "claude.png" },
  { title: "Envato", file: "envanto.png" },
  { title: "Flipkart Ads", file: "flipkartads.png" },
  { title: "Amazon Ads", file: "amazonads.png" },
  { title: "Reddit Ads", file: "redditads.png" },
  { title: "SEOquake", file: "seoquake.png" },
  { title: "ChatGPT", file: "gpt.png" },
  { title: "Bing", file: "bing.png" },
];

export const marketingDesignPages: PageDef[] = [
  // ---------------------------------------------------------------- Digital marketing
  // Live sections: hero, Digital Marketing Service Providing Company, Is Your Business Not Getting
  // Enough Customers Online?, (campaign results: omitted), Digital Marketing Services, Our Digital
  // Marketing Process, Benefits, Industries We Serve, Get Found by Local Customers, What Our
  // Clients Say, FAQ, Let's Grow Your Business Together.
  {
    slug: "digital-marketing",
    section: "Services",
    metaTitle: "Digital Marketing Agency in Coimbatore | SEO, Ads | 123TWS",
    metaDescription:
      "SEO, Google Ads, Meta and LinkedIn campaigns, social media and WhatsApp marketing planned and managed from Coimbatore by a team with 17+ years of experience.",
    hero: {
      eyebrow: "Digital Marketing",
      title: "Digital Marketing Company in Coimbatore",
      intro:
        "With more than 17 years in the field, we help businesses get seen online, attract qualified enquiries and turn more visitors into customers through campaigns guided by data.",
      image: IMG.marketing,
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "A results-focused marketing partner in Coimbatore",
        paragraphs: [
          "123TWS plans and runs digital marketing that is judged on results: qualified leads, stronger online visibility and a measurable return on spend. We work with businesses in Coimbatore and with clients selling into markets around the world.",
          "Search optimisation, Google and Meta advertising, LinkedIn campaigns and social media all sit inside one plan. Analytics, careful audience targeting and ongoing optimisation tie them together, so growth continues well beyond the first campaign.",
        ],
        image: IMG.workspace,
      },
      {
        type: "features",
        heading: "Common reasons online enquiries dry up",
        intro:
          "These are the problems business owners raise with us most often. If they sound familiar, our strategies are built to reach the right audience, convert more of them and grow your business online.",
        items: [
          {
            title: "Hard to find on Google",
            body: "People searching for exactly what you offer cannot find you in the results.",
            icon: "search",
          },
          {
            title: "Ad spend without returns",
            body: "Money goes into advertising every month, but the enquiries and sales do not follow.",
            icon: "target",
          },
          {
            title: "Quiet social media accounts",
            body: "Posts go out regularly yet attract few likes, comments or shares.",
            icon: "share",
          },
          {
            title: "Rivals taking the spotlight",
            body: "Rival businesses nearby seem to appear everywhere online while you are overlooked.",
            icon: "users",
          },
        ],
      },
      {
        type: "features",
        heading: "Digital Marketing Services",
        intro: "A complete set of online marketing services under one roof.",
        items: [
          {
            title: "SEO and voice search optimisation",
            body: "Be found on Google and AI-driven search with on-page and technical SEO, voice and AI search optimisation, and local SEO for Google Maps.",
            icon: "search",
          },
          {
            title: "Google Ads and PPC",
            body: "Cost-effective Search and Display campaigns, remarketing, and Performance Max with AI-powered bidding for quick visibility and quality leads.",
            icon: "target",
          },
          {
            title: "Social media marketing",
            body: "Community building on Facebook, Instagram, LinkedIn and YouTube, a short-form video plan for Reels and Shorts, and influencer partnerships.",
            icon: "share",
          },
          {
            title: "Content and video marketing",
            body: "SEO blog posts and website copy, YouTube ads, Reels and explainer videos, plus interactive infographics and storytelling that earn trust.",
            icon: "video",
          },
          {
            title: "WhatsApp marketing and automation",
            body: "Automated WhatsApp and SMS campaigns, personalised offers and retargeting, and affordable bulk messaging to reach customers instantly.",
            icon: "chat",
          },
          {
            title: "AI-powered marketing and analytics",
            body: "Forecasting models that sharpen ad targeting, chatbots that follow up on leads and messaging personalised from your own data.",
            icon: "chart",
          },
        ],
      },
      {
        type: "steps",
        heading: "Our Digital Marketing Process",
        intro: "A structured process designed for long-term success online.",
        steps: [
          {
            title: "Research and analysis",
            body: "We study your goals, your industry and your competitors so the strategy starts from the right place.",
          },
          {
            title: "Strategy planning",
            body: "We design campaigns around your business objectives, with channels, budgets and messages agreed up front.",
          },
          {
            title: "Execution",
            body: "SEO, social media, PPC and content work goes live in a planned order, with tracking in place.",
          },
          {
            title: "Monitoring",
            body: "Analytics and regular reviews show how traffic, leads and costs are moving week by week.",
          },
          {
            title: "Optimisation",
            body: "We keep refining campaigns, moving budget towards what works so results improve over time.",
          },
        ],
      },
      {
        type: "features",
        heading: "What you gain by working with us",
        items: [
          {
            title: "Increased online visibility",
            body: "A stronger presence on Google, social media and other channels where your audience spends time.",
            icon: "globe",
          },
          {
            title: "Targeted lead generation",
            body: "Campaigns built around your goals to attract enquiries from people who are likely to buy.",
            icon: "target",
          },
          {
            title: "Better return on spend",
            body: "Cost-conscious strategies focused on outcomes you can measure, not just activity.",
            icon: "wallet",
          },
          {
            title: "Stronger brand awareness",
            body: "Consistent messaging and engaging campaigns that build recognition and trust.",
            icon: "megaphone",
          },
          {
            title: "Data-driven decisions",
            body: "Campaigns tracked and analysed continuously, so changes are based on evidence.",
            icon: "chart",
          },
          {
            title: "Dedicated support",
            body: "Ongoing guidance from our marketing team, with open and regular reporting.",
            icon: "headset",
          },
        ],
      },
      {
        type: "audience",
        heading: "Industries We Serve",
        items: [
          { title: "E-commerce", icon: "cart", iconSrc: `${LIVE}/digital-marketing/icons/e-commerce-icon.svg` },
          { title: "Healthcare", icon: "stethoscope", iconSrc: `${LIVE}/digital-marketing/icons/healthcare-icon.svg` },
          { title: "Education", icon: "graduation", iconSrc: `${LIVE}/digital-marketing/icons/education-icon.svg` },
          { title: "Real estate", icon: "house", iconSrc: `${LIVE}/digital-marketing/icons/construction-icon.svg` },
          { title: "Manufacturing", icon: "gear", iconSrc: `${LIVE}/digital-marketing/icons/manufacturing-icon.svg` },
          { title: "Fashion", icon: "shirt", iconSrc: `${LIVE}/digital-marketing/icons/textiles-icon.svg` },
          { title: "B2B and SaaS", icon: "briefcase", iconSrc: `${LIVE}/digital-marketing/icons/b2b.svg` },
        ],
      },
      {
        type: "features",
        heading: "Visibility in local Coimbatore searches",
        intro: "Being based in Coimbatore ourselves, we know how local customers search and help your business appear in front of them.",
        items: [
          {
            title: "Google Business Profile",
            body: "Your profile optimised to show up in local 'near me' searches and on Google Maps.",
            icon: "map",
          },
          {
            title: "Local keywords",
            body: "Location-specific search terms that customers in Coimbatore actually use.",
            icon: "search",
          },
          {
            title: "Local directories",
            body: "Listings on relevant Coimbatore business directories to strengthen your local presence.",
            icon: "building",
          },
        ],
      },
      { type: "testimonials" },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Is online marketing worth the investment for my company?",
            a: "It puts your business in front of the right people when they are looking. Unlike most traditional advertising it can be measured closely, so you can see the return while building visibility, engagement and trust.",
          },
          {
            q: "How do I decide which channels to use?",
            a: "That depends on your goals, industry, competition and audience. SEO builds long-term visibility, PPC brings enquiries quickly, social media lifts engagement, and content and email help with authority and customer retention. We recommend a mix after reviewing your situation.",
          },
          {
            q: "When can I expect to see an impact?",
            a: "Paid search and paid social can bring visibility and leads almost straight away. SEO and content usually need three to six months to build steady growth, so a balanced plan covers both the short and the long term.",
          },
          {
            q: "We are a small firm. Will online marketing pay off for us?",
            a: "In most cases it will. Smaller firms can target niche audiences, improve local search visibility and run campaigns sized to their budget, which helps them compete with much larger names.",
          },
          {
            q: "What numbers do you use to judge a campaign?",
            a: "We track measures such as website traffic, keyword rankings, leads, conversion rates, engagement, ad performance and overall return. Regular reports show how the work is contributing to growth and revenue.",
          },
          {
            q: "Can you market my business to customers abroad?",
            a: "We can. With search optimisation for overseas markets, country-level ad targeting and campaigns in more than one language, we help export-minded businesses reach buyers in several countries.",
          },
          {
            q: "What makes 123TWS a good fit?",
            a: "We bring more than 17 years of experience, a focus on performance, creative campaign ideas, solid analytics and knowledge of many industries. The aim is always the same: better visibility, qualified leads and lasting growth, locally and globally.",
          },
        ],
      },
      CTA,
      {
        type: "related",
        heading: "Explore our marketing services",
        links: [
          { label: "SEO Services", href: "/seo-services/" },
          { label: "Social Media Marketing", href: "/social-media/" },
          { label: "PPC Services", href: "/ppc-services/" },
          { label: "Content Writing", href: "/content-writing/" },
          { label: "Digital Marketing Packages", href: "/digital-marketing-packages/" },
          { label: "Digital Marketing in Madurai", href: "/madurai/digital-marketing-company/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- SEO
  // Live sections: hero, Top One SEO Service Provider in Coimbatore, (keyword positions: omitted),
  // Why Businesses Trust Our SEO Services, Complete SEO Services, SEO Packages For Every Need,
  // Not sure which plan fits your business?, Proven SEO Process for Results, (results figures:
  // omitted), Industries & Businesses We Help Grow Online, FAQ, Still have queries?
  {
    slug: "seo-services",
    section: "Services",
    metaTitle: "SEO Company in Coimbatore | Local and Global SEO | 123TWS",
    metaDescription:
      "Technical, on-page, local and international SEO from a Coimbatore team, with monthly plans for local, worldwide and e-commerce websites and clear reporting.",
    hero: {
      eyebrow: "SEO Services",
      title: "SEO Company in Coimbatore",
      intro:
        "Our search work is aimed at three things: higher rankings, wider visibility and more enquiries. From local shops to global brands, we improve how you appear on Google and in AI-driven search.",
      image: IMG.seo,
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Search optimisation from Coimbatore, for local and global reach",
        paragraphs: [
          "123TWS helps businesses climb search results and grow organic visibility with SEO strategies built around outcomes. We connect local visibility in Coimbatore with reach in national and international markets.",
          "Our approach combines optimisation for Google AI Overviews, readiness for generative search engines and E-E-A-T led content, so your business can appear wherever customers look: Google, voice assistants or newer AI platforms.",
        ],
        bullets: [
          "AI Overview optimisation so you can feature in Google's AI summaries",
          "Voice search readiness for Alexa, Siri and Google Assistant",
          "Global reach with multi-language and location targeting",
          "Transparent reporting with clear metrics",
        ],
        image: IMG.contact,
        reverse: true,
      },
      {
        type: "gallery",
        heading: "Businesses we have supported with SEO",
        intro: "A selection of clients whose search visibility our team works on, across many industries.",
        items: [
          { title: "Alpine Tape", caption: "Manufacturing", image: { src: `${LIVE}/seo-services/clients/alpine-tape.png`, alt: "Alpine Tape logo", fit: "contain" } },
          { title: "Arya Womens Hostel", caption: "Hostel", image: { src: `${LIVE}/seo-services/clients/arya-womens-hostel.png`, alt: "Arya Womens Hostel logo", fit: "contain" } },
          { title: "Current Electro Mech", caption: "Industrial service", image: { src: `${LIVE}/seo-services/clients/current-electro-mech.png`, alt: "Current Electro Mech logo", fit: "contain" } },
          { title: "Grand Royal Tours", caption: "Travel", image: { src: `${LIVE}/seo-services/clients/grand-royal-tours.png`, alt: "Grand Royal Tours logo", fit: "contain" } },
          { title: "Techno Meters", caption: "Electrical", image: { src: `${LIVE}/seo-services/clients/techno-meters.png`, alt: "Techno Meters logo", fit: "contain" } },
          { title: "Vian Veenai School", caption: "Education", image: { src: `${LIVE}/seo-services/clients/vian-veenai-school.jpeg`, alt: "Vian Veenai School logo", fit: "contain" } },
          { title: "Volboozter", caption: "Solar", image: { src: `${LIVE}/seo-services/clients/volboozter.png`, alt: "Volboozter logo", fit: "contain" } },
          { title: "Jaisuntourism", caption: "Travel", image: { src: `${LIVE}/seo-services/clients/jaisuntourism.png`, alt: "Jaisuntourism logo", fit: "contain" } },
          { title: "GreenFenster", caption: "UPVC", image: { src: `${LIVE}/seo-services/clients/greenfenster.png`, alt: "GreenFenster logo", fit: "contain" } },
          { title: "AN False Ceiling", caption: "Interiors", image: { src: `${LIVE}/seo-services/clients/an-false-ceiling.png`, alt: "AN False Ceiling logo", fit: "contain" } },
          { title: "Vasavi Decorations", caption: "Events", image: { src: `${LIVE}/seo-services/clients/vasavi-decorations.png`, alt: "Vasavi Decorations logo", fit: "contain" } },
          { title: "Sri Venkateswara Institutions", caption: "College", image: { src: `${LIVE}/seo-services/clients/sri-venkateswara-institutions.png`, alt: "Sri Venkateswara Institutions logo", fit: "contain" } },
          { title: "Delphi Technologies", caption: "Computer service", image: { src: `${LIVE}/seo-services/clients/delphi-technologies.png`, alt: "Delphi Technologies logo", fit: "contain" } },
          { title: "Asa Gas Agency", caption: "Gas agency", image: { src: `${LIVE}/seo-services/clients/asa-gas-agency.png`, alt: "Asa Gas Agency logo", fit: "contain" } },
        ],
      },
      {
        type: "features",
        heading: "Why clients rely on our SEO team",
        items: [
          {
            title: "Local and national coverage",
            body: "Hybrid strategies that target 'near me' searches in Coimbatore alongside competitive terms across India.",
            icon: "map",
          },
          {
            title: "AI-first SEO",
            body: "Structured content and schema that prepare your site for Google AI Overviews, voice search and generative engines.",
            icon: "lightning",
          },
          {
            title: "E-commerce and enterprise ready",
            body: "Specialist plans for e-commerce catalogues and big sites with layered structures that need room to grow.",
            icon: "cart",
          },
          {
            title: "Results you can measure",
            body: "We track changes in traffic, leads and conversions so you can judge the value of the work.",
            icon: "chart",
          },
          {
            title: "Transparent reporting",
            body: "Clear, practical reports that show how your rankings and business numbers are moving.",
            icon: "file",
          },
          {
            title: "Dedicated support",
            body: "A named SEO strategist for consultations, planning sessions and performance reviews.",
            icon: "headset",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Our full SEO service range",
        columns: [
          {
            title: "AI Overview SEO and generative engines",
            items: [
              "Optimisation for Google AI Overviews and voice assistants",
              "Answer-engine style content and schema",
              "Content clusters and authority signals",
            ],
          },
          {
            title: "On-page SEO",
            items: [
              "Keyword research and strategy",
              "SEO-friendly titles and meta descriptions",
              "Internal linking and URL structure",
              "Image optimisation and alt tags",
              "Speed and mobile improvements",
            ],
          },
          {
            title: "Off-page SEO and link building",
            items: [
              "Backlinks earned from reputable sites",
              "Citations and business directory listings",
              "Guest posting and influencer outreach",
              "Social signals and brand mentions",
            ],
          },
          {
            title: "Technical SEO",
            items: [
              "Indexing, crawlability and structured data",
              "Question-based content for AI Overviews",
              "HTTPS security, speed and UX fixes",
              "Multilingual and location targeting where needed",
            ],
          },
          {
            title: "Local SEO (Coimbatore and PAN India)",
            items: [
              "Google Business Profile optimisation",
              "Local keyword targeting",
              "Consistent name, address and phone details",
              "Review management",
            ],
          },
          {
            title: "National and international SEO",
            items: [
              "Country keyword plans with hreflang set-up",
              "A landing page for each target region",
              "Optimisation in several languages",
              "Link building in overseas markets",
            ],
          },
        ],
      },
      {
        type: "plans",
        heading: "SEO packages",
        intro: "Three starting points for different kinds of business.",
        note: "Prices are indicative. Final scope and pricing are confirmed on quotation after we review your website and goals.",
        plans: [
          {
            name: "Local SEO",
            price: "₹20,000",
            period: "/month",
            features: [
              "For local and regional businesses",
              "Up to 10 high-volume keywords",
              "Google Business Profile optimisation",
              "Local citations and directory listings",
              "Location-specific keyword targeting",
              "Monthly performance report",
              "Typical timeframe: around 6 months",
            ],
          },
          {
            name: "Worldwide SEO",
            price: "₹50,000",
            period: "/month",
            highlight: true,
            features: [
              "For businesses targeting global markets",
              "20+ high-volume generic keywords",
              "International keyword research",
              "Multilingual content strategy",
              "International link building",
              "Analytics dashboard and monthly report",
              "Monthly review meeting",
              "Typical timeframe: 8 to 12 months",
            ],
          },
          {
            name: "E-commerce SEO",
            price: "₹75,000",
            period: "/month",
            features: [
              "For online stores",
              "Keywords scoped to your products and needs",
              "Product and category page optimisation",
              "Structured data for products",
              "E-commerce link building",
              "Conversion rate optimisation",
              "Month-on-month sales tracking and review meeting",
              "Review management",
              "Typical timeframe: 6 to 12 months",
            ],
          },
        ],
      },
      {
        type: "split",
        heading: "Need something different from these plans?",
        paragraphs: [
          "We can design a custom SEO plan around your goals, your industry and the competition you face. Whether you are a local start-up or an established global brand, the strategy is built for growth you can measure.",
        ],
        bullets: [
          "Scope shaped by your goals and market",
          "Suitable for start-ups and global brands alike",
          "Clear milestones and regular reporting",
        ],
      },
      {
        type: "steps",
        heading: "How our SEO process works",
        steps: [
          {
            title: "Website and AI readiness audit",
            body: "A full review of rankings, AI visibility and conversion paths to find the gaps worth fixing first.",
          },
          {
            title: "Keyword strategy and competitor benchmarking",
            body: "We target short, long-tail and location keywords with real volume and buying intent, and study who wins your niche today.",
          },
          {
            title: "On-page optimisation",
            body: "Content, user experience, meta tags and internal links are updated so each page earns its place in search.",
          },
          {
            title: "Authority building",
            body: "Quality backlinks, PR and brand signals establish your website as a credible voice in your industry.",
          },
          {
            title: "AEO and voice search optimisation",
            body: "Structured, question-led content gives your pages a better chance in AI Overviews and featured snippets.",
          },
          {
            title: "Performance tracking",
            body: "Rankings, traffic and leads are monitored and reported clearly, so you can see the return on your investment.",
          },
        ],
      },
      {
        type: "audience",
        heading: "Who our SEO work is for",
        intro: "Including online stores built on Shopify, WooCommerce and Magento.",
        items: [
          { title: "Local businesses in Coimbatore", icon: "building" },
          { title: "National Indian brands", icon: "star" },
          { title: "E-commerce stores", icon: "cart" },
          { title: "Global companies entering India", icon: "airplane" },
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "When will my site start climbing in Google?",
            a: "It depends on your niche, the level of competition, the current state of your website and the keywords you target. Most businesses see early improvement within three to six months, while competitive industries can take longer.",
          },
          {
            q: "What does SEO actually do for a business?",
            a: "Good rankings put you in view of people who are already looking for your products or services. A well-optimised site earns more organic traffic, builds credibility and brings in leads without relying entirely on paid ads.",
          },
          {
            q: "What goes into your keyword selection?",
            a: "We combine market research, search intent analysis, your business goals, competitor performance and customer behaviour. The focus is on high-intent, location-based and long-tail searches that are likely to convert.",
          },
          {
            q: "Can SEO help us win customers in other countries?",
            a: "It can. Our international SEO covers country targeting, multilingual optimisation, global keyword strategy and region-focused content for markets such as the USA, the UK, the Middle East and Asia.",
          },
          {
            q: "What sets 123TWS apart as an SEO company?",
            a: "We bring together technical SEO expertise, AI-focused optimisation and content-led growth to deliver organic results you can measure, from better rankings to more traffic and qualified leads.",
          },
          {
            q: "Is SEO realistic on a start-up budget?",
            a: "It does. We build scalable, cost-conscious SEO plans that help smaller and growing brands improve visibility, attract the right visitors and generate leads over time.",
          },
          {
            q: "Which metrics show whether SEO is working?",
            a: "Rankings, organic visits, leads, conversion rates, engagement and overall search visibility. Our reports explain how each of these feeds into business growth.",
          },
        ],
      },
      CTA,
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "SEO Packages", href: "/seo-packages/" },
          { label: "Digital Marketing", href: "/digital-marketing/" },
          { label: "Content Writing", href: "/content-writing/" },
          { label: "Search Engine Marketing", href: "/search-engine-marketing/" },
          { label: "Website Design", href: "/website-design/" },
          { label: "Request a Free Quote", href: "/free-quotes/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Social media
  // Live sections: hero (with bullet list), We're Not Just Another Social Media Agency, Why Choose
  // 123TWS What Sets Us Apart?, Everything You Need to Grow on Social, Platforms We Work On, Our SMO
  // Services, Here's What Growth Actually Looks Like, FAQ, Let's Make Your Social Media Worth the
  // Time You Spend on It, Geo-Tailored Social Media Strategies, Ready to Transform...
  {
    slug: "social-media",
    section: "Services",
    metaTitle: "Social Media Marketing Company in Coimbatore | 123TWS",
    metaDescription:
      "Social media management, content creation, paid social and community care for Instagram, Facebook, LinkedIn, YouTube and X, planned by our Coimbatore team.",
    hero: {
      eyebrow: "Social Media Marketing",
      title: "Social Media Marketing That Brings in Customers",
      intro:
        "For many customers, your social profiles are where trust is won or lost, so every post we plan has that in mind. We serve clients in Coimbatore, across Tamil Nadu and India, and worldwide.",
      image: IMG.marketing,
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Built for steady growth",
        paragraphs: [
          "Whether you are starting from nothing or your growth has stalled, we help you present your brand better, post with more purpose and grow at a steadier pace. Thoughtful content, consistent branding and genuine engagement do the heavy lifting.",
        ],
        bullets: [
          "Content shaped by your audience rather than passing trends",
          "Engagement that means something, not vanity metrics",
          "Brand visibility that builds on itself over time",
          "Campaigns judged on results, not impressions alone",
        ],
      },
      {
        type: "split",
        heading: "More than a content calendar",
        paragraphs: [
          "Handing over a content calendar is where many agencies stop. For us it is only the start. 123TWS works with businesses that need social media to achieve something specific, from winning leads and selling products to building a community or simply staying memorable.",
          "We take time to understand what you actually do, then shape a presence across the platforms that matter to you. Creative ideas are backed by data, so the content looks good, the campaigns convert and the reports explain what happened.",
        ],
        image: IMG.team,
      },
      {
        type: "features",
        heading: "What makes our approach different",
        items: [
          { title: "One consistent team", body: "The same people look after your brand, so there is no rotating cast of account managers.", icon: "users" },
          { title: "Attention-grabbing design", body: "Short videos, multi-image posts and graphics made to earn a second look.", icon: "image" },
          { title: "Decisions backed by numbers", body: "We let the analytics guide what we do next.", icon: "chart" },
          { title: "Weekly plain-English updates", body: "A short weekly update in plain English, free of jargon.", icon: "file" },
          { title: "A plan per platform", body: "Instagram and LinkedIn behave differently, so each platform gets its own approach.", icon: "layout" },
          { title: "Skilled in organic and paid growth", body: "We are as comfortable building an audience naturally as we are running ads.", icon: "target" },
          { title: "Genuine conversations", body: "Real relationships with the people who follow you, beyond a tally of likes.", icon: "heart" },
          { title: "Measured on outcomes", body: "We judge our work by enquiries, sales and how much people trust your brand.", icon: "trophy" },
        ],
      },
      {
        type: "features",
        heading: "The building blocks of social growth",
        items: [
          {
            title: "Goal-led content planning",
            body: "Each post is there for a reason, be it reach, interaction, enquiries or sales, and is planned around the habits of your audience.",
            icon: "pen",
          },
          {
            title: "Standout visual content",
            body: "Short videos, multi-image posts, stories and single images with tidy design, punchy captions and your brand's tone of voice.",
            icon: "camera",
          },
          {
            title: "Active community care",
            body: "We answer comments, direct messages and mentions so people know someone is listening, and the community grows around that.",
            icon: "chat",
          },
          {
            title: "Weekly fine-tuning",
            body: "We check the numbers every week and adjust the plan, since tactics that worked recently can stop working quickly.",
            icon: "gear",
          },
          {
            title: "Short, useful reports",
            body: "A brief summary of the gains, the dips and the changes we are making in response.",
            icon: "chart",
          },
          {
            title: "Consistent positioning",
            body: "The same look, tone and message on every channel, so your brand feels familiar wherever people meet it.",
            icon: "star",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Where we can manage your presence",
        columns: [
          { title: "Instagram", items: ["Reels, stories and carousels", "Feed planning aimed at sales"] },
          { title: "Facebook", items: ["Community-focused content", "Well-targeted campaigns"] },
          { title: "LinkedIn", items: ["Expert posts for B2B audiences", "Content aimed at people who make buying decisions"] },
          { title: "YouTube", items: ["Full-length videos and Shorts", "Thumbnails and channel building"] },
          { title: "X (Twitter)", items: ["Quick, topical posts", "Joining relevant conversations"] },
        ],
      },
      {
        type: "features",
        heading: "Social media services",
        items: [
          {
            title: "Social media management",
            body: "We take care of the calendar, publishing and day-to-day replies while you run the business.",
            icon: "calendar",
          },
          {
            title: "Content creation",
            body: "Designs, captions, short-form video and guidance for photo shoots, all made to sound like your brand.",
            icon: "camera",
          },
          {
            title: "Influencer marketing",
            body: "We match you with creators whose followers fit your customer profile, rather than chasing the biggest audiences.",
            icon: "users",
          },
          {
            title: "Paid social campaigns",
            body: "Ads with one clear objective, such as enquiries, purchases, installs or registrations, and budgets watched closely.",
            icon: "target",
          },
          {
            title: "Community management",
            body: "Replies written the way you would write them, prompt and courteous.",
            icon: "chat",
          },
          {
            title: "Profile and account optimisation",
            body: "Profile text, hashtags, featured posts, link settings and posting times adjusted to work harder.",
            icon: "star",
          },
        ],
      },
      {
        type: "features",
        heading: "Signs your social media is working",
        items: [
          { title: "Wider reach", body: "New people coming across your business every week.", icon: "megaphone" },
          { title: "Deeper interaction", body: "Posts that people bookmark, pass on and talk about.", icon: "heart" },
          { title: "Repeat customers", body: "Buyers who keep returning because they trust you.", icon: "shield" },
          { title: "Enquiries and orders", body: "A dependable stream of leads and sales arriving through social.", icon: "target" },
          { title: "A sharper identity", body: "A clearer sense of who you are, which attracts the followers you actually want.", icon: "star" },
        ],
      },
      {
        type: "faq",
        heading: "FAQ",
        items: [
          {
            q: "What does social media optimisation involve?",
            a: "It is the work of making your social presence perform better through stronger profiles, better content, more engagement and smarter targeting, so your brand grows instead of simply existing online.",
          },
          {
            q: "Which networks can you manage for us?",
            a: "Most of our work is on Instagram, Facebook, LinkedIn, YouTube and X. If your audience lives on another network, we will give you a frank view on whether it deserves your time.",
          },
          {
            q: "When does the growth start to show?",
            a: "Reach and interaction often pick up within a few weeks. More enquiries and sales usually follow after two or three months, though this varies by sector and by where your accounts stand today.",
          },
          {
            q: "Will you produce the posts, or just the plan?",
            a: "We do both. Designs, videos and captions are made by our own team, which keeps everything consistent with your brand.",
          },
          {
            q: "Is advertising part of the service?",
            a: "It can be. Paid campaigns are planned alongside your regular posts, so the two reinforce rather than undercut each other.",
          },
        ],
      },
      {
        type: "split",
        heading: "Get more back from the time you put into social",
        paragraphs: [
          "If your posts are going out but little is coming back, let's talk. There is no hard sell, just an honest conversation about what your brand needs next.",
        ],
        image: {
          src: `${LIVE}/social-media/social-media-growth.png`,
          alt: "Illustration of a developer at a laptop and a woman holding up an image card in front of a large phone screen with code",
          fit: "contain",
        },
      },
      {
        type: "split",
        heading: "Local and international audiences",
        paragraphs: [
          "We work with businesses across Coimbatore, Tamil Nadu, the rest of India and overseas. Whether your customers are nearby or in another country, we tailor the strategy to reach your specific audience.",
        ],
        bullets: ["Geo-targeted campaigns", "Localised content", "Multilingual support when needed"],
        reverse: true,
      },
      CTA,
      {
        type: "related",
        heading: "You may also need",
        links: [
          { label: "Digital Marketing", href: "/digital-marketing/" },
          { label: "Social Media Posters", href: "/social-media-posters/" },
          { label: "Graphic Design", href: "/graphic-design/" },
          { label: "Video Production", href: "/video-production/" },
          { label: "PPC Services", href: "/ppc-services/" },
          { label: "Content Writing", href: "/content-writing/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- PPC
  // Live sections: hero, Who We Are, Our Approach to PPC Management, Our Pay-Per-Click Services
  // (SEM + SMA), Ecommerce Advertising Services, White-Label PPC Services, Why Choose Our PPC
  // Services?, What Can We Do for You?, Client Success Stories, (Client Satisfaction & Performance
  // Metrics: figures omitted), Why Work with Us?, PPC Services Tailored for Your Business Growth, FAQ.
  {
    slug: "ppc-services",
    section: "Services",
    metaTitle: "PPC Services in Coimbatore | Google and Meta Ads | 123TWS",
    metaDescription:
      "Pay-per-click management for Google, Facebook, Instagram, LinkedIn, Amazon and Flipkart, plus landing pages, conversion tracking and white-label PPC for agencies.",
    hero: {
      eyebrow: "PPC Services",
      title: "PPC Management Services",
      intro:
        "Client-focused pay-per-click management built to scale your business, bring in qualified leads and make your ad spend work harder. We run campaigns for B2B, B2C and D2C brands, and white-label PPC for agencies.",
      image: IMG.desk,
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Who We Are",
        paragraphs: [
          "Our team is focused on performance and helps digital agencies, businesses and enterprises grow their paid advertising. Our work spans search engine marketing and social media ads, with every campaign built to convert and to improve return on ad spend.",
        ],
        bullets: [
          "Search engine marketing",
          "Social media advertising",
          "E-commerce marketplace ads",
          "White-label PPC for agencies",
        ],
      },
      {
        type: "steps",
        heading: "How we manage PPC",
        steps: [
          { title: "PPC audit", body: "We review existing campaigns to find gaps, wasted spend and room for improvement." },
          { title: "Ad creatives", body: "Visuals that make people stop scrolling, paired with ad copy that gives them a reason to click." },
          { title: "Funnel setup and configuration", body: "Landing pages, tracking and conversion paths are set up so nothing is lost between click and enquiry." },
          { title: "Optimisation and testing", body: "A/B tests and performance tracking guide every change to bids, audiences and creatives." },
          { title: "Reporting and insights", body: "Open analytics and steady improvements, shared with you at every stage." },
        ],
      },
      {
        type: "features",
        heading: "Our Pay-Per-Click Services",
        intro: "SEM: Search Engine Marketing",
        items: [
          { title: "Search Ads", body: "Reach people as they search.", icon: "search", iconSrc: `${LIVE}/ppc-services/icons/google-search-ad.svg` },
          { title: "Video Ads", body: "For YouTube and partner sites.", icon: "video", iconSrc: `${LIVE}/ppc-services/icons/google-video-ads.svg` },
          { title: "Shopping Ads", body: "Showing product images, prices and details.", icon: "cart", iconSrc: `${LIVE}/ppc-services/icons/google-shopping-ads.svg` },
          { title: "Display Ads", body: "With banners on Google's partner network.", icon: "image", iconSrc: `${LIVE}/ppc-services/icons/google-display-ads.svg` },
          { title: "Performance Max", body: "Campaigns spanning Google's inventory.", icon: "rocket", iconSrc: `${LIVE}/ppc-services/icons/google-performance-max.svg` },
          { title: "Demand Gen Ads", body: "To build awareness and interest.", icon: "megaphone", iconSrc: `${LIVE}/ppc-services/icons/google-demand-gen-ads.svg` },
          { title: "Remarketing Campaigns", body: "That bring past visitors back.", icon: "target", iconSrc: `${LIVE}/ppc-services/icons/google-remarketing.svg` },
        ],
      },
      {
        type: "features",
        heading: "SMA: Social Media Advertising",
        items: [
          { title: "Facebook Ads", body: "Aimed at clearly defined audiences.", icon: "share", iconSrc: `${LIVE}/ppc-services/icons/meta-facebook-ads.svg` },
          { title: "Instagram Ads", body: "Built on visual, interactive content.", icon: "camera", iconSrc: `${LIVE}/ppc-services/icons/meta-insta-ads.svg` },
          { title: "LinkedIn Ads", body: "Reaching professionals by business interest.", icon: "briefcase", iconSrc: `${LIVE}/ppc-services/icons/meta-linked-ads.svg` },
        ],
      },
      {
        type: "gallery",
        heading: "Ecommerce Advertising Services",
        intro: "Sponsored campaigns on India's leading marketplaces to grow your e-commerce sales.",
        items: [
          {
            title: "Amazon Ads",
            caption: "More visibility and sales, with a focus on lower ACoS and healthier profit.",
            image: { src: `${LIVE}/ppc-services/amazon-ads-logo.png`, alt: "Amazon Ads logo", fit: "contain" },
          },
          {
            title: "Flipkart Ads",
            caption: "Better conversions and visibility, with revenue scaled through smart bidding.",
            image: { src: `${LIVE}/ppc-services/flipkart-ads-logo.png`, alt: "Flipkart Ads logo", fit: "contain" },
          },
        ],
      },
      {
        type: "split",
        heading: "White-Label PPC Services",
        paragraphs: [
          "Agencies can hand their PPC work to us and keep full ownership of their client relationships. We work in the background under your brand, so you can grow your agency without building an in-house team.",
        ],
        bullets: [
          "Private-labelled solutions for agencies",
          "Seamless, transparent client reporting",
          "Complete campaign management and optimisation",
        ],
        image: {
          src: `${LIVE}/ppc-services/white-label-ppc.png`,
          alt: "Illustration of two people joining jigsaw puzzle pieces beneath a light bulb",
          fit: "contain",
        },
      },
      {
        type: "split",
        heading: "Reasons to choose our PPC team",
        paragraphs: [
          "Every campaign we run is tied to your business objectives and watched closely from the first click.",
        ],
        bullets: [
          "Strategic campaigns aligned with your goals",
          "Advanced targeting, data-driven insight and cost control",
          "Campaigns run across Google, Meta, LinkedIn, Amazon, Flipkart and other networks",
          "Transparent reporting that shows where every rupee goes",
        ],
        image: {
          src: `${LIVE}/ppc-services/why-choose-ppc.png`,
          alt: "Word graphic with PPC in large red letters surrounded by terms such as click, analysis, traffic and advertising",
          fit: "contain",
        },
        reverse: true,
      },
      {
        type: "features",
        heading: "Services within a PPC engagement",
        intro: "We do more than switch ads on. A campaign with us can include any of the following.",
        items: [
          {
            title: "PPC campaign setup and strategy",
            body: "Plans shaped by your goals, covering everything between keyword selection and bidding, so each click has a purpose.",
            icon: "rocket",
          },
          {
            title: "Landing page creation and optimisation",
            body: "Fast, focused landing pages designed to turn ad visitors into customers.",
            icon: "layout",
          },
          {
            title: "Creative asset development",
            body: "Custom graphics and video creatives that earn attention and prompt action on every platform.",
            icon: "palette",
          },
          {
            title: "A/B testing",
            body: "Ongoing tests on messaging, creatives and targeting replace guesswork with evidence.",
            icon: "puzzle",
          },
          {
            title: "Ad credits for new accounts",
            body: "Where platforms offer promotional credits to new advertisers, we help you claim them for extra reach.",
            icon: "wallet",
          },
          {
            title: "Click and fraud monitoring",
            body: "Clicks and conversions are tracked and fraudulent clicks filtered out, so budget reaches real, high-intent users.",
            icon: "shield",
          },
          {
            title: "Keyword and competitor analysis",
            body: "In-depth research into high-value keywords and competitor tactics gives you an edge in bidding.",
            icon: "search",
          },
          {
            title: "International PPC campaigns",
            body: "Multi-region, multi-language campaigns that support overseas sales while keeping costs in check.",
            icon: "globe",
          },
          {
            title: "GTM and Google Analytics integration",
            body: "Google Tag Manager and GA4 set up to record every interaction and improve user journeys.",
            icon: "code",
          },
          {
            title: "Conversion tracking and reporting",
            body: "Reporting on conversions, lead costs and return, minus the vanity figures.",
            icon: "chart",
          },
        ],
      },
      { type: "testimonials" },
      {
        type: "split",
        heading: "Working with our PPC specialists",
        paragraphs: [
          "Your account is handled by people who specialise in paid advertising. We put your goals first and keep a close watch on budgets, so spend goes where it performs.",
        ],
        bullets: [
          "Dedicated PPC specialists managing your campaigns",
          "A customer-first approach",
          "Budget optimisation that cuts wasted spend",
        ],
        image: {
          src: `${LIVE}/ppc-services/ppc-client-satisfaction.png`,
          alt: "Illustration of a satisfaction gauge moving from sad to happy faces, with people, a rocket and a star rating",
          fit: "contain",
        },
      },
      {
        type: "split",
        heading: "PPC that grows with your business",
        paragraphs: [
          "Whether you are a start-up or an enterprise, we build data-backed PPC strategies that scale with you and remove guesswork from your advertising.",
        ],
        bullets: [
          "Strategic campaigns, from setup through optimisation and scaling",
          "Full-funnel ad management for B2B, B2C, D2C and start-ups",
          "Industry-specific solutions that grow leads, sales and engagement",
          "Conversion-focused ads",
          "Transparent reporting with clear performance insight",
        ],
        image: {
          src: `${LIVE}/ppc-services/ppc-sales-growth.png`,
          alt: "Illustration of two people presenting rising bar charts and a pie chart on a laptop screen",
          fit: "contain",
        },
        reverse: true,
      },
      {
        type: "faq",
        heading: "FAQ",
        items: [
          {
            q: "What does a PPC manager actually do for me?",
            a: "A manager keeps your ads in front of the right audience at a sensible cost, so you get more clicks and conversions from the same budget.",
          },
          {
            q: "Where can you run ads for us?",
            a: "Our main platforms are Google, Facebook, Instagram, LinkedIn, Amazon and Flipkart, and we can advise on others if they suit your audience.",
          },
          {
            q: "Can agencies resell your PPC work under their own brand?",
            a: "That is what our white-label service is for. Agencies can give their clients fully managed PPC through us, without hiring an in-house team.",
          },
          {
            q: "Which numbers tell you a campaign is working?",
            a: "Click-through rate, conversion rate, cost per acquisition and overall return are the main measures we track to keep campaigns efficient.",
          },
        ],
      },
      CTA,
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Search Engine Marketing", href: "/search-engine-marketing/" },
          { label: "Digital Marketing", href: "/digital-marketing/" },
          { label: "SEO Services", href: "/seo-services/" },
          { label: "Social Media Marketing", href: "/social-media/" },
          { label: "Digital Marketing Packages", href: "/digital-marketing-packages/" },
          { label: "Website Design", href: "/website-design/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- SEM
  // Live sections: hero (banner image), introduction ("Social presence increases websites organic
  // rankings"), SEM compared with SEO, SEO PACKAGES link.
  {
    slug: "search-engine-marketing",
    section: "Services",
    metaTitle: "Search Engine Marketing in Coimbatore | Google Ads | 123TWS",
    metaDescription:
      "Search engine marketing that pairs Google Ads with SEO so your business appears in both paid and organic results. Planned and managed from Coimbatore.",
    hero: {
      eyebrow: "Search Engine Marketing",
      title: "SEM - Search Engine Marketing",
      intro:
        "Search engine marketing makes your website easier to find at the moment people search, bringing in visitors who are ready to act and turning that traffic into revenue.",
      image: {
        src: `${LIVE}/search-engine-marketing/search-engine-marketing-banner-illustration.jpg`,
        alt: "Illustration of two people beside a giant browser window, one holding a magnifying glass over the word SEARCH",
        fit: "contain",
      },
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Visibility that turns into revenue",
        paragraphs: [
          "SEM is the practice of raising your website's visibility on search engines. We promote your business with paid techniques such as Google Ads (AdWords) and pay-per-click campaigns, in a plan tailored to your goals and budget.",
          "A beautifully designed website with excellent content achieves little if nobody finds it. Search marketing puts those pages in front of the people already looking for what you offer, which is where many new business enquiries begin. A strong social presence supports this by helping your organic rankings too.",
        ],
        bullets: ["Google Ads (AdWords) campaigns", "Pay-per-click advertising", "Plans customised to your budget"],
      },
      {
        type: "split",
        heading: "How SEM differs from SEO",
        paragraphs: [
          "SEO focuses on earning natural rankings, while SEM covers both the paid listings and the organic results on a search page. That wider reach gives SEM more to work with than optimisation alone.",
          "Used together, paid ads bring immediate visibility while SEO builds rankings that last. The combination can change how your business wins new customers online.",
        ],
        reverse: true,
      },
      {
        type: "checklist",
        heading: "Paid search and SEO compared",
        columns: [
          {
            title: "Paid search ads",
            items: [
              "Visible soon after launch",
              "You pay for each click",
              "Traffic stops when spending stops",
              "Precise control over keywords, places and timing",
            ],
          },
          {
            title: "Organic search (SEO)",
            items: [
              "Builds over several months",
              "No cost per click",
              "Rankings keep bringing visits",
              "Strengthens trust and brand authority",
            ],
          },
        ],
      },
      CTA,
      {
        type: "related",
        heading: "SEO Packages",
        links: [
          { label: "SEO Packages", href: "/seo-packages/" },
          { label: "SEO Services", href: "/seo-services/" },
          { label: "PPC Services", href: "/ppc-services/" },
          { label: "Digital Marketing Packages", href: "/digital-marketing-packages/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Content writing
  // Live sections: hero (banner image), introduction ("Pictures speak a thousand words..."),
  // Where to use these Content Writing services?, Craft Your Perfect Content Now.
  {
    slug: "content-writing",
    section: "Services",
    metaTitle: "Content Writing Services in Coimbatore | SEO Copy | 123TWS",
    metaDescription:
      "Website copy, articles, brochures, newsletters, emails and SMS text written by Coimbatore content writers, with SEO-friendly keywords and a clear brand voice.",
    hero: {
      eyebrow: "Content Writing",
      title: "Content Writing in Coimbatore",
      intro:
        "Clear, well-organised words help visitors understand what you do and help search engines rank you for it. Our writers create content that sounds like your business on every channel.",
      image: {
        src: `${LIVE}/content-writing/content-writing-banner-illustration.png`,
        alt: "Illustration of a writer working on a laptop beside a large phone showing a long scrolling document",
        fit: "contain",
      },
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Words carry your business further",
        paragraphs: [
          "In SEO, good content is the base everything else is built on. It helps your site and blog get noticed in search, supports your rankings and tells visitors what makes you different. The stronger that base, the better your site performs.",
          "Engaging, well-written copy speaks for your business when you are not there to do it. It shows your edge over competitors and helps your website earn a better return.",
        ],
      },
      {
        type: "split",
        heading: "Content written for where it will be read",
        paragraphs: [
          "We shape each piece around its purpose. Email content has to be brief because people read it quickly, yet it still needs to cover the essentials. Brochures and articles have more room, so they can describe your services in depth.",
          "Our writers produce email, brochure, newsletter, article and SMS content at a fair cost, and they understand how web developers structure a site. For clients who want search visibility, we write SEO-friendly copy around your chosen keywords.",
        ],
        reverse: true,
      },
      {
        type: "features",
        heading: "Where our writing gets used",
        items: [
          { title: "Email", body: "Short, focused messages that make their point quickly and prompt a reply or click.", icon: "mail" },
          { title: "Brochure", body: "Detailed but readable copy that explains your services and fits the printed layout.", icon: "file" },
          { title: "Website", body: "Page copy that tells visitors what you do and is written with your target keywords in mind.", icon: "browser" },
          { title: "Article", body: "Useful, well-researched articles and blog posts that support your search visibility.", icon: "pen" },
          { title: "Newsletter creation", body: "Regular updates that keep customers informed about news, offers and new products.", icon: "megaphone" },
        ],
      },
      CTA,
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "SEO Services", href: "/seo-services/" },
          { label: "Brochure Design", href: "/brochure-design/" },
          { label: "Bulk Email Service", href: "/bulk-email-service/" },
          { label: "Website Design", href: "/website-design/" },
          { label: "Digital Marketing", href: "/digital-marketing/" },
          { label: "Our Blog", href: "/blog/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Bulk SMS
  {
    slug: "bulk-sms-coimbatore",
    section: "Services",
    metaTitle: "Bulk SMS Service in Coimbatore | 123 Total Web Solutions",
    metaDescription:
      "Bulk SMS for promotions, alerts and reminders, with message writing and campaign set-up support from a Coimbatore web and digital marketing company.",
    hero: {
      eyebrow: "Bulk SMS",
      title: "Bulk SMS Service in Coimbatore",
      intro:
        "Text messages reach customers on almost any phone, with no app or internet connection needed. We help you plan, write and send SMS campaigns for offers, updates and reminders.",
      image: IMG.contact,
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Short messages, sent to the right people",
        paragraphs: [
          "SMS works best when the message is brief, timely and expected. We help you decide what to send, who should receive it and when it will be most useful to them.",
          "Because we also build websites and run digital campaigns, your text messages can link to landing pages, offers and enquiry forms we manage for you. That keeps the customer journey joined up from the first message to the final sale.",
        ],
        bullets: [
          "Promotional and transactional message planning",
          "Message writing within character limits",
          "Contact list preparation and segmentation",
        ],
        image: IMG.marketing,
      },
      {
        type: "features",
        heading: "Ways businesses use bulk SMS",
        items: [
          {
            title: "Promotions and offers",
            body: "Announce sales, seasonal discounts and new arrivals to customers who have asked to hear about them.",
            icon: "megaphone",
          },
          {
            title: "Appointment reminders",
            body: "Reduce missed bookings at clinics, salons and service centres with a timely reminder before each visit.",
            icon: "calendar",
          },
          {
            title: "Order and delivery updates",
            body: "Keep buyers informed when an order is confirmed, dispatched or ready to collect.",
            icon: "truck",
          },
          {
            title: "Event invitations",
            body: "Invite customers, students or members to launches, open days and meetings, with the key details in one message.",
            icon: "users",
          },
          {
            title: "Payment and renewal reminders",
            body: "Send polite reminders for fees, subscriptions and renewals so fewer payments slip past their due date.",
            icon: "wallet",
          },
          {
            title: "Important alerts",
            body: "Share urgent notices such as schedule changes or service interruptions quickly with everyone affected.",
            icon: "lightning",
          },
        ],
      },
      {
        type: "steps",
        heading: "Setting up an SMS campaign",
        steps: [
          {
            title: "Define the goal",
            body: "We agree what the campaign should achieve, whether that is footfall, bookings, payments or awareness.",
          },
          {
            title: "Prepare the list",
            body: "Your contacts are cleaned and grouped so each segment receives messages that are relevant to it.",
          },
          {
            title: "Write the message",
            body: "Our writers craft a short, clear text with your business name and one obvious next step.",
          },
          {
            title: "Send and review",
            body: "Messages go out at a suitable time, and we look at the response to improve the next campaign.",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Good practice we follow",
        columns: [
          {
            items: [
              "Message only people who have agreed to hear from you",
              "Identify your business clearly in every text",
              "Keep each message short with one clear action",
            ],
          },
          {
            items: [
              "Respect sensible sending hours",
              "Make it easy to opt out",
              "Work within current Indian rules for commercial SMS",
            ],
          },
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "What kinds of messages can I send?",
            a: "Businesses typically send promotional offers, reminders, order updates and service alerts. We help you decide which type suits your goal and how to word it.",
          },
          {
            q: "Is there any registration needed before sending?",
            a: "Commercial SMS in India is regulated, and senders generally need registered sender IDs and approved message templates. We explain what applies to your business when we discuss your requirements.",
          },
          {
            q: "Can you write the messages for us?",
            a: "Yes. Our content team writes short, clear texts that fit character limits and still carry your offer and call to action.",
          },
          {
            q: "How is bulk SMS priced?",
            a: "Costs depend on your expected volume and the type of messages you send. Share your requirements with us and we will prepare a quotation.",
          },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Bulk Email Service", href: "/bulk-email-service/" },
          { label: "Digital Marketing", href: "/digital-marketing/" },
          { label: "Content Writing", href: "/content-writing/" },
          { label: "Marketing CRM Software", href: "/marketing-crm-software/" },
          { label: "Request a Free Quote", href: "/free-quotes/" },
        ],
      },
      CTA,
    ],
  },

  // ---------------------------------------------------------------- Bulk email
  {
    slug: "bulk-email-service",
    section: "Services",
    metaTitle: "Bulk Email Marketing Service in Coimbatore | 123TWS",
    metaDescription:
      "Bulk email marketing for newsletters, offers and announcements, with list preparation, template design, copywriting and campaign reporting from Coimbatore.",
    hero: {
      eyebrow: "Email Marketing",
      title: "Bulk Email Marketing Service",
      intro:
        "Email lets you speak directly to people who already know your business. We help you design, write and send campaigns that are welcome in the inbox and easy to act on.",
      image: IMG.workspace,
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Campaigns people are glad to open",
        paragraphs: [
          "An email list is one of the few marketing channels you own outright. Used well, it brings repeat customers back, introduces new products and keeps your name in mind between purchases.",
          "We take care of the parts that make campaigns work: a tidy list, a layout that reads well on phones, copy with a clear purpose and tracking that shows what happened after you pressed send.",
        ],
        bullets: [
          "Newsletter and promotional campaign planning",
          "Responsive email templates in your brand style",
          "Open, click and unsubscribe reporting",
        ],
        image: IMG.desk,
        reverse: true,
      },
      {
        type: "features",
        heading: "What's included",
        items: [
          {
            title: "Newsletters",
            body: "Regular updates that share news, tips and offers in a format your subscribers come to recognise.",
            icon: "mail",
          },
          {
            title: "Offers and launches",
            body: "Focused campaigns for sales, new products and events, each built around one clear call to action.",
            icon: "megaphone",
          },
          {
            title: "Template design",
            body: "Clean, mobile-friendly email templates that match your logo, colours and website.",
            icon: "layout",
          },
          {
            title: "Copywriting",
            body: "Subject lines, preview text and body copy written to be read quickly and acted on.",
            icon: "pen",
          },
          {
            title: "List preparation",
            body: "Duplicates and invalid addresses are removed and contacts grouped, so the right message reaches the right people.",
            icon: "database",
          },
          {
            title: "Campaign reporting",
            body: "Opens, clicks and unsubscribes summarised after each send, with suggestions for the next campaign.",
            icon: "chart",
          },
        ],
      },
      {
        type: "steps",
        heading: "How an email campaign runs",
        steps: [
          {
            title: "Plan",
            body: "We agree the purpose, audience and timing of the campaign, and how success will be judged.",
          },
          {
            title: "Prepare the list",
            body: "Your contacts are cleaned and segmented so each group gets content that is relevant to it.",
          },
          {
            title: "Design and write",
            body: "We create the template and copy, and share a preview for your approval.",
          },
          {
            title: "Test",
            body: "Test sends check layout, links and images on common email apps and on mobile screens.",
          },
          {
            title: "Send and report",
            body: "The campaign goes out at the agreed time, and we report on results once responses have come in.",
          },
        ],
      },
      {
        type: "checklist",
        heading: "Checked before every send",
        columns: [
          {
            items: [
              "Permission-based contact list",
              "Recognisable sender name and clear subject line",
              "Unsubscribe link in every email",
            ],
          },
          {
            items: [
              "Layout that works on mobile",
              "All links and tracking tested",
              "Images with descriptive alt text",
            ],
          },
        ],
      },
      {
        type: "faq",
        items: [
          {
            q: "How is bulk email different from business email?",
            a: "Business email is your everyday mailbox for one-to-one messages. Bulk email sends a single campaign to many subscribers at once. Keeping the two separate helps protect the reputation of your day-to-day address.",
          },
          {
            q: "Can I use my existing customer list?",
            a: "Yes, provided the people on it have agreed to receive emails from you. We will help clean the list and remove addresses that are likely to bounce.",
          },
          {
            q: "How will I know whether a campaign worked?",
            a: "After each send we share opens, clicks and unsubscribes, and, where your website tracking allows, the enquiries or sales that followed.",
          },
          {
            q: "How is pricing worked out?",
            a: "It depends on the size of your list, how often you send and whether you need design and copywriting. Tell us your requirements and we will send a quotation.",
          },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Bulk SMS Service", href: "/bulk-sms-coimbatore/" },
          { label: "Business Email Service", href: "/business-email-service-provider/" },
          { label: "Content Writing", href: "/content-writing/" },
          { label: "Graphic Design", href: "/graphic-design/" },
          { label: "Digital Marketing", href: "/digital-marketing/" },
          { label: "Marketing CRM Software", href: "/marketing-crm-software/" },
        ],
      },
      CTA,
    ],
  },


  // ---------------------------------------------------------------- Graphic design
  // Live sections: hero (banner image), introduction ("Let your brand speaks for you") with design
  // formats, Services offered by Graphic designers, FAQ.
  {
    slug: "graphic-design",
    section: "Services",
    metaTitle: "Graphic Design Company in Coimbatore | Branding | 123TWS",
    metaDescription:
      "Logos, business cards, brochures, flyers, posters, social media graphics and illustrations designed in Coimbatore for IT, healthcare, hospitality and more.",
    hero: {
      eyebrow: "Graphic Design",
      title: "Graphic Design Company in Coimbatore",
      intro:
        "From your logo to your latest social media post, we create visuals that clearly belong to the same brand. Our designers work across print and digital formats.",
      image: {
        src: `${LIVE}/graphic-design/graphic-design-banner-illustration.png`,
        alt: "Isometric illustration of a design studio with a computer, drawing tablet and printer, with small figures at work",
        fit: "contain",
      },
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Design built around your brand",
        paragraphs: [
          "We provide graphic design for clients across many sectors, including IT companies, hospitality, event management firms, healthcare providers and institutions. Because our clients are so varied, our design work has to be versatile too.",
          "Branding sits at the centre of what we do. Starting with the logo, we build complete brand solutions and carry that identity through every piece we design, so each one makes a strong impression.",
          "Working closely with you, we create visual communication aimed squarely at your audience, combining words, symbols and images into designs that express your brand's ideas and messages.",
        ],
      },
      {
        type: "features",
        heading: "Design formats we create",
        intro: "Our graphic design covers a range of artistic and professional formats focused on visual communication.",
        items: [
          { title: "Poster design", body: "Posters with a clear focal point that read well from a distance.", icon: "image", iconSrc: `${LIVE}/graphic-design/icons/illustration.png` },
          { title: "Flyer design", body: "Handouts that put your offer and contact details front and centre.", icon: "file", iconSrc: `${LIVE}/graphic-design/icons/flyer.png` },
          { title: "Advertisements", body: "Print and digital ads designed to catch attention in a crowded space.", icon: "megaphone", iconSrc: `${LIVE}/graphic-design/icons/ads.png` },
          { title: "Magazine cover design", body: "Covers with strong type and imagery that invite people to pick them up.", icon: "presentation", iconSrc: `${LIVE}/graphic-design/icons/magazine.png` },
          { title: "Product design", body: "Product graphics and visuals that present what you sell at its best.", icon: "stack", iconSrc: `${LIVE}/graphic-design/icons/product-design.png` },
        ],
      },
      {
        type: "features",
        heading: "What our graphic designers create",
        intro:
          "Strong visuals matter in a fast-moving digital world. Our designers in Coimbatore communicate messages and ideas through clear, attractive design for print and digital media, always trying to express what your brand stands for.",
        items: [
          {
            title: "Logo design",
            body: "A logo is often the first thing people associate with you. We study your sector and competitors to create a memorable mark that reflects your values.",
            icon: "palette",
          },
          {
            title: "Business cards",
            body: "A well-designed card still matters for networking. Ours are built to look professional and leave a lasting impression.",
            icon: "card",
          },
          {
            title: "Marketing collateral",
            body: "Brochures, flyers, posters and banners that combine creative flair with strategy, so each piece moves people to act.",
            icon: "file",
          },
          {
            title: "Social media graphics",
            body: "Visuals that follow current social trends and match your brand personality to lift engagement and traffic.",
            icon: "share",
          },
          {
            title: "Illustration",
            body: "Detailed illustrations that evoke emotion and explain complex ideas in editorial, marketing and digital material.",
            icon: "pen",
          },
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "How does good design help a business?",
            a: "It gives your business a recognisable visual identity, attracts customers and gets your message across clearly. Over time that builds recognition and loyalty.",
          },
          {
            q: "Can design work help with search rankings?",
            a: "Search engines cannot see an image the way people do. Descriptive file names, alt text and surrounding copy that use relevant keywords help them understand and index your visuals, so customers can find them.",
          },
          {
            q: "Does optimising images for search limit creativity?",
            a: "By letting the keywords support the design rather than drive it. When the words fit naturally with the visual story, the result is both searchable and original.",
          },
          {
            q: "Why do some designs make people look twice?",
            a: "Designers sometimes call it perplexity: an element of intrigue that sparks curiosity. A design with a little mystery encourages people to look closer and engage with the brand.",
          },
          {
            q: "How do I combine design and search optimisation in practice?",
            a: "Start with keyword research, then build those terms into image names, captions and supporting text while keeping the design itself creative and appealing.",
          },
        ],
      },
      CTA,
      {
        type: "related",
        heading: "More design services and work",
        links: [
          { label: "Brochure Portfolio", href: "/brochures/" },
          { label: "Logo Design", href: "/logo-design/" },
          { label: "Brochure Design", href: "/brochure-design/" },
          { label: "Corporate Presentation", href: "/corporate-presentation/" },
          { label: "Social Media Posters", href: "/social-media-posters/" },
          { label: "Logo Portfolio", href: "/logos/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Logo design
  // Live sections: hero (banner image), Logo Designing & Corporate Branding, The specialization of
  // 123 TWS Logo Designing Company, Features of our logo design, Professional logo designers'
  // specialty, packages (Starter, Advanced, Complete Corporate Identity), Terms & Conditions, FAQ.
  {
    slug: "logo-design",
    section: "Services",
    metaTitle: "Logo Design Company in Coimbatore | Branding | 123TWS",
    metaDescription:
      "Custom logo design and corporate identity in Coimbatore. Starter, advanced and full identity packages with multiple concepts and files in PDF, JPG and PNG.",
    hero: {
      eyebrow: "Logo Design",
      title: "Logo Design and Brand Identity in Coimbatore",
      intro:
        "Your logo is often the first thing people remember about you. We design custom marks that reflect your values and stay clear on everything from a website header to a shop sign.",
      image: {
        src: `${LIVE}/logo-design/logo-design-banner-illustration.png`,
        alt: "Illustration of designers using giant pencils and a brush to shape the word LOGO on a large screen",
        fit: "contain",
      },
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Logos and corporate branding",
        paragraphs: [
          "A distinctive logo gives customers a reason to notice your business and an easy way to recognise it again. We design logos that help you stand out with an identity that is clearly your own.",
          "In a crowded market, a strong brand identity is essential. Your logo carries your values, mission and vision, so choosing an experienced design partner in Coimbatore makes a real difference.",
        ],
      },
      {
        type: "features",
        heading: "Where our logo team excels",
        items: [
          {
            title: "Visual identity",
            body: "Your visual identity expresses your personality and connects emotionally with your audience. The logo is its cornerstone, so we treat it with care and a clear understanding of your business.",
            icon: "palette",
          },
          {
            title: "Craft and imagination",
            body: "Our experienced designers understand how colour, shape and typography affect people, and use that knowledge to create logos that resonate.",
            icon: "lightning",
          },
          {
            title: "Made for your brand",
            body: "We take time to understand your values, mission and market position, then create a custom logo instead of a one-size-fits-all design.",
            icon: "puzzle",
          },
        ],
      },
      {
        type: "features",
        heading: "How we approach every logo",
        items: [
          {
            title: "Current, not dated",
            body: "Branding trends change quickly. We follow them closely so your logo feels current and supports your credibility for years.",
            icon: "rocket",
          },
          {
            title: "Works at any size",
            body: "Your logo should work on a website, social profile, business card or billboard, so we design it to keep its impact at any size.",
            icon: "stack",
          },
          {
            title: "A clear, efficient process",
            body: "Research, brainstorming, sketching, refining and finalising follow a clear structure that saves you time and effort.",
            icon: "gear",
          },
        ],
      },
      {
        type: "features",
        heading: "What you get from our designers",
        items: [
          {
            title: "Several concepts to choose from",
            body: "You see several concepts, not just one, so you can compare directions and choose the one that best fits your brand.",
            icon: "layout",
          },
          {
            title: "Logos that lift a brand",
            body: "We take pride in logos that lift a brand, and many businesses in Coimbatore and beyond now identify themselves with marks we created.",
            icon: "star",
          },
          {
            title: "Instant credibility",
            body: "A professional logo signals competence and builds trust, which can be what tips a customer towards you over a competitor.",
            icon: "shield",
          },
        ],
      },
      {
        type: "plans",
        heading: "Logo design packages",
        intro: "Choose the level of design that suits your stage of business.",
        note: "Package details are indicative. Scope, timelines and pricing are confirmed on quotation.",
        plans: [
          {
            name: "Starter Logo Design",
            features: [
              "3 logo concepts",
              "Any colour scheme",
              "Completed in 2 to 3 business days",
              "3 rounds of changes on the chosen logo",
              "Files in PDF, JPG, DOC and PNG",
              "Other formats on request at no extra charge",
            ],
          },
          {
            name: "Advanced Logo Design",
            highlight: true,
            features: [
              "5 logo concepts",
              "Any colour scheme",
              "Completed in 4 to 6 business days",
              "3 rounds of changes on the chosen logo",
              "Files in PDF, JPG, DOC and PNG",
              "Other formats on request at no extra charge",
            ],
          },
          {
            name: "Complete Corporate Identity",
            features: [
              "3 logo concepts",
              "Envelope, letterhead, business card and ID card concepts",
              "Any colour scheme",
              "Completed in 4 to 6 business days",
              "3 rounds of changes on the chosen logo",
              "Files in PDF, JPG, DOC and PNG",
              "Other formats on request at no extra charge",
            ],
          },
        ],
      },
      {
        type: "checklist",
        heading: "Terms & Conditions",
        columns: [
          {
            items: [
              "Up to 3 revisions are included on the selected logo; further changes are chargeable",
              "If none of the 3 sample logos suits you and a new design is wanted, it is chargeable, including the earlier samples",
              "Turning your own logo idea or concept into a finished design is charged per hour",
            ],
          },
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What do you mean by a custom logo?",
            a: "It is a logo created specifically for your business, based on what you do and the style of your brand. We never hand out generic marks; each design is tailored so it feels right for your business.",
          },
          {
            q: "Why not just use a template logo?",
            a: "Because people notice your logo before almost anything else, and a template cannot describe your business the way a bespoke design can.",
          },
          {
            q: "How many changes can I ask for?",
            a: "We work closely from your feedback until the design matches your expectations. Each package includes up to three revisions on the selected logo, and further changes can be made at an extra charge.",
          },
          {
            q: "Do you design abstract or geometric logos?",
            a: "Certainly. Abstract, geometric, lettermark and illustrated logos are all part of our work.",
          },
        ],
      },
      CTA,
      {
        type: "related",
        heading: "Related design services",
        links: [
          { label: "Logo Portfolio", href: "/logos/" },
          { label: "Graphic Design", href: "/graphic-design/" },
          { label: "Brochure Design", href: "/brochure-design/" },
          { label: "Corporate Presentation", href: "/corporate-presentation/" },
          { label: "2D Animation Video", href: "/2d-animation-video/" },
          { label: "Website Design", href: "/website-design/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Brochure design
  // Live sections: hero (banner image), introduction ("Brochures are the spearhead of marketing
  // efforts"), Brochure Designing Packages, Terms and conditions, We Will Provide, Our Brochures will be.
  {
    slug: "brochure-design",
    section: "Services",
    metaTitle: "Brochure Design in Coimbatore | Catalogue Design | 123TWS",
    metaDescription:
      "Business, corporate and e-brochure design in Coimbatore. Single-side, double-side, tri-fold, four and eight page layouts with published starting prices.",
    hero: {
      eyebrow: "Brochure Design",
      title: "Brochure Design in Coimbatore",
      intro:
        "A good brochure introduces your company, explains what you offer and gives readers a reason to contact you. We design printed brochures, catalogues and e-brochures that do all three.",
      image: {
        src: `${LIVE}/brochure-design/brochure-design-banner-illustration.png`,
        alt: "Illustration of an open company profile brochure with a pink and white cover design",
        fit: "contain",
      },
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Brochures that lead your marketing",
        paragraphs: [
          "A brochure introduces your company, organisation, products or services in a format people can keep. E-brochures are now just as common, so we design for print and screen alike, from business and corporate brochures to product catalogues.",
          "Formats range from single and double-sided sheets to tri-folds and four or eight-page brochures. Alongside brochures we design stationery, branded folders, inserts, leaflets and flyers, all laid out to inform, persuade and turn readers into enquiries.",
          "For many potential customers, your brochure is their first introduction to your business. It keeps you in touch with prospects and existing clients and encourages them to visit your website to learn more.",
        ],
        bullets: [
          "Business, corporate and e-brochures",
          "Single side to eight-page formats",
          "In-house design at a sensible cost",
        ],
        video: { youtubeId: "meMLb0CC9Hc", title: "Brochure design by 123 Total Web Solutions" },
      },
      {
        type: "plans",
        heading: "Brochure Designing Packages",
        intro: "Each package includes one design concept, sized to your requirements.",
        note: "Prices are indicative and cover design only. Final pricing is confirmed on quotation.",
        plans: [
          {
            name: "Single side",
            price: "₹3,500",
            features: ["1 design concept", "Ready in 2 business days", "Size to suit your needs"],
          },
          {
            name: "Double side (2 pages)",
            price: "₹5,000",
            features: ["1 design concept", "Ready in 2 to 3 business days", "Size to suit your needs"],
          },
          {
            name: "Four pages",
            price: "₹8,500",
            features: ["1 design concept", "Ready in 3 to 5 business days", "Size to suit your needs"],
          },
          {
            name: "Tri-fold (6 pages)",
            price: "₹11,000",
            highlight: true,
            features: ["1 design concept", "Ready in 2 to 3 business days", "Size to suit your needs"],
          },
          {
            name: "Eight pages",
            price: "₹13,000",
            features: ["1 design concept", "Ready in 5 to 7 business days", "Size to suit your needs"],
          },
        ],
      },
      {
        type: "checklist",
        heading: "Terms and conditions",
        columns: [
          {
            items: [
              "Up to 3 revisions on the selected design",
              "Further changes charged at ₹750 per hour",
              "A completely new layout design charged at ₹1,500",
            ],
          },
        ],
      },
      {
        type: "features",
        heading: "We Will Provide",
        items: [
          { title: "Education brochures", body: "Clear guides to courses, facilities and admissions for schools, colleges and training centres.", icon: "graduation" },
          { title: "Business brochures", body: "Practical overviews of what you offer, ideal for sales meetings and follow-ups.", icon: "briefcase" },
          { title: "Advertising brochures", body: "Bold, offer-led designs for launches, events and seasonal promotions.", icon: "megaphone" },
          { title: "Corporate brochures", body: "A polished picture of your company, its services and strengths for clients and partners.", icon: "building" },
          { title: "Medical brochures", body: "Calm, readable layouts that explain treatments and services for clinics and hospitals.", icon: "stethoscope" },
          { title: "Product brochures", body: "Catalogue-style pages that present ranges, specifications and images in order.", icon: "stack" },
        ],
      },
      {
        type: "checklist",
        heading: "Our Brochures will be",
        columns: [
          {
            items: ["Attractive and eye-catching", "Easy to read and understand", "Clear about your products and services"],
          },
          {
            items: ["Affordably priced", "Complete in describing what you offer"],
          },
        ],
      },
      CTA,
      {
        type: "related",
        heading: "Related design services",
        links: [
          { label: "Brochure Portfolio", href: "/brochures/" },
          { label: "Graphic Design", href: "/graphic-design/" },
          { label: "Logo Design", href: "/logo-design/" },
          { label: "Content Writing", href: "/content-writing/" },
          { label: "Corporate Presentation", href: "/corporate-presentation/" },
          { label: "Request a Free Quote", href: "/free-quotes/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Corporate presentation
  // Live sections: hero (banner image), introduction, Our Corporate Presentation includes,
  // Advantages, 2D video presentation ("Let your presentation speak!"), Connect with us.
  {
    slug: "corporate-presentation",
    section: "Services",
    metaTitle: "Corporate Presentation Design in Coimbatore | 123TWS",
    metaDescription:
      "Animated corporate presentations and 2D video presentations with sound effects and clear visuals for sales pitches, trade shows, training and staff onboarding.",
    hero: {
      eyebrow: "Corporate Presentation",
      title: "Corporate Presentation in Coimbatore",
      intro:
        "We turn your company story into an animated presentation that holds attention and explains your products clearly. It works on screen in a meeting, on your website or at an exhibition stand.",
      image: {
        src: `${LIVE}/corporate-presentation/corporate-presentation-banner-illustration.png`,
        alt: "Illustration of business presentation slide layouts, including a red title slide reading Devising Business",
        fit: "contain",
      },
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Smart content, shown in motion",
        paragraphs: [
          "Corporate presentations have changed how businesses speak to their audiences and persuade them to buy. They are also more practical and cost-effective than staging live product demonstrations.",
          "Animation is especially useful for showing how a product is used, step by step, in a way static slides cannot.",
        ],
      },
      {
        type: "features",
        heading: "What each presentation includes",
        intro:
          "Many clients have replaced dull, static company decks with animated presentations that explain their ideas visually and lift their business image.",
        items: [
          { title: "Creative animation", body: "Purposeful motion that leads viewers through your story one idea at a time.", icon: "lightning" },
          { title: "Unique animation", body: "Animation designed for your brand rather than borrowed from a template.", icon: "palette" },
          { title: "Sound effects", body: "Music and effects that add energy and help key moments land.", icon: "headset" },
          { title: "Video clarity", body: "Crisp, high-resolution output that looks sharp on any screen.", icon: "video" },
        ],
      },
      {
        type: "split",
        heading: "Advantages",
        paragraphs: [
          "Our team has wide experience designing corporate and video presentations to each client's brief. We use clean graphics, purposeful animation and carefully chosen sound effects so your presentation stands out.",
        ],
        bullets: [
          "Use it as an interactive brochure, a mailer, a sales pitch, reseller training, staff induction or a trade show loop",
          "Combines sound, images and video clips to make content more engaging",
          "High-resolution, clear visuals that are easy to follow on the web",
          "Helps persuade customers to buy your products and services",
          "Animation that demonstrates the benefits of your product",
        ],
        reverse: true,
      },
      {
        type: "split",
        heading: "2D video presentation: let your presentation speak",
        paragraphs: [
          "Few people want to dig through long descriptions to understand a product. Most would rather press play and watch a short video that explains it.",
          "Our 2D presentations show the real, practical benefits of your product or service and how it solves customer problems. Our creative team turns your ideas into moving visuals with clear messaging that connects with viewers on an emotional level.",
        ],
      },
      CTA,
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "PowerPoint Presentation Service", href: "/powerpoint-presentation-service/" },
          { label: "2D Animation Video", href: "/2d-animation-video/" },
          { label: "Video Production", href: "/video-production/" },
          { label: "Graphic Design", href: "/graphic-design/" },
          { label: "Brochure Design", href: "/brochure-design/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Live streaming
  // Live sections: hero (banner image), introduction ("We stream live videos like hot coffee with
  // steam"), We offer live event Webcasting for, We are Exclusive in, closing pricing line.
  {
    slug: "live-video-streaming",
    section: "Services",
    metaTitle: "Live Video Streaming and Webcasting in Coimbatore | 123TWS",
    metaDescription:
      "Live streaming and webcasting for weddings, conferences, product launches, seminars, concerts and ceremonies, with custom stream layouts and on-site support.",
    hero: {
      eyebrow: "Live Streaming",
      title: "Live Video Streaming in Coimbatore",
      intro:
        "Share your event with people who cannot be there in person. We broadcast weddings, conferences, launches and ceremonies online with minimal delay, so remote viewers feel part of the moment.",
      image: {
        src: `${LIVE}/live-video-streaming/live-stream-banner-illustration.png`,
        alt: "Illustration of a laptop showing a Live Stream play button, with people watching on a phone and a laptop",
        fit: "contain",
      },
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Your event, streamed to the world",
        paragraphs: [
          "Live streaming lets you broadcast launches, conferences, weddings and other events in real time from almost any location to viewers worldwide. Reaching people who cannot attend in person widens your audience and your business opportunities.",
          "We provide live video streaming and webcasting in Coimbatore for weddings, corporate functions and other occasions, with a firm focus on picture quality. Streaming also saves the time and cost of running the same event in several places.",
          "The full event or presentation can be made available on demand afterwards, so guests can watch at a time that suits them. We stream corporate events, engagements, house warmings, family functions and weddings.",
        ],
      },
      {
        type: "checklist",
        heading: "Events we webcast",
        columns: [
          {
            title: "Personal and social events",
            items: ["Weddings and marriages", "Birthday parties", "Family occasions", "Reunions"],
          },
          {
            title: "Business and industry events",
            items: ["Conferences", "Seminars", "Presentations", "Commercial events"],
          },
          {
            title: "Education and instruction",
            items: ["Training and coaching", "Online instruction", "Presentations", "Web-based distance learning"],
          },
          {
            title: "Organisational and entertainment",
            items: [
              "Music concerts",
              "Religious poojas and ceremonies",
              "Sporting events",
              "Press conferences",
              "Red carpet premieres",
              "TV and radio shows",
            ],
          },
          {
            title: "Corporate live webcast",
            items: [
              "Product launches",
              "Advertising",
              "Corporate addresses and announcements",
              "Lectures",
              "Professional development and training tutorials",
            ],
          },
        ],
      },
      {
        type: "features",
        heading: "What sets our streaming apart",
        items: [
          { title: "Worldwide reach", body: "Your programme can be watched by audiences anywhere in the world.", icon: "globe" },
          { title: "Minimal delay", body: "Live transmission stays very close to real time.", icon: "lightning" },
          { title: "Custom window layouts", body: "Stream screens designed around each client's needs and programme.", icon: "layout" },
          { title: "Advertising options", body: "Space for advertising within the stream window layout if you want it.", icon: "megaphone" },
          { title: "Full-time assistance", body: "Our team supports you throughout the live relay.", icon: "headset" },
          { title: "In-person support", body: "We are present at the event venue to set up and run the stream.", icon: "users" },
        ],
      },
      CTA,
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Video Production", href: "/video-production/" },
          { label: "Corporate Presentation", href: "/corporate-presentation/" },
          { label: "Social Media Marketing", href: "/social-media/" },
          { label: "Request a Free Quote", href: "/free-quotes/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Video production
  // Live sections: hero (banner image), Ad film / Business Brand / Product, Personal Branding Video,
  // Client Testimonial Video, Interview Branding, Logo Animation 2D/3D, Business Photo Shoot.
  {
    slug: "video-production",
    section: "Services",
    metaTitle: "Video Production in Coimbatore | Ad Films and Brand Videos",
    metaDescription:
      "Ad films, 60-second promo videos, personal branding and testimonial videos, interview shoots, 2D and 3D logo animation and business photo shoots in Coimbatore.",
    hero: {
      eyebrow: "Video Production",
      title: "Video Production in Coimbatore",
      intro:
        "We create promotional films, brand videos and business photography that give your marketing something worth watching. Each piece is made for your website and for YouTube, Instagram and Facebook.",
      image: {
        src: `${LIVE}/video-production/video-production-banner-illustration.png`,
        alt: "Illustration of a film reel, clapperboard, award statuette and a tablet playing a video",
        fit: "contain",
      },
      cta: HERO_CTA,
    },
    blocks: [
      {
        type: "split",
        heading: "Ad Film / Business Brand / Product",
        paragraphs: [
          "Promo videos of around 60 seconds and corporate films put your product or brand on show and supply material for social media. We produce polished, cinematic promotional films for businesses of every size.",
          "Video presents your products and brand visually, and it works well as advertising on YouTube, Instagram and Facebook.",
        ],
        bullets: ["Promo video (60 sec)", "Corporate films", "Product showcases"],
        image: {
          src: `${LIVE}/video-production/film-crew-illustration.png`,
          alt: "Illustration of a film crew working around a large vintage movie camera with a clapperboard and film reel",
          fit: "contain",
        },
      },
      {
        type: "split",
        heading: "Personal Branding Video",
        paragraphs: [
          "A personal branding video lets people see and hear you before they meet you. Putting a face and a voice to your name builds trust and strengthens your brand, which is why video works so well for professionals.",
        ],
        image: {
          src: `${LIVE}/video-production/personal-branding-video.png`,
          alt: "Illustration of a man at a desk talking to a camera on a tripod, with play button and thumbs-up icons around him",
          fit: "contain",
        },
        reverse: true,
      },
      {
        type: "split",
        heading: "Client Testimonial Video",
        paragraphs: [
          "Customers describing their experience in their own words are among the most persuasive marketing you can use. Watching video online is part of most people's daily routine, so a testimonial video reaches your audience where they already are.",
          "Our experienced production team can plan and film quality testimonial videos for your advertising. Get in touch to discuss how testimonials could work for your business.",
        ],
        image: {
          src: `${LIVE}/video-production/client-testimonial-video.png`,
          alt: "Illustration of two people adding star ratings and reviews to a large smartphone",
          fit: "contain",
        },
      },
      {
        type: "split",
        heading: "Interview Branding",
        paragraphs: [
          "Our production team prepares thoughtful questions about your brand and films the interview at your corporate office using professional equipment. The result builds credibility with clients and carries your story to local and global audiences.",
        ],
        bullets: [
          "Builds credibility and trust",
          "Creates an emotional connection",
          "Puts a human face on the brand",
          "Widens your reach",
        ],
        image: {
          src: `${LIVE}/video-production/interview-branding.png`,
          alt: "Illustration of two people seated in armchairs having an interview conversation",
          fit: "contain",
        },
        reverse: true,
      },
      {
        type: "split",
        heading: "Logo Animation 2D/3D",
        paragraphs: [
          "A short animated version of your logo adds movement to your brand identity, ready for video intros, presentations and social posts.",
        ],
        bullets: [
          "Movement keeps viewers watching",
          "A memorable intro raises brand recall",
          "Motion helps tell your brand story",
        ],
        image: {
          src: `${LIVE}/video-production/logo-animation-2d-3d.png`,
          alt: "Illustration of a designer at a desktop computer working on animation curves and shapes",
          fit: "contain",
        },
      },
      {
        type: "split",
        heading: "Business Photo Shoot",
        paragraphs: [
          "Whatever your line of business, strong imagery helps you promote it. Professional corporate photographs show polish and help you tell a positive story about your company.",
          "We photograph professional headshots, teams and products to suit your visual communication plans. The images can be used on your website and blog, in magazines and across social media.",
        ],
        bullets: [
          "Let customers see your offer rather than read about it",
          "Give your brand a visual voice",
          "Introduce your people and premises to clients",
        ],
        image: {
          src: `${LIVE}/video-production/business-photo-shoot.png`,
          alt: "Illustration of a photographer taking a portrait of a businessman seated on a stool under studio lights",
          fit: "contain",
        },
        reverse: true,
      },
      CTA,
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "2D Animation Video", href: "/2d-animation-video/" },
          { label: "Live Video Streaming", href: "/live-video-streaming/" },
          { label: "Social Media Marketing", href: "/social-media/" },
          { label: "Corporate Presentation", href: "/corporate-presentation/" },
          { label: "Graphic Design", href: "/graphic-design/" },
          { label: "Digital Marketing", href: "/digital-marketing/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- Madurai
  // Live sections: hero, Why Businesses Choose Our Digital Marketing Agency in Madurai, Video
  // Testimonials / What Customer Saying, Digital Marketing Services in Madurai (End-to-End
  // Solutions), Programmatic & Advanced Advertising Solutions, Digital Branding & Influencer
  // Marketing, Our Digital Marketing Process, Industry-Specific Digital Marketing Expertise,
  // Technologies We Work With, Industries We Serve, What Our Clients Say, FAQ, closing CTA.
  {
    slug: "madurai/digital-marketing-company",
    section: "Locations",
    metaTitle: "Digital Marketing Company for Madurai Businesses | 123TWS",
    metaDescription:
      "SEO, Google Ads, social media, programmatic advertising and digital branding for businesses in Madurai, delivered by 123TWS with clear monthly reporting.",
    hero: {
      eyebrow: "Madurai",
      title: "Digital Marketing Company in Madurai",
      intro:
        "We help Madurai businesses turn online visibility into enquiries, customers and revenue. Our strategies are ethical, guided by data and focused on performance, with clear monthly reporting.",
      image: IMG.tower,
      cta: { label: "Get a Free Audit", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Why Madurai businesses work with us",
        paragraphs: [
          "Business owners care about leads, sales and growth that lasts, so that is where we focus. Start-ups, SMEs, hospitals, interior designers, e-commerce stores, real estate brands and established firms all get strategies designed to turn search intent into action.",
          "We do not sell fixed packages. Instead, we build a digital marketing strategy around your business goals. Our team works from Coimbatore and has served more than 1500 clients.",
        ],
        bullets: [
          "Plans come before campaigns",
          "Every KPI linked to return on investment",
          "Honest, open marketing methods",
          "Know-how across many industries",
          "Decisions informed by user feedback and campaign data",
        ],
        image: {
          src: `${LIVE}/madurai/digital-marketing-social-media.jpg`,
          alt: "Illustration of a rocket launching from a smartphone surrounded by social media icons, with the words Digital Marketing Social Media",
          fit: "contain",
        },
      },
      {
        type: "videos",
        heading: "Hear from our clients",
        intro: "Video testimonials from businesses we work with.",
        items: [
          { title: "Client feedback on our digital marketing services", youtubeId: "MZKLvXVJcw4" },
          { title: "A client success story", youtubeId: "uXGQPnljm6w" },
        ],
      },
      {
        type: "checklist",
        heading: "Our services for Madurai businesses",
        intro: "Services for businesses that want digital growth without the guesswork.",
        columns: [
          {
            title: "SEO and local search optimisation",
            items: [
              "Keywords with commercial and buying intent",
              "Local SEO for searches around Madurai",
              "Technical fixes and site optimisation",
              "E-E-A-T focused content matched to intent",
            ],
          },
          {
            title: "Google Ads and performance marketing",
            items: [
              "Help setting up and running Google Ads",
              "Campaigns across search, display and remarketing",
              "Tracking conversions and refining the funnel",
              "Landing pages that suit your industry",
            ],
          },
          {
            title: "Social media marketing and brand engagement",
            items: [
              "Planning your strategy and content",
              "Paid social ads",
              "Campaigns built on Reels, videos and carousels",
              "Engaging your community and reporting back",
              "Photo and video shoots of your products",
              "Ongoing upkeep of your social channels",
            ],
          },
        ],
      },
      {
        type: "split",
        heading: "Programmatic advertising",
        paragraphs: [
          "Programmatic advertising uses data, automation and smart targeting in place of manual ad placement, helping businesses scale faster. We plan, run and optimise programmatic campaigns in-house with advanced ad platforms and live data.",
          "Because our own team handles strategy, targeting, creatives and optimisation, you keep control, see what is happening and know who is accountable at each step. Precise targeting reduces wasted spend, supports scaling without pushing up cost per lead, opens premium placements and links performance tracking to return.",
        ],
        bullets: [
          "Audience targeting by behaviour, interests, location and intent",
          "Real-time bidding for cost-efficient placements",
          "Ads that follow your audience across phones, computers and connected TVs",
          "Continuous optimisation from live performance data",
        ],
        image: {
          src: `${LIVE}/madurai/programmatic-advertising-team.png`,
          alt: "Two colleagues in an office with brick walls reviewing charts on a desktop monitor",
        },
        reverse: true,
      },
      {
        type: "split",
        heading: "Digital branding and influencer campaigns",
        paragraphs: [
          "Visibility is only part of a strong digital presence; trust, consistency and recall matter just as much. We help businesses define a recognisable voice and look for their brand, with messaging that builds credibility on every platform.",
          "We also connect brands with the right creators rather than simply the most popular ones. Pairing brand strategy with creator-led marketing builds genuine authority, customer trust and long-term brand value.",
        ],
        bullets: [
          "Brand positioning aligned with your goals",
          "Consistent messaging across website, ads and social media",
          "Creators selected for industry and audience fit",
          "Collaborations structured around enquiries, with performance tracking",
        ],
        image: {
          src: `${LIVE}/madurai/influencer-marketing-creator.png`,
          alt: "A smiling woman holding up a white T-shirt in front of a clothing rail and a ring light with a phone",
        },
      },
      {
        type: "steps",
        heading: "How we work with you",
        intro: "Five stages that keep the work organised and focused on lasting results.",
        steps: [
          {
            title: "Research and analysis",
            body: "We begin with your business, customers and objectives, plus an audit of where you stand online today.",
          },
          {
            title: "Strategy planning",
            body: "Campaigns are designed around your goals, with channels, budgets and measures of success agreed up front.",
          },
          {
            title: "Execution",
            body: "SEO, social media, PPC and content work start in a planned order, with tracking in place from day one.",
          },
          {
            title: "Monitoring",
            body: "Traffic, leads and costs are followed closely and summarised in clear monthly reports.",
          },
          {
            title: "Optimisation",
            body: "Budgets and content are adjusted based on real results, so the plan improves month after month.",
          },
        ],
      },
      {
        type: "features",
        heading: "Marketing shaped for your sector",
        items: [
          {
            title: "Healthcare and medical marketing",
            body: "SEO, paid campaigns, social media and reputation management that help hospitals, clinics and doctors attract the right patients and appointment enquiries.",
            icon: "stethoscope",
          },
          {
            title: "Real estate digital marketing",
            body: "Targeted campaigns, video content and timely follow-ups that keep projects visible, win serious buyers and reach NRI audiences.",
            icon: "house",
          },
          {
            title: "E-commerce marketing services",
            body: "Google and Meta performance ads, Shopify optimisation, marketplace listings, email, SMS and WhatsApp automation, and strong ad creatives.",
            icon: "cart",
          },
          {
            title: "Interior design digital marketing",
            body: "SEO, paid ads and social media that showcase your portfolio and turn online interest into premium design projects.",
            icon: "palette",
          },
        ],
      },
      {
        type: "gallery",
        heading: "Tools and platforms we use",
        intro: "Platforms and tools our team uses for websites, analytics, advertising and creative work.",
        items: MADURAI_TOOLS.map((t) => ({
          title: t.title,
          image: { src: `${LIVE}/madurai/tools/${t.file}`, alt: `${t.title} logo`, fit: "contain" as const },
        })),
      },
      {
        type: "audience",
        heading: "Industries We Serve",
        items: [
          { title: "E-commerce", icon: "cart", iconSrc: `${LIVE}/madurai/icons/e-commerce-icon.svg` },
          { title: "Healthcare", icon: "stethoscope", iconSrc: `${LIVE}/madurai/icons/healthcare-icon.svg` },
          { title: "Education", icon: "graduation", iconSrc: `${LIVE}/madurai/icons/education-icon.svg` },
          { title: "Real estate", icon: "house", iconSrc: `${LIVE}/madurai/icons/construction-icon.svg` },
          { title: "Manufacturing", icon: "gear", iconSrc: `${LIVE}/madurai/icons/manufacturing-icon.svg` },
          { title: "Fashion", icon: "shirt", iconSrc: `${LIVE}/madurai/icons/textiles-icon.svg` },
          { title: "B2B and SaaS", icon: "briefcase", iconSrc: `${LIVE}/madurai/icons/b2b.svg` },
        ],
      },
      { type: "testimonials" },
      {
        type: "faq",
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What should a Madurai business budget for digital marketing?",
            a: "Costs vary with the services you pick, your industry, the competition you face and what you want to achieve. We start with a free audit and then propose a customised plan focused on getting a return from your spend.",
          },
          {
            q: "Can a small Madurai shop or service benefit?",
            a: "Very much so. Retail shops and showrooms, restaurants, cafes and cloud kitchens, fitness centres and yoga studios, event planners and wedding services, and home service providers such as plumbers, electricians and cleaners can all attract local customers online and compete with bigger brands.",
          },
          {
            q: "How quickly do campaigns start to deliver?",
            a: "Ads can begin bringing in leads within a few weeks, while SEO usually needs three to six months to build strong results.",
          },
          {
            q: "Are your clients only in Madurai?",
            a: "No. Madurai businesses are a key focus, and we also work with clients in other regions, industries and countries.",
          },
        ],
      },
      CTA,
      {
        type: "related",
        heading: "Explore our services",
        links: [
          { label: "Digital Marketing", href: "/digital-marketing/" },
          { label: "SEO Services", href: "/seo-services/" },
          { label: "PPC Services", href: "/ppc-services/" },
          { label: "Social Media Marketing", href: "/social-media/" },
          { label: "Digital Marketing Packages", href: "/digital-marketing-packages/" },
          { label: "Contact Us", href: "/contact-us/" },
        ],
      },
    ],
  },
];
