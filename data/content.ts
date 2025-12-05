export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title:
          "Full Stack Engineer — [Gamecheck](https://gamecheck.com), Gibraltar (Remote)",
        subTitle: "React, Next.js v15, Nest.js, MongoDB",
        date: "Oct 2024 – Sep 2025",
        description:
          "Built scalable web and mobile apps; designed REST APIs with responsive UIs. Achieved >85 GTmetrix on slow 3G/older hardware and near-perfect Lighthouse/PageSpeed scores. [Website](https://gamecheck.com), [iOS](https://apps.apple.com/gb/app/gamecheck/id6742909877), [Android](https://play.google.com/store/apps/details?id=com.gamecheck.app).",
      },
      {
        title:
          "Contract Mobile Software Developer — [Olo Space](https://olo.app), Finland (Remote)",
        subTitle: "React Native, AWS, Firebase",
        date: "Jan 2023 – Present",
        description:
          "Maintained and enhanced Olo Meditation app with custom animations, minimalist UI, analytics, and improved deployment workflows while optimizing runtime performance. Also helped and worked on the [website](https://olo.app) which is built in Webflow.",
      },
      {
        title:
          "Senior Software Developer I — Creative Chaos ([Foxtons UK](https://foxtons.co.uk) project), Karachi (Remote)",
        subTitle: "React.js, Next.js, GitLab CI/CD",
        date: "Jun 2022 – Oct 2024",
        description:
          "Delivered portals for landlords, tenants, and buyers using Next.js. Operated in a 30+ distributed team, scaling for high traffic with near-perfect SEO and performance. Was the top contributor on the project.",
      },
      {
        title: "React Native / React.js Developer — WEMTECH, Islamabad",
        subTitle: "Onsite",
        date: "Jul 2020 – May 2022",
        description:
          "Built iOS/Android apps in React Native and web apps in React.js. Developed scalable UI components and optimized performance.",
      },
      {
        title: "Android Intern — Nexsys Lab, FAST NUCES, Islamabad",
        subTitle: "Internship",
        date: "Jun 2019 – Jul 2019",
        description:
          "Android development internship focused on fundamentals and app development workflows.",
      },
      {
        title:
          "Contract React Native Developer — Tattoo Masters, Helsinki (Remote)",
        subTitle: "React Native (Expo), Firebase, Typesense, MongoDB",
        date: "Dec 2024 – Aug 2025",
        description:
          "Social app connecting users with tattoo artists. Implemented chat, geolocation filters, image compression, and background tasks.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "BSc Computer Science",
        subTitle: "FAST NUCES, Islamabad",
        date: "2016 – 2020",
        description:
          "Focus: Mobile & Web Development, Data Science, Blockchain. FYP: BillMan — OCR-powered bill manager using YOLO & Tesseract. [Degree verification link](www.nu.edu.pk/verification?id=16i-0257)",
      },
      {
        title: "A Levels & O Levels",
        subTitle: "St. Mary's Academy, Rawalpindi",
        date: "2009 – 2015",
        description: "Pre-university education.",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Gamecheck Platform — Full Stack",
        subTitle: "React, Next.js v15, Nest.js, MongoDB",
        date: "2024 – Present",
        description:
          "Implemented full-stack features and achieved >85 GTmetrix on slow 3G/older iPhones with near-perfect Lighthouse/PageSpeed scores. [Website](https://gamecheck.com), [iOS](https://apps.apple.com/gb/app/gamecheck/id6742909877), [Android](https://play.google.com/store/apps/details?id=com.gamecheck.app).",
      },
      {
        title: "[Olo Wellbeing App](https://olo.app)",
        subTitle: "React Native, AWS, Firebase",
        date: "2023 – Present",
        description:
          "Meditation app with custom animations, minimalist UX, and cloud analytics. Available on [iOS App Store](https://apple.co/3YPKc4q) & [Google Play](https://play.google.com/store/apps/details?id=com.olo.soma&pcampaignid=web_share).",
      },
      {
        title: "Foxtons UK Portal — Web",
        subTitle: "Next.js, React.js, CI/CD",
        date: "2022 – 2024",
        description:
          "Portals for landlords, tenants, and buyers for [foxtons.co.uk](https://foxtons.co.uk). Near-perfect SEO and performance metrics. Top contributor.",
      },
      {
        title: "Paktec Electric — E-commerce",
        subTitle: "Next.js, Firebase, Typesense",
        date: "2021",
        description:
          "Full-stack e-commerce solution with a custom-built CMS and order tracking system. Powered by a Firebase backend and Typesense search. Currently serving an active customer base as a self-hosted, independent platform. [Live Store](https://paktec.pk)",
      },
      {
        title: "Bellona Network — Social & Podcasts",
        subTitle: "React Native (Bare), OTA updates, Socket.io",
        date: "2021",
        description:
          "Podcast + networking app for women in South Africa. On [Google Play](play.google.com/store/apps/details?id=com.bellona.app&hl=en&gl=US) & [App Store](apps.apple.com/in/app/bellona-network/id1574485776).",
      },
      {
        title: "JACY Token — Blockchain App",
        subTitle: "WalletConnect, Ethers, Uniswap SDK",
        date: "2021",
        description:
          "Token swaps (JACY<>WETH) with real-time rates via GraphQL + Apollo in React Native.",
      },
      {
        title: "BillMan — FYP",
        subTitle: "YOLO, Tesseract, OCR",
        date: "2020",
        description:
          "OCR-powered bill manager leveraging YOLO for detection and Tesseract for text extraction.",
      },
      {
        title: "Tattoo Masters — Social App",
        subTitle: "React Native (Expo), Firebase, Typesense, MongoDB",
        date: "2024 – 2025",
        description:
          "Chat, geolocation filters, image compression, background tasks for global artist-user matching.",
      },
    ],
  },
  {
    title: "Certifications",
    items: [
      {
        title: "HackerRank — Front End Developer (React)",
        date: "",
        description:
          "Certification of proficiency in React and front-end development.",
      },
      {
        title: "Coursera — Advanced React Programming",
        date: "",
        description: "Advanced coursework in React and related tooling.",
      },
    ],
  },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle?: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
