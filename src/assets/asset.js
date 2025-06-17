import logo from "/images/brand/icon.svg";

import clutch from "/icons/clutch-icon-black.png";

import video_bg from "/images/video/bg-video.webm";

import expandIcon from "/icons/IconExpandInverse.webp";
import structureIcon from "/icons/IconStickyInverse.webp";
import startIcon from "/icons/IconStackInverse.webp";
import figmaIcon from "/icons/IconFigmaInverse.webp";
import webIcon from "/icons/IconGlobalInverse.webp";
import productIcon from "/icons/IconCustomInverse.webp";

// blogs 
import blog1 from '/images/blogs/1.jpg'
import blog2 from '/images/blogs/2.jpg'
import blog3 from '/images/blogs/3.jpg'
import blog4 from '/images/blogs/4.webp'
import blog5 from '/images/blogs/5.webp'
import blog6 from '/images/blogs/6.jpg'


export const assets = {
  video_bg,

  icons: {
    clutch,
    figma: figmaIcon,
    startup: startIcon,
    managed: webIcon,
    dev: structureIcon,
    brand: expandIcon,
    product: productIcon,
  },
};

export const CompanyInfo = {
  phone1: "250 78 6969 572",
  phone2: "250 722 1320 96",
  email1: "kampusagency@gmail.com",
  email2: "meyvnagency@gmail.com",
  logo_icon: logo,
  brand_name: "kampus agency",
  brand_aka: "kampus",

  social: {
    instagram: "https://instagram.com/kampusagency",
    twitter: "https://x.com/kampusagency",
    behance: "https://behance.com/kampusagency",
    dribbble: "https://dribbble.com/kampusagency",
    github: "https://github.com/kampusagency",
    pinterest: "https://pinterest.com/kampusagency",
  },
};

// ========================================

// projects
import adriel from "/images/works/adriel.png";
import djc from "/images/works/djc.png";
import events from "/images/works/events.png";
import inzozi from "/images/works/inzozi.png";
import kampus from "/images/works/kampus.png";
import kingdom from "/images/works/kingdom.png";
import klein from "/images/works/klein.png";
import mca from "/images/works/mca.png";
import mcatour from "/images/works/mcatour.png";
import walluxe from "/images/works/walluxe.png";

