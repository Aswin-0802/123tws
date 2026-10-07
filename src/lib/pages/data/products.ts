import type { Block, Img, PageDef } from "../types";

// Product pages (CRM and ERP). Section order and images follow the live 123tws.com product
// pages. Feature names, prices and integrations come from those pages; all copy is original.

const demoCta = { label: "Request a CRM Demo", href: "/contact-us/" };

/** Live-site image under public/images/live/<slug>/. Illustrations and screenshots are shown whole. */
const live = (slug: string, file: string, alt: string, fit: Img["fit"] = "contain"): Img => ({
  src: `/images/live/${slug}/${file}`,
  alt,
  fit,
});

/** The "Why Choose Us" strip shared by the older product pages. */
const whyChooseUs = (slug: string, withWebsite = false): Block => {
  const icon = (name: string) => `/images/live/${slug}/icons/${name}.png`;
  return {
    type: "audience",
    heading: "Why Choose Us",
    items: [
      { title: "User-friendly interface", icon: "layout", iconSrc: icon("design") },
      { title: "Mobile-friendly design", icon: "phone", iconSrc: icon("login") },
      ...(withWebsite ? [{ title: "Website and CRM software", icon: "browser" as const, iconSrc: icon("crm") }] : []),
      { title: "Fully secured", icon: "shield", iconSrc: icon("cyber-security") },
      { title: "Dedicated server and frequent backups", icon: "server", iconSrc: icon("data-recovery") },
      { title: "Fully customised", icon: "gear", iconSrc: icon("customization") },
    ],
  };
};

/** Delivered CRM projects shown on the newer product pages (live "Proven CRM Solutions" section). */
const provenCrm = (slug: string): Block => ({
  type: "gallery",
  heading: "CRM projects we have delivered",
  items: [
    {
      title: "Kovai Mobiles",
      caption: "Mobile service: a CRM for handling phone repairs, tracking each job and keeping customers informed.",
      image: live(slug, "kovai-crm.png", "Kovai Mobiles service centre CRM dashboard shown on a desktop, tablet, laptop and phone, with sales and spares totals"),
    },
    {
      title: "Core Automotive",
      caption: "Service business: a ticketing CRM for logging service requests and following each issue through.",
      image: live(slug, "core-crm.png", "Core Automotive CRM dashboard on several devices with coloured tiles for leads, follow-ups, clients and tickets"),
    },
    {
      title: "Sushfresh",
      caption: "Online meat retail: a billing CRM that brings invoices, stock and sales figures together.",
      image: live(slug, "sushfresh-crm.png", "Sushfresh admin dashboard on several devices showing vendor and offline order panels"),
    },
    {
      title: "Marketing CRM",
      caption: "Lead management: our own CRM for running campaigns, leads and customer engagement in one place.",
      image: live(slug, "marketing-crm.png", "Marketing CRM dashboard on several devices with lead counts, a monthly calendar and a meetings panel"),
    },
  ],
});

const quoteCta = (lines: [string, string]): Block => ({
  type: "cta",
  eyebrow: "Let's Chat",
  lines,
  button: { label: "Get a Free Quote", href: "/free-quotes/" },
});

const demoBand = (lines: [string, string]): Block => ({
  type: "cta",
  eyebrow: "Let's Chat",
  lines,
  button: demoCta,
});

/* -------------------------------------------------------------------------- */

const MK = "marketing-crm-software";
const PR = "payroll-software";
const BQ = "boutique-management-software";
const AR = "architect-crm-software";
const RE = "real-estate-crm-software";
const PH = "photography-crm";
const MD = "medical-crm-software";
const CR = "computer-repair-crm";
const TR = "travel-crm";
const UP = "upvc-crm-software";
const SC = "school-erp";

