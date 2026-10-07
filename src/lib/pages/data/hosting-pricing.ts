import type { Block, LinkItem, PageDef } from "../types";

// Hosting and pricing pages. Section order mirrors the live 123tws.com pages as of
// 7 October 2026. Plan names, prices and specifications are facts from those pages;
// all surrounding copy is original. Images under /images/live/ are the site's own.

const consult: LinkItem = { label: "Get Free Consultation Today", href: "/contact-us/" };

const chatCta: Block = {
  type: "cta",
  eyebrow: "Let's Chat",
  lines: ["Have a Project,", "Let's Start Today"],
  button: { label: "Get started today", href: "/contact-us/" },
};

const PRICED_NOTE =
  "Prices and specifications as published on 7 October 2026. Taxes extra where applicable. Final pricing is confirmed on your quotation.";

const UNPRICED_NOTE =
  "Specifications as published on 7 October 2026. Prices for these plans are shared on request. Taxes extra where applicable. Final pricing is confirmed on your quotation.";

/** Inclusions published for every VPS and dedicated server plan. */
const serverInclusions = [
  "Free rapid setup",
  "Bandwidth overage protection",
  "Manage multiple websites",
  "3 dedicated IPs",
  "24/7 telephone, email and web-based technical support",
  "24/7 network monitoring",
  "FTP access",
  "Free diagnosis",
  "Dedicated and VPS resets",
  "Installation of third-party SSL certificates",
];

/** Operating system logos shown on the live VPS and dedicated server pages. */
const osGallery = (slug: "vps-hosting" | "dedicated-servers") =>
  [
    { title: "Linux", file: "os-linux.png", alt: "Linux Tux penguin logo" },
    { title: "CentOS", file: "os-centos.png", alt: "CentOS logo" },
    { title: "Fedora", file: "os-fedora.png", alt: "Fedora logo" },
    { title: "Ubuntu", file: "os-ubuntu.png", alt: "Ubuntu logo" },
    { title: "Windows", file: "os-windows.png", alt: "Windows logo" },
  ].map((os) => ({
    title: os.title,
    image: { src: `/images/live/${slug}/${os.file}`, alt: os.alt, fit: "contain" as const },
  }));

/** Client keyword wins published on the live SEO page (logo, client, sample keywords). */
const seoClients: { title: string; file: string; keywords: string }[] = [
  { title: "Alpine Tape", file: "client-alpine-tape.png", keywords: "Printed tape manufacturers, adhesive tape manufacturers in Coimbatore, BOPP self adhesive tape in Coimbatore" },
  { title: "Arya Womens Hostel", file: "client-arya-womens-hostel.png", keywords: "Ladies hostels in Kuniyamuthur, PG hostel in Kuniyamuthur, ladies hostel in Kovaipudur" },
  { title: "Current Electro Mech", file: "client-current-electro-mech.png", keywords: "Industrial equipment maintenance services, AC induction motors repair, HT motor rewinding" },
  { title: "Grand Royal Tours", file: "client-grand-royal-tours.png", keywords: "Top travel agencies in South India, travel agency in Coimbatore, travel agency in Bangalore" },
  { title: "Techno Meters", file: "client-techno-meters.png", keywords: "Electric meter manufacturers in India, prepaid energy meter manufacturers in India, electronic energy meter manufacturers in India" },
  { title: "Vian Veenai School", file: "client-vian-veenai-school.jpeg", keywords: "Best matriculation schools in Coimbatore, preschools in Coimbatore, best CBSE schools in Pollachi" },
  { title: "Volboozter", file: "client-volboozter.png", keywords: "Solar EPC companies in Coimbatore, solar rooftop plant in Coimbatore, off grid solar system in Coimbatore" },
  { title: "Jaisuntourism", file: "client-jaisuntourism.png", keywords: "Best tour operator in Coimbatore, Kashmir tour package from Coimbatore, Maldives family tour package from Coimbatore" },
  { title: "GreenFenster", file: "client-greenfenster.png", keywords: "UPVC window manufacturers in Coimbatore, UPVC door manufacturer in Coimbatore, UPVC sliding windows in Coimbatore" },
  { title: "AN False Ceiling", file: "client-an-false-ceiling.png", keywords: "False ceiling in Coimbatore, gypsum board false ceiling Coimbatore, acoustic false ceiling in Coimbatore" },
  { title: "Vasavi Decorations", file: "client-vasavi-decorations.png", keywords: "Wedding decorators in Coimbatore, wedding planner in Coimbatore, corporate event decorators" },
  { title: "Sri Venkateswara Institutions", file: "client-sri-venkateswara-institutions.png", keywords: "Best MBA colleges in Coimbatore, best MCA colleges in Tamilnadu, top B schools in Tamilnadu" },
  { title: "Delphi Technologies", file: "client-delphi-technologies.png", keywords: "Laptop chip level service, laptop motherboard repair, chip level training in Coimbatore" },
  { title: "Asa Gas Agency", file: "client-asa-gas-agency.png", keywords: "Bharatgas distributor, Total gas Coimbatore, LPG gas pipeline installation in Coimbatore" },
];