export const projects = [
  {
    title: "DJC Electronics Ltd",
    isFeatured: true,
    thumbnail: djc,
    client: {
      name: "DJC Electronics Ltd",
      description:
        "A Kigali-based electronics retailer that needed a robust inventory management system.",
    },
    industry: "Retail & Electronics",
    duration: "1 month",
    team: ["IwmVictor (Branding & UI/UX)", "Client-side Developer"],
    services: [
      "Logo Design",
      "Color Palette",
      "Typography",
      "Inventory UI/UX Design",
      "Landing Page Design",
    ],
    tags: ["inventory", "branding", "uiux", "web design"],
    description: `<p>DJC Electronics Ltd sought a stock management system. Starting from scratch, I designed the logo, color palette, typography, and their inventory system UI/UX. The provided link showcases the landing page, while system access is restricted to authorized employees or admins.</p>`,
    problem: `<p>The client was operating without a centralized inventory platform, leading to inefficiencies in tracking electronics sales and stock.</p>`,
    solution: `<p>I created a custom UI/UX design for their internal system and a public-facing landing page that reflects their new brand identity.</p>`,
    result: `<p>The streamlined UI helped improve internal inventory tracking and gave DJC a stronger digital presence.</p>`,
    clientMessage:
      "The system design exceeded our expectations—clean, professional, and easy to use.",
    url: "https://retailine.vercel.app/",
    embed: {
      behance: null,
      dribbble: null,
    },
    media: {
      images: ["djc-logo.png", djc, "djc-inventory-ui.png"],
      videos: [],
    },
    attachments: [],
  },
  {
    title: "Adriel Homes",
    isFeatured: false,
    thumbnail: adriel,
    client: {
      name: "Adriel Homes",
      description:
        "A real estate and landscaping firm based in Nyarutarama, Rwanda.",
    },
    industry: "Real Estate & Landscaping",
    duration: "2 weeks",
    team: ["IwmVictor (Design & Content)", "Client Communications"],
    services: ["Website Design", "Company Profile", "Business Proposal"],
    tags: ["real estate", "website", "proposal", "company profile"],
    description: `<p>Adriel Homes specializes in real estate, landscaping, and tours. I developed their website, designed a professional company profile, and created a landscaping business proposal for the Green Nigeria Project.</p>`,
    problem: `<p>Adriel lacked marketing materials and an online presence to support expansion goals.</p>`,
    solution: `<p>I provided a suite of assets including a professional profile and business proposal that aligned with their branding and values.</p>`,
    result: `<p>Adriel used the new materials to secure a new partnership and enhance credibility.</p>`,
    clientMessage: "Professional, timely, and totally on point!",
    url: "https://adrielinn.vercel.app/",
    embed: {
      behance: null,
      dribbble: null,
    },
    media: {
      images: [adriel, "adriel-profile-cover.png", "adriel-proposal.png"],
      videos: [],
    },
    attachments: ["adriel-company-profile.pdf", "adriel-business-proposal.pdf"],
  },
  {
    title: "Inzozi Tours and Airticketing",
    isFeatured: false,
    thumbnail: inzozi,
    client: {
      name: "Inzozi Tours",
      description:
        "A Rwandan-based travel agency offering tour packages and airline ticketing services.",
    },
    industry: "Travel & Tourism",
    duration: "1 week",
    team: ["IwmVictor (Web Developer)", "Client-side Admin"],
    services: ["Website Development"],
    tags: ["travel", "web development", "ticketing"],
    description: `<p>Inzozi Tours offers travel and airline ticketing services. I designed and developed a sleek, responsive website that introduces their brand and makes information easy to access for customers.</p>`,
    problem: `<p>They needed a professional web presence to gain trust, offer basic service details, and improve customer inquiries.</p>`,
    solution: `<p>I created a clean and functional website, focused on presenting tour options, contact details, and trust-building design choices.</p>`,
    result: `<p>The client launched their services with a strong web presence that was well-received by early users and partners.</p>`,
    clientMessage:
      "We’re so glad we got this done before peak travel season—it’s already paying off!",
    url: "https://visitrwanda.vercel.app/",
    embed: {
      behance: null,
      dribbble: null,
    },
    media: {
      images: ["inzozi-homepage.png", "inzozi-contact-section.png"],
      videos: [],
    },
    attachments: [],
  },
  {
    title: "Kingdom Real Estate",
    isFeatured: true,
    thumbnail: kingdom,
    client: {
      name: "Kingdom Real Estate",
      description:
        "A fast-growing real estate brokerage firm based in Rwanda offering sales, rentals, and land acquisition services.",
    },
    industry: "Real Estate & Property Management",
    duration: "2 months",
    team: [
      "IwmVictor (Full-Stack Designer & Content Lead)",
      "Client-side Sales Team",
    ],
    services: [
      "Color Palette",
      "Typography",
      "Marketing Collateral",
      "Business Card Design",
      "Website Design & Hosting",
      "Social Media Management",
      "Content Creation",
    ],
    tags: ["real estate", "branding", "social media", "web design", "content"],
    description: `<p>Kingdom Real Estate needed a full visual and digital identity to establish a professional image in the competitive real estate sector. From foundational brand elements to social media management and web design, I delivered a complete package that allowed them to grow trust, awareness, and leads.</p>`,
    problem: `<p>They were operating with no cohesive brand identity, no website, and no visual communication materials to support online visibility or sales efforts.</p>`,
    solution: `<p>I led the brand creation—developing a unique color palette, typography, and marketing collateral. I also designed and hosted their website and managed content creation for social media platforms including Facebook, Instagram, Twitter, and TikTok.</p>`,
    result: `<p>With consistent branding and a functioning website, Kingdom Real Estate saw an increase in property inquiries and follower growth on social channels. Their new visual identity set them apart from competitors and helped build client trust.</p>`,
    clientMessage:
      "Thank you for elevating our image online and offline! Our growth is now fueled by how professional we look.",
    url: "https://www.kingdomrealestaterwanda.com/",
    embed: {
      behance: null,
      dribbble: null,
    },
    media: {
      images: [
        "kingdom-website-home.png",
        "kingdom-business-card.png",
        "kingdom-social-posts.png",
        "kingdom-marketing-kit.png",
      ],
      videos: [],
    },
    attachments: ["kingdom-brand-guide.pdf", "kingdom-social-media-plan.pdf"],
  },
  {
    title: "Klein Transports & Tours",
    isFeatured: true,
    thumbnail: klein,
    client: {
      name: "Klein Transports & Tours",
      description:
        "A transportation and tour service provider in Kigali, Rwanda offering car rental, airport transfers, and custom tours across the country.",
    },
    industry: "Transportation & Travel Services",
    duration: "1.5 months",
    team: [
      "IwmVictor (Branding & Web Development)",
      "Client-side Operations Team",
    ],
    services: [
      "Logo Design",
      "Color Palette",
      "Typography",
      "Business Card Design",
      "Marketing Collateral",
      "Website Design & Development",
      "Full Branding",
    ],
    tags: ["travel", "branding", "web design", "marketing", "transportation"],
    description: `<p>Klein Transports & Tours wanted a strong brand identity and an online presence that would help them compete in the local market. I created a comprehensive brand package that included a logo, color palette, typography, business cards, and marketing materials. I also developed a user-friendly website to showcase their services and enhance customer engagement.</p>`,
    problem: `<p>The company was lacking an established brand and online presence, which limited their reach and ability to attract more customers in a competitive market.</p>`,
    solution: `<p>I worked on developing a strong visual identity for the brand and created a clean, modern website for Klein Transports & Tours. The website featured car rental options, booking forms, and location-based services to help customers easily book their transportation needs.</p>`,
    result: `<p>The brand’s fresh visual identity, combined with the functional website, helped Klein Transports & Tours attract more customers, increase bookings, and establish itself as a professional player in the local transport market.</p>`,
    clientMessage:
      "The new website and branding have given us a much-needed boost. Our clients now find it easier to book and trust us.",
    url: "https://kleintours.online/",
    embed: {
      behance: null,
      dribbble: null,
    },
    media: {
      images: [
        "klein-website-home.png",
        "klein-business-card.png",
        "klein-branding-collateral.png",
        "klein-social-media-ads.png",
      ],
      videos: [],
    },
    attachments: ["klein-brand-guide.pdf", "klein-booking-guide.pdf"],
  },
  {
    title: "Majoro Care Act Ltd (MCA)",
    isFeatured: false,
    thumbnail: mca,
    client: {
      name: "Majoro Care Act Ltd",
      description:
        "A real estate company based in Kigali, Rwanda, providing property management and real estate brokerage services.",
    },
    industry: "Real Estate & Property Management",
    duration: "1.5 months",
    team: [
      "IwmVictor (Branding, Graphic Design, & Web Development)",
      "Client-side Marketing Team",
    ],
    services: [
      "Logo Design",
      "Branding",
      "Graphic Design",
      "Website Design & Development",
    ],
    tags: ["real estate", "branding", "web design", "graphic design"],
    description: `<p>Majoro Care Act Ltd (MCA) required a brand overhaul and a new website to better showcase their real estate services. I created a unique logo, modernized their branding, and developed a responsive website to boost their online presence and offer a seamless user experience for potential clients.</p>`,
    problem: `<p>Before the redesign, MCA lacked a strong online presence and modern branding, which made it difficult for them to stand out in a competitive real estate market.</p>`,
    solution: `<p>I designed a bold logo and a cohesive visual identity that reflected the professionalism of MCA. The website was developed with a focus on showcasing properties, engaging potential clients, and offering easy access to contact information and services.</p>`,
    result: `<p>The updated brand identity and the newly launched website helped MCA attract more online inquiries, strengthen their reputation, and position them as a key player in Rwanda’s real estate sector.</p>`,
    clientMessage:
      "We’re beyond thrilled with the results. The new branding and website have made a significant impact on how we’re perceived by clients and prospects.",
    url: "https://majorocareact.com/",
    embed: {
      behance: null,
      dribbble: null,
    },
    media: {
      images: [
        "mca-website-home.png",
        "mca-logo.png",
        "mca-properties-page.png",
        "mca-contact-page.png",
      ],
      videos: [],
    },
    attachments: ["mca-brand-guide.pdf", "mca-website-user-guide.pdf"],
  },
  {
    title: "MCA Tour",
    isFeatured: false,
    thumbnail: mcatour,
    client: {
      name: "MCA Tour",
      description:
        "The tours and travel division of Majoro Care Act Ltd, specializing in customized tours and travel services within Rwanda.",
    },
    industry: "Tours & Travel",
    duration: "1 month",
    team: [
      "IwmVictor (Branding & Web Development)",
      "Client-side Operations Team",
    ],
    services: ["Branding", "Website Design & Development", "Graphic Design"],
    tags: ["tourism", "branding", "web development", "travel services"],
    description: `<p>MCA Tour, as the tours and travel arm of Majoro Care Act Ltd, needed a distinct branding and online presence to highlight their travel offerings. I designed their logo, developed a cohesive brand identity, and built a functional website that supports booking and showcasing their diverse travel packages.</p>`,
    problem: `<p>MCA Tour lacked a separate identity from its parent company, which made it challenging to differentiate the travel services. The absence of an engaging online presence meant customers struggled to easily explore available packages.</p>`,
    solution: `<p>I created a separate yet complementary branding identity for MCA Tour, which aligned with the Majoro Care Act brand but stood out as a unique entity. The website was designed to feature detailed travel packages, an easy booking interface, and customer testimonials.</p>`,
    result: `<p>The new brand identity and website successfully attracted more customers, facilitated better online bookings, and helped MCA Tour build a solid reputation in the Rwandan travel market.</p>`,
    clientMessage:
      "We now have a clear and inviting online presence that aligns with our services, and customers find it much easier to explore and book tours online.",
    url: "https://mca-tour.vercel.app/",
    embed: {
      behance: null,
      dribbble: null,
    },
    media: {
      images: [
        "mcatour-website-home.png",
        "mcatour-logo.png",
        "mcatour-packages-page.png",
        "mcatour-booking-form.png",
      ],
      videos: [],
    },
    attachments: ["mcatour-brand-guide.pdf", "mcatour-booking-guide.pdf"],
  },
  {
    title: "Hilly Agency",
    isFeatured: true,
    thumbnail: events,
    client: {
      name: "Hilly Agency",
      description:
        "A creative agency founded by Nadine Rutayisire, specializing in providing personalized branding, marketing, and design solutions in Rwanda.",
    },
    industry: "Travel & Tourism",
    duration: "2 months",
    team: [
      "IwmVictor (Branding & Web Development)",
      "Nadine Rutayisire (Founder)",
    ],
    services: ["Brand Identity Design", "Website Design & Development"],
    tags: ["branding", "tourism", "web development", "identity design"],
    description: `<p>Hilly Agency, founded by Nadine Rutayisire, needed a complete brand identity overhaul along with a dynamic, user-friendly website. I created a modern brand identity that included a new logo, color palette, typography, and designed a website that showcased the agency’s tour and hospitality services with an easy-to-navigate layout.</p>`,
    problem: `<p>The agency required a professional and distinct brand identity to separate itself from competitors, along with a digital presence that effectively communicated their premium services to international and national clients.</p>`,
    solution: `<p>I developed a creative brand identity and designed a sleek website that highlights their tours and services, offering a seamless user experience with clear navigation, client engagement forms, and service details.</p>`,
    result: `<p>With a fresh brand and an interactive online presence, Hilly Agency attracted a wider clientele and strengthened its position as a premium tour operator in Rwanda.</p>`,
    clientMessage:
      "The new brand identity and website have played a pivotal role in enhancing our credibility and drawing in more business. The feedback from our clients has been overwhelmingly positive!",
    url: "https://hillyagency.vercel.app/",
    embed: {
      behance: null,
      dribbble: null,
    },
    media: {
      images: [
        "hilly-logo.png",
        "hilly-website-home.png",
        "hilly-portfolio-page.png",
        "hilly-contact-form.png",
      ],
      videos: [],
    },
    attachments: ["hilly-brand-guide.pdf"],
  },
];

