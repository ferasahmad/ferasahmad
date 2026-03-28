import React from "react";

const experiences = [
  {
    company: "V1Apps",
    period: "2018–2020",
    color: "#0c2375",
    technologies: ["React Native", "React", "TypeScript", "Redux"],
    description:
      "Led development of a React Native mobile app delivering market insights to traders. Focused on performance optimization, state management, and scalable feature design, resulting in strong user growth and app ratings.",
  },
  {
    company: "Scout",
    period: "2020–2021",
    color: "#6e2365",
    technologies: ["React", "TypeScript", "React Native", "Firebase"],
    description:
      "Built web and mobile tools for content creators using React and TypeScript, including analytics features that improved engagement strategies. Helped scale platforms to tens of thousands of daily users with reliable, high-uptime systems.",
  },
  {
    company: "Series",
    period: "2021–2024",
    color: "#69010f",
    technologies: ["Next.js", "TypeScript", "Jest", "Cypress"],
    description:
      "Developed a scalable banking platform for SMBs handling billions in transactions annually. Focused on testing infrastructure, automation, and AI-driven tools to streamline workflows for users.",
  },
  {
    company: "Ohara",
    period: "2024–2026",
    color: "#7c3aed",
    technologies: ["Next.js", "TypeScript", "React Native", "Expo"],
    description:
      "Built core features for an AI-powered app generation platform using Next.js, React Native, and TypeScript, enabling non-technical users to create web apps seamlessly. Drove measurable gains in user adoption, retention, and conversion.",
  },
];

export default function Experience() {
  const timelineEndColor = "transparent";
  const timelineColors = experiences
    .map((exp) => exp.color)
    .concat(timelineEndColor)
    .join(", ");
  const timelineGradientHorizontal = `linear-gradient(90deg, ${timelineColors})`;
  const timelineColorsMobile = [...experiences]
    .reverse()
    .map((exp) => exp.color)
    .concat(timelineEndColor)
    .join(", ");
  const timelineGradientVerticalMobile = `linear-gradient(180deg, ${timelineColorsMobile})`;

  return (
    <section className="flex justify-center bg-bg-primary p-8 md:p-12 lg:items-center lg:h-screen lg:p-16 lg:px-32 text-black">
      <div className="">
        <h3 className="text-5xl text-black text-left mb-10">EXPERIENCE</h3>

        <div className="hidden lg:block mb-8 opacity-70">
          <div className="relative">
            <div
              className="absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2"
              style={{ background: timelineGradientHorizontal }}
            />
            <div className="relative z-10 grid grid-cols-4 gap-14">
              {experiences.map((exp) => (
                <div key={`dot-${exp.company}-${exp.period}`} className="flex">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: exp.color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative pl-8 md:pl-0">
          <div
            className="absolute left-1 top-0 bottom-0 w-[4px] rounded-full md:hidden"
            style={{ background: timelineGradientVerticalMobile }}
          />
          <div className="flex flex-col-reverse gap-12 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
            {experiences.map((exp) => (
              <article
                key={`${exp.company}-${exp.period}`}
                className="min-w-0 relative"
              >
                <span
                  className="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full md:hidden"
                  style={{ backgroundColor: exp.color }}
                />
                <h4
                  className="text-4xl font-semibold uppercase tracking-wide opacity-70"
                  style={{ color: exp.color }}
                >
                  {exp.company}
                </h4>
                <p className="mt-1 text-md uppercase tracking-widest opacity-70">
                  {exp.period}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={`${exp.company}-${exp.period}-${tech}`}
                      className=" border border-black/20 bg-black/5 px-3 py-1 text-xs font-medium tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-2xl text-black leading-6">
                  {exp.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