export const hostingPricingPages: PageDef[] = [
  // ---------------------------------------------------------------------------
  // WEB HOSTING
  // Live: intro + "Types of Hosting" image / Our Hosting Plans / Important Notes - Terms and Conditions
  // ---------------------------------------------------------------------------
  {
    slug: "web-hosting",
    section: "Hosting",
    metaTitle: "Web Hosting in Coimbatore | Linux Plans | 123TWS",
    metaDescription:
      "Linux web hosting from 123 Total Web Solutions, Coimbatore. Five yearly plans with cPanel, webmail, MySQL and 24x7 support. Compare space, email and pricing.",
    hero: {
      eyebrow: "Hosting",
      title: "Web Hosting in Coimbatore",
      intro:
        "Reliable Linux hosting for business websites, with cPanel, email and databases bundled into simple yearly plans. Pick the space you need today and move up when your site grows.",
      image: { src: "/images/live/vps-hosting/banner-vps-server.png", alt: "Isometric illustration of a person at code screens between two servers linked to a cloud", fit: "contain" },
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Launch your sites on our web servers",
        paragraphs: [
          "Today, most businesses, professionals and individuals sell and share what they do through a website that people can reach from anywhere in the world. Web hosting is what makes that possible: every page and file of your site is stored on a public server and delivered to visitors over the internet.",
          "We provide hosting matched to each customer's needs, budget and requirements, at reasonable charges. Our experienced team works with professional tools in a secured environment to keep your site running smoothly.",
          "Alongside hosting packages, we offer company email solutions, domain name registration and secured servers in India, including dedicated servers with full access control. Tell us what your website needs and we will put the right setup in place.",
        ],
        image: {
          src: "/images/live/web-hosting/types-of-hosting.jpg",
          alt: "Diagram titled Types of Hosting showing Linux, Windows, Java, Dedicated and VPS hosting options",
          fit: "contain",
        },
      },
      {
        type: "plans",
        heading: "Our Hosting Plans",
        intro: "Linux hosting in five sizes. Every plan hosts one domain and includes the tools listed below the plans.",
        note: PRICED_NOTE,
        plans: [
          {
            name: "Silver Plan",
            price: "₹4,000",
            period: "per year",
            features: [
              "1000 MB website space",
              "1 domain allowed",
              "100 GB monthly data transfer",
              "3 email accounts",
              "3 sub domains",
              "1 MySQL database",
            ],
          },
          {
            name: "Gold Plan",
            price: "₹5,000",
            period: "per year",
            features: [
              "10000 MB website space",
              "1 domain allowed",
              "10000 GB monthly data transfer",
              "6 email accounts",
              "6 sub domains",
              "3 MySQL databases",
            ],
          },
          {
            name: "Diamond Plan",
            price: "₹7,000",
            period: "per year",
            features: [
              "100000 MB website space",
              "1 domain allowed",
              "100000 GB monthly data transfer",
              "10 email accounts",
              "10 sub domains",
              "10 MySQL databases",
            ],
          },
          {
            name: "Platinum Plan",
            price: "₹10,000",
            period: "per year",
            features: [
              "Unlimited website space",
              "1 domain allowed",
              "Unlimited monthly data transfer",
              "50 email accounts",
              "100 sub domains",
              "25 MySQL databases",
            ],
          },
          {
            name: "Premium Server",
            price: "₹20,000",
            period: "per year",
            features: [
              "Unlimited website space",
              "1 domain allowed",
              "Unlimited monthly data transfer",
              "Unlimited email accounts",
              "Unlimited sub domains",
              "Unlimited MySQL databases",
            ],
          },
        ],
      },
      {
        type: "checklist",
        heading: "Included with every Linux plan",
        columns: [
          { title: "Control and access", items: ["cPanel", "FTP", "phpMyAdmin", "Redirect URL", "Web mail"] },
          { title: "Technologies", items: ["PHP", "MySQL databases", "HTML", "XML", "Flash"] },
          { title: "Service", items: ["Mail space", "Technical support (24x7)", "99.9% uptime"] },
        ],
      },
      {
        type: "checklist",
        heading: "Important Notes - Terms and Conditions",
        intro:
          "Please read these points before you order. Hosting is provided on the understanding that you look after the content and access details of your own account.",
        columns: [
          {
            title: "Your responsibilities",
            items: [
              "The files and data in your hosting account are your responsibility, not ours",
              "You use the service at your own risk",
              "You take full responsibility for any files and data you transfer, and keep suitable backups of everything stored on our servers",
              "You carry the full risk of any loss or damage to your website and its content at all times",
              "You keep your password and account details confidential",
              "You are solely responsible for everything done through your account or password, including any charges, and for all website content shown, sent, linked or stored on the server",
            ],
          },
          {
            title: "Steps you should take",
            items: [
              "Keep your own independent archive and backup copies of your site content",
              "Protect the confidentiality, security and integrity of all site content you send to or store on our servers",
              "Keep your password private",
              "Take precautions against damage to or loss of your site content",
            ],
          },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Shared Hosting", href: "/shared-hosting/" },
          { label: "VPS Hosting", href: "/vps-hosting/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
          { label: "Domain Registration", href: "/domain/" },
          { label: "Business Email Hosting", href: "/business-email-hosting/" },
          { label: "Website Maintenance", href: "/website-maintenance/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // SHARED HOSTING
  // Live: Shared Hosting intro / Economy, Deluxe (marked popular), Ultimate
  // ---------------------------------------------------------------------------
  {
    slug: "shared-hosting",
    section: "Hosting",
    metaTitle: "Shared Hosting Plans in Coimbatore | 123TWS",
    metaDescription:
      "Shared hosting plans from 123TWS in Coimbatore. Compare Economy, Deluxe and Ultimate for space, bandwidth, email accounts and MySQL databases. Get a quote today.",
    hero: {
      eyebrow: "Hosting",
      title: "Shared Hosting",
      intro:
        "Cost-effective hosting on a stable, managed server for growing websites. Choose a plan by the number of sites, mailboxes and databases you need.",
      image: { src: "/images/live/shared-hosting/banner-shared-hosting.png", alt: "Illustration of a woman with a laptop on a database stack linked to a cloud and several devices showing check marks", fit: "contain" },
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "A stable shared hosting environment",
        paragraphs: [
          "Our shared hosting gives customers a stable place to run their websites, with several plans to choose from depending on the operating system you use. As a professional web hosting company in Coimbatore, we help you pick the plan that fits.",
          "The service runs on fully redundant hosting technology, designed to keep your website available. Our data centres are secured and locked, so the hardware behind your site is protected.",
        ],
        bullets: [
          "Plans chosen around your operating system",
          "Fully redundant hosting technology",
          "Secured, locked data centres",
          "Unlimited bandwidth on every plan",
        ],
      },
      {
        type: "plans",
        heading: "Shared hosting plans",
        intro: "All three plans include unlimited bandwidth. Deluxe and Ultimate add unlimited websites and space.",
        note: UNPRICED_NOTE,
        plans: [
          {
            name: "Economy",
            features: ["100 GB space", "Unlimited bandwidth", "100 email accounts", "10 MySQL databases (1 GB each)"],
          },
          {
            name: "Deluxe",
            highlight: true,
            features: [
              "Unlimited websites",
              "Unlimited space",
              "Unlimited bandwidth",
              "500 email accounts",
              "25 MySQL databases (1 GB each)",
              "One-click mobile site",
            ],
          },
          {
            name: "Ultimate",
            features: [
              "Unlimited websites",
              "Unlimited space",
              "Unlimited bandwidth",
              "Unlimited email accounts",
              "Unlimited MySQL databases (1 GB each)",
              "One-click mobile site",
            ],
          },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Web Hosting", href: "/web-hosting/" },
          { label: "Reseller Hosting", href: "/reseller-hosting/" },
          { label: "VPS Hosting", href: "/vps-hosting/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
          { label: "Domain Registration", href: "/domain/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // RESELLER HOSTING
  // Live: Beginner / Economy / Premium plans / Working process image / FAQ
  // ---------------------------------------------------------------------------
  {
    slug: "reseller-hosting",
    section: "Hosting",
    metaTitle: "Reseller Hosting Plans with WHMCS | 123TWS",
    metaDescription:
      "Start your own hosting business with 123TWS reseller hosting. Beginner, Economy and Premium plans with cPanel accounts, free SSL and free WHMCS included.",
    hero: {
      eyebrow: "Hosting",
      title: "Reseller Hosting",
      intro:
        "Host your clients' websites with separate cPanel accounts, free SSL and free WHMCS billing. Ideal for designers, agencies and IT consultants.",
      image: { src: "/images/live/reseller-hosting/banner-reseller-hosting.png", alt: "Illustration of a smiling man holding a laptop, connected to clouds, a server and a HOST label", fit: "contain" },
      cta: consult,
    },
    blocks: [
      {
        type: "plans",
        heading: "Reseller hosting plans",
        intro: "Every plan includes free SSL and a free WHMCS licence. Choose by the number of client domains you expect to host.",
        note: UNPRICED_NOTE,
        plans: [
          {
            name: "Beginner",
            features: ["10 domains", "25 GB disk space", "200 GB bandwidth", "10 cPanel accounts", "Free SSL", "Free WHMCS"],
          },
          {
            name: "Economy",
            features: ["20 domains", "50 GB disk space", "400 GB bandwidth", "20 cPanel accounts", "Free SSL", "Free WHMCS"],
          },
          {
            name: "Premium",
            features: ["30 domains", "75 GB disk space", "600 GB bandwidth", "30 cPanel accounts", "Free SSL", "Free WHMCS"],
          },
        ],
      },
      {
        type: "split",
        heading: "Working process",
        paragraphs: [
          "Getting a site online takes three simple stages. First you secure a domain name, then you set up a hosting pack, and finally you launch.",
          "We can help at every stage, from registering the domain to configuring the hosting account your website will live on.",
        ],
        bullets: ["01 Get a domain name", "02 Set up a hosting pack", "03 Launch your site"],
        image: {
          src: "/images/live/reseller-hosting/reseller-hosting-illustration.png",
          alt: "Working process illustration in three steps: get a domain name, set up a hosting pack, launch",
          fit: "contain",
        },
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions (FAQ)",
        items: [
          {
            q: "How does shared hosting work?",
            a: "With shared hosting, many customers' websites sit on one server and draw on its resources together. Because the cost of the server is divided across every account on it, hosting stays affordable. It works well for personal sites and small or mid-sized businesses that do not need a whole server.",
          },
          {
            q: "Must I own a domain before ordering hosting?",
            a: "Yes. We need a valid, registered domain before we can set up your hosting account.",
          },
          {
            q: "Can I use a domain registered with another company?",
            a: "No. You can use a domain you already own, or register one with any provider, and point it to our hosting. Registering with us is entirely optional.",
          },
          {
            q: "Is it possible to put several sites on one shared account?",
            a: "Yes. Our multi-domain and unlimited shared hosting plans let you add extra domains as addon domains from cPanel, so several websites can run from one account.",
          },
          {
            q: "Will I get mailboxes with my hosting?",
            a: "Yes. Email comes with every one of our hosting packages.",
          },
          {
            q: "What if I outgrow my plan?",
            a: "Yes. You can upgrade to any of our higher plans whenever you need to.",
          },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Shared Hosting", href: "/shared-hosting/" },
          { label: "VPS Hosting", href: "/vps-hosting/" },
          { label: "Dedicated Servers", href: "/dedicated-servers/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
          { label: "Domain Registration", href: "/domain/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // VPS HOSTING
  // Live: Virtual Private Server intro / Operating System based VPS / plans /
  // Our VPS server's features / 24 x 7 Tech Support Team / What is VPS Web Hosting? / Each VPS Plan includes
  // ---------------------------------------------------------------------------
  {
    slug: "vps-hosting",
    section: "Hosting",
    metaTitle: "VPS Hosting in Coimbatore | Virtual Servers | 123TWS",
    metaDescription:
      "Virtual private servers from 123TWS with Linux CentOS, reserved RAM and storage, 3 dedicated IPs and 24/7 network monitoring. Compare six VPS plans.",
    hero: {
      eyebrow: "Hosting",
      title: "Virtual Private Server",
      intro:
        "Your own virtual server with reserved RAM, storage and bandwidth, at a fraction of the cost of a full dedicated machine. Preloaded with cPanel for websites and email.",
      image: { src: "/images/hero-tower.jpg", alt: "Glass office tower rising against the sky" },
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Control your own virtual environment",
        paragraphs: [
          "As a web design company in Coimbatore, we offer a VPS platform that makes running your own virtual environment straightforward. You get the freedom of a private server without the complexity of managing physical hardware.",
          "Good VPS hosting means every account is watched continuously, so problems can be spotted and fixed quickly before they affect your website.",
        ],
        bullets: ["Your own virtual server", "Continuous account monitoring", "Fast response to problems", "Preloaded with cPanel"],
      },
      {
        type: "gallery",
        heading: "Operating System based VPS",
        intro: "We set up your VPS on the operating system your network already uses. These are the options available.",
        items: osGallery("vps-hosting"),
      },
      {
        type: "plans",
        heading: "VPS plans",
        intro: "Six configurations on Linux CentOS, from an entry-level virtual server to multi-terabyte machines with Intel Core processors.",
        note: UNPRICED_NOTE,
        plans: [
          {
            name: "Economy",
            features: ["OS: Linux CentOS", "RAM: 1 GB", "Storage: 40 GB", "Bandwidth: 1,000 GB/month"],
          },
          {
            name: "Value",
            features: ["OS: Linux CentOS", "RAM: 2 GB", "Storage: 60 GB", "Bandwidth: 2,000 GB/month"],
          },
          {
            name: "Deluxe",
            features: ["OS: Linux CentOS 64-bit", "RAM: 16 GB", "Storage: 2 x 2 TB hard drives", "Bandwidth: 20 TB/month"],
          },
          {
            name: "Value Deal",
            features: ["OS: Linux CentOS 64-bit", "CPU: Intel Core i5, 4 cores", "RAM: 4 GB", "Storage: 2 x 300 GB hard drives", "Bandwidth: 10 TB/month"],
          },
          {
            name: "Power Player",
            features: ["OS: Linux CentOS 64-bit", "CPU: Intel Core i7, 4 cores", "RAM: 8 GB", "Storage: 2 x 1 TB hard drives", "Bandwidth: 15 TB/month"],
          },
          {
            name: "MemoryHog",
            features: ["OS: Linux CentOS 64-bit", "CPU: Intel Core i5, 4 cores", "RAM: 16 GB", "Storage: 2 x 1 TB hard drives", "Bandwidth: 15 TB/month"],
          },
        ],
      },
      {
        type: "features",
        heading: "Our VPS server's features",
        items: [
          { title: "cPanel preloaded", body: "Your server arrives with cPanel installed, so you can start setting up your website and email straight away.", icon: "gear", iconSrc: "/images/live/vps-hosting/icons/check.png" },
          { title: "Prompt, reliable service", body: "Servers are provisioned quickly and run on dependable infrastructure from the start.", icon: "lightning", iconSrc: "/images/live/vps-hosting/icons/check.png" },
          { title: "High specifications, fair cost", body: "Generous processor, memory and storage options at competitive prices.", icon: "wallet", iconSrc: "/images/live/vps-hosting/icons/check.png" },
          { title: "Responsive support", body: "When you raise a question, our team gets back to you quickly with a practical answer.", icon: "chat", iconSrc: "/images/live/vps-hosting/icons/check.png" },
          { title: "24 x 7 Tech Support Team", body: "VPS hosting is a newer technology for many businesses. Our support team understands how it works and is on hand around the clock to help.", icon: "headset", iconSrc: "/images/live/vps-hosting/icons/check.png" },
        ],
      },
      {
        type: "split",
        heading: "What is VPS web hosting?",
        paragraphs: [
          "Think of a VPS, sometimes called a virtual dedicated server, as a private section carved out of one large physical machine. Virtualisation software draws the boundaries, and every section behaves like a standalone server with its own operating system.",
          "With our VPS plans you get control, performance and security close to that of a dedicated server, while paying only a fraction of what a dedicated server costs.",
        ],
        image: { src: "/images/service-crm.jpg", alt: "iMac with keyboard and tablet on a desk" },
      },
      {
        type: "checklist",
        heading: "Each VPS plan includes",
        columns: [
          { items: serverInclusions.slice(0, 5) },
          { items: serverInclusions.slice(5) },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Dedicated Servers", href: "/dedicated-servers/" },
          { label: "Shared Hosting", href: "/shared-hosting/" },
          { label: "Dedicated IP", href: "/dedicated-ip/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
          { label: "Website Maintenance", href: "/website-maintenance/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // DEDICATED SERVERS
  // Live: Why you are in need of Dedicated Server? / OS based Dedicated Servers / plans /
  // Coimbatore Dedicated Server / Each Dedicated Server Plan includes
  // ---------------------------------------------------------------------------
  {
    slug: "dedicated-servers",
    section: "Hosting",
    metaTitle: "Dedicated Servers in Coimbatore | 123TWS Hosting",
    metaDescription:
      "Dedicated servers from 123TWS with Intel Core i3, i5 and i7 processors, up to 16 GB RAM and 20 TB monthly bandwidth. Six Linux CentOS plans with 3 dedicated IPs.",
    hero: {
      eyebrow: "Hosting",
      title: "Dedicated Server",
      intro:
        "A whole physical server reserved for your website or application. No shared resources and plenty of room for high traffic and heavy workloads.",
      image: { src: "/images/live/dedicated-servers/banner-dedicated-server.png", alt: "Isometric illustration of server racks and rack-mounted servers connected by cables", fit: "contain" },
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Why do you need a dedicated server?",
        paragraphs: [
          "On shared or virtual hosting, many websites draw on the same memory, storage and bandwidth. That arrangement struggles to keep up with a large, fast-moving website, especially one with a long list of customers placing orders.",
          "The fix is simple. Instead of sharing performance and space with other customers, you take the entire server for yourself.",
        ],
        bullets: ["The whole server is yours", "No competing for resources", "Built for large, busy websites"],
      },
      {
        type: "gallery",
        heading: "Operating System based Dedicated Servers",
        intro: "We provide complete dedicated servers on the operating system your network uses. Choose from the following.",
        items: osGallery("dedicated-servers"),
      },
      {
        type: "plans",
        heading: "Dedicated server plans",
        intro: "All six plans run Linux CentOS 64-bit. Choose by processor, memory, storage and monthly bandwidth.",
        note: UNPRICED_NOTE,
        plans: [
          {
            name: "Economy",
            features: ["OS: Linux CentOS 64-bit", "CPU: Intel Core i3, 2 cores", "RAM: 2 GB", "Storage: 2 x 160 GB hard drives", "Bandwidth: 5 TB/month"],
          },
          {
            name: "Deluxe",
            features: ["OS: Linux CentOS 64-bit", "CPU: Intel Core i5, 4 cores", "RAM: 8 GB", "Storage: 2 x 1 TB hard drives", "Bandwidth: 10 TB/month"],
          },
          {
            name: "Premium",
            features: ["OS: Linux CentOS 64-bit", "CPU: Intel Core i7, 4 cores", "RAM: 16 GB", "Storage: 2 x 2 TB hard drives", "Bandwidth: 20 TB/month"],
          },
          {
            name: "Value Deal",
            features: ["OS: Linux CentOS 64-bit", "CPU: Intel Core i5, 4 cores", "RAM: 4 GB", "Storage: 2 x 300 GB hard drives", "Bandwidth: 10 TB/month"],
          },
          {
            name: "Power Player",
            features: ["OS: Linux CentOS 64-bit", "CPU: Intel Core i7, 4 cores", "RAM: 8 GB", "Storage: 2 x 1 TB hard drives", "Bandwidth: 15 TB/month"],
          },
          {
            name: "MemoryHog",
            features: ["OS: Linux CentOS 64-bit", "CPU: Intel Core i5, 4 cores", "RAM: 16 GB", "Storage: 2 x 1 TB hard drives", "Bandwidth: 15 TB/month"],
          },
        ],
      },
      {
        type: "split",
        heading: "Coimbatore dedicated server",
        paragraphs: [
          "Our dedicated servers come in a range of specifications, so you can choose one that suits your particular needs. It is the natural choice when your site sees far more traffic than usual, or when you run several programs, online transactions or content-heavy pages. You can also give trusted people access to the server so they can carry out tasks for you.",
          "Because your website or application is the only one on the machine, it is never slowed down or overloaded by requests meant for someone else's site. That makes a dedicated server a dependable home for important workloads.",
          "You are also not exposed to viruses or malicious software coming from other customers' websites. Each server can have its own unique IP, so your domain's IP points to your website alone.",
        ],
        image: { src: "/images/industry-software.jpg", alt: "Open laptop resting on a table" },
        reverse: true,
      },
      {
        type: "checklist",
        heading: "Each dedicated server plan includes",
        columns: [
          { items: serverInclusions.slice(0, 5) },
          { items: serverInclusions.slice(5) },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "VPS Hosting", href: "/vps-hosting/" },
          { label: "Dedicated IP", href: "/dedicated-ip/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
          { label: "Online Storage", href: "/online-storage/" },
          { label: "Custom Software Development", href: "/custom-software-development/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // DEDICATED IP
  // Live: Dedicated IP Address / Do I need a Dedicated IP Address? / Our Dedicated IP (+ banner image)
  // ---------------------------------------------------------------------------
  {
    slug: "dedicated-ip",
    section: "Hosting",
    metaTitle: "Dedicated IP Address for Your Website | 123TWS",
    metaDescription:
      "Get a dedicated IP address for your domain from 123TWS in Coimbatore. One IP reserved for your website only, never shared with other sites on the server.",
    hero: {
      eyebrow: "Hosting",
      title: "Dedicated IP",
      intro:
        "An IP address reserved for one domain only, yours. Useful when your website needs its own identity on the server rather than sharing an address with other sites.",
      image: { src: "/images/live/dedicated-ip/banner-dedicated-ip.png", alt: "Illustration of two people working in front of a server rack with gear symbols", fit: "contain" },
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Dedicated IP address",
        paragraphs: [
          "A dedicated IP means one specific IP address is assigned to a single domain and is not shared with anybody else.",
          "Because the address belongs to your site alone, requests reach your website directly, which can help it load faster.",
        ],
        bullets: ["One IP address for one domain", "Never shared with other websites", "Requests go straight to your site"],
      },
      {
        type: "split",
        heading: "Do I need a dedicated IP address?",
        paragraphs: [
          "In hosting there are certain situations where a dedicated IP is either useful or essential. It can also support how search engines see and rank your website.",
          "On a shared address, finding your site means working through the full list of domains held on the server. With a dedicated IP, your particular domain can be located directly instead.",
        ],
        bullets: [
          "Helpful or required in specific hosting situations",
          "Supports your site's search visibility",
          "Your domain is located directly, not looked up from a shared list",
        ],
        reverse: true,
      },
      {
        type: "split",
        heading: "Our dedicated IP",
        paragraphs: [
          "We run our own sites on a dedicated IP address. You can see the setup in action at our 123coimbatore.com website.",
          "If you would like a dedicated IP for your domain, contact us and we will confirm availability and pricing for your hosting plan.",
        ],
        image: {
          src: "/images/live/dedicated-ip/dedicated-ip-illustration.jpg",
          alt: "Red banner reading Buy Dedicated IP beside a server tower",
          fit: "contain",
        },
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Web Hosting", href: "/web-hosting/" },
          { label: "VPS Hosting", href: "/vps-hosting/" },
          { label: "Dedicated Servers", href: "/dedicated-servers/" },
          { label: "SSL Certificate", href: "/ssl-certificate/" },
          { label: "Domain Registration", href: "/domain/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // SSL CERTIFICATE
  // Live: SSL Certification intro / Secure your site here (image) / Extended Protection beyond HTTP / We provide SSL Certificates for
  // ---------------------------------------------------------------------------
  {
    slug: "ssl-certificate",
    section: "Hosting",
    metaTitle: "SSL Certificates in Coimbatore | Thawte | 123TWS",
    metaDescription:
      "Secure your website with a Thawte SSL certificate from 123TWS. Options for single sites, e-commerce, payment gateway integrated websites and multiple subdomains.",
    hero: {
      eyebrow: "Hosting",
      title: "SSL Certification",
      intro:
        "Encrypt the connection between your website and its visitors, and show them your site is genuine. We supply Thawte certificates for every kind of website.",
      image: { src: "/images/live/ssl-certificate/banner-ssl-certification.png", alt: "Illustration of two people beside a monitor showing an https address and a shield marked SSL with a padlock", fit: "contain" },
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Secure your site here",
        paragraphs: [
          "People expect security in every part of their lives, and they want a safe channel whenever they send or share sensitive information online.",
          "An SSL certificate lets both sides of a connection confirm who they are by checking a digital certificate, so each party can trust the identity of the other.",
          "We offer digital certificates from Thawte, a recognised certificate authority. Security matters for every website, and these certificates let companies and their clients communicate and trade online with confidence.",
        ],
        image: {
          src: "/images/live/ssl-certificate/ssl-certificate-illustration.jpg",
          alt: "Illustration of a figure with a key climbing rising bar steps beside an https padlock and the words SSL Certification",
          fit: "contain",
        },
      },
      {
        type: "split",
        heading: "Extended protection beyond HTTPS",
        paragraphs: [
          "We supply SSL certificates for many kinds of services, helping you protect your site and grow your business online.",
          "By pairing SSL with a site assessment and daily malware scanning, we help give visitors a safer experience and carry protection past HTTPS to every public-facing page. The aim is to reassure your customers that your site is safe at every step, from finding you in search to browsing and buying.",
        ],
        bullets: ["SSL certificates", "Website assessment", "Daily malware scanning", "Protection for public-facing pages"],
        reverse: true,
      },
      {
        type: "features",
        heading: "We provide SSL certificates for",
        items: [
          { title: "Solo websites", body: "Secure a standalone business or brochure site so every page loads over HTTPS.", icon: "browser", iconSrc: "/images/live/ssl-certificate/icons/check.png" },
          { title: "E-commerce websites", body: "Protect customer details, logins and checkout pages on your online store.", icon: "cart", iconSrc: "/images/live/ssl-certificate/icons/check.png" },
          { title: "Payment gateway integrated websites", body: "Give buyers confidence at the point of payment on sites connected to a payment gateway.", icon: "card", iconSrc: "/images/live/ssl-certificate/icons/check.png" },
          { title: "Multiple sub domains", body: "Cover a main domain and its subdomains, such as shop, blog or portal addresses.", icon: "stack", iconSrc: "/images/live/ssl-certificate/icons/check.png" },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Payment Gateway", href: "/payment-gateway/" },
          { label: "E-commerce Website Development", href: "/ecommerce-website-development/" },
          { label: "Web Hosting", href: "/web-hosting/" },
          { label: "Dedicated IP", href: "/dedicated-ip/" },
          { label: "Website Maintenance", href: "/website-maintenance/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // ONLINE STORAGE
  // Live: Need to store your files online? / Track and control your files / Share and locate everywhere /
  // Storage Space (+ banner image) / Features / File Access & Support / Help & Support
  // ---------------------------------------------------------------------------
  {
    slug: "online-storage",
    section: "Hosting",
    metaTitle: "Online Storage and Cloud File Sharing | 123TWS",
    metaDescription:
      "Store, share and back up business files in the cloud with 123TWS online storage. Folder sharing, file versioning, offline sync and access from any device.",
    hero: {
      eyebrow: "Hosting",
      title: "Online Storage",
      intro:
        "Keep your files in the cloud and reach them from any device with a web browser. Share folders with colleagues, track downloads and restore files when you need them.",
      image: { src: "/images/live/online-storage/banner-online-storage.png", alt: "Illustration of a person with a laptop sitting on a server, with a cloud upload arrow and a folder", fit: "contain" },
      cta: consult,
    },
    blocks: [
      {
        type: "features",
        heading: "Your files in the cloud",
        items: [
          {
            title: "Need to store your files online?",
            body: "Open an account and your documents move to the cloud. Organise them into folders that follow you to the office, home or phone.",
            icon: "cloud",
          },
          {
            title: "Track and control your files",
            body: "Download history tells you if a shared file was opened, at what time and by how many people. Links can be set to lapse on a chosen date or left open indefinitely.",
            icon: "chart",
          },
          {
            title: "Share and locate everywhere",
            body: "Send a file to one teammate or a whole group. A shared folder gives partners in other companies one place to collaborate on a project.",
            icon: "share",
          },
        ],
      },
      {
        type: "split",
        heading: "Storage space",
        paragraphs: [
          "Space is one of the first things to weigh up when comparing online document storage. The most practical services offer unlimited storage for a fixed monthly fee.",
          "That way you can keep as many files as you like without worrying about hitting a cap.",
        ],
        image: {
          src: "/images/live/online-storage/online-storage-illustration.jpg",
          alt: "Orange banner reading Online Storage with a computer and folder icon",
          fit: "contain",
        },
      },
      {
        type: "features",
        heading: "Features, access and support",
        intro:
          "Online storage gives you secure, easy-to-reach cloud space where you can preview and share files from anywhere at any time. It frees up room on your own hard drive and helps make sure you never lose your personal files.",
        items: [
          {
            title: "Features",
            body: "Uploading and sharing is simple, with folder sharing, offline syncing and file versioning. Backups update automatically as you make changes, and you can restore any file from the trash even after deleting it.",
            icon: "stack",
          },
          {
            title: "File access and support",
            body: "Store any type of digital file. Upload and open your data from several computers and mobile devices, needing nothing more than a web browser to sign in.",
            icon: "device",
          },
          {
            title: "Help and support",
            body: "Troubleshooting resources include video tutorials and a full knowledge base. When you need a person, support is available by phone, message or live chat.",
            icon: "headset",
          },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Business Email Hosting", href: "/business-email-hosting/" },
          { label: "Web Hosting", href: "/web-hosting/" },
          { label: "Dedicated Servers", href: "/dedicated-servers/" },
          { label: "Custom Software Development", href: "/custom-software-development/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // BUSINESS EMAIL HOSTING
  // Live: intro / Features of our Email Hosting / Business Email Hosting in Coimbatore /
  // Personal, Business, Unlimited Business / We offer 24/7 support / Spam and Secure Virus Protection / For Wide Variety of Email Clients
  // ---------------------------------------------------------------------------
  {
    slug: "business-email-hosting",
    section: "Hosting",
    metaTitle: "Business Email Hosting Packages | 123TWS Coimbatore",
    metaDescription:
      "Professional email on your own domain from 123TWS. Personal, Business and Unlimited Business packages with webmail, calendar, IMAP or POP and spam protection.",
    hero: {
      eyebrow: "Hosting",
      title: "Email Hosting Packages",
      intro:
        "Send email from your own domain with packages for one person, a small team or a growing business. Webmail, calendars and spam protection come built in.",
      image: { src: "/images/live/business-email-hosting/banner-email-hosting.png", alt: "Illustration of an email envelope with an @ sign surrounded by a database, servers, a security shield and a web window", fit: "contain" },
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Web hosting and email solutions from Coimbatore",
        paragraphs: [
          "We are a web hosting and email solutions provider based in Coimbatore, India, with a range of hosting plans to suit different needs.",
          "Our email packages are designed to give you plenty of space at a modest price, so your whole team can communicate from your own domain without a large outlay.",
        ],
        bullets: ["High on space", "Speedy access", "Use it anywhere, on any portable device"],
        image: { src: "/images/hero-workspace.jpg", alt: "Person typing on a laptop at a desk" },
      },
      {
        type: "split",
        heading: "Business email hosting in Coimbatore",
        paragraphs: [
          "We provide enterprise email solutions and services to companies across the corporate world. Handing your email system to a specialist frees your team from managing mail servers.",
          "Outsource your email communication to us and we will run it on our hosting plans, so you can focus on your business.",
        ],
        reverse: true,
      },
      {
        type: "plans",
        heading: "Business email hosting packages",
        intro: "Three packages that scale from a single address to a connected team with synchronised mail on every device.",
        note: UNPRICED_NOTE,
        plans: [
          {
            name: "Personal",
            features: [
              "For email on your personal domain",
              "1 email address",
              "1 GB storage",
              "Full-featured web interface for desktop and mobile",
              "Free integrated calendar and online storage",
            ],
          },
          {
            name: "Business",
            features: [
              "For a connected business, with addresses like sales@ or support@",
              "5 email addresses",
              "2 GB storage",
              "Full-featured web interface for desktop and mobile",
              "Basic mobile and desktop access using POP",
              "Free integrated calendar and online storage",
            ],
          },
          {
            name: "Unlimited Business",
            features: [
              "For maximising your business email on every device",
              "10 email addresses",
              "Unlimited storage",
              "Full-featured web interface for desktop and mobile",
              "Fully synchronised email on mobile and desktop with IMAP",
              "Free integrated Deluxe Group Calendar and online storage",
            ],
          },
        ],
      },
      {
        type: "features",
        heading: "Support, security and compatibility",
        items: [
          {
            title: "We offer 24/7 support",
            body: "Help is available day and night, so a mail problem never has to wait until morning. Our aim is to keep your messages moving without disruption.",
            icon: "headset",
          },
          {
            title: "Spam and secure virus protection",
            body: "Our secure SMTP gateways scan incoming mail for viruses and flag junk, so the most harmful messages never get as far as your inbox. That screening also helps keep attackers away from your login details.",
            icon: "shield",
          },
          {
            title: "For a wide variety of email clients",
            body: "Our business, corporate and personal email hosting works with Microsoft Outlook, Outlook Express, Eudora, Apple Mail, Mozilla Thunderbird and more, with nothing extra to download or install.",
            icon: "mail",
          },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Business Email Service Provider", href: "/business-email-service-provider/" },
          { label: "Domain Registration", href: "/domain/" },
          { label: "Web Hosting", href: "/web-hosting/" },
          { label: "Online Storage", href: "/online-storage/" },
          { label: "Bulk Email Service", href: "/bulk-email-service/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // DIGITAL MARKETING PACKAGES
  // Live: intro / package table (Facebook and Instagram, Landing Page, SEO, Google Ads) /
  // Get This Package, Get This Custom Package / Why do I choose 123TWS digital marketing packages in India?
  // ---------------------------------------------------------------------------
  {
    slug: "digital-marketing-packages",
    section: "Pricing",
    metaTitle: "Digital Marketing Packages in Coimbatore | 123TWS",
    metaDescription:
      "Compare three digital marketing packages from 123TWS covering social media, landing pages, SEO and Google Ads, with posts, keywords and leads per package.",
    hero: {
      eyebrow: "Pricing",
      title: "Digital Marketing Packages in Coimbatore, India",
      intro:
        "As an online marketing company in Coimbatore, we promote brands and products across the internet, social media, search engines and mobile. Our affordable packages are built to bring you leads, traffic and sales.",
      image: { src: "/images/live/digital-marketing-packages/banner-digital-marketing-price.png", alt: "Illustration of a man with a laptop pointing at a large phone showing a bar chart and coins", fit: "contain" },
      cta: consult,
    },
    blocks: [
      {
        type: "plans",
        heading: "Choose your package",
        intro:
          "Each package combines Facebook and Instagram marketing, a landing page, SEO and Google Ads. Prefer a different mix? Ask us for a custom package.",
        note: "Specifications as published on 7 October 2026. Prices for these packages are shared on request. Likes, reach and lead figures are estimates that vary by business. Taxes extra where applicable. Final pricing is confirmed on your quotation.",
        plans: [
          {
            name: "Package 1",
            features: [
              "Social: 10 posts a month, 2 testimonial posters",
              "Social: 500 Facebook likes, reach of 50,000 to 1 lakh",
              "Social: 50 lead ads",
              "Landing page: 3-5 sections, minimum 3-5 products",
              "SEO: 10 keywords, 1 article, 1 blog",
              "Google Ads: reach of 1 lakh, 50 leads, 5 ad designs",
            ],
          },
          {
            name: "Package 2",
            features: [
              "Social: 15 posts a month, 1 video, 4 testimonial posters",
              "Social: audit, 1,000 Facebook likes, reach of 1 to 2 lakh",
              "Social: 100 lead ads",
              "Landing page: 5-7 sections, minimum 5-7 products",
              "SEO: 20 keywords, 2 articles, 2 blogs",
              "Google Ads: reach of 3 lakh, 70 leads, 10 ad designs",
            ],
          },
          {
            name: "Package 3",
            features: [
              "Social: 30 posts a month, 2 videos, 6 testimonial posters",
              "Social: audit, 1,500 Facebook likes, reach of 2 to 3 lakh",
              "Social: 150 lead ads",
              "Landing page: 8-10 sections, minimum 8-10 products",
              "SEO: 30 keywords, 3 articles, 3 blogs",
              "Google Ads: reach of 5 lakh, 100 leads, 15 ad designs",
            ],
          },
        ],
      },
      {
        type: "checklist",
        heading: "Included in every package",
        columns: [
          {
            title: "Facebook and Instagram",
            items: [
              "5 platforms: Facebook, Instagram, Twitter, Google My Business and LinkedIn",
              "Monthly social media report",
              "Social media calendar",
              "Facebook Pixel",
              "Lead automation tools",
            ],
          },
          {
            title: "Landing page",
            items: ["Site audit", "CTA, lead form and popup form", "YouTube video", "Poster carousel", "Thank you page"],
          },
          {
            title: "Search engine optimisation",
            items: [
              "Keyword research and analysis",
              "Google Analytics and Webmaster setup",
              "Sitemap, robots.txt and Schema.org markup",
              "H1 tags, titles, descriptions and alt attributes",
              "Page speed review, silo model and existing content optimisation",
              "Off-page submissions",
            ],
          },
          {
            title: "Google Ads",
            items: [
              "Search, display, lead, traffic, smart, brand awareness and reach campaigns",
              "Target audience setup",
              "Ad copy with headlines and descriptions",
              "Lead automation tools",
            ],
          },
        ],
      },
      {
        type: "split",
        heading: "Why choose 123TWS digital marketing packages in India?",
        paragraphs: [
          "No two businesses market themselves the same way, so our team plans every campaign from your goals rather than a fixed template. We shape a clear, consistent brand across the places your customers spend time, from social feeds and inboxes to search results.",
          "Each package starts by reviewing your site and finding the search terms worth chasing, then moves on to producing content and checking results at regular intervals, so every rupee works as hard as possible. New ventures and long-running firms alike can pick a level that suits their stage and budget, then step up as results come in.",
        ],
        bullets: ["A review of your current site", "Search terms chosen for you", "Fresh content every month", "Results checked at regular intervals"],
        image: { src: "/images/hero-desk.jpg", alt: "Dark desk flat lay with a laptop and work accessories" },
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "Digital Marketing", href: "/digital-marketing/" },
          { label: "SEO Packages", href: "/seo-packages/" },
          { label: "Social Media Marketing", href: "/social-media/" },
          { label: "PPC Services", href: "/ppc-services/" },
          { label: "Content Writing", href: "/content-writing/" },
          { label: "Request a Free Quote", href: "/free-quotes/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // SEO PACKAGES (live URL redirects to /seo-services/)
  // Live: intro / Request Free SEO Audit / Top One SEO Service Provider in Coimbatore /
  // Keyword Positions We Have Sustained for Our Clients / Why Businesses Trust Our SEO Services /
  // Complete SEO Services / SEO Packages For Every Need / Not sure which plan fits your business? /
  // Proven SEO Process for Results / (results stats) / Industries & Businesses We Help Grow Online / FAQ
  // ---------------------------------------------------------------------------
  {
    slug: "seo-packages",
    section: "Pricing",
    metaTitle: "SEO Packages and Pricing | Local to E-commerce | 123TWS",
    metaDescription:
      "Monthly SEO packages from 123TWS: Local SEO at ₹20,000, Worldwide SEO at ₹50,000 and E-commerce SEO at ₹75,000. See keywords, deliverables and timelines.",
    hero: {
      eyebrow: "Pricing",
      title: "SEO Packages in Coimbatore",
      intro:
        "Data-driven SEO that grows your rankings, visibility and leads. We work across Google Search, AI Overviews and AI assistants such as ChatGPT, for local businesses and global brands alike.",
      image: { src: "/images/service-seo.jpg", alt: "Black and white photo of a keyboard, mouse and mug" },
      cta: { label: "Get Your Website Audit for Free", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "contact",
        heading: "Request Free SEO Audit",
        body: "Send us your website and contact details. Our SEO team will review the site and get back to you with a free audit.",
      },
      {
        type: "split",
        heading: "AI-focused SEO strategies",
        paragraphs: [
          "We help businesses climb the search results and grow organic visibility with SEO built around outcomes. Our work connects strong local presence with reach in international markets.",
          "Our approach brings together AI Overview optimisation, generative engine readiness and E-E-A-T content, so your business shows up wherever customers look: Google, voice assistants or the new AI platforms.",
        ],
        bullets: [
          "Proven methodology with measurable ROI",
          "AI Overview SEO for Google's AI-generated answers",
          "Voice search readiness for Alexa, Siri and Google Assistant",
          "Global reach with multi-language and location targeting",
          "Transparent ROI with clear metrics and tracking",
        ],
        image: { src: "/images/industry-software.jpg", alt: "Open laptop resting on a table" },
        reverse: true,
      },
      {
        type: "gallery",
        heading: "Keyword Positions We Have Sustained for Our Clients",
        intro:
          "A sample of client keywords and the Google positions we hold for them. Average positions published on 7 October 2026 ranged from 1.1 to 1.7.",
        items: seoClients.map((c) => ({
          title: c.title,
          caption: c.keywords,
          image: { src: `/images/live/seo-packages/${c.file}`, alt: `${c.title} logo`, fit: "contain" as const },
        })),
      },
      {
        type: "features",
        heading: "Why Businesses Trust Our SEO Services",
        items: [
          { title: "Local + national coverage", body: "One plan can target shoppers searching close to home in Coimbatore and buyers right across the country, so you show up for nearby and nationwide searches alike.", icon: "map", iconSrc: "/images/live/seo-packages/icons/location-dot.svg" },
          { title: "AI-first SEO", body: "Pages are written and marked up so AI summaries, spoken queries and generative search tools can read and quote them.", icon: "lightning", iconSrc: "/images/live/seo-packages/icons/brain.svg" },
          { title: "E-commerce and enterprise ready", body: "Big catalogues and sprawling sites get plans that handle deep page structures and keep working as you add more.", icon: "cart", iconSrc: "/images/live/seo-packages/icons/cart-shopping.svg" },
          { title: "Proven ROI", body: "Our work is measured by real gains in traffic, leads and conversions, not just rankings.", icon: "chart", iconSrc: "/images/live/seo-packages/icons/medal.svg" },
          { title: "Transparent reporting", body: "Plain-language updates explain what changed in your search positions and what it meant for enquiries and sales.", icon: "file", iconSrc: "/images/live/seo-packages/icons/chart-pie.svg" },
          { title: "Dedicated support", body: "You have a named strategist to call on for advice, planning sessions and reviews of how the campaign is going.", icon: "headset", iconSrc: "/images/live/seo-packages/icons/headset.svg" },
        ],
      },
      {
        type: "checklist",
        heading: "Complete SEO Services",
        columns: [
          {
            title: "AI Overview SEO and generative engine",
            items: [
              "Optimisation for Google AI Overviews and voice assistants",
              "Answer-style content and schema integration",
              "Content clusters and authority signals for AI readiness",
            ],
          },
          {
            title: "On-page SEO",
            items: [
              "Keyword research and strategy",
              "SEO-friendly titles and meta descriptions",
              "Internal linking and URL structure",
              "Image optimisation and alt tags",
              "Speed and mobile-friendly improvements",
            ],
          },
          {
            title: "Off-page SEO and link building",
            items: [
              "Quality backlinks from trusted websites",
              "Local citations and business listings",
              "Guest posting and influencer outreach",
              "Social signals and brand mentions",
            ],
          },
          {
            title: "Technical SEO",
            items: [
              "Indexation, crawlability and structured data",
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
              "NAP (name, address, phone) consistency",
              "Positive review management",
            ],
          },
          {
            title: "National and international SEO",
            items: [
              "Country-specific keywords and hreflang tags",
              "Geo-targeted landing pages",
              "Multilingual SEO for global audiences",
              "International link building",
            ],
          },
        ],
      },
      {
        type: "plans",
        heading: "SEO Packages For Every Need",
        intro: "Choose the plan that fits where your customers are searching from.",
        note: PRICED_NOTE,
        plans: [
          {
            name: "Local SEO",
            price: "₹20,000",
            period: "per month",
            features: [
              "For local and regional businesses",
              "Limited to 10 high volume keywords",
              "Google Business Profile optimisation",
              "Local citations and directory listings",
              "Location-specific keyword targeting",
              "Monthly performance reports",
              "Estimated time: 6 months",
            ],
          },
          {
            name: "Worldwide SEO",
            price: "₹50,000",
            period: "per month",
            highlight: true,
            features: [
              "For global reach",
              "20+ high volume generic keywords",
              "International keyword research",
              "Multilingual content strategy",
              "International link building",
              "Advanced analytics dashboard and performance report",
              "Monthly performance reports and review meeting",
              "Estimated time: 8 to 12 months",
            ],
          },
          {
            name: "E-commerce SEO",
            price: "₹75,000",
            period: "per month",
            features: [
              "For online stores",
              "Unlimited keywords based on products and requirements",
              "Product page optimisation",
              "Category page SEO",
              "Structured data implementation",
              "E-commerce link building",
              "Conversion rate optimisation",
              "Monthly performance reports and review meeting",
              "Month on month sales tracking",
              "Review management",
              "Estimated time: 6 to 12 months",
            ],
          },
        ],
      },
      {
        type: "split",
        heading: "Not sure which plan fits your business?",
        paragraphs: [
          "We can build a custom SEO plan around your goals, your industry and the competition you face.",
          "Whether you are a local startup or a global brand, you get a personal strategy aimed at growth you can measure. Ask for a custom plan or speak to our SEO team.",
        ],
        bullets: ["Shaped around your goals", "Benchmarked against your competitors", "Suited to startups and global brands"],
      },
      {
        type: "steps",
        heading: "Proven SEO Process for Results",
        steps: [
          { title: "Website and AI readiness audit", body: "We start by checking where the site stands today, including how AI tools see it and where visitors drop off." },
          { title: "Keyword strategy", body: "A mix of broad, specific and place-based search terms, weighed by how often they are searched and how likely they are to bring business." },
          { title: "Competitor benchmarking", body: "The sites currently beating you are examined so the plan can target the gaps they leave." },
          { title: "On-page optimisation", body: "Page copy, layout, tags and the links between your pages are tuned so search engines read them clearly." },
          { title: "Authority building", body: "Links from reputable sites, press coverage and brand mentions build the trust search engines look for." },
          { title: "AEO and voice search optimisation", body: "Answers are formatted so search engines can lift them into AI summaries, quick-answer boxes and spoken replies." },
          { title: "Performance tracking", body: "Positions, visits and enquiries are watched continuously and summed up in reports that show what you got for your spend." },
        ],
      },
      {
        type: "audience",
        heading: "Industries & Businesses We Help Grow Online",
        intro:
          "Backed by 17+ years in business and transparent monthly reporting, we work with organisations of every size, from local startups to companies entering India from abroad.",
        items: [
          { title: "Local businesses in Coimbatore", icon: "map", iconSrc: "/images/live/seo-packages/icons/store.svg" },
          { title: "National brands across India", icon: "building", iconSrc: "/images/live/seo-packages/icons/flag.svg" },
          { title: "E-commerce stores on Shopify, WooCommerce and Magento", icon: "cart", iconSrc: "/images/live/seo-packages/icons/cart-shopping.svg" },
          { title: "Global businesses entering the Indian market", icon: "globe", iconSrc: "/images/live/seo-packages/icons/globe.svg" },
        ],
      },
      {
        type: "faq",
        heading: "Frequently Asked Questions (FAQ)",
        items: [
          {
            q: "When should I expect to see my site climb in Google results?",
            a: "Timing varies with your industry, how crowded it is, your site's current health, the keywords you target and what you want to achieve. Early movement typically shows up between 3 and 6 months in, and crowded sectors can take 6 to 12 months of consistent effort before rankings settle at the top.",
          },
          {
            q: "What can search optimisation do for a growing company?",
            a: "It brings your business to the attention of buyers at the very moment they look for your products or services. Better visibility means more organic visitors, stronger credibility and enquiries that do not rely only on ad spend.",
          },
          {
            q: "How are target keywords picked for my site?",
            a: "Our starting point is research into your market: what searchers want, what you want to achieve, how competitors perform and how your customers behave. From there we favour terms that signal buying intent, place-based searches and longer, specific phrases that tend to bring enquiries.",
          },
          {
            q: "Do you handle SEO for audiences outside India?",
            a: "We do. For overseas growth we plan country-level targeting, content in more than one language, keyword research for each market and regional content, covering markets such as the USA, UK, Middle East and Asia.",
          },
          {
            q: "Why do businesses in Coimbatore pick 123TWS for SEO?",
            a: "Clients come to us for a mix of technical know-how, optimisation for AI-driven search and content that drives growth, all tracked against clear numbers. That combination has lifted rankings, organic visits and enquiries for businesses selling locally, nationally and internationally.",
          },
          {
            q: "Is SEO worthwhile for a startup or small company?",
            a: "Very much so. Plans are sized for young and smaller businesses that want steady growth without a big budget, and they expand as you do, steadily building visibility, relevant visitors and enquiries.",
          },
          {
            q: "How will I know the SEO work is paying off?",
            a: "Your monthly report covers where your keywords rank, how organic visits are trending, enquiries and conversions, engagement and overall search presence. It links each of those numbers back to growth and return so the value is easy to see.",
          },
        ],
      },
      {
        type: "related",
        heading: "Related services",
        links: [
          { label: "SEO Services", href: "/seo-services/" },
          { label: "Digital Marketing Packages", href: "/digital-marketing-packages/" },
          { label: "Content Writing", href: "/content-writing/" },
          { label: "Search Engine Marketing", href: "/search-engine-marketing/" },
          { label: "E-commerce Website Development", href: "/ecommerce-website-development/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // FREE QUOTES (Website Development Packages / Request your quote)
  // Live: Request a Quote form only (service options listed in the form)
  // ---------------------------------------------------------------------------
  {
    slug: "free-quotes",
    section: "Pricing",
    metaTitle: "Request a Free Quote | Website Packages | 123TWS",
    metaDescription:
      "Request a free quote from 123TWS for website design, development, e-commerce, mobile apps, SEO, digital marketing or CRM. Share your needs and we will reply soon.",
    hero: {
      eyebrow: "Pricing",
      title: "Request a Quote",
      intro:
        "Tell us what you need and we will prepare a quotation for your website, app or marketing project. There is no charge and no obligation.",
      image: { src: "/images/contact-desk.jpg", alt: "Desk by a window with an open laptop" },
      cta: consult,
    },
    blocks: [
      {
        type: "contact",
        heading: "Request your free quote",
        body: "Complete the form with your details and the service you are interested in. Our team will be in touch shortly to talk through your web service needs.",
      },
      {
        type: "audience",
        heading: "Services you can request a quote for",
        items: [
          { title: "Web Designing", icon: "palette" },
          { title: "Web Development", icon: "code" },
          { title: "E-Commerce", icon: "cart" },
          { title: "Mobile App Development", icon: "phone" },
          { title: "SEO", icon: "search" },
          { title: "Digital Marketing", icon: "megaphone" },
          { title: "CRM", icon: "users" },
          { title: "Real Estate CRM", icon: "house" },
          { title: "Others", icon: "puzzle" },
        ],
      },
      {
        type: "related",
        heading: "Explore our services",
        links: [
          { label: "Website Design", href: "/website-design/" },
          { label: "E-commerce Website Development", href: "/ecommerce-website-development/" },
          { label: "Mobile App Development", href: "/mobile-app-development/" },
          { label: "Digital Marketing Packages", href: "/digital-marketing-packages/" },
          { label: "SEO Packages", href: "/seo-packages/" },
          { label: "CRM Software Development", href: "/crm-software-development/" },
        ],
      },
      chatCta,
    ],
  },

  // ---------------------------------------------------------------------------
  // PAYMENT MODE OPTIONS
  // Live: Payment Method intro / Cash, Cheque, Online Transfer / Cheque, Demand Draft / PayPal (+ logo)
  // Bank account details from the live page are deliberately NOT reproduced.
  // ---------------------------------------------------------------------------
  {
    slug: "payment-mode-options",
    section: "Pricing",
    metaTitle: "Payment Modes and Options | 123 Total Web Solutions",
    metaDescription:
      "Pay 123 Total Web Solutions by online bank transfer, cash deposit, cheque, demand draft or PayPal with a credit or debit card. Bank details are on your invoice.",
    hero: {
      eyebrow: "Pricing",
      title: "Payment Method",
      intro:
        "We support several ways to pay, so you can settle invoices however suits you best. Choose the method that is most convenient for your business.",
      image: { src: "/images/live/payment-mode-options/banner-payment-method.png", alt: "Illustration of a woman using her phone beside a large smartphone showing a payment card and coins", fit: "contain" },
      cta: consult,
    },
    blocks: [
      {
        type: "split",
        heading: "Cash, cheque or online transfer",
        paragraphs: [
          "You can pay by online bank transfer, or deposit cash or a cheque into our bank account at a bank branch anywhere in India.",
          "For your security, we do not publish our bank account details on this website. They are printed on every invoice, or you can request them by emailing info@123tws.com.",
        ],
        bullets: [
          "Online bank transfer",
          "Cash deposit at a bank branch",
          "Cheque deposit at a bank branch",
          "Bank details on your invoice or from info@123tws.com",
        ],
      },
      {
        type: "checklist",
        heading: "Cheque or demand draft",
        intro: "Send an account payee cheque or a demand draft, made out as shown on your invoice, to our office address.",
        columns: [
          {
            title: "Office address",
            items: [
              "123 Total Web Solutions",
              "No.79, 3rd Floor, Aiswarya Complex, Nethaji Road",
              "P.N. Palayam, near Mani School Signal",
              "Coimbatore 641037, Tamil Nadu, India",
              "Phone: 0422 435 0451",
            ],
          },
        ],
      },
      {
        type: "split",
        heading: "PayPal",
        paragraphs: [
          "You can also pay us through PayPal. You do not need a PayPal account of your own to do this.",
          "Simply choose to pay with your credit or debit card on the PayPal checkout.",
        ],
        bullets: ["No PayPal account needed", "Pay by credit card or debit card"],
        image: { src: "/images/live/payment-mode-options/paypal-logo.jpg", alt: "PayPal logo", fit: "contain" },
        reverse: true,
      },
      {
        type: "related",
        heading: "Related pages",
        links: [
          { label: "Request a Free Quote", href: "/free-quotes/" },
          { label: "Payment Gateway", href: "/payment-gateway/" },
          { label: "Terms and Conditions", href: "/terms-conditions/" },
          { label: "Contact Us", href: "/contact-us/" },
        ],
      },
      chatCta,
    ],
  },
];
