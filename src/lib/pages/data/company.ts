import type { Img, PageDef } from "../types";

// Company Info and Careers pages. Copy is original; facts (years, names, courses,
// openings, partners) and images are taken from the business's own live site.
// Section order mirrors the live pages.

const letsChat = {
  type: "cta" as const,
  eyebrow: "Let's Chat",
  lines: ["Have a Project,", "Let's Start Today"] as [string, string],
  button: { label: "Get started today", href: "/contact-us/" },
};

/** Client logos, in the order shown on the live Our Clients page. */
const clientLogos: { title: string; image: Img }[] = [
  { title: "Park Service Apartment", image: { src: "/images/live/our-clients/logos/park-service-apartment.jpg", alt: "Park Service Apartment logo", fit: "contain" } },
  { title: "Sri Anantha Kalpha Foundation", image: { src: "/images/live/our-clients/logos/sri-anantha-kalpha-foundation.jpg", alt: "Sri Anantha Kalpha Foundation logo", fit: "contain" } },
  { title: "Suthanthira Polytechnic College", image: { src: "/images/live/our-clients/logos/suthanthira-polytechnic-college.jpg", alt: "Suthanthira Polytechnic College logo", fit: "contain" } },
  { title: "SAM EXiM", image: { src: "/images/live/our-clients/logos/sam-exim.jpg", alt: "SAM EXiM logo", fit: "contain" } },
  { title: "Bliss Corporate", image: { src: "/images/live/our-clients/logos/bliss-corporate.jpg", alt: "Bliss Corporate logo", fit: "contain" } },
  { title: "Parklayer", image: { src: "/images/live/our-clients/logos/parklayer.jpg", alt: "Parklayer logo", fit: "contain" } },
  { title: "Fixodo", image: { src: "/images/live/our-clients/logos/fixodo.jpg", alt: "Fixodo logo", fit: "contain" } },
  { title: "Trip World", image: { src: "/images/live/our-clients/logos/trip-world.jpg", alt: "Trip World logo", fit: "contain" } },
  { title: "Demon Power Sports", image: { src: "/images/live/our-clients/logos/demon-power-sports.jpg", alt: "Demon Power Sports logo", fit: "contain" } },
  { title: "PGR Transformers", image: { src: "/images/live/our-clients/logos/pgr-transformers.jpg", alt: "PGR Transformers logo", fit: "contain" } },
  { title: "Alarmeena Textiles", image: { src: "/images/live/our-clients/logos/alarmeena-textiles.jpg", alt: "Alarmeena Textiles logo", fit: "contain" } },
  { title: "Shilpi's Academy", image: { src: "/images/live/our-clients/logos/shilpi-s-academy.jpg", alt: "Shilpi's Academy logo", fit: "contain" } },
  { title: "Hotel Temple Towers", image: { src: "/images/live/our-clients/logos/hotel-temple-towers.jpg", alt: "Hotel Temple Towers logo", fit: "contain" } },
  { title: "Techno Spark", image: { src: "/images/live/our-clients/logos/techno-spark.jpg", alt: "Techno Spark logo", fit: "contain" } },
  { title: "Invetis Life Sciences", image: { src: "/images/live/our-clients/logos/invetis-life-sciences.jpg", alt: "Invetis Life Sciences logo", fit: "contain" } },
  { title: "Unimaac Engineers", image: { src: "/images/live/our-clients/logos/unimaac-engineers.jpg", alt: "Unimaac Engineers logo", fit: "contain" } },
  { title: "Ociyanic Stone", image: { src: "/images/live/our-clients/logos/ociyanic-stone.jpg", alt: "Ociyanic Stone logo", fit: "contain" } },
  { title: "Mahakali Temple", image: { src: "/images/live/our-clients/logos/mahakali-temple.jpg", alt: "Mahakali Temple logo", fit: "contain" } },
  { title: "NMS Audios", image: { src: "/images/live/our-clients/logos/nms-audios.jpg", alt: "NMS Audios logo", fit: "contain" } },
  { title: "Nakha Financial Services", image: { src: "/images/live/our-clients/logos/nakha-financial-services.jpg", alt: "Nakha Financial Services logo", fit: "contain" } },
  { title: "Thought Brews", image: { src: "/images/live/our-clients/logos/thought-brews.jpg", alt: "Thought Brews logo", fit: "contain" } },
  { title: "Veja Industries", image: { src: "/images/live/our-clients/logos/veja-industries.jpg", alt: "Veja Industries logo", fit: "contain" } },
  { title: "SSB Coaching", image: { src: "/images/live/our-clients/logos/ssb-coaching.jpg", alt: "SSB Coaching logo", fit: "contain" } },
  { title: "Equine Dreams", image: { src: "/images/live/our-clients/logos/equine-dreams.jpg", alt: "Equine Dreams logo", fit: "contain" } },
  { title: "Swathika Shelters", image: { src: "/images/live/our-clients/logos/swathika-shelters.jpg", alt: "Swathika Shelters logo", fit: "contain" } },
  { title: "123 Jobz", image: { src: "/images/live/our-clients/logos/123-jobz.jpg", alt: "123 Jobz logo", fit: "contain" } },
  { title: "Hassan Al Abdooli", image: { src: "/images/live/our-clients/logos/hassan-al-abdooli.jpg", alt: "Hassan Al Abdooli logo", fit: "contain" } },
  { title: "KP Consultancy", image: { src: "/images/live/our-clients/logos/kp-consultancy.jpg", alt: "KP Consultancy logo", fit: "contain" } },
  { title: "LIC", image: { src: "/images/live/our-clients/logos/lic.jpg", alt: "LIC logo", fit: "contain" } },
  { title: "IQ Academy", image: { src: "/images/live/our-clients/logos/iq-academy.jpg", alt: "IQ Academy logo", fit: "contain" } },
  { title: "HELP Trust", image: { src: "/images/live/our-clients/logos/help-trust.jpg", alt: "HELP Trust logo", fit: "contain" } },
  { title: "Jeevas Techno Park", image: { src: "/images/live/our-clients/logos/jeevas-techno-park.jpg", alt: "Jeevas Techno Park logo", fit: "contain" } },
  { title: "KR Properties", image: { src: "/images/live/our-clients/logos/kr-properties.jpg", alt: "KR Properties logo", fit: "contain" } },
  { title: "Inglo", image: { src: "/images/live/our-clients/logos/inglo.jpg", alt: "Inglo logo", fit: "contain" } },
  { title: "Al Farouk Legal Group", image: { src: "/images/live/our-clients/logos/al-farouk-legal-group.jpg", alt: "Al Farouk Legal Group logo", fit: "contain" } },
  { title: "Velocitaracing", image: { src: "/images/live/our-clients/logos/velocitaracing.jpg", alt: "Velocitaracing logo", fit: "contain" } },
  { title: "PNS Exports", image: { src: "/images/live/our-clients/logos/pns-exports.jpg", alt: "PNS Exports logo", fit: "contain" } },
  { title: "Messer Cutting", image: { src: "/images/live/our-clients/logos/messer-cutting.png", alt: "Messer Cutting logo", fit: "contain" } },
  { title: "Mettler Toledo", image: { src: "/images/live/our-clients/logos/mettler-toledo.png", alt: "Mettler Toledo logo", fit: "contain" } },
  { title: "Greenfields", image: { src: "/images/live/our-clients/logos/greenfields.png", alt: "Greenfields logo", fit: "contain" } },
  { title: "Baajara Traditional Food Products", image: { src: "/images/live/our-clients/logos/baajara-traditional-food-products.png", alt: "Baajara Traditional Food Products logo", fit: "contain" } },
  { title: "Jeevas Polytechnic College", image: { src: "/images/live/our-clients/logos/jeevas-polytechnic-college.png", alt: "Jeevas Polytechnic College logo", fit: "contain" } },
  { title: "Nature Food Industries Pvt ltd", image: { src: "/images/live/our-clients/logos/nature-food-industries-pvt-ltd.png", alt: "Nature Food Industries Pvt ltd logo", fit: "contain" } },
  { title: "Gunvant Hardware Mart", image: { src: "/images/live/our-clients/logos/gunvant-hardware-mart.png", alt: "Gunvant Hardware Mart logo", fit: "contain" } },
  { title: "Delphi Technologies", image: { src: "/images/live/our-clients/logos/delphi-technologies.png", alt: "Delphi Technologies logo", fit: "contain" } },
  { title: "Selka Marketing", image: { src: "/images/live/our-clients/logos/selka-marketing.png", alt: "Selka Marketing logo", fit: "contain" } },
  { title: "Indian Smart Metals", image: { src: "/images/live/our-clients/logos/indian-smart-metals.png", alt: "Indian Smart Metals logo", fit: "contain" } },
  { title: "Hotel Saravana Grand", image: { src: "/images/live/our-clients/logos/hotel-saravana-grand.png", alt: "Hotel Saravana Grand logo", fit: "contain" } },
  { title: "KND Kids Delight", image: { src: "/images/live/our-clients/logos/knd-kids-delight.png", alt: "KND Kids Delight logo", fit: "contain" } },
  { title: "Anbu Charities", image: { src: "/images/live/our-clients/logos/anbu-charities.jpg", alt: "Anbu Charities logo", fit: "contain" } },
  { title: "V First Marketing", image: { src: "/images/live/our-clients/logos/v-first-marketing.png", alt: "V First Marketing logo", fit: "contain" } },
  { title: "Kettimelam Events", image: { src: "/images/live/our-clients/logos/kettimelam-events.png", alt: "Kettimelam Events logo", fit: "contain" } },
  { title: "Helloo Salem", image: { src: "/images/live/our-clients/logos/helloo-salem.png", alt: "Helloo Salem logo", fit: "contain" } },
  { title: "Biobeams", image: { src: "/images/live/our-clients/logos/biobeams.png", alt: "Biobeams logo", fit: "contain" } },
  { title: "Sensa", image: { src: "/images/live/our-clients/logos/sensa.png", alt: "Sensa logo", fit: "contain" } },
  { title: "IKOS Serviced Apartments", image: { src: "/images/live/our-clients/logos/ikos-serviced-apartments.png", alt: "IKOS Serviced Apartments logo", fit: "contain" } },
  { title: "VIP Green Homes", image: { src: "/images/live/our-clients/logos/vip-green-homes.png", alt: "VIP Green Homes logo", fit: "contain" } },
  { title: "Zurple Technologies", image: { src: "/images/live/our-clients/logos/zurple-technologies.png", alt: "Zurple Technologies logo", fit: "contain" } },
  { title: "A2Z Palani", image: { src: "/images/live/our-clients/logos/a2z-palani.png", alt: "A2Z Palani logo", fit: "contain" } },
  { title: "Mybook", image: { src: "/images/live/our-clients/logos/mybook.png", alt: "Mybook logo", fit: "contain" } },
  { title: "Amma Matrimonial", image: { src: "/images/live/our-clients/logos/amma-matrimonial.png", alt: "Amma Matrimonial logo", fit: "contain" } },
  { title: "Shanmugam Associates", image: { src: "/images/live/our-clients/logos/shanmugam-associates.png", alt: "Shanmugam Associates logo", fit: "contain" } },
  { title: "Midna Global", image: { src: "/images/live/our-clients/logos/midna-global.png", alt: "Midna Global logo", fit: "contain" } },
  { title: "JB Masala", image: { src: "/images/live/our-clients/logos/jb-masala.png", alt: "JB Masala logo", fit: "contain" } },
  { title: "The Tyre World", image: { src: "/images/live/our-clients/logos/the-tyre-world.png", alt: "The Tyre World logo", fit: "contain" } },
  { title: "Future Era", image: { src: "/images/live/our-clients/logos/future-era.png", alt: "Future Era logo", fit: "contain" } },
  { title: "Sukhveda", image: { src: "/images/live/our-clients/logos/sukhveda.png", alt: "Sukhveda logo", fit: "contain" } },
  { title: "Smart Foreign Studies Bureau", image: { src: "/images/live/our-clients/logos/smart-foreign-studies-bureau.jpg", alt: "Smart Foreign Studies Bureau logo", fit: "contain" } },
  { title: "EatAlley", image: { src: "/images/live/our-clients/logos/eatalley.jpg", alt: "EatAlley logo", fit: "contain" } },
  { title: "Eventakers", image: { src: "/images/live/our-clients/logos/eventakers.png", alt: "Eventakers logo", fit: "contain" } },
  { title: "Living Colours", image: { src: "/images/live/our-clients/logos/living-colours.png", alt: "Living Colours logo", fit: "contain" } },
  { title: "Hazim Al Madani", image: { src: "/images/live/our-clients/logos/hazim-al-madani.jpg", alt: "Hazim Al Madani logo", fit: "contain" } },
  { title: "Siddhu Foods & Nutrients", image: { src: "/images/live/our-clients/logos/siddhu-foods-nutrients.png", alt: "Siddhu Foods & Nutrients logo", fit: "contain" } },
  { title: "Bombay Kulfi", image: { src: "/images/live/our-clients/logos/bombay-kulfi.png", alt: "Bombay Kulfi logo", fit: "contain" } },
  { title: "Agarwal Sweet Palace", image: { src: "/images/live/our-clients/logos/agarwal-sweet-palace.png", alt: "Agarwal Sweet Palace logo", fit: "contain" } },
  { title: "Dmarc", image: { src: "/images/live/our-clients/logos/dmarc.jpg", alt: "Dmarc logo", fit: "contain" } },
  { title: "Gover Horticulture LLC", image: { src: "/images/live/our-clients/logos/gover-horticulture-llc.jpg", alt: "Gover Horticulture LLC logo", fit: "contain" } },
  { title: "Kovai Mills Stores", image: { src: "/images/live/our-clients/logos/kovai-mills-stores.png", alt: "Kovai Mills Stores logo", fit: "contain" } },
  { title: "Ankusam Engineering", image: { src: "/images/live/our-clients/logos/ankusam-engineering.png", alt: "Ankusam Engineering logo", fit: "contain" } },
  { title: "Alerio X-Ray", image: { src: "/images/live/our-clients/logos/alerio-x-ray.jpg", alt: "Alerio X-Ray logo", fit: "contain" } },
  { title: "Vasavi Decorations", image: { src: "/images/live/our-clients/logos/vasavi-decorations.jpg", alt: "Vasavi Decorations logo", fit: "contain" } },
  { title: "The Tile Bros", image: { src: "/images/live/our-clients/logos/the-tile-bros.jpg", alt: "The Tile Bros logo", fit: "contain" } },
  { title: "Virtual Hospital & Clinic", image: { src: "/images/live/our-clients/logos/virtual-hospital-clinic.jpg", alt: "Virtual Hospital & Clinic logo", fit: "contain" } },
  { title: "Mitras Eco Trail", image: { src: "/images/live/our-clients/logos/mitras-eco-trail.png", alt: "Mitras Eco Trail logo", fit: "contain" } },
  { title: "Jai Sun Tourism", image: { src: "/images/live/our-clients/logos/jai-sun-tourism.jpg", alt: "Jai Sun Tourism logo", fit: "contain" } },
  { title: "Martin Groups", image: { src: "/images/live/our-clients/logos/martin-groups.jpg", alt: "Martin Groups logo", fit: "contain" } },
  { title: "PPG Group of Institutions", image: { src: "/images/live/our-clients/logos/ppg-group-of-institutions.jpg", alt: "PPG Group of Institutions logo", fit: "contain" } },
  { title: "Marvel Clothing", image: { src: "/images/live/our-clients/logos/marvel-clothing.jpg", alt: "Marvel Clothing logo", fit: "contain" } },
  { title: "The Camford International School", image: { src: "/images/live/our-clients/logos/the-camford-international-school.jpg", alt: "The Camford International School logo", fit: "contain" } },
  { title: "Vfirst Marketing Services", image: { src: "/images/live/our-clients/logos/vfirst-marketing-services.jpg", alt: "Vfirst Marketing Services logo", fit: "contain" } },
  { title: "Ashwin Hospital", image: { src: "/images/live/our-clients/logos/ashwin-hospital.jpg", alt: "Ashwin Hospital logo", fit: "contain" } },
  { title: "SNS Academy", image: { src: "/images/live/our-clients/logos/sns-academy.jpg", alt: "SNS Academy logo", fit: "contain" } },
  { title: "Anantha Corporation", image: { src: "/images/live/our-clients/logos/anantha-corporation.jpg", alt: "Anantha Corporation logo", fit: "contain" } },
  { title: "Sri Padmabalaji Steels", image: { src: "/images/live/our-clients/logos/sri-padmabalaji-steels.jpg", alt: "Sri Padmabalaji Steels logo", fit: "contain" } },
  { title: "Raasi Polytechnic", image: { src: "/images/live/our-clients/logos/raasi-polytechnic.jpg", alt: "Raasi Polytechnic logo", fit: "contain" } },
  { title: "Samskaara Academy", image: { src: "/images/live/our-clients/logos/samskaara-academy.jpg", alt: "Samskaara Academy logo", fit: "contain" } },
];

