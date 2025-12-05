import Image from "next/image";
import ThemeSwitch from "@/components/theme-switch";
import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import type { Content } from "@/data/content";
import LinkifyText from "@/components/LinkifyText";

interface ContentProps extends Content {
  variant?: "sky" | "rose" | "amber" | "emerald" | "indigo";
}

import Card from "@/components/Card";
import Badge from "@/components/Badge";
import HeroNavigation from "@/components/HeroNavigation";

const Content: React.FC<ContentProps> = ({ title, items, variant = "sky" }) => {
  return (
    <section
      className="my-14 text-sm"
      id={title.toLowerCase().replace(/\s+/g, "-")}
    >
      <h3 className="mb-6 font-bold text-xl text-slate-900 dark:text-slate-100 flex items-center gap-2">
        <span
          className={`w-2 h-8 rounded-full ${variant === "sky"
            ? "bg-sky-500"
            : variant === "rose"
              ? "bg-rose-500"
              : variant === "amber"
                ? "bg-amber-500"
                : variant === "indigo"
                  ? "bg-indigo-500"
                  : "bg-emerald-500"
            }`}
        ></span>
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-6">
        {items.map((item, index) => {
          const badges = item.subTitle?.split(",").map((s) => s.trim()) || [];
          return (
            <Card
              key={index}
              className="flex flex-col md:flex-row gap-4 md:gap-6 group"
            >
              <div className="flex-1">
                <div className="flex flex-col items-start mb-2 gap-1">
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 group-hover:text-current transition-colors">
                    <LinkifyText textWithLink={item.title} />
                  </h4>
                  {item.date && (
                    <span
                      className={`text-xs font-mono whitespace-nowrap px-2 py-1 rounded transition-colors ${variant === "sky"
                        ? "bg-slate-100 text-slate-500 dark:bg-slate-900"
                        : variant === "rose"
                          ? "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
                          : variant === "amber"
                            ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                            : variant === "indigo"
                              ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                              : "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
                        }`}
                    >
                      <LinkifyText textWithLink={item.date} />
                    </span>
                  )}
                </div>

                {item.description ? (
                  <div className="text-slate-600 dark:text-gray-400 mb-4 leading-relaxed">
                    <LinkifyText textWithLink={item.description} />
                  </div>
                ) : null}

                {badges.length > 0 && (
                  <div className="flex flex-wrap mt-auto">
                    {/* @ts-ignore */}
                    {badges.map((badge, bIndex) => (
                      <Badge key={bIndex} text={badge} variant={variant} />
                    ))}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <main className="max-w-3xl mx-auto px-6 py-20 relative min-h-screen font-light">
        <section className="flex flex-col items-center text-center py-12">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-2xl transform scale-150 opacity-50"></div>
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-sky-400 to-blue-500 shadow-xl overflow-hidden">
              <Image
                alt="Author"
                src="/me.webp"
                width={120}
                height={120}
                className="rounded-full object-cover border-4 border-white dark:border-slate-950 aspect-square"
              />
            </div>
          </div>

          <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            {generalData.name}
          </h1>
          <h2 className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-lg mb-4">
            {generalData.jobTitle}
          </h2>
          <p className="text-sm text-slate-500/80 italic -ml-14 rotate-1 max-w-xs mb-8">
            "I know how to center a div. You just have to... wait, let me Google
            this real quick."
          </p>

          <HeroNavigation />
        </section>
        <section className="my-9 text-sm" id="about">
          <h3 className="mb-1 text-slate-900 dark:text-slate-100 font-semibold">
            About
          </h3>
          <div className="text-slate-600 dark:text-slate-300">
            {Array.isArray(generalData.about) ? (
              generalData.about.map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{generalData.about}</p>
            )}
          </div>
        </section>
        <section className="my-6 text-sm" id="resume">
          <h3 className="mb-1 text-slate-900 dark:text-slate-100 font-semibold">
            Resume
          </h3>
          <div className="text-slate-600 dark:text-slate-300">
            <a
              href={"/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex text-sky-500"
            >
              Download PDF
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                  className="fill-current"
                ></path>
              </svg>
            </a>
          </div>
        </section>
        <section className="my-14 text-sm" id="contact">
          <h3 className="mb-6 text-slate-900 dark:text-slate-100  font-semibold">
            Contact
          </h3>
          <div className="flex flex-col gap-6">
            {generalData.contacts.map((contact, index) => {
              return (
                <div className="flex" key={index}>
                  <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                    {contact.label}
                  </div>
                  <div className="flex flex-col flex-1 text-slate-900 dark:text-slate-100">
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex text-sky-500"
                    >
                      {contact.value}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className=" text-sm">
          <h3 className="mb-6 text-slate-900 dark:text-slate-100  font-semibold">
            Arrange a 30 min meeting through
          </h3>
          <div className="text-slate-600 dark:text-slate-300">
            <a
              href={"https://cal.com/shariq-waseem-nc8a9e"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex text-sky-500"
            >
              Cal.com
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                  className="fill-current"
                ></path>
              </svg>
            </a>
          </div>
        </section>
        {contentData.map((content, index) => {
          let variant: "sky" | "rose" | "amber" | "emerald" | "indigo" = "sky";
          if (content.title === "Work Experience") variant = "rose";
          if (content.title === "Projects") variant = "amber";
          if (content.title === "Education") variant = "emerald";
          if (content.title === "Certifications") variant = "indigo";
          return <Content {...content} key={index} variant={variant} />;
        })}

        <div className="px-6 absolute left-0 bottom-6">
          <ThemeSwitch />
        </div>
      </main>
    </>
  );
}
