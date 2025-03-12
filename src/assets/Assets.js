// REACT ICONS
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaPinterest,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

// ICONS

// IMAGES
import imigongo from "/images/img/imigongo.png";

import logo from "/images/image/logo.jpg";
import cube from "/images/image/cube.png";
import inside from "/images/image/inn.png";
import bgVid from "/images/image/bg-video.webm";
import loginVid from "/images/image/login.mp4";
import videoIntro from "/images/image/video.mp4";

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

import amazon from "/images/partners/amazon.svg";
import android from "/images/partners/android.svg";
import appstore from "/images/partners/appstore.svg";
import azure from "/images/partners/azure.svg";
import canva from "/images/partners/canva.svg";
import dhl from "/images/partners/dhl.svg";
import linkedin from "/images/partners/linkedin.svg";
import microsoft from "/images/partners/microsoft.svg";
import mongodb from "/images/partners/mongodb.svg";
import paypal from "/images/partners/paypal.svg";
import pinterest from "/images/partners/pinterest.svg";
import playstore from "/images/partners/playstore.svg";
import slack from "/images/partners/slack.svg";
import shopify from "/images/partners/shopify.svg";
import unknown1 from "/images/partners/unknown.svg";
import youtube from "/images/partners/youtube.svg";
import zoom from "/images/partners/zoom.svg";
import {
  CiBezier,
  CiBullhorn,
  CiChat1,
  CiDesktop,
  CiMicrochip,
  CiPen,
} from "react-icons/ci";

// EXPORTABLES

//   exported images
export const assets = {
  imigongo,
  bgVid,
  videoIntro,
};

//home - SERVICES
export const homeService = [
  {
    icon: CiDesktop,
    subtitle: "Custom digital solutions",
    title: "Web & Software Development",
    descr:
      "Your business needs more than just a website—it needs a high-performing digital experience. We build powerful, scalable web and software solutions that don't just look good but work flawlessly to grow your brand and drive results.",
    url: "/services/web-software-development",
  },
  {
    icon: CiBezier,
    subtitle: "Seamless user experiences",
    title: "UI/UX & Product Design",
    descr:
      "Design isn’t just about aesthetics—it’s about impact. We create user-centric, visually stunning, and highly functional interfaces that keep your audience engaged, increase conversions, and elevate your brand’s reputation.",
    url: "/services/ui-ux-product-design",
  },
  {
    icon: CiPen,
    subtitle: "Design that speaks volumes",
    title: "Graphic Design & Branding",
    descr:
      "Your brand deserves to be unforgettable. We craft stunning visuals, from logos to full branding systems, that not only capture attention but tell a compelling story that makes your business stand out in a crowded market.",
    url: "/services/graphic-design-branding",
  },
  {
    icon: CiBullhorn,
    subtitle: "Maximize your reach, dominate your market",
    title: "Digital Marketing & Google Services",
    descr:
      "Visibility is everything. We help you attract, engage, and convert customers through powerful SEO, social media, Google Ads, Business Profile setup, and targeted online strategies that put your brand ahead of the competition.",
    url: "/services/digital-marketing-google",
  },
  {
    icon: CiMicrochip,
    subtitle: "Reliable tech solutions for your business",
    title: "Tech & IT Services",
    descr:
      "We keep your business running smoothly with expert website management, hosting, IT support, data entry, and custom tech solutions, ensuring you never lose time or money due to tech issues.",
    url: "/services/tech-it-support",
  },
  {
    icon: CiChat1,
    subtitle: "Strategic insights for unstoppable growth",
    title: "Consultation & Strategy",
    descr:
      "Success isn’t accidental—it’s planned. We provide expert guidance to help you refine your strategy, streamline operations, and scale efficiently, turning your ideas into profitable digital solutions.",
    url: "/services/consultation-strategy",
  },
];

// partners
export const partners = [
  { title: "amazon", icon: amazon },
  {
    title: "Canva",
    icon: canva,
  },
  {
    title: "Mongo DB",
    icon: mongodb,
  },
  {
    title: "Pinterest",
    icon: pinterest,
  },
  {
    title: "Shopify",
    icon: shopify,
  },
  {
    title: "Chain",
    icon: unknown1,
  },
  {
    title: "Zoom",
    icon: zoom,
  },
  {
    title: "Android",
    icon: android,
  },
  {
    title: "AppStore",
    icon: appstore,
  },
  {
    title: "Azure",
    icon: azure,
  },
  {
    title: "DHL",
    icon: dhl,
  },
  {
    title: "LinkedIn",
    icon: linkedin,
  },
  {
    title: "Microsoft",
    icon: microsoft,
  },
  {
    title: "Paypal",
    icon: paypal,
  },
  {
    title: "PlayStore",
    icon: playstore,
  },
  {
    title: "Slack",
    icon: slack,
  },
  {
    title: "YouTube",
    icon: youtube,
  },
];