export const productPages: PageDef[] = [
  /* ------------------------------------------------------------------ */
  /* Marketing CRM                                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: MK,
    section: "Products",
    metaTitle: "Marketing CRM Software for Lead and Sales Teams | 123TWS",
    metaDescription:
      "Assign leads, track field staff, raise GST-ready quotes and invoices and query your data with an AI chatbot. Marketing CRM on web and Android from 123TWS.",
    hero: {
      eyebrow: "CRM Products",
      title: "Marketing CRM Software",
      intro:
        "Give your marketing and sales team one dashboard for leads, projects, staff and paperwork. It includes an AI chatbot, live tracking of calls and staff locations, and quotations and invoices generated inside the CRM.",
      image: live(MK, "app-dashboard-screen.jpg", "Marketing CRM mobile app home screen with cards for outstanding amount, income, created leads and converted leads"),
      cta: { label: "Book a Free Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "audience",
        heading: "Industries we serve",
        intro: "Marketing teams in a wide range of sectors run their lead flow through the CRM.",
        items: [
          { title: "Healthcare", iconSrc: "/images/live/marketing-crm-software/icons/healthcare-icon.svg", icon: "stethoscope" },
          { title: "Education", iconSrc: "/images/live/marketing-crm-software/icons/education-icon.svg", icon: "graduation" },
          { title: "Construction", iconSrc: "/images/live/marketing-crm-software/icons/construction-icon.svg", icon: "building" },
          { title: "Travel", iconSrc: "/images/live/marketing-crm-software/icons/travel-icon.svg", icon: "airplane" },
          { title: "Software", iconSrc: "/images/live/marketing-crm-software/icons/web-development-icon.svg", icon: "code" },
          { title: "Textile", iconSrc: "/images/live/marketing-crm-software/icons/textiles-icon.svg", icon: "shirt" },
          { title: "Fitness and Wellness", iconSrc: "/images/live/marketing-crm-software/icons/muscle-icon.svg", icon: "heart" },
          { title: "Food Services", iconSrc: "/images/live/marketing-crm-software/icons/food-icon.svg", icon: "cart" },
        ],
      },
      {
        type: "split",
        heading: "What sets 123TWS Marketing CRM apart",
        paragraphs: [
          "Real estate builders, manufacturing service providers and financial firms all depend on a steady stream of leads and a team that follows them up. Marketing CRM makes it simpler to capture those enquiries, hand out projects and keep an eye on how efficiently each employee works.",
          "Everything sits in one secure, cloud-based system that new staff can pick up quickly.",
        ],
        bullets: [
          "Quick for new staff to learn",
          "Protected access from the cloud",
          "Calls linked back to each lead",
          "Analytics inside the dashboard",
          "Projects, teams and services managed together",
          "Quotations and invoices side by side",
        ],
      },
      {
        type: "features",
        heading: "Core Features",
        intro: "What the CRM web application gives your team.",
        items: [
          { title: "Lead Assignment", body: "Route each lead to the employee whose skills and current workload suit it best.", icon: "users" },
          { title: "Custom Lead Management", body: "Create lead sources and status labels that mirror the way your business works.", icon: "target" },
          { title: "Project Management", body: "Add projects, give them to team members and follow their status with fields you can customise.", icon: "briefcase" },
          { title: "Employee Management", body: "Hold staff data, KYC, bank details, documents and appointments in one place.", icon: "user" },
          { title: "Quotes and Invoices", body: "GST is applied automatically, and every document can be edited and downloaded as a PDF.", icon: "receipt" },
          { title: "Reports and Tracking", body: "See payment history, advertising lead reports, project status and call logs.", icon: "chart" },
          { title: "Smart Notifications", body: "Automatic reminders and team alerts cover follow-ups, meetings and task changes.", icon: "clock" },
          { title: "Intelligent AI Chatbot", body: "Type a question and the built-in chatbot pulls up the CRM data you need straight away.", icon: "chat" },
        ],
      },
      {
        type: "split",
        heading: "Your CRM on Android",
        paragraphs: [
          "The Marketing CRM Android app puts your sales and marketing data on your phone. Everything you can do in the web version is available in the app, so field staff never have to wait until they are back at a desk.",
          "Managers can follow calls, locations and task progress as the day goes on.",
        ],
        bullets: [
          "Calls tracked as they happen",
          "Staff locations shown on a map",
          "Every web feature, inside the app",
          "Task progress and performance updated live",
        ],
      },
      {
        type: "gallery",
        heading: "Inside the Android app",
        items: [
          { title: "Sign in", caption: "Secure login for every team member.", image: live(MK, "app-login-screen.jpg", "Marketing CRM app sign-in screen with email and password fields") },
          { title: "Create an account", caption: "Sign up with an email address and mobile number.", image: live(MK, "app-signup-screen.jpg", "Marketing CRM app sign-up screen asking for email address and mobile number") },
          { title: "Dashboard", caption: "Outstanding amounts, income and lead counts at a glance.", image: live(MK, "app-dashboard-screen.jpg", "App dashboard showing outstanding amount, income amount, created leads and converted leads") },
          { title: "Analytics", caption: "Month-wise leads and income charts.", image: live(MK, "app-analytics-screen.jpg", "App screen with a month-wise leads bar chart and a month-wise income line chart") },
        ],
      },
      {
        type: "features",
        heading: "Smart Automation Tools, included as standard",
        items: [
          { title: "Webhook / API Integration", body: "Link third-party tools and keep data in sync automatically.", icon: "link" },
          { title: "Web and Third-Party Form Capture", body: "Bring in leads from your website, Instagram, Facebook or IndiaMART without retyping them.", icon: "browser" },
          { title: "Hierarchy-Based Access Control", body: "Decide permissions and restrictions for each level of the team.", icon: "lock" },
          { title: "Daily Task Sheet", body: "Employees record what they did each day, so productivity is easy to review.", icon: "check" },
          { title: "Cheque and Travel History Tracker", body: "Keep full records of business trips, payments and visits.", icon: "map" },
          { title: "Meeting Scheduler", body: "Set up meetings, invite colleagues and send notifications without leaving the CRM.", icon: "calendar" },
        ],
      },
      {
        type: "plans",
        heading: "Pricing",
        intro: "Whether you build homes, run a manufacturing service or manage a financial firm, the Starter Plan covers the essentials.",
        plans: [
          {
            name: "Starter Plan",
            price: "₹5,000",
            period: "per year",
            features: ["2 users", "Unlimited leads", "All core features", "Web and Android app access", "AI chatbot included", "Easy upgrade options"],
            highlight: true,
          },
        ],
      },
      {
        type: "related",
        heading: "Explore more products",
        links: [
          { label: "Real Estate CRM Software", href: "/real-estate-crm-software/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
          { label: "Payroll Software", href: "/payroll-software/" },
          { label: "CRM Software Development", href: "/crm-software-development/" },
          { label: "Bulk SMS Service", href: "/bulk-sms-coimbatore/" },
          { label: "Digital Marketing", href: "/digital-marketing/" },
        ],
      },
      demoBand(["Give your sales team one dashboard", "Book a free demo"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Payroll                                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: PR,
    section: "Products",
    metaTitle: "Payroll Software with Attendance and Payslips | 123TWS",
    metaDescription:
      "Calculate salaries from attendance and leave, generate payslips automatically and keep full payroll history in one place with the 123TWS Payroll CRM.",
    hero: {
      eyebrow: "HR and Payroll",
      title: "Payroll Software",
      intro:
        "Run employees, payroll, attendance, payslips and HR reports from one platform and win back hours every month. Salary processing is automatic, payslips are instant and the whole system works on mobile.",
      image: live(PR, "payroll-performance-dashboard.jpg", "HR dashboard mockup with attendance, leave and task statistics, a team performance table and a performance comparison chart"),
      cta: { label: "Book a Demo", href: "/contact-us/" },
    },
    blocks: [
      { type: "clients" },
      {
        type: "features",
        heading: "Payroll features",
        intro: "A central system that makes salary processing quicker, simpler and more accurate.",
        items: [
          { title: "Automated Salary Processing", body: "Pay is worked out from attendance, leave, deductions, allowances and your other salary components.", icon: "wallet" },
          { title: "Payslip Generation", body: "Professional payslips are created automatically and employees can reach them easily.", icon: "receipt" },
          { title: "Salary Management", body: "Salary structures, earnings, deductions, bonuses and incentives are all managed from one screen.", icon: "card" },
          { title: "Payroll History", body: "Full payroll records stay on file, so earlier salary details are quick to find.", icon: "database" },
        ],
      },
      {
        type: "split",
        heading: "The trouble with manual payroll",
        paragraphs: [
          "Every new hire adds more rows to the attendance sheet, more leave emails, more pay sums and more payslips to prepare, and it all gets harder to keep straight. The work piles up, the files multiply and every manual step is another chance for an error.",
          "There is a better way. The Payroll CRM brings the whole payroll process into one central platform.",
        ],
        bullets: [
          "Staff records kept in one place",
          "Attendance and leave logged side by side",
          "Salaries worked out for you",
          "Deductions and allowances applied by rule",
          "Payslips produced without manual effort",
          "Payroll reports whenever you need them",
          "A self-service view for every employee",
        ],
      },
      {
        type: "features",
        heading: "Automation",
        items: [
          { title: "Automated Payroll Calculations", body: "Fewer repetitive sums to do by hand each time payroll runs.", icon: "lightning" },
          { title: "Attendance-to-Payroll Flow", body: "Attendance data connects directly to the payroll workflow.", icon: "calendar" },
          { title: "Leave and Approval Workflows", body: "Leave requests and approvals become simpler to handle.", icon: "check" },
          { title: "Automated Payslips", body: "Payslips are produced without preparing each one individually.", icon: "receipt" },
          { title: "Employee Notifications", body: "Staff are kept up to date on important payroll and HR changes.", icon: "chat" },
          { title: "Payroll History", body: "Past payroll information stays tidy and easy to reach.", icon: "database" },
        ],
      },
      {
        type: "gallery",
        heading: "Inside the payroll dashboard",
        intro: "How the dashboard is organised, from tailored modules to access rights and filters.",
        items: [
          {
            title: "Personalised modules",
            caption: "Arrange the modules around the way your HR team works.",
            image: live(PR, "payroll-performance-dashboard.jpg", "Dashboard mockup with attendance and leave percentages, a team performance list and an expenses panel"),
          },
          {
            title: "Role-based access",
            caption: "Role-based access gives each person the permissions their level needs.",
            image: live(PR, "workflow-access-screen.jpg", "CRM screen mockup listing workflows with status, type and last-edited columns and an actions menu"),
          },
          {
            title: "Filters and views",
            caption: "Filter records and switch to views that suit the task in hand.",
            image: live(PR, "leave-dashboard-filters.jpg", "Leave dashboard mockup with weekly leave pattern, monthly stats, consumed leave types and pending leave requests"),
          },
        ],
      },
      {
        type: "audience",
        heading: "Who it is for",
        intro: "Whether you employ a handful of people or run several branches, the Payroll CRM adapts to your setup.",
        items: [
          { title: "Small businesses", icon: "briefcase" },
          { title: "Growing companies", icon: "rocket" },
          { title: "HR and payroll teams", icon: "users" },
          { title: "Multi-branch organisations", icon: "building" },
        ],
      },
      {
        type: "checklist",
        heading: "Before and after",
        columns: [
          {
            title: "Payroll done by hand",
            items: [
              "Data spread over several spreadsheets",
              "Salaries worked out by hand",
              "Employee details in different places",
              "Leave requested over email",
              "Payslips prepared one by one",
              "HR answering the same queries again and again",
              "Reports that are hard to put together",
            ],
          },
          {
            title: "Using the 123TWS Payroll CRM",
            items: [
              "One central system",
              "Structured payroll processing",
              "Organised employee profiles",
              "A digital leave workflow",
              "Automated payslips",
              "Employee self-service",
              "Reports in one place",
            ],
          },
        ],
      },
      {
        type: "related",
        heading: "Related products and services",
        links: [
          { label: "School ERP", href: "/school-erp/" },
          { label: "Marketing CRM Software", href: "/marketing-crm-software/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
          { label: "Custom Software Development", href: "/custom-software-development/" },
          { label: "Billing Software Development", href: "/billing-software-development/" },
        ],
      },
      demoBand(["Make payroll the easy part of the month", "Book a free demo"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Boutique                                                             */
  /* ------------------------------------------------------------------ */
  {
    slug: BQ,
    section: "Products",
    metaTitle: "Boutique Management Software for Designers | 123TWS",
    metaDescription:
      "Track orders, delivery dates, staff output, payments and petty cash in one boutique CRM. Customer database and bulk SMS built in. Made in Coimbatore by 123TWS.",
    hero: {
      eyebrow: "CRM Products",
      title: "Boutique Management Software",
      intro:
        "A boutique CRM for designers that helps your team work together and keeps client information in one shared place. Stronger customer relationships build goodwill for your label over time.",
      image: live(BQ, "boutique-crm-illustration.png", "Illustration of two people beside a large monitor showing CRM with icons for messages, reports, contacts and email"),
      cta: { label: "Free Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Employee Work Graph",
        paragraphs: [
          "Every job is logged against the person who worked on it and how long it took. That lets you measure each employee's output on a daily, weekly or monthly basis.",
        ],
        image: live(BQ, "employee-work-graph.png", "Illustration of three people beside rising blue bar columns"),
      },
      {
        type: "split",
        heading: "Employee Wages Tracker",
        paragraphs: [
          "Keep each employee's salary alongside their personnel record, place in the organisation, salary structure and current status. Records for both past and present staff stay available.",
        ],
        image: live(BQ, "employee-wages-tracker.png", "Illustration of a woman with a magnifying glass over a profile rating card beside banknotes and a calendar"),
        reverse: true,
      },
      {
        type: "split",
        heading: "On Time Delivery Scheduler",
        paragraphs: [
          "The delivery module shows availability by date, so you can see existing commitments before you accept a new order. That makes it easier to promise a delivery date you can meet.",
        ],
        image: live(BQ, "delivery-scheduler.png", "Illustration of people working on laptops around a large clock and a screen"),
      },
      {
        type: "split",
        heading: "Customer Database Management",
        paragraphs: [
          "Store every customer's details, including WhatsApp number and email ID. Use the list to send important messages such as birthday wishes and appointment reminders.",
        ],
        image: live(BQ, "customer-database.png", "Illustration of a team working beside a stack of servers with a security shield"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Track Orders Status",
        paragraphs: [
          "Each piece passes through several stages on its way from raw material to finished product. Every order carries a unique ID, so you can look up its current stage and tell the customer in seconds.",
        ],
        image: live(BQ, "order-status-tracking.png", "Illustration of a man on a laptop in front of a database with linked customer profiles"),
      },
      {
        type: "split",
        heading: "Payment Tracker",
        paragraphs: [
          "Payment reminders go out automatically from the cloud, so there is no paperwork to chase. Invoices leave on time and you get paid when you should.",
        ],
        image: live(BQ, "payment-tracker.png", "Illustration of a man pointing at a checklist on a phone screen beside coins and a bank card"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Time Management Tools",
        paragraphs: [
          "Work out the average time your team needs to complete a design. With that figure you can give each customer an accurate delivery time and keep the workshop focused.",
        ],
        image: live(BQ, "time-management.png", "Illustration of a man behind a large clock with a calendar, envelope and checklist"),
      },
      {
        type: "split",
        heading: "Accounts Management",
        paragraphs: [
          "Manage petty cash and record every cash inflow and outflow. Those figures give you a clear view of how the boutique is performing.",
        ],
        image: live(BQ, "accounts-management.png", "Illustration of a man working at a computer with a calculator, files and a percentage sign"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Report Management",
        paragraphs: ["Pull reports in the following categories whenever you need them."],
        bullets: [
          "Employee Work Graph Report",
          "Accounts Report",
          "Payment Report",
          "Outsource Report",
          "Delivery Delay Report",
          "Employee Report",
        ],
        image: live(BQ, "report-management.png", "Illustration of three people reviewing bar, pie and line charts on large screens"),
      },
      {
        type: "split",
        heading: "Bulk SMS",
        paragraphs: [
          "Message every contact saved in the CRM with a single click. Promotions, offers and festival greetings help build goodwill with your customers.",
        ],
        image: live(BQ, "bulk-sms.png", "Illustration of two people messaging beside a large phone showing chat bubbles"),
        reverse: true,
      },
      whyChooseUs(BQ),
      {
        type: "related",
        heading: "You may also need",
        links: [
          { label: "eCommerce Website Development", href: "/ecommerce-website-development/" },
          { label: "Bulk SMS Service", href: "/bulk-sms-coimbatore/" },
          { label: "Billing Software Development", href: "/billing-software-development/" },
          { label: "Payroll Software", href: "/payroll-software/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
        ],
      },
      quoteCta(["Run your boutique from one system", "Get a free quote"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Architect                                                            */
  /* ------------------------------------------------------------------ */
  {
    slug: AR,
    section: "Products",
    metaTitle: "Architect CRM Software for Design Practices | 123TWS",
    metaDescription:
      "Manage leads, follow-ups, quotations, project invoices, payments, salaries and expenses in one CRM built for architecture firms. Excel reports included.",
    hero: {
      eyebrow: "CRM Products",
      title: "Architect CRM Software",
      intro:
        "Reach key client information quickly and manage every client with ease. The CRM is customised to your practice, new features can be added, and several users can work in it with secure, separate authorisation.",
      image: live(AR, "architect-crm-illustration.png", "Isometric illustration of the word Architect surrounded by people drafting blueprints, sketching a house and working at computers"),
      cta: { label: "Free Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Lead Management System",
        paragraphs: [
          "Record and manage every lead that comes in. You can also see which advertising source produces the most enquiries, which helps you plan where to advertise next.",
        ],
        image: live(AR, "lead-management.png", "Illustration of a funnel filtering customer avatars into a bar chart, with a man holding a magnifying glass"),
      },
      {
        type: "split",
        heading: "Follow Up Management",
        paragraphs: [
          "Converting a lead depends on keeping in touch and keeping the client informed. The CRM reminds you of every follow-up, keeps a record of each one and lets you save the conversation as a document.",
        ],
        image: live(AR, "follow-up-management.png", "Illustration of a man showing a phone screen to three cheering people with follower badges"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Salary and Advance Management",
        paragraphs: [
          "Log each employee's salary, along with any advance they have taken. Because everything is stored in the cloud, there is no room for confusion between management and staff.",
        ],
        image: live(AR, "salary-advance-management.png", "Illustration of a woman on a laptop in front of large rupee coins, a banknote and a rising chart"),
      },
      {
        type: "split",
        heading: "Invoice Generation",
        paragraphs: [
          "Produce an invoice for each project in a few steps and save time. You can change the invoice layout, and every invoice is created as a PDF and kept on record.",
        ],
        image: live(AR, "invoice-generation.png", "Illustration of a large invoice with a calculator, a phone showing a pay button and a credit card"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Quotation Generation",
        paragraphs: [
          "Create complete quotes with the client name, quote number and project details, plus your own notes and images. Quotes for leads are generated automatically as PDFs and saved to cloud storage, so you can reply to clients quickly and find any quote later.",
        ],
        image: live(AR, "quotation-generation.png", "Illustration of two people presenting web page mockups with star ratings while a third works on a laptop"),
      },
      {
        type: "split",
        heading: "Payment Tracking",
        paragraphs: [
          "Once a lead converts and pays an advance, the CRM starts tracking it. Every payment received from the client is logged and kept in order.",
        ],
        bullets: [
          "Automatic travel distance and time records",
          "Customer payment tracker",
          "Employee payment tracker",
          "Payment date",
          "Payment mode",
          "Outsource report",
          "Payment reminder",
          "Descriptions",
        ],
        image: live(AR, "payment-tracking.png", "Illustration of a man pointing at a tablet with a checklist form, beside a credit card, coins and a calendar"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Expense Tracking",
        paragraphs: [
          "Record the practice's everyday expenses as they happen. Review spending month by month or year by year to find where costs can come down.",
        ],
        image: live(AR, "expense-tracking.png", "Illustration of a man using a laptop while sitting on a pile of coins beside cash and bar charts"),
      },
      {
        type: "split",
        heading: "Report Generation",
        paragraphs: [
          "Export Excel reports on marketing performance, lead conversion and payment details.",
        ],
        image: live(AR, "report-generation.png", "Illustration of a clipboard holding a report with a pie chart, a line graph and checkmarks"),
        reverse: true,
      },
      whyChooseUs(AR),
      {
        type: "related",
        heading: "Related products",
        links: [
          { label: "Real Estate CRM Software", href: "/real-estate-crm-software/" },
          { label: "UPVC CRM Software", href: "/upvc-crm-software/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
          { label: "Website Design", href: "/website-design/" },
          { label: "Portfolio", href: "/portfolio/" },
        ],
      },
      quoteCta(["A CRM shaped around your practice", "Get a free quote"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Real estate                                                          */
  /* ------------------------------------------------------------------ */
  {
    slug: RE,
    section: "Products",
    metaTitle: "AI-Powered Real Estate CRM Software | 123TWS Coimbatore",
    metaDescription:
      "Capture buyer leads from portals, ads and WhatsApp, schedule site visits, track negotiations and close bookings with an AI-assisted real estate CRM from 123TWS.",
    hero: {
      eyebrow: "CRM Products",
      title: "Real Estate CRM Software",
      intro:
        "A custom CRM with built-in AI that keeps every buyer enquiry in view, sends follow-up reminders for you and helps your team close more property deals. It is available at ₹24,999 with lifetime access.",
      image: live(RE, "crm-dashboard.png", "Real estate CRM dashboard with total and booked plots, available plots, leads, follow-ups and site visits, beside a sidebar menu"),
      cta: { label: "Book a Free Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Never lose track of a buyer",
        paragraphs: [
          "Property businesses often lose buyers because a follow-up was missed or an enquiry was never logged. Our custom Real Estate CRM gathers enquiries from property portals, WhatsApp, Facebook and Google ad campaigns and your own website, then handles the follow-up reminders for you.",
          "Your team can schedule site visits, keep track of negotiations and turn more enquiries into confirmed bookings.",
        ],
        bullets: ["Every enquiry accounted for", "An AI assistant for follow-ups", "Built-in WhatsApp", "Works well on phones", "Several projects in one CRM"],
      },
      { type: "clients" },
      {
        type: "features",
        heading: "Where property sales slip away",
        intro: "Each untracked enquiry, slow reply or missed call-back can cost you a booking.",
        items: [
          { title: "Untracked enquiries", body: "Enquiries go astray when nobody is tracking them properly.", icon: "target" },
          { title: "Late follow-ups", body: "Sales staff do not get back to buyers at the right moment.", icon: "clock" },
          { title: "Unclear site visit status", body: "There is no clear record of which visits are booked and which are done.", icon: "map" },
          { title: "Negotiations hard to follow", body: "Offers and customer discussions are hard to keep an eye on.", icon: "chat" },
          { title: "Spreadsheet reporting", body: "Hours disappear into spreadsheets and hand-built reports.", icon: "file" },
          { title: "Unclear campaign returns", body: "Nobody can say which campaigns actually lead to bookings.", icon: "chart" },
        ],
      },
      {
        type: "steps",
        heading: "From enquiry to booking",
        intro: "Every stage of the sales cycle is tracked, from the first enquiry to a lasting relationship.",
        steps: [
          { title: "Lead / Enquiry", body: "New buyer enquiries are captured as they arrive." },
          { title: "Follow-Up", body: "Call and message reminders arrive on time." },
          { title: "Site Visit", body: "Property tours are scheduled and tracked." },
          { title: "Negotiation", body: "Offers and counter-offers are recorded." },
          { title: "Booking", body: "The deal is confirmed and closed." },
          { title: "Customer Relationship Management", body: "Engagement with the client continues well after the sale." },
        ],
      },
      {
        type: "features",
        heading: "Lead sources",
        intro: "Leads arrive through several channels, so no opportunity is missed.",
        items: [
          { title: "Website Forms", body: "Contact and property enquiry forms on your site.", icon: "browser" },
          { title: "Google Ads", body: "Enquiries generated by your search and display ads.", icon: "search" },
          { title: "Facebook and Instagram", body: "Leads and messages from social media ads.", icon: "share" },
          { title: "WhatsApp", body: "Direct chats and replies to broadcasts.", icon: "chat" },
          { title: "Property Portals", body: "99acres, Magicbricks, Housing.com and others.", icon: "house" },
          { title: "Phone Calls", body: "Inbound and outbound calls are tracked.", icon: "phone" },
          { title: "Email Campaigns", body: "Replies to marketing and nurture emails.", icon: "mail" },
          { title: "Referrals and Walk-ins", body: "Offline leads entered into the CRM by hand.", icon: "users" },
        ],
      },
      {
        type: "split",
        heading: "Watch a walkthrough",
        paragraphs: ["A quick tour of the screens, automation and reporting in a typical 123TWS CRM build."],
        video: { youtubeId: "rPoqPNN0qx0", title: "Real Estate CRM walkthrough" },
      },
      {
        type: "features",
        heading: "AI features",
        items: [
          { title: "AI Lead Scoring", iconSrc: "/images/live/real-estate-crm-software/icons/ai-lead-scoring.svg", body: "Hot, warm and cold leads are identified automatically.", icon: "target" },
          { title: "AI Follow-Up Suggestions", iconSrc: "/images/live/real-estate-crm-software/icons/ai-follow-up-suggestions.svg", body: "Each lead gets a recommended next step.", icon: "lightning" },
          { title: "AI Conversation Insights", iconSrc: "/images/live/real-estate-crm-software/icons/ai-conversation-insights.svg", body: "Interactions are analysed to spot buying intent.", icon: "chat" },
          { title: "AI Booking Prediction", iconSrc: "/images/live/real-estate-crm-software/icons/ai-booking-prediction.svg", body: "Leads with the strongest chance of booking are flagged for attention.", icon: "chart" },
          { title: "AI Dashboard", iconSrc: "/images/live/real-estate-crm-software/icons/ai-dashboard.svg", body: "Live figures on team and pipeline performance.", icon: "layout" },
        ],
      },
      {
        type: "gallery",
        heading: "Inside the dashboard",
        items: [
          {
            title: "Personalised modules",
            caption: "A dashboard set up around your layouts, plots, leads and site visits.",
            image: live(RE, "crm-dashboard.png", "Real estate CRM dashboard with plot counts, follow-ups, site visits and a monthly plots chart"),
          },
          {
            title: "Role-based access",
            caption: "Each role, from admin to site supervisor, sees only what it should.",
            image: live(RE, "manage-roles-screen.png", "Manage Roles screen listing roles such as Admin, Manager, Agent, Staff and Site Supervisor with status and actions"),
          },
          {
            title: "Filters and views",
            caption: "Narrow down leads, deals and activity, and switch to the view that suits the job.",
            image: live(RE, "plot-filter-screen.png", "Plots report filtered by layout and status, listing plot numbers, square footage, booked status and dates"),
          },
          {
            title: "Integrations",
            caption: "Links to property portals, WhatsApp, email, payment gateways and further third-party tools.",
            image: live(RE, "integrations-screen.png", "Integrations settings page with IndiaMART, Facebook and web form connected, and MagicBricks, Justdial, landing page and SMS gateway available"),
          },
        ],
      },
      provenCrm(RE),
      {
        type: "related",
        heading: "Other products and services",
        links: [
          { label: "Marketing CRM Software", href: "/marketing-crm-software/" },
          { label: "Architect CRM Software", href: "/architect-crm-software/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
          { label: "PPC Services", href: "/ppc-services/" },
          { label: "Social Media Marketing", href: "/social-media/" },
          { label: "Bulk SMS Service", href: "/bulk-sms-coimbatore/" },
        ],
      },
      demoBand(["Sell more property with less chasing", "Book a free demo"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Photography                                                          */
  /* ------------------------------------------------------------------ */
  {
    slug: PH,
    section: "Products",
    metaTitle: "Photography CRM for Studios and Photographers | 123TWS",
    metaDescription:
      "Capture shoot enquiries, send quotations, confirm bookings, assign photographers and editors and track advances in one Photography CRM built by 123TWS.",
    hero: {
      eyebrow: "CRM Products",
      title: "Photography CRM",
      intro:
        "Turn more photography enquiries into booked events with a custom CRM that gathers every lead, sends follow-up reminders for you and keeps bookings and payments in view. Available at ₹24,999 with lifetime access.",
      image: live(PH, "photography-crm-dashboard.png", "Photography CRM dashboard with coloured tiles for estimated and outstanding amounts, leads, bookings, shoots, photo selection, editing and prints"),
      cta: { label: "Book a Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Built for busy studios",
        paragraphs: [
          "Enquiries from your website, social media, WhatsApp and referrals land in one place. Follow-ups run automatically, bookings and payments are tracked, and fewer enquiries slip away.",
        ],
        bullets: ["Every enquiry accounted for", "Reminders sent for you", "Built-in WhatsApp", "Works well on phones", "Bookings and payments tracked together"],
      },
      {
        type: "split",
        heading: "When enquiries live in chats and spreadsheets",
        paragraphs: [
          "A WhatsApp message from one client, a phone call from another, a quote buried in email and payments on a spreadsheet. Meanwhile you are trying to recall which couple is waiting for a call back.",
          "Your studio deserves a better system. Photography CRM pulls all of it into one place.",
        ],
        bullets: [
          "Lost enquiries",
          "No clear view of upcoming shoots",
          "Forgotten call-backs",
          "Slow quotations",
          "Unclear payment status",
          "Client details in too many places",
        ],
      },
      {
        type: "steps",
        heading: "The client journey, step by step",
        intro: "Handle the whole client journey, from first enquiry to final delivery, without switching between tools.",
        steps: [
          { title: "Capture", body: "Someone gets in touch about a shoot and the enquiry is logged." },
          { title: "Connect", body: "You call back and find out exactly what they have in mind." },
          { title: "Quote", body: "A polished quote goes out based on your packages." },
          { title: "Book", body: "The client says yes and the date is locked in." },
          { title: "Manage", body: "Crew, tasks and payments for the event are followed in one place." },
          { title: "Deliver", body: "The finished work is handed over and the client stays in touch for next time." },
        ],
      },
      {
        type: "features",
        heading: "Photography CRM features",
        items: [
          { title: "Enquiry capture", body: "Record every enquiry, whether it arrives by phone, through your website form, from social media or elsewhere.", icon: "camera" },
          { title: "Client records", body: "Client details, event information, conversations and booking history stay organised together.", icon: "users" },
          { title: "Quotations", body: "Put together and share quotes quickly using your packages, prices and services.", icon: "file" },
          { title: "Follow-up reminders", body: "Get prompts for open enquiries, calls to return, payments due and events coming up.", icon: "clock" },
          { title: "Bookings and projects", body: "See what is booked, what is pending and what needs your attention.", icon: "calendar" },
          { title: "Payment tracking", body: "Follow advances, balances due, completed payments and payment history.", icon: "wallet" },
          { title: "Team and tasks", body: "Assign work to photographers, editors and other staff and keep everyone aligned.", icon: "briefcase" },
          { title: "Business reports", body: "View enquiries, bookings, revenue, pending payments and overall performance.", icon: "chart" },
        ],
      },
      {
        type: "gallery",
        heading: "Inside the dashboard",
        items: [
          {
            title: "Personalised modules",
            caption: "Modules for bookings, shoots, payments and delivery, set up to fit your studio.",
            image: live(PH, "photography-crm-dashboard.png", "Photography CRM home screen with summary tiles for amounts, leads, bookings and completed shoots, edits and prints"),
          },
          {
            title: "Role-based access",
            caption: "Decide what each member of the studio can see and change.",
            image: live(PH, "lead-funnel-sales-charts.png", "Photography CRM charts showing a lead conversion funnel, a monthly sales report, booking status and lead source conversion"),
          },
          {
            title: "Filters and views",
            caption: "Filter leads, bookings and activity, and switch to the view that fits the task.",
          },
          {
            title: "Integrations",
            caption: "Link up email, WhatsApp, payment gateways and other third-party tools.",
            image: live(PH, "manage-category-screen.png", "Manage Category screen in the Photography CRM listing spaces, sessions and payment modes"),
          },
        ],
      },
      {
        type: "features",
        heading: "Benefits for your studio",
        items: [
          { title: "Less admin time", body: "Repetitive admin work runs automatically.", icon: "clock" },
          { title: "Quicker replies", body: "Every new enquiry gets a quick reply.", icon: "lightning" },
          { title: "More bookings", body: "Promising leads are not left to go cold.", icon: "target" },
          { title: "Better organisation", body: "Clients, bookings, payments and tasks sit together.", icon: "check" },
          { title: "Confident growth", body: "Decisions are based on a clear view of the business.", icon: "rocket" },
        ],
      },
      provenCrm(PH),
      {
        type: "related",
        heading: "Pair it with",
        links: [
          { label: "Video Production", href: "/video-production/" },
          { label: "Website Design", href: "/website-design/" },
          { label: "Social Media Marketing", href: "/social-media/" },
          { label: "Marketing CRM Software", href: "/marketing-crm-software/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
        ],
      },
      demoBand(["Book more shoots with less admin", "Book a free demo"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Medical                                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: MD,
    section: "Products",
    metaTitle: "Medical CRM Software for Clinics and Hospitals | 123TWS",
    metaDescription:
      "Keep patient histories, prescriptions, appointments, fees and doctor profiles organised, with SMS alerts for patients and doctors. Clinic CRM from 123TWS.",
    hero: {
      eyebrow: "CRM Products",
      title: "Medical CRM Software",
      intro:
        "Clinical management software that keeps each patient's contact details, fees paid and outstanding, and every email, call and SMS on record. It helps practices run more efficiently and look after patients better.",
      image: live(MD, "specialist-doctors.png", "Illustration of a doctor on a laptop screen linked to icons for diagnosis, first aid, medicine, emergency, prescription and hotline"),
      cta: { label: "Free Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "One channel between doctors and patients",
        paragraphs: [
          "The software can be the main channel between doctors and patients for fees outstanding, test results and appointment reminders. You can also book several specialist appointments for the same patient.",
        ],
        video: { youtubeId: "nott0oorxUM", title: "Clinical CRM video" },
      },
      {
        type: "split",
        heading: "Doctor Management",
        paragraphs: [
          "Maintain a profile for each doctor and the list of services they offer. Photos and media related to those services are kept in a gallery.",
        ],
        image: live(MD, "doctor-management.png", "Illustration of a dashboard titled Overview with a bar chart, a world map and statistics cards"),
      },
      {
        type: "split",
        heading: "Patient Records",
        paragraphs: ["Each patient record holds the details your team needs at the next visit."],
        bullets: ["Patient medical history", "Tablet management", "Prescription details", "Treatment images"],
        image: live(MD, "patient-records.png", "Illustration of two people with a tablet and a clipboard beside a large calendar, clock and plan list"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Specialist Doctors Management",
        paragraphs: [
          "Keep profiles for specialist doctors and see the total number of appointments booked with each of them.",
        ],
        image: live(MD, "specialist-doctors.png", "Illustration of a doctor on a laptop screen surrounded by medical service icons"),
      },
      {
        type: "split",
        heading: "Appointment Scheduler",
        paragraphs: [
          "Book appointments for both regular and specialist doctors. View the schedule by month, week or day.",
        ],
        image: live(MD, "appointment-scheduler.png", "Illustration of two men beside a large calendar with checked and crossed dates and a clock"),
        reverse: true,
      },
      {
        type: "split",
        heading: "SMS Alert",
        paragraphs: [
          "Patients and doctors receive SMS alerts about appointments. The system also sends birthday wishes to patients.",
        ],
        image: live(MD, "sms-alert.png", "Illustration of a hand holding a smartphone with a new message notification"),
      },
      whyChooseUs(MD, true),
      {
        type: "related",
        heading: "Related products",
        links: [
          { label: "Dental CRM", href: "https://www.crmfordentists.com/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
          { label: "Bulk SMS Service", href: "/bulk-sms-coimbatore/" },
          { label: "Website Design", href: "/website-design/" },
          { label: "Payroll Software", href: "/payroll-software/" },
        ],
      },
      quoteCta(["Bring your clinic onto one system", "Request a free quote"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Computer repair                                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: CR,
    section: "Products",
    metaTitle: "Computer Repair CRM Software for Service Centres | 123TWS",
    metaDescription:
      "Log service tickets, track devices and spare parts, send estimates on WhatsApp, assign technicians and collect payments with the 123TWS Computer Service CRM.",
    hero: {
      eyebrow: "CRM Products",
      title: "Computer Repair CRM",
      intro:
        "One Computer Service CRM for your customers and their devices, repair tickets, quotes, technicians, parts stock, payments and follow-ups. Available at ₹24,999 with lifetime access.",
      image: live(CR, "repair-crm-dashboard.png", "System Repair CRM dashboard with ticket totals, repair trends chart, device type breakdown and ticket status list"),
      cta: { label: "Book a Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Built for busy service desks",
        paragraphs: [
          "Fewer missed updates mean quicker repairs and happier customers. Every ticket, spare part and payment is tracked, and reminders handle the follow-ups.",
        ],
        bullets: ["Every ticket accounted for", "Reminders sent for you", "Built-in WhatsApp", "Works well on phones", "Parts and payments tracked together"],
      },
      {
        type: "split",
        heading: "When the service desk runs on chats and paper",
        paragraphs: [
          "A caller wants news on a faulty laptop, someone else is at the counter with a desktop and a technician is waiting for a decision. Meanwhile a quote sits in a chat thread and parts are listed on a separate sheet.",
          "A service centre should not feel like juggling a hundred things. Computer Service CRM connects the whole operation, from the first enquiry to handing the device back.",
        ],
        bullets: [
          "Lost service requests",
          "No clear record of which device is where",
          "Technicians waiting to be told the next job",
          "Slow quotations",
          "Parts stock nobody can see",
          "Constant calls asking for status",
          "Unpaid balances overlooked",
          "Repair history split between notebooks and chats",
        ],
      },
      {
        type: "steps",
        heading: "The service journey in six steps",
        intro:
          "Each device is logged on arrival and followed through inspection, costing, sign-off, repair, testing, billing, handover and after-care, so no record goes missing.",
        steps: [
          { title: "Receive", body: "A request comes in by phone, walk-in or website and a ticket is opened." },
          { title: "Diagnose", body: "The device and the reported problem are written up for the technician." },
          { title: "Quote", body: "A clear repair estimate goes to the customer." },
          { title: "Approve", body: "Once the customer agrees, the job is released to the workshop." },
          { title: "Repair", body: "A technician takes the job and parts usage is updated live." },
          { title: "Deliver", body: "The device goes back to its owner and after-care begins." },
        ],
      },
      {
        type: "features",
        heading: "Computer Service CRM features",
        items: [
          { title: "Service request capture", body: "Open a ticket for walk-ins, phone calls, website enquiries and any other channel.", icon: "file" },
          { title: "Device records", body: "Record laptops, desktops, printers and other equipment with serial number, accessories, fault and service history.", icon: "device" },
          { title: "Customer records", body: "Contacts, devices, past services, quotes, payments and messages are kept together.", icon: "users" },
          { title: "Repair estimates", body: "Prepare an estimate covering service charges, parts and labour, and send it to the customer.", icon: "receipt" },
          { title: "Approval tracking", body: "See which estimates are approved, rejected or still waiting on the customer.", icon: "check" },
          { title: "Technician assignment", body: "Allocate each ticket to a suitable technician and watch its progress at every stage.", icon: "wrench" },
          { title: "Spare parts tracking", body: "See the parts each job calls for, which have been fitted and which are still awaited or swapped.", icon: "puzzle" },
          { title: "Customer status updates", body: "Statuses run from Received and Diagnosing through Waiting for Approval, Under Repair and Ready for Delivery to Completed.", icon: "chat" },
          { title: "Follow-up reminders", body: "Reminders cover pending approvals, calls, promised delivery dates, payments and after-service checks.", icon: "clock" },
          { title: "Payment tracking", body: "Track advances, balances, completed payments and the full payment history for each job.", icon: "wallet" },
          { title: "Service history", body: "See what was fixed, which parts were changed, what was charged and when.", icon: "database" },
          { title: "Business reports", body: "Monitor requests, completed jobs, revenue, pending payments and technician performance.", icon: "chart" },
        ],
      },
      {
        type: "listings",
        heading: "Nine stages of a repair",
        intro: "Every repair moves through nine stages grouped into four phases.",
        items: [
          { title: "Receive", meta: "Phase 1: Intake and Logging", body: "A laptop, desktop or printer arrives, or the customer asks for an onsite pickup, and the request is logged with every detail.", bullets: ["Intake for walk-ins and couriers", "SMS token issued straight away"] },
          { title: "Register", meta: "Phase 1: Intake and Logging", body: "Record the customer and site details, serial numbers, the fault reported, the state of the unit and any accessories handed over, such as a bag, charger or mouse.", bullets: ["Barcode tags for accessories", "A job sheet you can print"] },
          { title: "Diagnose", meta: "Phase 2: Diagnostics and Quote", body: "A technician checks the screen, motherboard, storage or operating system and records findings, test readings and parts needed.", bullets: ["Diagnosis down to chip level", "Internal log of faults found"] },
          { title: "Estimate", meta: "Phase 2: Diagnostics and Quote", body: "An itemised quote for parts, labour and GST goes to the customer on WhatsApp and SMS with one-click accept or reject.", bullets: ["Line-by-line quotation", "PDF quote shared on WhatsApp"] },
          { title: "Approve", meta: "Phase 2: Diagnostics and Quote", body: "The customer approves online or in store and the technician is cleared to start, which avoids disputes later.", bullets: ["Approval with a single click", "Every approval time-stamped"] },
          { title: "Repair", meta: "Phase 3: Repair and QA Testing", body: "The repair is completed, replacement parts are logged from inventory with serial numbers, and service time and notes are saved.", bullets: ["Stock deducted automatically", "Status updated as work progresses"] },
          { title: "Test", meta: "Phase 3: Repair and QA Testing", body: "A mandatory QA checklist covers boot, ports, stress, battery health and display before the device is cleared.", bullets: ["A 12-point QA checklist", "Formal quality sign-off"] },
          { title: "Deliver", meta: "Phase 4: Handover and Retention", body: "The customer is told by SMS or WhatsApp that the device is ready, and collection or drop-off is confirmed by OTP or signature.", bullets: ["Handover verified by OTP", "GST invoice sent with a payment link"] },
          { title: "Follow Up", meta: "Phase 4: Handover and Retention", body: "The customer is asked for feedback 48 hours after delivery. Warranties are tracked, AMC renewals are prompted and past repairs can be viewed in the customer portal.", bullets: ["Link to leave a Google review", "Reminders for AMC and warranty dates"] },
        ],
      },
      {
        type: "gallery",
        heading: "Inside the dashboard",
        items: [
          {
            title: "Personalised modules",
            caption: "Modules arranged around tickets, devices, inventory and invoices.",
            image: live(CR, "repair-crm-dashboard.png", "Repair CRM dashboard with total, completed and in-progress tickets, repair trends, device types and ticket status"),
          },
          {
            title: "Role-based access",
            caption: "Managers and technicians each get the access their job requires.",
            image: live(CR, "customers-screen.png", "Customers screen with customer counts and a table of customers, devices, tickets, last service and status"),
          },
          {
            title: "Filters and views",
            caption: "Filter tickets, customers and devices and switch to the view you need.",
            image: live(CR, "service-ticket-detail.png", "Service ticket for a laptop that will not boot, showing customer and device details, repair notes, timeline and parts used"),
          },
          {
            title: "Integrations",
            caption: "Link up email, WhatsApp, payment gateways and other third-party tools.",
            image: live(CR, "spare-parts-inventory.png", "Spare parts inventory screen with stock levels, prices and in-stock, low-stock and out-of-stock labels"),
          },
        ],
      },
      provenCrm(CR),
      {
        type: "related",
        heading: "Related products",
        links: [
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
          { label: "Billing Software Development", href: "/billing-software-development/" },
          { label: "Vehicle Management Software", href: "/vehicle-management-software/" },
          { label: "Bulk SMS Service", href: "/bulk-sms-coimbatore/" },
          { label: "Payment Gateway", href: "/payment-gateway/" },
        ],
      },
      demoBand(["Run your service centre with less chasing", "Book a free demo"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Custom CRM                                                           */
  /* ------------------------------------------------------------------ */
  {
    slug: "custom-crm-development",
    section: "Products",
    metaTitle: "Custom CRM Development Company in Coimbatore | 123TWS",
    metaDescription:
      "A web-based CRM shaped around your business, with lead, project, payment and task management, follow-up reminders, SMS and Excel export. Built by 123TWS.",
    hero: {
      eyebrow: "CRM Products",
      title: "Custom CRM Development",
      intro:
        "A fully customised CRM, configured in whichever way fits your exact business requirements.",
      image: { src: "/images/service-crm.jpg", alt: "An iMac, keyboard and a tablet with a calendar on a clean desk" },
      cta: { label: "Free Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "See a custom CRM in action",
        paragraphs: [],
        video: { youtubeId: "CjcyFj5FQV0", title: "Custom CRM video" },
      },
      {
        type: "split",
        heading: "Why every organisation needs a CRM",
        paragraphs: [
          "An easy-to-use, browser-based CRM helps you convert leads, create more sales opportunities and manage projects, team tasks and promises to customers. Without one, customer relationships end up in spreadsheets that hold the business back.",
        ],
        bullets: [
          "A better-organised business",
          "Organised data at your fingertips",
          "A business that runs more smoothly",
          "A view of how many orders or sales will close each week",
          "A foundation that growth depends on",
          "No more spreadsheet headaches",
        ],
      },
      {
        type: "features",
        heading: "Features",
        items: [
          { title: "Lead Management", body: "Create a lead for anyone interested in your products or services, convert qualified leads into contacts and assign them to sales staff.", icon: "target" },
          { title: "User Management", body: "Create user accounts, each with its own permissions.", icon: "users" },
          { title: "Project and Payment Management", body: "Manage projects, team tasks and status, keep customer payment history and track outstanding amounts.", icon: "briefcase" },
          { title: "Daily Task Management", body: "Keep a daily task report for the team.", icon: "check" },
          { title: "Follow-Up and Reminders", body: "Create to-do lists, meeting notes, appointments and calls, with notification alerts.", icon: "clock" },
          { title: "SMS Integration", body: "Send SMS messages and payment notifications to customers.", icon: "chat" },
          { title: "Report Maintenance", body: "Export your data to Excel.", icon: "chart" },
        ],
      },
      whyChooseUs("custom-crm-development"),
      {
        type: "related",
        heading: "Explore further",
        links: [
          { label: "CRM Software Development", href: "/crm-software-development/" },
          { label: "Custom Software Development", href: "/custom-software-development/" },
          { label: "Marketing CRM Software", href: "/marketing-crm-software/" },
          { label: "Real Estate CRM Software", href: "/real-estate-crm-software/" },
          { label: "Mobile App Development", href: "/mobile-app-development/" },
          { label: "Case Studies", href: "/case-study/" },
        ],
      },
      quoteCta(["Put your customer data in order", "Get a free quote"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Travel                                                               */
  /* ------------------------------------------------------------------ */
  {
    slug: TR,
    section: "Products",
    metaTitle: "Travel CRM Software for Agencies and Tour Operators | 123TWS",
    metaDescription:
      "Track enquiries, quotes, trip details, passports and visas with expiry alerts, plus bulk SMS for travellers. Travel CRM for agencies and tour operators.",
    hero: {
      eyebrow: "CRM Products",
      title: "Travel CRM",
      intro:
        "Custom CRM software for travel businesses, built around the way your company works. It helps you strengthen customer relationships, grow profits and attract more potential customers, while you focus on your core strategy.",
      image: live(TR, "travel-crm-illustration.png", "Illustration of a woman with a pink suitcase pointing at a screen showing the Eiffel Tower, with a globe and map pin"),
      cta: { label: "Free Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "Advertising Process",
        paragraphs: [
          "You promote your tour packages through several advertising channels, and each one brings in leads. The CRM shows which channels produce the most leads and which produce the fewest, so you can refine your advertising strategy.",
        ],
        image: live(TR, "advertising-process.png", "Illustration of a billboard reading AD with a megaphone and small figures with laptops and a telescope"),
      },
      {
        type: "split",
        heading: "Lead Process",
        paragraphs: [
          "Record the full details of each enquiry, then follow it up from the same screen. Schedule follow-up dates, note what the customer asked for and see the complete follow-up history for every lead.",
        ],
        image: live(TR, "lead-process.png", "Illustration of a woman on a ladder examining a sales funnel of customer avatars with a magnifying glass"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Conversion Process",
        paragraphs: [
          "When a customer is interested, send a quote and agree on it. Any changes to the price along the way are recorded in the CRM too.",
        ],
        image: live(TR, "conversion-process.png", "Illustration of two people with laptops sitting on a large circular arrow with a clock and gears"),
      },
      {
        type: "split",
        heading: "Trip Details",
        paragraphs: [
          "Once a lead becomes a client, look after them like family so they keep coming back. The CRM records every detail of their trip.",
        ],
        bullets: [
          "Trip start and end date",
          "Place of departure and arrival",
          "Seat preference: window, aisle or other",
          "Food preference",
          "Total days of travel and time of travel",
          "Travel medium and number of people",
          "Travel type: one way, round trip or multi-city",
          "Frequent flyer number",
        ],
        image: live(TR, "trip-details.png", "Illustration of a signpost to London, New York and Paris above suitcases, a globe, camera and passport"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Recording Passport Details",
        paragraphs: [
          "Store complete passport details and upload a scanned copy of the passport. The client receives an alert six months before the passport expires.",
        ],
        image: live(TR, "passport-details.png", "Illustration of a red passport with a globe, travel tickets and a bank card"),
      },
      {
        type: "split",
        heading: "Recording VISA Details",
        paragraphs: [
          "Just as with passports, every customer is notified ahead of their visa expiry date. The module records the following details.",
        ],
        bullets: [
          "Visa ID and visiting country",
          "Full name as in passport, gender and nationality",
          "Passport number",
          "Proposed entry and exit dates",
          "Purpose of visit and address in visiting country",
          "Number of entries and port of departure",
          "Visa expiry date",
          "Accompanying children details",
        ],
        image: live(TR, "visa-details.png", "Illustration of a visa application form with a profile photo and a green approved stamp"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Bulk SMS",
        paragraphs: [
          "Send one SMS to many clients at once. Greetings, offers, payment reminders and thank-you messages help you keep relationships strong.",
        ],
        image: live(TR, "bulk-sms.png", "Illustration of a smartphone showing chat bubbles with a new message notification"),
      },
      whyChooseUs(TR),
      {
        type: "related",
        heading: "Related products and services",
        links: [
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
          { label: "Bulk SMS Service", href: "/bulk-sms-coimbatore/" },
          { label: "Bulk Email Service", href: "/bulk-email-service/" },
          { label: "Website Design", href: "/website-design/" },
          { label: "Marketing CRM Software", href: "/marketing-crm-software/" },
        ],
      },
      quoteCta(["Keep every traveller's details in one place", "Get a free quote"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* uPVC                                                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: UP,
    section: "Products",
    metaTitle: "UPVC CRM Software for Window and Door Makers | 123TWS",
    metaDescription:
      "Manage leads, quotations, clients, projects, payments and field staff travel claims in one CRM for UPVC manufacturers. Daily to monthly marketing reports.",
    hero: {
      eyebrow: "CRM Products",
      title: "UPVC CRM Software",
      intro:
        "A CRM built to the needs of UPVC businesses, so you can communicate better with customers and grow faster. Happier customers are what keep you ahead of competitors.",
      image: live(UP, "upvc-crm-illustration.png", "Illustration of the word CRM above a monitor showing a team icon, linked to finance, cart, payment, chat and chart icons"),
      cta: { label: "Free Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "User Management",
        paragraphs: [
          "Users manage their own records and those shared with them. From the master admin account you can add any number of users, assign tasks and monitor their work.",
          "If another person needs to help run the account, simply give their user ID admin access.",
        ],
        image: live(UP, "user-management.png", "Illustration of four business people around a large screen with a profile card and a line graph"),
      },
      {
        type: "split",
        heading: "Lead Management",
        paragraphs: [
          "One screen tells you everything about a lead, from conversations and deals to every touchpoint with your company. Upcoming tasks and meetings with that person are listed alongside, so every conversation can be personal.",
        ],
        image: live(UP, "lead-management.png", "Illustration of a woman using a giant magnet to attract customer profile avatars"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Quotation Management",
        paragraphs: [
          "Quote requests come into the CRM, where you prepare each quote and send it directly to the client. Each quote includes the client name, quote number, product details and your notes.",
          "Approved quotes become sales orders without retyping, and can be emailed with one click.",
        ],
        image: live(UP, "quotation-management.png", "Illustration of a man holding a giant pencil beside a laptop with an invoice, calculator and coins"),
      },
      {
        type: "split",
        heading: "Client Management",
        paragraphs: [
          "Existing clients are your biggest asset, so it pays to understand them well. Their information sits in one place, along with the full conversation history from the first contact to the finished job.",
        ],
        image: live(UP, "client-management.png", "Illustration of two men with laptops reviewing profile cards with star ratings and charts"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Project Management",
        paragraphs: [
          "Plan project activities, assign work, manage resources and collaborate so jobs finish on time. You can see ongoing and completed projects from start to finish.",
          "Allocate each project to a specific person, and senior managers can check its status without chasing anyone.",
        ],
        image: live(UP, "project-management.png", "Illustration of a man and woman beside a large monitor showing a web interface with lists and gears"),
      },
      {
        type: "split",
        heading: "Payment Tracker",
        paragraphs: [
          "Payment reminders are sent automatically from the cloud, removing paperwork. Invoices go out on time and you get paid when you should.",
        ],
        image: live(UP, "payment-tracker.png", "Illustration of a large card terminal labelled Payment Tracker and a woman tapping a contactless tablet"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Travel History",
        paragraphs: [
          "Managers can see the travel history of field employees and how their reimbursements were settled, from the office or anywhere else. That gives real-time control over travel expenses without paper forms.",
        ],
        bullets: [
          "Alerts at the start and end of each trip",
          "Exact travel history view",
          "Online travel claim submission",
          "Claim review and approval with proof",
          "Automatic travel distance and time records",
        ],
        image: live(UP, "travel-history.png", "Illustration of a couple with suitcases beside a phone map with location pins"),
      },
      {
        type: "split",
        heading: "Daily Marketing Report",
        paragraphs: [
          "Once daily reports are entered, valuable information is never lost in the pile of data. The cloud-based software works on any smart device, so you can check reports anywhere, at any time.",
        ],
        bullets: ["Daily reports", "Weekly reports", "Monthly reports", "Customised reports"],
        image: live(UP, "daily-marketing-report.png", "Illustration of three people around a large board of bar and line charts"),
        reverse: true,
      },
      whyChooseUs(UP),
      {
        type: "related",
        heading: "Related products",
        links: [
          { label: "Architect CRM Software", href: "/architect-crm-software/" },
          { label: "Marketing CRM Software", href: "/marketing-crm-software/" },
          { label: "Real Estate CRM Software", href: "/real-estate-crm-software/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
          { label: "Vehicle Management Software", href: "/vehicle-management-software/" },
        ],
      },
      quoteCta(["Bring sales, projects and field teams together", "Get a free quote"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Vehicle management                                                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "vehicle-management-software",
    section: "Products",
    metaTitle: "Vehicle Management Software for Fleet Upkeep | 123TWS",
    metaDescription:
      "A digital log book for your vehicles: registration, FC and insurance dates, oil service due by kilometre, repair history and service reports. From 123TWS.",
    hero: {
      eyebrow: "CRM Products",
      title: "Vehicle Management Software",
      intro:
        "A computerised log book that follows, evaluates and improves your vehicle operations. It tracks the maintenance each vehicle needs, the services already done and the best way to keep every vehicle in good running order.",
      image: { src: "/images/industry-software.jpg", alt: "A laptop open on a table, ready for work" },
      cta: { label: "Free Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "See the Vehicle Management CRM",
        paragraphs: [],
        video: { youtubeId: "7N-7OnEaKyE", title: "Vehicle Management CRM video" },
      },
      {
        type: "features",
        heading: "Vehicle Management CRM Features",
        intro: "Cut vehicle-related risk so you can concentrate on running the business.",
        items: [
          { title: "Vehicle Details Management", body: "Registration number, make, purchase date, FC date, insurance date, owner name, chassis number, contact details and every repair done.", icon: "car" },
          { title: "Next Oil Service Tracking", body: "Enter the last oil service date and kilometre reading, then set the kilometre for the next service.", icon: "gear" },
          { title: "Manage Vehicle Services", body: "A service history view lists repairs, spares replaced, services done and the time each one took.", icon: "wrench" },
          { title: "Service Reports", body: "Customised reports for every vehicle across mechanical, electrical, tyre and accessory services.", icon: "chart" },
          { title: "Follow-Up Reports", body: "Day-to-day reports show whether follow-ups are complete, incomplete or pending.", icon: "check" },
        ],
      },
      whyChooseUs("vehicle-management-software"),
      {
        type: "related",
        heading: "Related products",
        links: [
          { label: "School ERP", href: "/school-erp/" },
          { label: "Computer Repair CRM", href: "/computer-repair-crm/" },
          { label: "Custom CRM Development", href: "/custom-crm-development/" },
          { label: "Custom Software Development", href: "/custom-software-development/" },
        ],
      },
      quoteCta(["Keep every vehicle on schedule", "Get a free quote"]),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* School ERP                                                           */
  /* ------------------------------------------------------------------ */
  {
    slug: SC,
    section: "Products",
    metaTitle: "School Management ERP Software in Coimbatore | 123TWS",
    metaDescription:
      "Web-based school ERP covering admissions, attendance, fees, staff payroll, library, transport, inventory and hostel, with SMS and email alerts. By 123TWS.",
    hero: {
      eyebrow: "ERP Products",
      title: "School ERP Software",
      intro:
        "A web-based school ERP, built in Coimbatore, that brings admissions, fees, staff, transport and more into one system.",
      image: { src: "/images/industry-education.jpg", alt: "An open book lying flat with its pages spread" },
      cta: { label: "Request an ERP Demo", href: "/contact-us/" },
    },
    blocks: [
      {
        type: "split",
        heading: "About School ERP",
        paragraphs: [
          "School ERP automates and improves everyday school routines in a fully web-based system with many built-in features. It helps schools make better decisions faster and can be customised to your specific needs.",
          "It covers every operation and workflow, so staff can focus on teaching and running the school. No technical knowledge is needed to use it.",
        ],
        image: live(SC, "school-erp-illustration.png", "Illustration of a woman holding a clock and a man with a magnifying glass in front of a monitor reading ERP"),
      },
      {
        type: "split",
        heading: "Customized Dashboard",
        paragraphs: [
          "Every stage is set up to match the client's requirements, and features can be added for a better fit. The software is upgraded regularly based on client feedback and suggestions.",
        ],
        image: live(SC, "customized-dashboard.png", "Illustration of a man presenting a large monitor with pie, bar, donut and line charts"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Admin Module",
        paragraphs: [
          "The admin sees school information, user rights, calendar events and reminder entries, and manages student data and the overall school summary. Reports on academic performance, the calendar and reminders can be generated by date and by class.",
        ],
        image: live(SC, "admin-module.png", "Illustration of a man with glasses on a laptop surrounded by three user profile cards"),
      },
      {
        type: "split",
        heading: "Student Module",
        paragraphs: [
          "Online and offline applications and admissions are handled here, and students can view and update their profiles. Attendance is managed through web and mobile apps, and student activity and parent feedback appear in one place.",
          "Student history and TC reports can be generated by date and by class.",
        ],
        image: live(SC, "student-module.png", "Illustration of three young women reading books and a tablet on a giant stack of books"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Fees Collection",
        paragraphs: [
          "Everything to do with fees is managed in this module. The fee master controls the whole process, including fee allocation, concessions and collection.",
        ],
        image: live(SC, "fees-collection.png", "Illustration of a woman holding a folder beside a document with coins and a checked payment table"),
      },
      {
        type: "split",
        heading: "Staff and Payroll",
        paragraphs: [
          "Staff profiles and payroll are managed together, with home assignments, holidays, leave and permissions kept in order. Salary calculations, staff attendance and on-duty entries are handled here too.",
          "You can also produce staff, salary, attendance and PF reports.",
        ],
        image: live(SC, "staff-payroll.png", "Illustration of a large paycheck with a calendar, calculator, clock, money bag and coins"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Reports and Notifications",
        paragraphs: [
          "Produce general and specific reports on subjects, exams, grades, attendance, salary and shifts. Users can receive notifications by SMS or email, and reports can be customised to your needs.",
        ],
        image: live(SC, "reports-notifications.png", "Illustration of a clipboard checklist with a pencil, speech bubbles and an envelope"),
      },
      {
        type: "split",
        heading: "Library Management",
        paragraphs: [
          "Keep library records and manage book entries with ease, with barcode customisation available. Issues, renewals and returns are all recorded, and the module has its own reports.",
        ],
        image: live(SC, "library-management.png", "Illustration of people reading and studying around a large open book on a screen"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Transport Management",
        paragraphs: [
          "Manage pickup points, vehicles, vehicle maintenance history and fuel entries, along with transport fees for each student's route. Reminders cover insurance, tax and pollution checks, and reports are available.",
        ],
        image: live(SC, "transport-management.png", "Illustration of a red van full of smiling children in front of a school building with a clock tower"),
      },
      {
        type: "split",
        heading: "Inventory / Store Management",
        paragraphs: [
          "Manage items, purchase orders, fuel entries, store details and materials. Generate stock, supplier, purchase and sales, and material issue reports.",
        ],
        image: live(SC, "inventory-management.png", "Illustration of two workers in hard hats with a clipboard and a hand truck of boxes beside shelving"),
        reverse: true,
      },
      {
        type: "split",
        heading: "Mess / Hostel Management",
        paragraphs: [
          "Set mess item prices and record mess bills. Manage hostel rooms, room allocation, hostel fee collection and room vacating in the same module.",
        ],
        image: live(SC, "hostel-management.png", "Illustration of a couple with luggage beside a hostel building linked to shower, bunk bed and room icons"),
      },
      {
        type: "related",
        heading: "Related products and services",
        links: [
          { label: "Payroll Software", href: "/payroll-software/" },
          { label: "Vehicle Management Software", href: "/vehicle-management-software/" },
          { label: "Bulk SMS Service", href: "/bulk-sms-coimbatore/" },
          { label: "Website Design", href: "/website-design/" },
          { label: "Custom Software Development", href: "/custom-software-development/" },
          { label: "Mobile App Development", href: "/mobile-app-development/" },
        ],
      },
      { type: "contact", heading: "Book a free demo", body: "Tell us about your school and the modules you need first, and we will arrange a walkthrough." },
    ],
  },
];