export function slugify(sentence) {
  return sentence
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const services = [
  {
    title: "Product Design",
    slug: "product-design",
    category: "Design",
    icon: assets.icons.product,
    thumbnail: "product-design-thumbnail.png",
    description:
      "We help you imagine, shape, and perfect digital products your users will love—from first sketches to high-fidelity design systems.",
    whatItIs: `
      <p>Product Design is the end-to-end process of designing digital products that are <strong>usable, functional, and beautiful</strong>. We blend <em>user experience (UX), user interface (UI), design strategy</em>, and <em>business goals</em> to help you create standout products for mobile, web, and SaaS platforms.</p>
    `,
    whoItIsFor: `
      <p>Ideal for <strong>startups, SaaS founders, tech companies, and agencies</strong> that need design support to bring an idea to life or scale their product experience. Whether you're launching an MVP or revamping a platform, this service gives you design clarity and execution.</p>
    `,
    whyItMatters: `
      <p>A well-designed product <strong>improves usability, reduces churn, and drives engagement</strong>. Good design also creates emotional connection and gives your brand a competitive edge in saturated markets.</p>
      <ul>
        <li><strong>Better retention</strong> through delightful UX</li>
        <li><strong>Higher conversion</strong> with user-focused UI</li>
        <li><strong>Faster time-to-market</strong> with organized design systems</li>
      </ul>
    `,
    features: [
      "Design Thinking Workshops",
      "User Research & Journey Mapping",
      "Wireframes & Prototypes",
      "UI Systems & Visual Design",
      "Mobile & SaaS Dashboards",
      "Design Management",
    ],
    process: [
      "Kickoff & discovery",
      "User personas & user journeys",
      "Low-fidelity wireframes",
      "UI design & prototypes",
      "Testing & iteration",
      "Design handoff or management",
    ],
    subServices: [
      {
        title: "UI Design & UX Strategy",
        description:
          "We combine research, visual craft, and experience design to deliver usable, scalable interfaces tailored to your business and audience.",
        media: ["uiux-dashboard.png", "uiux-userflow.png"],
      },
      {
        title: "Mobile App & SaaS Design",
        description:
          "We specialize in mobile-first and SaaS platforms, ensuring your app delivers a smooth, intuitive experience across all screens.",
        media: ["mobile-mockup.png", "saas-app-ui.png"],
      },
      {
        title: "Dashboard & Web Interfaces",
        description:
          "From admin panels to analytics dashboards, we design web UIs that simplify complex data and workflows without overwhelming users.",
        media: ["dashboard-design.png", "analytics-ui.png"],
      },
      {
        title: "Design Management",
        description:
          "We organize your design process, tools, and team—creating scalable design systems, setting UI guidelines, and aligning designers & devs.",
        media: ["design-system.png", "figma-management.png"],
      },
    ],
    duration: "2–6 weeks depending on scope",
    faqs: [
      {
        question: "Do you follow a design system or create one?",
        answer:
          "Yes, we create reusable components and style guides or adapt to your existing design system to ensure visual consistency and scalability.",
      },
      {
        question: "Can you work directly with our dev team?",
        answer:
          "Absolutely. We structure our design handoff and specs (e.g., Figma, Zeplin) to align with your developers’ workflow.",
      },
    ],
  },

  {
    title: "Brand Identity & Creative",
    slug: "brand-identity",
    category: "Creative",
    icon: assets.icons.brand,
    thumbnail: "brand-identity-thumbnail.png",
    description:
      "We craft distinct brand identities and creative assets that elevate how your business looks, feels, and connects with the world.",
    whatItIs: `
      <p>This service is focused on building <strong>cohesive visual identities</strong> and creative content that communicate your brand’s values and personality. From logos to brand books and visual production—we ensure you look professional, trustworthy, and memorable across all platforms.</p>
    `,
    whoItIsFor: `
      <p>Perfect for <strong>startups, SMEs, rebranding initiatives, and marketing teams</strong> seeking a unified brand image and creative content that resonates. Whether launching something new or refreshing your image, this service covers you end-to-end.</p>
    `,
    whyItMatters: `
      <p>First impressions matter. A strong brand identity builds <strong>trust, recognition, and emotional connection</strong>. Creative assets enhance storytelling, helping your business stand out in a crowded market.</p>
      <ul>
        <li><strong>Stronger market positioning</strong> with consistent branding</li>
        <li><strong>Increased brand recall</strong> through visuals & motion</li>
        <li><strong>Better marketing results</strong> with polished content</li>
      </ul>
    `,
    features: [
      "Logo Design & Brand Guidelines",
      "Complete Visual Identity Systems",
      "Brand Voice & Positioning Strategy",
      "2D/3D Graphics & Illustrations",
      "Motion Graphics & Creative Production",
      "Presentation & Marketing Collaterals",
    ],
    process: [
      "Brand discovery & competitor analysis",
      "Moodboard, color & typography exploration",
      "Logo & brand mark design",
      "Visual system & brand manual",
      "Optional creative production (graphics, motion, illustrations)",
    ],
    subServices: [
      {
        title: "Logo & Branding Systems",
        description:
          "We design distinctive logos, brand marks, and scalable visual systems—from typography to iconography—that establish your visual foundation.",
        media: ["branding-logo-grid.png", "brand-system-overview.png"],
      },
      {
        title: "Rebranding & Brand Refresh",
        description:
          "We help existing brands modernize their look while maintaining their essence—aligning with new markets, products, or audiences.",
        media: ["rebrand-before-after.png", "brand-refresh-guide.png"],
      },
      {
        title: "Visual Content & Production",
        description:
          "We create compelling branded content such as social media kits, posters, pitch decks, and campaign visuals to support your marketing.",
        media: ["social-kit.png", "marketing-graphic.png"],
      },
      {
        title: "2D/3D Illustrations & Motion Graphics",
        description:
          "From explainer animations to branded scenes and icons, we bring your brand to life with motion and expressive illustration styles.",
        media: ["2d-illustration.png", "motion-sample.gif", "3d-scene.png"],
      },
    ],
    duration: "2–4 weeks depending on complexity",
    faqs: [
      {
        question: "Can I get just a logo without full brand identity?",
        answer:
          "Yes. We offer logo design as a standalone service, but we recommend pairing it with a visual system for consistency.",
      },
      {
        question: "Do you also provide templates or editable assets?",
        answer:
          "Absolutely. You receive editable files (Figma, PSD, or Illustrator) and brand kits depending on your needs.",
      },
    ],
  },

  {
    title: "Development",
    slug: "development",
    category: "Tech",
    icon: assets.icons.dev,
    thumbnail: "development-thumbnail.png",
    description:
      "We build scalable, fast, and reliable digital products—from websites to full-stack web apps and mobile experiences.",
    whatItIs: `
      <p>Our development services transform your ideas into powerful digital solutions. Whether you need a marketing site, an e-commerce store, a custom platform, or mobile app—we deliver clean, scalable code tailored to your business logic and customer goals.</p>
    `,
    whoItIsFor: `
      <p>Ideal for <strong>startups, SMEs, agencies, and enterprise teams</strong> looking to develop or scale digital platforms. Whether you're launching from scratch or upgrading an existing system, we align with your product needs and growth strategy.</p>
    `,
    whyItMatters: `
      <p>Good design needs great engineering. With a solid development backbone, your product loads faster, scales better, and offers a seamless experience—giving you a <strong>competitive edge</strong> and reducing future technical debt.</p>
      <ul>
        <li><strong>Faster user interaction</strong> & improved retention</li>
        <li><strong>Modular architecture</strong> for easier future upgrades</li>
        <li><strong>Secure, optimized performance</strong> across devices</li>
      </ul>
    `,
    features: [
      "Frontend & Backend Development",
      "Custom Web Applications",
      "Progressive Web Apps (PWAs)",
      "E-commerce Platforms & Payment Integrations",
      "API Integrations & Admin Dashboards",
      "Mobile App Development (iOS, Android, Cross-platform)",
    ],
    process: [
      "Requirements gathering & tech stack decision",
      "Wireframes & UI integration",
      "Frontend and backend development",
      "Testing (functional, responsive, performance)",
      "Deployment, maintenance & support",
    ],
    subServices: [
      {
        title: "Web & App Development",
        description:
          "We develop high-performance marketing sites, multi-page apps, and progressive web apps using modern frontend and backend frameworks.",
        media: ["custom-frontend-dev.png", "web-architecture-diagram.png"],
      },
      {
        title: "E-commerce Solutions",
        description:
          "We build modern storefronts with cart, checkout, payment, and admin integrations tailored for your business and customers.",
        media: ["ecommerce-ui-design.png", "checkout-flow-example.png"],
      },
      {
        title: "Custom Software & MVPs",
        description:
          "From SaaS platforms to ERPs, we craft robust systems for unique workflows, including MVPs for validation and growth.",
        media: ["mvp-product-ui.png", "saas-dashboard-view.png"],
      },
      {
        title: "Webflow & Framer Development",
        description:
          "For marketing and content-focused sites, we use no-code tools like Webflow and Framer to deliver lightning-fast deployment and easy CMS control.",
        media: ["webflow-editor.png", "framer-animation-preview.png"],
      },
    ],
    duration: "3–8 weeks depending on complexity",
    faqs: [
      {
        question: "Can you work with our in-house designer or backend team?",
        answer:
          "Yes. We can collaborate with your existing team or handle the full-stack in-house, depending on your setup.",
      },
      {
        question: "Do you offer post-launch maintenance?",
        answer:
          "Absolutely. Our managed services can cover updates, backups, monitoring, and support—tailored to your needs.",
      },
      {
        question: "Which technologies do you use?",
        answer:
          "React, Next.js, Node.js, Express, Tailwind CSS, MongoDB, Supabase, and optionally Laravel, Flutter, or Strapi depending on the use case.",
      },
    ],
  },

  {
    title: "Startup Solutions",
    slug: "startup-solutions",
    category: "Business & Strategy",
    icon: assets.icons.startup,
    thumbnail: "startup-solutions-thumbnail.png",
    description:
      "Guiding startups from ideation to growth, we provide the business planning, MVP development, and team structuring to bring your vision to life.",
    whatItIs: `
      <p>We offer tailored startup solutions to help entrepreneurs turn their ideas into successful businesses. Whether you're at the ideation stage or preparing for launch, we guide you through the planning, product development, and early-stage growth processes.</p>
    `,
    whoItIsFor: `
      <p>For <strong>founders</strong> and <strong>early-stage startups</strong> looking for a roadmap to success. Our solutions cover everything from MVP development to team-building and investor-ready decks.</p>
    `,
    whyItMatters: `
      <p>Startups face unique challenges—limited resources, tight timelines, and high risks. Our solutions reduce this uncertainty by helping you make informed decisions and build a solid foundation for long-term success.</p>
      <ul>
        <li><strong>Expert guidance</strong> at every stage of your startup journey</li>
        <li>Increase your chances of <strong>raising investment</strong> with professional decks</li>
        <li><strong>Fast MVPs</strong> for quicker market feedback and validation</li>
      </ul>
    `,
    features: [
      "Business Plan Creation",
      "MVP Development & Prototyping",
      "Product Roadmapping & Strategy",
      "Team Structuring & Hiring",
      "Investor Deck & Pitch Preparation",
    ],
    process: [
      "Business strategy & idea validation",
      "Market research & competitive analysis",
      "MVP design, development, and launch",
      "Team structuring & hiring process",
      "Investor deck design & pitch sessions",
    ],
    subServices: [
      {
        title: "Business Planning & Roadmapping",
        description:
          "We help define your business vision, outline strategic goals, and create a roadmap for achieving success—guiding you through each milestone.",
        media: ["business-plan-roadmap.png", "strategy-workshop.png"],
      },
      {
        title: "MVP Prototyping & Launch",
        description:
          "Our team helps you rapidly build a Minimum Viable Product (MVP) to test your idea with real users, enabling quick validation and iteration.",
        media: ["mvp-design.png", "mvp-launch-event.png"],
      },
      {
        title: "Team Structuring & Hiring Support",
        description:
          "We help build your core team, from co-founders to key hires, ensuring you have the right talent to scale and succeed.",
        media: ["team-structure-diagram.png", "hiring-process-flow.png"],
      },
      {
        title: "Investor Decks & Validation Tools",
        description:
          "Our pitch decks help you present your business idea to investors in the most compelling way possible, giving you the tools to raise the funds you need.",
        media: ["investor-deck.png", "startup-pitch-session.png"],
      },
    ],
    duration:
      "4–12 weeks depending on the complexity and stage of your startup",
    faqs: [
      {
        question: "Do I need to have a business idea before starting with you?",
        answer:
          "No. We can help you refine your ideas, conduct market research, and validate your concept before moving forward.",
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer:
          "Yes, we offer continued support for your startup, including post-launch MVP iteration, team building, and growth strategies.",
      },
      {
        question: "What’s the difference between an MVP and a full product?",
        answer:
          "An MVP is a simplified version of your product with just enough features to validate your idea with real users. It allows you to test the core concept and gather feedback before scaling.",
      },
    ],
  },

  {
    title: "Managed Services",
    slug: "managed-services",
    category: "IT & Support",
    icon: assets.icons.managed,
    thumbnail: "managed-services-thumbnail.png",
    description:
      "Reliable hosting, IT support, and training solutions to keep your business running smoothly. We handle the technical details so you can focus on growth.",
    whatItIs: `
      <p>Managed services encompass the full spectrum of IT support, including hosting, maintenance, and hands-on training. Our team ensures your systems are up-to-date, secure, and fully optimized to meet your business needs.</p>
    `,
    whoItIsFor: `
      <p>Designed for businesses that want to offload their IT management tasks to professionals, enabling them to focus on growth and core business operations.</p>
    `,
    whyItMatters: `
      <p>With the right infrastructure, hosting, and IT support, your business can scale efficiently. Our managed services provide peace of mind, with reliable systems and personalized training programs to ensure your team stays equipped and informed.</p>
      <ul>
        <li>Ensure <strong>business continuity</strong> with dependable hosting and maintenance.</li>
        <li>Benefit from <strong>secure IT infrastructure</strong> and timely updates.</li>
        <li>Offer your team <strong>the training</strong> they need to succeed in a constantly evolving tech landscape.</li>
      </ul>
    `,
    features: [
      "Reliable Hosting & Server Maintenance",
      "24/7 IT Support & Troubleshooting",
      "Security Monitoring & Updates",
      "Employee Training & Development Programs",
      "Workshops & Internship Programs",
    ],
    process: [
      "Initial IT setup & configuration",
      "Continuous system maintenance & optimization",
      "24/7 support & troubleshooting",
      "Employee onboarding & training",
      "Ongoing workshops & internship opportunities",
    ],
    subServices: [
      {
        title: "Hosting & Maintenance",
        description:
          "We provide high-performance hosting solutions, ensuring your website or application runs smoothly with regular updates, backups, and maintenance.",
        media: ["hosting-dashboard.png", "server-maintenance.png"],
      },
      {
        title: "IT Support & Systems Setup",
        description:
          "Our IT support services ensure that your systems are always running at peak performance, with 24/7 assistance for troubleshooting, updates, and system upgrades.",
        media: ["support-system-setup.png", "troubleshooting.png"],
      },
      {
        title: "Training, Workshops & Internship Programs",
        description:
          "We provide tailored training and workshops for your team, ensuring they have the necessary skills and knowledge to work efficiently with your systems and tools.",
        media: ["training-workshops.png", "internship-program.png"],
      },
    ],
    duration: "Ongoing services, customizable based on business needs",
    faqs: [
      {
        question:
          "What happens if I have a system failure or need urgent support?",
        answer:
          "Our support team is available 24/7 to resolve issues promptly. We provide quick responses and solutions to minimize downtime.",
      },
      {
        question: "Do you offer cloud hosting options?",
        answer:
          "Yes, we provide scalable cloud hosting solutions tailored to your business's needs, with high security and uptime guarantees.",
      },
      {
        question: "What kind of IT training do you offer?",
        answer:
          "Our training includes systems usage, software management, cybersecurity practices, and best IT practices to ensure your team is equipped with necessary skills.",
      },
    ],
  },
];

import { v4 as uuid } from "uuid";

export const blogs = [
  {
    id: uuid(), 
    title: "Why Every Startup Needs a Design System",
    slug: "why-every-startup-needs-design-system",
    category: "Product Design",
    isFeatured: true,
    tags: ["uiux", "design", "system", "startup", "consistency", "scalability"],
    author: "6d5e1a71-ef1f-4bfb-bd9d-917b02fd3e1a", // example UUID from authors list
    readTime: "5 min read",
    publishedAt: 1738667236865,
    excerpt:
      "A design system can speed up your product development, enhance UX consistency, and unify branding across platforms.",
    content: `<p>A design system isn't just a guide—it’s your product’s DNA...</p>`,
    media: {
      coverImage: blog1,
      images: ["component-library.png", "guidelines-overview.png"],
    },
    relatedPosts: [
      "c4b1dc22-7e3a-482e-8d24-45b3c5f684a2",
      "f83c9283-f0a2-4173-9154-7d137f6e17be",
    ],
  },

  {
    id: uuid(),
    title: "How Much Does Web Development Cost in Rwanda in 2025?",
    slug: "web-development-cost-rwanda-2025",
    category: "Business & Pricing",
    isFeatured: true,
    tags: ["webdev", "rwanda", "pricing", "freelancers", "agencies"],
    author: "6d5e1a71-ef1f-4bfb-bd9d-917b02fd3e1a",
    readTime: "7 min read",
    publishedAt: 1741728037000,
    excerpt:
      "From basic websites to custom platforms, explore the current price landscape for web development in Rwanda.",
    content: `<p>Web development prices in Rwanda vary based on features, platform, team expertise, and scope. Simple landing pages can cost from 150,000 RWF to 400,000 RWF, while custom e-commerce or apps may range from 1M to 5M RWF or more...</p>`,
    media: {
      coverImage:blog2,
      images: [],
    },
    relatedPosts: [
      "e84b6b30-beff-4ffd-84ee-83eaeb4cdda6",
      "5879b7a4-346b-417f-bbf8-9d9e317870ae",
    ],
  },
  {
    id: uuid(),
    title: "What to Look for When Hiring a Web Developer in Rwanda",
    slug: "hiring-web-developer-in-rwanda",
    category: "Guides",
    isFeatured: false,
    tags: ["webdev", "freelancers", "agencies", "checklist", "rwanda"],
    author: "6d5e1a71-ef1f-4bfb-bd9d-917b02fd3e1a",
    readTime: "6 min read",
    publishedAt: 1741810023000,
    excerpt:
      "Hiring a developer? Here's what to check before signing that contract—whether you go with a freelancer or an agency.",
    content: `<p>Before hiring, ask for portfolio links, clarify scope, timeline, and who owns the final code. Red flags include poor communication, vague pricing, or lack of documentation...</p>`,
    media: {
      coverImage: blog3,
      images: [],
    },
    relatedPosts: [
      "2dc5c88b-fa37-4879-9101-89b9c1a87824",
      "5879b7a4-346b-417f-bbf8-9d9e317870ae",
    ],
  },
  {
    id: uuid(),
    title: "The State of Web Design Trends in Rwanda: 2025 Outlook",
    slug: "rwanda-web-design-trends-2025",
    category: "Design",
    isFeatured: false,
    tags: ["design", "trends", "rwanda", "uiux", "mobile-first", "darkmode"],
    author: "6d5e1a71-ef1f-4bfb-bd9d-917b02fd3e1a",
    readTime: "5 min read",
    publishedAt: 1741972100000,
    excerpt:
      "From minimalism to motion UI, here are the design trends shaping Rwanda’s digital space in 2025.",
    content: `<p>Rwandan websites are embracing mobile-first, bold typography, dark mode, and performance-driven visuals. Globally inspired design systems are being locally adapted for mobile-savvy audiences...</p>`,
    media: {
      coverImage: blog4,
      images: [],
    },
    relatedPosts: [
      "2dc5c88b-fa37-4879-9101-89b9c1a87824",
      "5879b7a4-346b-417f-bbf8-9d9e317870ae",
    ],
  },
  {
    id: uuid(),
    title:
      "Success Stories: Rwandan Businesses That Grew Through Great Web Design",
    slug: "rwanda-success-through-web-design",
    category: "Case Studies",
    isFeatured: true,
    tags: ["success", "business", "webdesign", "rwanda", "growth"],
    author: "6d5e1a71-ef1f-4bfb-bd9d-917b02fd3e1a",
    readTime: "6 min read",
    publishedAt: 1742083900000,
    excerpt:
      "Discover how good design helped local brands grow leads, traffic, and revenue online.",
    content: `<p>Businesses like Adriel Homes and DJC Electronics saw measurable growth after modernizing their web presence. Improved UI/UX and trust-building visuals played a key role...</p>`,
    media: {
      coverImage: blog5,
      images: [],
    },
    relatedPosts: ["2dc5c88b-fa37-4879-9101-89b9c1a87824"],
  },

  {
    id: uuid(),
    title: "Top E-Commerce Platforms Used by Developers in Rwanda",
    slug: "top-ecommerce-platforms-rwanda",
    category: "E-Commerce",
    isFeatured: false,
    tags: [
      "ecommerce",
      "platforms",
      "rwanda",
      "woocommerce",
      "shopify",
      "customdev",
    ],
    author: "6d5e1a71-ef1f-4bfb-bd9d-917b02fd3e1a",
    readTime: "5 min read",
    publishedAt: 1742158300000,
    excerpt:
      "WooCommerce, Shopify, or custom dev? Here’s what Rwandan developers are using—and why.",
    content: `
    <h2>Introduction</h2>
    <p>As Rwanda’s digital economy grows, more businesses are investing in e-commerce. But which platforms are developers actually using—and why?</p>

    <h2>WooCommerce: Local Favorite for Affordability</h2>
    <p>WooCommerce (built on WordPress) remains the most widely used e-commerce platform among Rwandan SMEs. It’s open-source, cost-effective, and easy to host on local servers. Developers like it for flexibility and plugin ecosystem.</p>

    <h2>Shopify: Premium & Plug-and-Play</h2>
    <p>Shopify is gaining traction with mid-size businesses and startups. Its global infrastructure, support for mobile-first design, and clean UX make it popular, but recurring fees and payment limitations deter some.</p>

    <h2>Custom Development: Laravel, Next.js & Node.js</h2>
    <p>For high-growth startups or businesses requiring unique workflows (e.g. multi-vendor, logistics integration), custom-built platforms using Laravel, Next.js, or Node.js are on the rise. These offer full flexibility and scalability but require bigger budgets.</p>

    <h2>Other Mentions: Wix, FlutterFlow, Webflow</h2>
    <p>For small businesses or rapid MVPs, tools like Webflow and Wix are being explored for their speed-to-launch and drag-and-drop simplicity. FlutterFlow is used for mobile-first storefronts.</p>

    <h2>Conclusion</h2>
    <p>The right platform depends on your needs: budget, scalability, integrations, and who manages the site. Developers in Rwanda are increasingly recommending hybrid solutions that combine no-code tools with custom extensions.</p>
  `,
    media: {
      coverImage: blog6,
      images: ["woocommerce-shopify-comparison.png", "custom-dev-diagram.png"],
    },
    relatedPosts: [
      "2dc5c88b-fa37-4879-9101-89b9c1a87824", // Web Dev Cost
      "57d7a373-e0f2-4376-9888-76ad1669d9a7", // Choosing the Right Dev Company
    ],
  },
];