// HEADER COMPONENT
export const headerSliderTags = [
  "Allow us to establish a lasting reputation for your business",
  "You deserve a great product",
  "Innovate • Design • Build • Scale",
  "Solutions customized for your business needs",
  "Product that create endless opportunities for your business",
  "*Our website is still under development, sorry for issue you may meet"
];

// HEADER NAVLINKS
export const navLinks = [
  {
    name: "Solutions",
    sublinks: ["Web Development", "App Development", "Product Design"],
  },
  {
    name: "Products",
    sublinks: [
      "Domain Checker",
      "E-commerce",
      "Text-to-Voice",
      "URL Shortener",
    ],
  },
  { name: "Company", sublinks: ["About", "Career"] },
  {
    name: "Academy",
    sublinks: ["Tutoring", "Online Courses", "Tutorials", "Videos"],
  },
  { name: "Resources", link: "/resources" },
  { name: "Contact", link: "/contact" },
];

// SOCIAL MEDIAS
export const socialLinks = [
  {
    title: "Instagram",
    url: "https://instagram.com/meyvnagency",
    icon: FaInstagram, // Remove JSX syntax
  },
  {
    title: "Pinterest",
    url: "https://pinterest.com/meyvnagency",
    icon: FaPinterestP,
  },
  {
    title: "Dribbble",
    url: "https://dribbble.com/meyvnagency",
    icon: FaDribbble,
  },
  {
    title: "Behance",
    url: "https://behance.net/meyvnagency",
    icon: FaBehance,
  },
  {
    title: "Twitter X",
    url: "https://x.com/meyvnagency",
    icon: FaXTwitter,
  },
];

// APPS & WEB-APPS
export const hotLinks = [
  {
    title: "Domain Checker",
    url: "https://",
    id: "domain-checker",
  },
  {
    title: "Text 2 Voice",
    url: "https://",
    id: "t2v",
  },
  {
    title: "URL Shortner",
    url: "https://",
    id: "urls",
  },
  {
    title: "QR Code Scanner",
    url: "https://",
    id: "qrc",
  },
];

// CTAS - CALL TO ACTIONS
export const CTAs = {
  home: {
    contact: {
      title: "Transform Your Vision into Reality",
      description:
        "Whether you need a stunning website, top-tier branding, or expert digital marketing, we bring ideas to life with innovative solutions.",
      button: { text: "Let's Get Started", url: "/contact" },
    },
    academy: {
      title: " Master Tech & Design—Learn from the Best",
      description:
        "Learn from professionals and fast-track your career in tech. Join Meyvn Academy today!",
      button: { text: "Start Learning", url: "/academy" },
    },
    resources: {
      title: "Level Up with Free Digital Resources",
      description:
        "Access high-quality templates, mockups, software components, and design assets to level up your projects.",
      button: { text: "Explore Now", url: "/resources" },
    },
  },
  aboutPage: {
    workWithUs: {
      title: "Partner with a Team That Delivers",
      description:
        "We’re more than just an agency—we’re your growth partners. Let's build something exceptional together.",
      button: { text: "Work With Us", url: "/contact" },
    },
    journey: {
      title: "Explore Our Journey & Expertise",
      description:
        "Discover how Meyvn Agency has helped brands succeed through innovation and strategy.",
      button: { text: "Learn More", url: "/about" },
    },
  },
  academyPage: {
    enroll: {
      title: "Start Your Journey in Tech & Design",
      description:
        "Learn coding, UI/UX, and digital skills from experienced professionals. Gain real-world expertise with hands-on training.",
      button: { text: "Enroll Now", url: "/academy/enroll" },
    },
    resources: {
      title: "Free & Premium Learning Resources",
      description:
        "Get exclusive coding snippets, design assets, and software components to accelerate your learning.",
      button: { text: "Download Resources", url: "/resources" },
    },
  },
  resourcesPage: {
    browse: {
      title: "Level Up Your Projects with Free & Premium Assets",
      description:
        "Download ready-to-use templates, UI kits, icons, and software components to boost your workflow.",
      button: { text: "Browse Resources", url: "/resources" },
    },
    contribute: {
      title: "Contribute & Share Your Work",
      description:
        "Join our creative community—submit your own designs, code snippets, or templates and get featured.",
      button: { text: "Submit Now", url: "/resources/contribute" },
    },
  },
  shopPage: {
    shopNow: {
      title: "Premium Digital Products for Creators & Developers",
      description:
        "Shop high-quality templates, themes, software, and design assets to enhance your work.",
      button: { text: "Shop Now", url: "/shop" },
    },
    deals: {
      title: "Exclusive Deals & Discounts",
      description:
        "Get access to limited-time discounts on top-tier digital products. Sign up and never miss out!",
      button: { text: "Get Discounts", url: "/shop/deals" },
    },
  },
};