export const companyPages: PageDef[] = [
  // ---------------------------------------------------------------- about-us
  {
    slug: "about-us",
    section: "Company Info",
    metaTitle: "About 123 Total Web Solutions | Web Company, Coimbatore",
    metaDescription:
      "Meet 123 Total Web Solutions, an ISO 9001:2015 certified web design, software and digital marketing company in Coimbatore building for clients since 2010.",
    hero: {
      eyebrow: "About 123TWS",
      title: "Know About 123 Total Web Solutions",
      intro:
        "We are a Coimbatore team of designers, developers and marketers who help businesses get found, look credible and sell online. Our story began in 2008 with a city directory and has grown into a full service web company.",
      image: { src: "/images/about-team.jpg", alt: "Black and white photo of a team working side by side at long tables" },
      cta: { label: "Talk to our team", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "How it started",
        paragraphs: [
          "Our founder, Mr. Selvakumar D, grew up in a farming family and went on to earn a Master's degree in Computer Applications. Keen to run his own software firm, he launched 123Coimbatore.com in 2008 as an online directory for the city, and it has now been running for more than 17 years.",
          "In 2010 he followed it with 123 Total Web Solutions, set up to concentrate on web design and development. Since then the company has earned ISO 9001:2015 certification, delivered more than 1500 projects for clients in India and abroad, and opened two overseas branches, one in the UK and one in the US.",
        ],
        image: { src: "/images/live/about-us/md.png", alt: "Mr. Selvakumar D, founder and Managing Director of 123 Total Web Solutions", fit: "contain" },
      },
      {
        type: "features",
        heading: "Mission and Vision",
        items: [
          {
            title: "Mission",
            body: "Use modern web design and development to help our clients and their services become known all over the world.",
            icon: "target",
            iconSrc: "/images/live/about-us/icons/mission-red.png",
          },
          {
            title: "Vision",
            body: "Grow to serve more than 5,000 clients in India and overseas, and build a rewarding, motivating workplace for over 2,000 talented people in the years ahead.",
            icon: "globe",
            iconSrc: "/images/live/about-us/icons/eye-red.png",
          },
        ],
      },
      {
        type: "videos",
        heading: "A Short Intro From Our Founder",
        items: [{ title: "Short intro about 123 Total Web Solutions by our founder", youtubeId: "1sA-NZv4pPc" }],
      },
      {
        type: "split",
        heading: "Our Seven Core Values",
        paragraphs: [
          "Seven values guide how we treat clients, partners and each other. They shape the way we plan projects, share progress and take responsibility for results.",
        ],
        bullets: ["Relationships", "Win-win growth", "Transparency", "Excellency", "Team work", "Trust", "Accountability"],
        image: { src: "/images/live/about-us/seven-core-values.png", alt: "Graphic of our seven core values arranged around a half circle: relationships, win-win growth, transparency, excellency, team work, trust and accountability", fit: "contain" },
        reverse: true,
      },
      {
        type: "split",
        heading: "Quality Policy",
        paragraphs: [
          "We aim to give every customer work of a consistently high standard. We get there by combining four things in the right balance on every project.",
        ],
        bullets: ["Teamwork", "Commitment", "Technology", "Excellence"],
      },
      {
        type: "related",
        heading: "Learn more about us",
        links: [
          { label: "Why choose us", href: "/why-choose-us/" },
          { label: "Our achievements", href: "/achievements/" },
          { label: "Our clients", href: "/our-clients/" },
          { label: "Technologies we use", href: "/our-technologies/" },
          { label: "Careers", href: "/careers/" },
          { label: "Our portfolio", href: "/portfolio/" },
        ],
      },
      letsChat,
    ],
  },

  // ----------------------------------------------------------- why-choose-us
  {
    slug: "why-choose-us",
    section: "Company Info",
    metaTitle: "Why Choose 123 Total Web Solutions | Coimbatore Web Experts",
    metaDescription:
      "Why businesses pick 123 Total Web Solutions: an ISO certified process, 1500+ happy clients, a 25+ member in-house team and services for every online need.",
    hero: {
      eyebrow: "Why us",
      title: "Why Choose Us",
      intro:
        "Choosing a web partner is a long-term decision. Here is what you can expect when you work with our team, from the first call to the support that follows launch.",
      image: { src: "/images/live/why-choose-us/banner-why-us-crop.png", alt: "Illustration of a woman sitting cross-legged with a laptop, thinking beside a large question mark" },
      cta: { label: "Talk to an expert", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Why Us",
        paragraphs: [
          "Total Web Solutions covers web design, web development, mobile site development, logo and brochure design, domain registration, hosting and search engine optimisation from one office in Coimbatore. Our aim is simple: a wide range of professional internet services at prices businesses can afford.",
          "The company is run by a creative, experienced management team with an IT background. That means technical decisions are made by people who understand them and can explain them clearly.",
        ],
        image: { src: "/images/live/why-choose-us/why-us-illustration.png", alt: "Illustration of two people building a website on a giant laptop screen, with a server, settings gears and keys around them", fit: "contain" },
      },
      {
        type: "features",
        heading: "A total web solution company",
        items: [
          { title: "ISO 9001:2015 certified", body: "Our way of working is certified to a recognised quality management standard.", icon: "certificate", iconSrc: "/images/live/why-choose-us/icons/guarantee.png" },
          { title: "1500+ satisfied clients", body: "Businesses of every size have trusted us with their websites, software and marketing.", icon: "star", iconSrc: "/images/live/why-choose-us/icons/rating.png" },
          { title: "Quality, user friendly design", body: "We focus on designs that look fresh, work well and are easy for your customers to use.", icon: "layout", iconSrc: "/images/live/why-choose-us/icons/imac.png" },
          { title: "3000 sq ft centre", body: "A well established office in Coimbatore with more than 25 energetic people on the team.", icon: "building", iconSrc: "/images/live/why-choose-us/icons/employees.png" },
          { title: "Experienced team", body: "Skilled specialists who know how to deliver dependable work on time.", icon: "clock", iconSrc: "/images/live/why-choose-us/icons/clock.png" },
          { title: "Everything in one place", body: "Design, development, marketing, hosting and domains handled by one team.", icon: "globe", iconSrc: "/images/live/why-choose-us/icons/global.png" },
        ],
      },
      {
        type: "split",
        heading: "Professionalism and Accuracy",
        paragraphs: [
          "Markets keep shifting and competition keeps growing, so we shape every service around your specific business and your preferences. When we build something custom, your idea leads and our job is to turn your vision into something real.",
          "Our creative people come from a mix of qualifications and backgrounds, which keeps our designs and solutions fresh. We plan both online and offline experiences that help you win leads now and grow over the long term.",
        ],
        bullets: [
          "Services tailored to your business",
          "Your vision guides every custom build",
          "Fresh ideas from a varied creative team",
          "Results for the short and long term",
          "New features that keep you ahead",
        ],
        video: { youtubeId: "y7yx9JclTyw", title: "123 Total Web Solutions company profile" },
        reverse: true,
      },
      {
        type: "split",
        heading: "Our Team",
        paragraphs: [
          "Our people bring skills across technology, marketing and business management, and they hold themselves to high standards of customer service and reliability. Each member is well qualified, technically strong and genuinely creative.",
          "We treat your business goals and requirements as promises to keep. The team works to deliver the right solution at the right time, often bringing new ideas you had not considered.",
        ],
        bullets: ["Technology", "Marketing", "Business management", "Customer service"],
      },
      {
        type: "related",
        heading: "Explore further",
        links: [
          { label: "About us", href: "/about-us/" },
          { label: "Outsource to us", href: "/outsourcing-services/" },
          { label: "Testimonials", href: "/testimonials/" },
          { label: "Website design", href: "/website-design/" },
          { label: "Digital marketing", href: "/digital-marketing/" },
          { label: "Free quotes", href: "/free-quotes/" },
        ],
      },
      {
        type: "cta",
        eyebrow: "Hire our team",
        lines: ["Hire Our Professional Team,", "On a Weekly or Monthly Basis"],
        button: { label: "Talk to an expert", href: "/contact-us/" },
      },
    ],
  },

  // ----------------------------------------------------- outsourcing-services
  {
    slug: "outsourcing-services",
    section: "Company Info",
    metaTitle: "Outsource Web Design and Development to Coimbatore | 123TWS",
    metaDescription:
      "Outsource web design, development and digital work to 123 Total Web Solutions in Coimbatore. White label partnerships, on-time delivery and friendly support.",
    hero: {
      eyebrow: "Outsourcing",
      title: "Outsourcing in Coimbatore",
      intro:
        "Hand your web projects to a dependable team and keep your focus on your clients. We work as an extension of your business, quietly and on schedule.",
      image: { src: "/images/live/outsourcing-services/banner-outsourcing-crop.png", alt: "Illustration of a globe connected to several small teams working at desks around it" },
      cta: { label: "Discuss a partnership", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Serving you is something we value",
        paragraphs: [
          "Outsourcing is now an everyday part of the technology world. Instead of doing everything in-house, a business buys in the services it needs from a specialist company.",
          "The important thing is choosing a partner that is genuinely good at the work. As one of Coimbatore's established web design providers, 123 Total Web Solutions has a dedicated team ready to meet your web design needs with sound solutions and practical suggestions.",
        ],
      },
      {
        type: "split",
        heading: "Why Outsource to Us?",
        paragraphs: [
          "Partners choose us because we combine reliable delivery with friendly, responsive support. We also work as a white label partner, delivering under your brand so you can offer more to your own clients.",
        ],
        bullets: [
          "The best web based services",
          "Affordable, sensible costs",
          "On-time delivery",
          "Friendly customer support",
          "Smarter web services through design and technology",
          "Innovative, professional, technical and creative results",
          "White label partnership",
        ],
        image: { src: "/images/live/outsourcing-services/outsourcing-illustration.png", alt: "Isometric illustration of two people meeting at a desk beside a dashboard screen, linked to a network of service icons", fit: "contain" },
        reverse: true,
      },
      {
        type: "related",
        heading: "Services often outsourced",
        links: [
          { label: "Website design", href: "/website-design/" },
          { label: "Custom software development", href: "/custom-software-development/" },
          { label: "Mobile app development", href: "/mobile-app-development/" },
          { label: "SEO services", href: "/seo-services/" },
          { label: "Website maintenance", href: "/website-maintenance/" },
          { label: "Graphic design", href: "/graphic-design/" },
        ],
      },
      letsChat,
    ],
  },

  // ------------------------------------------------------------ achievements
  {
    slug: "achievements",
    section: "Company Info",
    metaTitle: "Our Achievements and Milestones | 123 Total Web Solutions",
    metaDescription:
      "Milestones of 123 Total Web Solutions: ISO certification, college awards, Microsoft and Google Workspace partnerships and offices in the US, UK and Canada.",
    hero: {
      eyebrow: "Achievements",
      title: "Our Achievements",
      intro:
        "A year-by-year look at how we grew from a three-person start-up into an ISO certified company with partners and offices around the world.",
      image: { src: "/images/live/achievements/banner-achievements-crop.png", alt: "Illustration of a gold trophy behind a dartboard with an arrow in the bullseye" },
    },
    blocks: [
      {
        type: "gallery",
        heading: "Our journey, year by year",
        intro: "Each year shows our happy clients, team size and the milestone we reached.",
        items: [
          { title: "2011 · Start up", caption: "20 happy clients, 3 team members. Company name changed to 123 TWS (Total Web Solutions)." },
          { title: "2012", caption: "60 happy clients, 5 team members. Certified to ISO 9001:2008." },
          { title: "2013", caption: "60 happy clients, 7 team members. Service Excellence Award from Rasi Polytechnic College." },
          { title: "2014", caption: "220 happy clients, 7 team members. Became a GoDaddy Pro reseller." },
          { title: "2015", caption: "350 happy clients, 11 team members. Appreciation Award from GCT and Hindustan College." },
          { title: "2016", caption: "600 happy clients, 11 team members. Opened a branch office in the US." },
          { title: "2017", caption: "800 happy clients, 11 team members. Opened a branch office in the UK." },
          { title: "2018", caption: "1000 happy clients, 15 team members. Office space grew from 1,000 to 3,000 sq ft." },
          { title: "2019", caption: "1150 happy clients, 20 team members. Launched a directory in Oman and upgraded to ISO 9001:2015." },
          { title: "2020", caption: "1300 happy clients, 25 team members. Became a Microsoft Partner and Google Workspace Partner." },
          { title: "2021", caption: "1500+ happy clients, 25 team members. Named Microsoft Cloud 11 Champion in Tamil Nadu." },
          { title: "2022", caption: "1700+ happy clients, 25+ team members. Became an official channel partner of TATA Nexarc." },
          { title: "2023", caption: "2000+ happy clients, 30+ team members. Opened a new branch office in Canada." },
        ],
      },
      {
        type: "related",
        heading: "More about the company",
        links: [
          { label: "About us", href: "/about-us/" },
          { label: "Why choose us", href: "/why-choose-us/" },
          { label: "Testimonials", href: "/testimonials/" },
          { label: "Business email", href: "/business-email-service-provider/" },
          { label: "Domain registration", href: "/domain/" },
        ],
      },
      letsChat,
    ],
  },

  // ------------------------------------------------------------ testimonials
  {
    slug: "testimonials",
    section: "Company Info",
    metaTitle: "Client Testimonials and Reviews | 123 Total Web Solutions",
    metaDescription:
      "Watch video testimonials and read feedback from businesses that have worked with 123 Total Web Solutions on websites, branding, software and digital marketing.",
    hero: {
      eyebrow: "Testimonials",
      title: "Testimonials",
      intro:
        "The best measure of our work is what clients say once the project is done. Here are some of them, in their own words.",
      image: { src: "/images/live/testimonials/banner-testimonials-crop.png", alt: "Illustration of a woman at a laptop surrounded by star ratings, likes and review cards" },
    },
    blocks: [
      {
        type: "videos",
        heading: "What Our Customers Say",
        intro: "Clients talk about their experience of working with our team.",
        items: [
          { title: "Mr. A. Rathinaswamy, Chief Mentor, MiDNA Global", youtubeId: "7BFslF89M8E" },
          { title: "Mr. Karthikeyan, Friend In Knead", youtubeId: "UrNbYIqr9mM" },
          { title: "Kharthik Narain N, Pheonix", youtubeId: "OizyuWpng48" },
          { title: "Mr. B. Navaneethan, CEO, ENN Consultancy", youtubeId: "uc32IlkHZNc" },
          { title: "Mr. Santhosh Kumar, The Tile Bros", youtubeId: "MIkRdoKJnjg" },
          { title: "Mr. Siva Kumar, Arrow Associate", youtubeId: "v7hMF4yJe_o" },
        ],
      },
      { type: "testimonials" },
      {
        type: "related",
        heading: "See the work behind the reviews",
        links: [
          { label: "Our portfolio", href: "/portfolio/" },
          { label: "Case studies", href: "/case-study/" },
          { label: "Our clients", href: "/our-clients/" },
          { label: "Why choose us", href: "/why-choose-us/" },
        ],
      },
      letsChat,
    ],
  },

  // ------------------------------------------------------------- our-clients
  {
    slug: "our-clients",
    section: "Company Info",
    metaTitle: "Our Clients | Businesses Served by 123 Total Web Solutions",
    metaDescription:
      "Browse some of the 1500+ businesses, schools, hospitals and brands that rely on 123 Total Web Solutions for websites, software and digital marketing.",
    hero: {
      eyebrow: "Our clients",
      title: "Our Clients",
      intro:
        "From local shops to schools, hospitals and international firms, our clients come to us for websites, software and marketing that help them grow.",
      image: { src: "/images/live/our-clients/banner-our-clients-crop.png", alt: "Illustration of a handshake surrounded by icons for growth, teamwork, time and success" },
      cta: { label: "Visit our testimonials", href: "/testimonials/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Putting clients first",
        paragraphs: [
          "Businesses and individuals come to us for many reasons, most often website development and social media management. Whatever the brief, we start by understanding their goals and then work alongside them until those goals are met.",
          "We answer questions promptly so clients always know where things stand, and we welcome their feedback because it makes the work better. Many have stayed with us for years and keep coming back, because they know we deliver results.",
        ],
        bullets: [
          "Website development",
          "Social media management",
          "Prompt answers and clear updates",
          "Long-term support",
        ],
      },
      {
        type: "gallery",
        heading: "Our Clients",
        intro: "Some of the businesses, institutions and brands we have worked with.",
        items: clientLogos,
      },
      {
        type: "related",
        heading: "See more",
        links: [
          { label: "Testimonials", href: "/testimonials/" },
          { label: "Our portfolio", href: "/portfolio/" },
          { label: "Case studies", href: "/case-study/" },
          { label: "Our achievements", href: "/achievements/" },
        ],
      },
      letsChat,
    ],
  },

  // -------------------------------------------------------- our-technologies
  {
    slug: "our-technologies",
    section: "Company Info",
    metaTitle: "Technologies We Use | 123 Total Web Solutions Coimbatore",
    metaDescription:
      "The web technologies behind our projects: HTML, CSS, Bootstrap, jQuery, PHP, MySQL, WordPress, Shopify, OpenCart, APIs and Catalyst, chosen to suit each build.",
    hero: {
      eyebrow: "Technologies",
      title: "Technologies",
      intro:
        "We choose proven, well supported technologies so your website or application is reliable today and easy to maintain later.",
      image: { src: "/images/live/our-technologies/banner-technologies-crop.png", alt: "Isometric illustration of a laptop and phone connected to a cloud server stack" },
      cta: { label: "Discuss your project", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Catalyst",
        paragraphs: [
          "Catalyst is a web tool we favour. It brings together a set of browser-based applications for communication and collaboration, built for teaching, learning, research and everyday work.",
          "Behind it, our team has strong technical groups that deliver dependable software development. We fit each service to your business needs and aim to meet your expectations at every step.",
        ],
        bullets: ["Web-based communication", "Collaboration tools", "Teaching, learning and research", "Everyday work modules"],
      },
      {
        type: "gallery",
        heading: "Other Technologies",
        intro: "The core tools our developers use to design, build and run websites and online stores.",
        items: [
          { title: "HTML", caption: "Structured, standards-based page markup.", image: { src: "/images/live/our-technologies/html.png", alt: "HTML5 logo", fit: "contain" } },
          { title: "CSS", caption: "Styling and responsive layouts.", image: { src: "/images/live/our-technologies/css.png", alt: "CSS3 logo", fit: "contain" } },
          { title: "Bootstrap", caption: "A responsive front-end framework.", image: { src: "/images/live/our-technologies/bootstrap.png", alt: "Bootstrap logo", fit: "contain" } },
          { title: "jQuery", caption: "Lightweight scripting for interactive features.", image: { src: "/images/live/our-technologies/jquery.png", alt: "jQuery logo", fit: "contain" } },
          { title: "PHP", caption: "Server-side code for custom applications.", image: { src: "/images/live/our-technologies/php.png", alt: "PHP logo", fit: "contain" } },
          { title: "WordPress", caption: "Easy-to-edit content management.", image: { src: "/images/live/our-technologies/wordpress.png", alt: "WordPress logo", fit: "contain" } },
          { title: "MySQL", caption: "A reliable database for your data.", image: { src: "/images/live/our-technologies/sql.png", alt: "MySQL logo", fit: "contain" } },
          { title: "API", caption: "Integrations with third-party services.", image: { src: "/images/live/our-technologies/api.png", alt: "API icon", fit: "contain" } },
          { title: "Shopify", caption: "Hosted ecommerce for fast launches.", image: { src: "/images/live/our-technologies/shopify.png", alt: "Shopify logo", fit: "contain" } },
          { title: "OpenCart", caption: "Open source online store platform.", image: { src: "/images/live/our-technologies/opencart.png", alt: "OpenCart logo", fit: "contain" } },
        ],
      },
      {
        type: "related",
        heading: "Services built on these technologies",
        links: [
          { label: "Website design", href: "/website-design/" },
          { label: "CMS website development", href: "/cms-website-development/" },
          { label: "Ecommerce development", href: "/ecommerce-website-development/" },
          { label: "Portal development", href: "/portal-development/" },
          { label: "Custom software", href: "/custom-software-development/" },
          { label: "Payment gateway integration", href: "/payment-gateway/" },
        ],
      },
      letsChat,
    ],
  },

  // ----------------------------------------------------------------- careers
  {
    slug: "careers",
    section: "Careers",
    metaTitle: "Careers at 123 Total Web Solutions | Jobs in Coimbatore",
    metaDescription:
      "Join 123 Total Web Solutions in Coimbatore. Current openings include business development, telesales, front-end development, graphic design and mobile apps.",
    hero: {
      eyebrow: "Careers",
      title: "Careers",
      intro:
        "We are always keen to meet people who enjoy building things for the web. If you like learning, solving problems and working with clients, there may be a place for you here.",
      image: { src: "/images/live/careers/banner-careers-crop.png", alt: "Illustration of a businessman with a briefcase climbing a staircase towards the sky" },
      cta: { label: "Get in touch", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "listings",
        heading: "Join Our Team",
        intro: "To apply, email your CV to hr@123tws.com or call 99400 83668, mentioning the role you are interested in.",
        items: [
          {
            title: "Business Development Executive",
            meta: "Sales · Graduate · Two-wheeler required",
            body: "Find and follow up with prospective clients, build lasting relationships and set plans for business and revenue growth. You will research new markets, move leads through the sales cycle and work with our technical team to match solutions to client needs.",
            bullets: [
              "Direct client meetings, lead follow-up and conversions",
              "Quotation preparation and payment follow-up",
              "Budgeting, forecasting, planning and monitoring",
              "Technical support liaison between clients and our team",
              "Graduate with strong negotiation, marketing and sales skills",
            ],
          },
          {
            title: "Telecaller / Telesales Executive",
            meta: "Sales · 1 to 3 years",
            body: "Make outbound calls to potential customers, explain our products and services, and help turn enquiries into sales. You will keep lead records up to date in our CRM, follow up regularly and share customer feedback with the sales and marketing teams.",
            bullets: [
              "Outbound calling, lead generation and follow-ups",
              "Handling questions and objections confidently",
              "Meeting daily, weekly and monthly targets",
              "High school diploma or equivalent; a bachelor's degree is preferred",
              "CRM software and Microsoft Office skills",
            ],
          },
          {
            title: "Front-end Developer",
            meta: "Development · 1 to 3 years",
            body: "Turn creative ideas into polished client websites and create visual elements that match each brand. You will work closely with our web development team on layouts, wireframes, sample pages and content managed sites.",
            bullets: [
              "Relevant diploma in a related field",
              "HTML, CSS, JavaScript and jQuery",
              "Adobe Photoshop and Illustrator",
              "Content management systems and SEO principles",
              "Cross-browser compatibility and strong visual design",
            ],
          },
          {
            title: "Graphic Designer",
            meta: "Design · 2 to 6 years",
            body: "Create logos, brochures, posters, banners, page layouts and social media graphics for a wide range of clients. You will turn written or spoken briefs into strong visual concepts, work with our content writers and present ideas to clients.",
            bullets: [
              "Adobe Illustrator, Photoshop, InDesign and XD",
              "CorelDRAW",
              "Good sense of colour, typography and layout",
              "Print-ready artwork and social media creatives",
            ],
          },
          {
            title: "Mobile App Developer",
            meta: "Development · 1 to 3 years",
            body: "Design, build, test and maintain mobile apps for Android, iOS or cross-platform environments. You will work with product managers, designers and developers, integrate third-party APIs and keep apps fast, secure and well documented.",
            bullets: [
              "Degree in Computer Science, IT or a related field",
              "Published apps on the App Store or Google Play",
              "Experience with Git and mobile app architecture",
              "Understanding of mobile UI and UX principles",
            ],
          },
        ],
        cta: { label: "Contact us about a role", href: "/contact-us/" },
      },
      {
        type: "related",
        heading: "Other ways to start",
        links: [
          { label: "Internship", href: "/internship/" },
          { label: "Training courses", href: "/training/" },
          { label: "About us", href: "/about-us/" },
        ],
      },
      {
        type: "cta",
        eyebrow: "Careers",
        lines: ["Ready to Grow,", "Build Your Career With Us"],
        button: { label: "Get in touch", href: "/contact-us/" },
      },
    ],
  },

  // -------------------------------------------------------------- internship
  {
    slug: "internship",
    section: "Careers",
    metaTitle: "Internship in Coimbatore for IT Students | 123TWS",
    metaDescription:
      "Students and recent graduates can apply for an internship at 123 Total Web Solutions in Coimbatore and gain hands-on experience on real web projects.",
    hero: {
      eyebrow: "Internship",
      title: "Internship",
      intro:
        "Finishing your studies or just graduated? Our internship gives you hands-on experience in a working web company and helps you find the career path that suits your strengths.",
      image: { src: "/images/live/internship/banner-internship-crop.png", alt: "Isometric illustration of a small team working at desks around a large screen showing charts" },
      cta: { label: "Apply now", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Join Our Team",
        paragraphs: [
          "If you are a student or a graduate looking for a worthwhile internship, this is a good place to build your career skills. Finding the right job takes effort, and we want to point you down a technical path that suits your natural talents.",
          "Send us your details and our experts will call you for an initial screening. Please include the information listed here so we can match you to the right work.",
        ],
        bullets: [
          "Name, mobile number and email",
          "College, qualification and branch of study",
          "Year of passing",
          "Key skills",
          "Preferred internship duration",
        ],
      },
      {
        type: "contact",
        heading: "Apply for an internship",
        body: "Fill in the form with your details, or email info@123tws.com. Our team will call you for an initial screening.",
      },
      {
        type: "related",
        heading: "Related pages",
        links: [
          { label: "Training courses", href: "/training/" },
          { label: "Careers", href: "/careers/" },
          { label: "About us", href: "/about-us/" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- training
  {
    slug: "training",
    section: "Careers",
    metaTitle: "IT Training Courses in Coimbatore | 123TWS Training",
    metaDescription:
      "Practical courses in web design, web development, full stack, digital marketing, SEO and graphic design in Coimbatore, with live projects and placement support.",
    hero: {
      eyebrow: "Training",
      title: "Start With 123 Total Web Solutions Training Courses",
      intro:
        "Courses run from 1 to 6 months with 100% practical training, and internships are available. Learn job-ready skills from people who use them on client projects every day.",
      image: { src: "/images/live/training/training-banner.png", alt: "Illustration of a team meeting around a table while one person presents on a large screen, inside a purple circle", fit: "contain" },
      cta: { label: "Enquire about a course", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "About Us",
        paragraphs: [
          "The 123 Total Web Solutions Training Institute is run by 123 Total Web Solutions, an ISO 9001:2015 certified software development company. We share our experience with people starting out, giving them the skills and knowledge to do well in software development.",
          "We believe in developing talent, encouraging new ideas and helping students grow into capable software professionals. Explore our courses and take your first step towards a successful career.",
        ],
        bullets: [
          "Expert instructors",
          "Cutting-edge curriculum",
          "State-of-the-art facilities",
          "Hands-on learning",
          "Industry connections",
          "Career support",
        ],
        image: { src: "/images/live/training/founder-training.png", alt: "Mr. Selvakumar D, founder of 123 Total Web Solutions, standing with arms folded", fit: "contain" },
      },
      {
        type: "gallery",
        heading: "Our Training Courses",
        intro: "Choose the course that matches where you want your career to go.",
        items: [
          {
            title: "Web Designing Course",
            caption: "3 to 6 months. Learn to design your own websites through hands-on training and real-world projects.",
            image: { src: "/images/live/training/web-design-course.jpg", alt: "Desktop monitor showing a web design sketch, with a hand on the mouse and colourful sticky notes" },
          },
          {
            title: "Web Development Course",
            caption: "3 to 6 months. Live classes that take students and beginners to well-rounded developers.",
            image: { src: "/images/live/training/web-development-course.jpg", alt: "Hands typing on a laptop with lines of code glowing on the screen" },
          },
          {
            title: "Full Stack Development Course",
            caption: "3 to 6 months. Build complete applications, with PHP or Python options.",
            image: { src: "/images/live/training/full-stack-course.jpg", alt: "Glowing icons for HTML, JavaScript and PHP floating above a keyboard" },
          },
          {
            title: "Digital Marketing Course",
            caption: "1 to 3 months. Promote a business online with guidance from working trainers.",
            image: { src: "/images/live/training/digital-marketing-course.jpg", alt: "Hands holding a smartphone with social media icons bursting from the screen" },
          },
          {
            title: "SEO Course",
            caption: "1 to 3 months. Learn the practical steps that lift a website in search results.",
            image: { src: "/images/live/training/seo-course.jpg", alt: "Workshop tools laid on wood around chalk words such as SEO, content, keywords and ranking" },
          },
          {
            title: "Graphic Designing Course",
            caption: "1 to 3 months. A complete design course with placement support.",
            image: { src: "/images/live/training/graphic-course.jpg", alt: "Designer's desk with an iMac running design software, markers and a drawing tablet" },
          },
        ],
      },
      {
        type: "features",
        heading: "How Does 123TWS Work?",
        items: [
          { title: "Live Projects", body: "Work on actual client assignments during your course and learn how a software company runs from the inside.", icon: "device" },
          { title: "Certification", body: "Earn a 123 TWS certificate and take the next step in your career with confidence.", icon: "certificate" },
          { title: "Placement Support", body: "Dedicated mentoring and focused career support to help you land the right role.", icon: "trophy" },
        ],
      },
      {
        type: "videos",
        heading: "Student Feedbacks",
        intro: "Hear from students who have trained with us.",
        items: [
          { title: "Student feedback 1", youtubeId: "MncIyOjdBwM" },
          { title: "Student feedback 2", youtubeId: "Jf5HDiIjmlI" },
          { title: "Student feedback 3", youtubeId: "_PFXnrAwmNM" },
          { title: "Student feedback 4", youtubeId: "XtzG2rrriXo" },
          { title: "Student feedback 5", youtubeId: "0o4Y6gaYgh4" },
          { title: "Student feedback 6", youtubeId: "hVgCMHtFE6Q" },
          { title: "Student feedback 7", youtubeId: "p9EIIbg-aFE" },
          { title: "Student feedback 8", youtubeId: "HF_x_FX4_yc" },
          { title: "Student feedback 9", youtubeId: "kWuBAYBb0AI" },
          { title: "Student feedback 10", youtubeId: "vQGrif5LQvI" },
        ],
      },
      {
        type: "split",
        heading: "Speak With Expert Team",
        paragraphs: [
          "Not sure which course is right for you? Our training team is happy to talk through your goals and suggest the best starting point.",
        ],
        bullets: [
          "Email: ba@123tws.com",
          "Phone: +91 87540 11113",
          "Phone: +91 90038 54123",
          "79, 3rd floor, Aiswarya Complex, Nethaji Road, P N Palayam, Coimbatore 641037",
        ],
      },
      {
        type: "contact",
        heading: "Get In Touch With Us",
        body: "Tell us your name, mobile number, city and whether you prefer online or offline training. Courses include UI / UX Design, Web Development, Full Stack Development (PHP or Python), SEO, Digital Marketing, Graphic Designing, and Corporate or Institutional Training.",
      },
      {
        type: "related",
        heading: "Related pages",
        links: [
          { label: "Internship", href: "/internship/" },
          { label: "Careers", href: "/careers/" },
          { label: "About us", href: "/about-us/" },
        ],
      },
    ],
  },
];
