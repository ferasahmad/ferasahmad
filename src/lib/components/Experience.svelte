<script lang="ts">
  type ExperienceItem = {
    company: string;
    period: string;
    color: string;
    technologies: string[];
    description: string;
  };

  const experiences: ExperienceItem[] = [
    {
      company: "V1Apps",
      period: "2018-2020",
      color: "#0c2375",
      technologies: ["React Native", "React", "TypeScript", "Redux"],
      description:
        "Led development of a React Native mobile app delivering market insights to traders. Focused on performance optimization, state management, and scalable feature design, resulting in strong user growth and app ratings.",
    },
    {
      company: "Scout",
      period: "2020-2021",
      color: "#6e2365",
      technologies: ["React", "TypeScript", "React Native", "Firebase"],
      description:
        "Built web and mobile tools for content creators using React and TypeScript, including analytics features that improved engagement strategies. Helped scale platforms to tens of thousands of daily users with reliable, high-uptime systems.",
    },
    {
      company: "Series",
      period: "2021-2024",
      color: "#69010f",
      technologies: ["Next.js", "TypeScript", "Jest", "Cypress"],
      description:
        "Developed a scalable banking platform for SMBs handling billions in transactions annually. Focused on testing infrastructure, automation, and AI-driven tools to streamline workflows for users.",
    },
    {
      company: "Ohara",
      period: "2024-2026",
      color: "#7c3aed",
      technologies: ["Next.js", "TypeScript", "React Native", "Expo"],
      description:
        "Built core features for an AI-powered app generation platform using Next.js, React Native, and TypeScript, enabling non-technical users to create web apps seamlessly. Drove measurable gains in user adoption, retention, and conversion.",
    },
  ];

  const timelineEndColor = "transparent";
  const timelineColors = [...experiences.map((exp) => exp.color), timelineEndColor].join(", ");
  const timelineGradientHorizontal = `linear-gradient(90deg, ${timelineColors})`;
  const timelineGradientVertical = `linear-gradient(180deg, ${timelineColors})`;
</script>

<section class="flex justify-center bg-bg-primary p-8 text-black md:p-12 lg:h-screen lg:items-center lg:p-16 lg:px-32">
  <div>
    <h3 class="mb-10 text-left text-5xl text-black">EXPERIENCE</h3>

    <div class="mb-8 hidden opacity-70 lg:block">
      <div class="relative">
        <div
          class="absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2"
          style={`background: ${timelineGradientHorizontal}`}
        ></div>
        <div class="relative z-10 grid grid-cols-4 gap-14">
          {#each experiences as exp (exp.company + exp.period)}
            <div class="flex">
              <span class="h-3 w-3 rounded-full" style={`background-color: ${exp.color}`}></span>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div class="relative pl-8 md:pl-0">
      <div
        class="absolute bottom-0 left-1 top-0 w-[4px] rounded-full md:hidden"
        style={`background: ${timelineGradientVertical}`}
      ></div>
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
        {#each experiences as exp (exp.company + exp.period)}
          <article class="relative min-w-0">
            <span
              class="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full md:hidden"
              style={`background-color: ${exp.color}`}
            ></span>
            <h4 class="text-4xl font-semibold uppercase tracking-wide opacity-70" style={`color: ${exp.color}`}>
              {exp.company}
            </h4>
            <p class="mt-1 text-md uppercase tracking-widest opacity-70">{exp.period}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              {#each exp.technologies as tech (tech)}
                <span class="border border-black/20 bg-black/5 px-3 py-1 text-xs font-medium tracking-wide">
                  {tech}
                </span>
              {/each}
            </div>
            <p class="mt-4 text-2xl leading-6 text-black">{exp.description}</p>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
