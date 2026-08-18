import Image from "next/image";
import type { ReactNode } from "react";
import { contentData } from "@/data/content";
import type { Content } from "@/data/content";
import { generalData } from "@/data/general";

const featuredWork = [
  {
    title: "Paktec Electric",
    context: "E-commerce platform · 2021",
    description:
      "Built a full-stack, revenue-generating e-commerce platform with Typesense-powered search and a Firebase backend, handling VPS setup, Docker deployment and DevOps on Hetzner. Reached 50k monthly unique visitors with full SEO integration and top Lighthouse and PageSpeed scores.",
    technologies: "React.js, Next.js, Typesense, Firebase, Docker, VPS",
    links: [{ label: "Website", href: "https://paktec.pk" }],
  },
  {
    title: "Adhan App",
    context: "Native iOS project · 2026",
    description:
      "Built a native iOS Adhan alarm app in SwiftUI with support from agentic coding tools.",
    technologies: "SwiftUI",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/adhan-alarm-app/id6761374447",
      },
    ],
  },
  {
    title: "Gamecheck",
    context: "Web, iOS and Android · Oct 2024 - Sep 2025",
    description:
      "Led full-stack product development across web, mobile and browser extension platforms, including a migration of the core server from Node.js to NestJS.",
    technologies: "React, Next.js, NestJS, MongoDB",
    links: [
      { label: "Website", href: "https://gamecheck.com" },
      {
        label: "App Store",
        href: "https://apps.apple.com/gb/app/gamecheck/id6742909877",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.gamecheck.app",
      },
    ],
  },
  {
    title: "Tattoo Masters",
    context: "Freelance mobile project",
    description:
      "Developed a social app connecting users with tattoo artists worldwide, including chat, geolocation filters, image compression and background tasks.",
    technologies: "React Native, Expo, Firebase, Typesense, MongoDB",
    links: [],
  },
  {
    title: "Olo",
    context: "Contract mobile work · Jan 2023 - Present",
    description:
      "Maintain and enhance the Olo Meditation App, manage its Webflow site and integrate Firebase services, analytics and third-party product tools.",
    technologies: "React Native, Firebase, Webflow",
    links: [
      { label: "Website", href: "https://olo.app" },
      { label: "App Store", href: "https://apple.co/3YPKc4q" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.olo.soma&pcampaignid=web_share",
      },
    ],
  },
  {
    title: "Foxtons",
    context: "Web platform · Jun 2022 - Oct 2024",
    description:
      "Helped deliver portals for landlords, tenants and buyers in a distributed team, with an emphasis on reliable releases, performance and search visibility.",
    technologies: "Next.js, React, GitLab CI/CD",
    links: [{ label: "Website", href: "https://foxtons.co.uk" }],
  },
];

const experience = (
  contentData.find(
    (section) => section.title === "Work Experience",
  ) as Content | undefined
)?.items ?? [];

const skills = (
  contentData.find(
    (section) => section.title === "Technical Skills",
  ) as Content | undefined
)?.items ?? [];

const emailContact = generalData.contacts.find(
  (contact) => contact.label === "Email",
);
const githubContact = generalData.contacts.find(
  (contact) => contact.label === "Github",
);
const linkedInContact = generalData.contacts.find(
  (contact) => contact.label === "LinkedIn",
);

const normalizeHref = (href: string) =>
  /^(https?:|mailto:|tel:)/.test(href) ? href : `https://${href}`;

const renderInlineLinks = (text: string): ReactNode[] =>
  text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);

    if (!match) {
      return <span key={`${part}-${index}`}>{part}</span>;
    }

    return (
      <a
        key={`${match[2]}-${index}`}
        href={normalizeHref(match[2])}
        target="_blank"
        rel="noopener noreferrer"
        className="decoration-[#98948b] underline decoration-1 underline-offset-4 transition-colors hover:text-[#a6442e] hover:decoration-[#a6442e]"
      >
        {match[1]}
      </a>
    );
  });

const firstSentence = (text: string) => {
  const sentenceEnd = text.indexOf(". ");
  return sentenceEnd === -1 ? text : text.slice(0, sentenceEnd + 1);
};