// 3 WORDS FOR MEYVN
export const in3words = [
  {
    id: 1,
    title: "Innovative",
    preview: inside,
    descr:
      "We push boundaries with cutting-edge digital solutions, ensuring creativity meets functionality.",
  },
  {
    id: 2,
    preview: cube,
    title: "Strategic",
    descr:
      "Every project is driven by data-backed insights and meticulous planning to maximize results.",
  },
  {
    id: 3,
    title: "Impactful",
    preview: loginVid,
    descr:
      "Our work isn't just about aesthetics; it drives real growth, engagement, and success.",
  },
];

// PROJECTS WORKED ON
export const projects = [
  {
    title: "DJC Electronics Ltd",
    thumbnail: djc,
    design: [
      "logo",
      "color palette",
      "typography",
      "inventory system (UI/UX)",
      "landing page",
    ],
    client: "DJC Electronics Ltd, Kigali, Rwanda",
    url: "https://retailine.vercel.app/",
    description:
      "DJC Electronics Ltd sought a stock management system. Starting from scratch, I designed the logo, color palette, typography, and their inventory system UI/UX. The provided link showcases the landing page, while system access is restricted to authorized employees or admins.",
  },
  {
    title: "Adriel Homes",
    thumbnail: adriel,
    design: ["website", "company profile", "landscaping business proposal"],
    client: "Adriel Homes, Nyarutarama, Rwanda",
    url: "https://adrielinn.vercel.app/",
    description:
      "Adriel Homes specializes in real estate, landscaping, and tours. I developed their website, designed a professional company profile, and created a landscaping business proposal for the Green Nigeria Project.",
  },
  {
    title: "Kampus Agency",
    thumbnail: kampus,
    design: [
      "logo",
      "color palette",
      "typography",
      "business card",
      "website",
      "branding",
    ],
    client: "Kampus Agency, Kenya & Rwanda",
    url: "https://kampusagency.vercel.app/",
    description:
      "Kampus Agency is a web design agency operating in Kenya and Rwanda. I handled their complete branding, including logo, color palette, typography, business cards, and website design.",
  },
  {
    title: "Event Rwanda",
    thumbnail: events,
    design: ["website development", "UI/UX design"],
    client: "Event Rwanda, Rwanda",
    url: "https://events-iwm.vercel.app/",
    description:
      "Event Rwanda is a platform for sharing, booking, and exploring events happening in Rwanda. I provided website development and UI design services under my personal brand, iwmvictor.",
  },
  {
    title: "Inzozi Tours and Airticketing",
    thumbnail: inzozi,
    design: ["website development"],
    client: "Inzozi Tours, Rwanda",
    url: "https://visitrwanda.vercel.app/",
    description:
      "Inzozi Tours offers tours and airticketing services. I contributed by developing their website to provide a seamless experience for customers looking to explore Rwanda.",
  },
  {
    title: "Kingdom Real Estate",
    thumbnail: kingdom,
    design: [
      "color palette",
      "typography",
      "marketing collateral",
      "business card",
      "website",
      "hosting",
      "social media management",
      "content creation",
    ],
    client: "Kingdom Real Estate, Rwanda",
    url: "https://www.kingdomrealestaterwanda.com/",
    description:
      "Kingdom Real Estate is a brokerage firm in Rwanda. My work included creating their color palette, typography, marketing collateral, business cards, website, hosting, and managing social media accounts across platforms like Instagram, Twitter, Facebook, and TikTok.",
  },
  {
    title: "Klein Transports & Tours",
    thumbnail: klein,
    design: [
      "logo",
      "color palette",
      "typography",
      "business card",
      "marketing collateral",
      "website",
      "branding",
    ],
    client: "Klein Transports & Tours, Kigali, Rwanda",
    url: "https://kleintours.online/",
    description:
      "Klein Transports & Tours offers car rental and travel services in Rwanda. I provided a full branding package, including logo design, color palette, typography, business cards, marketing collateral, and website development.",
  },
  {
    title: "Majoro Care Act (MCA)",
    thumbnail: mca,
    design: ["graphic design", "web development", "logo", "branding"],
    client: "Majoro Care Act Ltd, Kigali, Rwanda",
    url: "https://majorocareact.com/",
    description:
      "Majoro Care Act Ltd is a real estate company in Kigali. My work for MCA included graphic design, web development, logo creation, and branding elements.",
  },
  {
    title: "MCA Tour",
    thumbnail: mcatour,
    design: ["branding", "web development"],
    client: "MCA Tour, Kigali, Rwanda",
    url: "https://mca-tour.vercel.app/",
    description:
      "MCA Tour is the tours and travel division of Majoro Care Act. I developed their branding and website, ensuring a cohesive visual identity with their parent company.",
  },
  {
    title: "Walluxe",
    thumbnail: walluxe,
    design: ["website", "UI/UX design"],
    client: "Walluxe, Rwanda",
    url: "https://walluxe.vercel.app/",
    description:
      "Walluxe is a movie and video streaming platform focusing on agasobanuye (movies translated to Kinyarwanda by popular translators like Rocky Kimomo and Junior Giti). I developed their website and UI design to deliver a modern, user-friendly experience.",
  },
];