const ExternalArrow = () => (
  <span aria-hidden="true" className="ml-1">
    ↗
  </span>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f0e8] text-[#1d1d1a]">
      <header className="border-b border-[#cbc7bc]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="text-base font-semibold tracking-[-0.01em] sm:text-lg"
          >
            {generalData.name}
          </a>

          <nav
            aria-label="Mobile navigation"
            className="flex items-center gap-5 text-[15px] md:hidden"
          >
            <a className="hover:text-[#a6442e]" href="#work">
              Work
            </a>
            <a
              className="border-b border-current pb-0.5 hover:text-[#a6442e]"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé <ExternalArrow />
            </a>
          </nav>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-base md:flex"
          >
            <a className="hover:text-[#a6442e]" href="#work">
              Work
            </a>
            <a className="hover:text-[#a6442e]" href="#experience">
              Experience
            </a>
            <a
              className="hover:text-[#a6442e]"
              href="#about"
            >
              About
            </a>
            <a className="hover:text-[#a6442e]" href="#contact">
              Contact
            </a>
            <a
              className="border-b border-current pb-0.5 hover:text-[#a6442e]"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé <ExternalArrow />
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="mx-auto grid max-w-[1280px] grid-cols-[88px_minmax(0,1fr)] gap-x-5 px-5 pb-14 pt-10 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-x-8 sm:px-8 sm:pb-16 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center lg:gap-x-20 lg:px-12 lg:py-24"
      >
        <div className="col-start-2 row-start-1 max-w-[240px] self-center lg:col-start-1 lg:max-w-none lg:self-start">
          <p className="text-[17px] leading-7 text-[#66635d] sm:text-xl">
            Full-stack software engineer
          </p>
          <p className="mt-2 max-w-[190px] text-base leading-6 text-[#77736c] lg:hidden">
            Web, iOS and Android product work.
          </p>
        </div>

        <h1 className="col-span-2 col-start-1 row-start-2 mt-10 max-w-[900px] text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:mt-12 sm:text-6xl lg:col-span-1 lg:mt-7 lg:text-[4.75rem] lg:leading-[0.98] lg:tracking-[-0.055em]">
          I build dependable software for web and mobile.
        </h1>

        <div className="col-span-2 col-start-1 row-start-3 mt-7 max-w-2xl text-[17px] leading-7 text-[#4f4d48] sm:text-lg sm:leading-8 lg:col-span-1 lg:mt-9 lg:text-xl lg:leading-9">
          <p className="lg:hidden">
            I’m Shariq. For 5+ years I’ve built and improved products with
            React, React Native, Next.js and Node.js. My experience includes
            current contract work for Olo Space, roles at Gamecheck, Creative
            Chaos and WEMTECH, and several other freelance and personal
            projects.
          </p>
          <div className="hidden space-y-4 lg:block">
            <p>
              I’m Shariq Waseem. For more than five years, I’ve worked across
              React, React Native, Next.js and Node.js, shipping products,
              improving performance and solving the unglamorous problems that
              keep software useful.
            </p>
            <p>
              My experience includes current contract work for Olo Space;
              roles at Gamecheck, Creative Chaos and WEMTECH; and several other
              freelance and personal projects.
            </p>
          </div>
        </div>

        <div className="col-span-2 col-start-1 row-start-4 mt-7 flex flex-wrap gap-x-8 gap-y-4 text-base font-medium sm:text-lg lg:col-span-1 lg:mt-9">
          <a
            className="border-b border-current pb-1 hover:text-[#a6442e]"
            href={emailContact?.href}
          >
            Email me <ExternalArrow />
          </a>
          <a
            className="border-b border-current pb-1 hover:text-[#a6442e]"
            href={linkedInContact?.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ExternalArrow />
          </a>
          <a
            className="border-b border-current pb-1 hover:text-[#a6442e]"
            href={githubContact?.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ExternalArrow />
          </a>
        </div>

        <figure className="col-start-1 row-start-1 w-full self-start lg:col-start-2 lg:row-span-4 lg:self-center">
          <div className="overflow-hidden bg-[#d9d3c6]">
            <Image
              src="/me.webp"
              alt="Portrait of Shariq Waseem"
              width={840}
              height={1000}
              priority
              sizes="(min-width: 1024px) 390px, (min-width: 640px) 96px, 88px"
              className="aspect-[4/5] w-full object-cover object-center lg:grayscale-[12%]"
            />
          </div>
        </figure>
      </section>

      <section
        id="work"
        className="scroll-mt-8 border-t border-[#cbc7bc]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:px-12 lg:py-24">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Selected work
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#66635d]">
              A few products I’ve worked on recently.
            </p>
          </div>

          <div className="divide-y divide-[#cbc7bc]">
            {featuredWork.map((project) => (
              <article
                key={project.title}
                className="grid gap-5 py-8 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-12 md:py-11 md:first:pt-0 md:last:pb-0"
              >
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.035em]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#66635d]">
                    {project.context}
                  </p>
                </div>

                <div>
                  <p className="text-lg leading-8 text-[#3f3e3a]">
                    {project.description}
                  </p>
                  <p className="mt-4 text-base leading-7 text-[#66635d]">
                    {project.technologies}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-base font-medium">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-current pb-0.5 hover:text-[#a6442e]"
                      >
                        {link.label}
                        <ExternalArrow />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-8 border-t border-[#cbc7bc]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20 lg:px-12 lg:py-24">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Experience
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#66635d]">
              Product work across full-time roles, contracts and distributed
              teams.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block border-b border-current pb-1 text-base font-medium hover:text-[#a6442e]"
            >
              Full résumé <ExternalArrow />
            </a>
          </div>

          <div className="divide-y divide-[#cbc7bc]">
            {experience.map((item) => (
              <article
                key={`${item.title}-${item.date}`}
                className="grid gap-3 py-7 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,1fr)_170px] md:gap-10 md:py-8 md:first:pt-0 md:last:pb-0"
              >
                <div>
                  <h3 className="text-xl font-semibold leading-8 tracking-[-0.015em]">
                    {renderInlineLinks(item.title)}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-[#66635d]">
                    {firstSentence(item.description)}
                  </p>
                </div>
                <p className="order-first text-base leading-7 text-[#66635d] md:order-none md:text-right">
                  {item.date}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-8 border-t border-[#cbc7bc]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24 lg:px-12 lg:py-24">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              About
            </h2>
            <div className="mt-7 max-w-xl space-y-5 text-lg leading-8 text-[#4f4d48]">
              <p>
                I work across the whole product: interface details,
                application logic, APIs, data, releases and performance. My
                recent projects have been remote and cross-functional, often
                on products that already have real users and real constraints.
              </p>
              <p>
                I studied Computer Science at FAST NUCES in Islamabad. I’m at
                my best when the work calls for both careful implementation and
                practical product judgment.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.025em]">
              Technical range
            </h3>
            <dl className="mt-6 divide-y divide-[#cbc7bc]">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="grid gap-2 py-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8"
                >
                  <dt className="text-base font-semibold leading-7">
                    {skill.title}
                  </dt>
                  <dd className="text-base leading-7 text-[#66635d]">
                    {skill.subTitle}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-8 bg-[#20201d] text-[#f3f0e8]"
      >
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
            <h2 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Let’s talk.
            </h2>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-[#cbc7bc] sm:text-xl sm:leading-9">
                The simplest way to reach me is by email. For a longer
                conversation, you can book thirty minutes on Cal.com.
              </p>
              <a
                href={emailContact?.href}
                className="mt-8 inline-block break-all border-b border-[#f3f0e8] pb-2 text-[1.35rem] font-medium tracking-[-0.025em] hover:border-[#e07a5f] hover:text-[#e07a5f] sm:text-3xl"
              >
                {emailContact?.value}
              </a>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 text-base">
                <a
                  href="https://cal.com/shariq-waseem-nc8a9e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-current pb-0.5 hover:text-[#e07a5f]"
                >
                  Book a call <ExternalArrow />
                </a>
                <a
                  href={githubContact?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-current pb-0.5 hover:text-[#e07a5f]"
                >
                  GitHub <ExternalArrow />
                </a>
                <a
                  href={linkedInContact?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-current pb-0.5 hover:text-[#e07a5f]"
                >
                  LinkedIn <ExternalArrow />
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-14 border-t border-[#4c4b45] pt-6 text-[15px] text-[#aaa69c] sm:mt-20">
            <p>© {new Date().getFullYear()} {generalData.name}</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
