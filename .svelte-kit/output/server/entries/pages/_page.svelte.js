import { a3 as ensure_array_like, a4 as attr, a5 as attr_class, e as escape_html, a6 as attr_style } from "../../chunks/index.js";
function About($$renderer) {
  $$renderer.push(`<section class="flex justify-center bg-bg-light p-8 text-black md:p-12 lg:h-screen lg:items-center lg:p-16 lg:px-32"><div class="flex w-full flex-col gap-10 lg:flex-row lg:items-center"><div class="flex flex-1 flex-col justify-center"><p class="mb-10 text-left text-5xl text-black">ABOUT ME</p> <p class="mb-4 text-2xl text-black">Hi I'm Feras and I like to build software. I've worked on fintech apps, content creator tools, and AI-driven products, but what I care about most is making complex ideas feel simple through thoughtful design and engineering.</p> <p class="text-2xl text-black">When I'm not coding, you can find me doing some photography, hiking, snowboarding, and sometimes, just sometimes, reading.</p></div> <div class="hidden flex-1 items-center justify-end lg:flex"><picture><source type="image/avif" srcset="/images/optimized/about-section/main-600.avif 600w, /images/optimized/about-section/main-900.avif 900w, /images/optimized/about-section/main-1200.avif 1200w, /images/optimized/about-section/main-1600.avif 1600w" sizes="(min-width: 1024px) 40vw, 0px"/> <source type="image/webp" srcset="/images/optimized/about-section/main-600.webp 600w, /images/optimized/about-section/main-900.webp 900w, /images/optimized/about-section/main-1200.webp 1200w, /images/optimized/about-section/main-1600.webp 1600w" sizes="(min-width: 1024px) 40vw, 0px"/> <img src="/images/about-section/main.png" alt="" width="1200" height="1049" loading="lazy" decoding="async"/></picture></div></div></section>`);
}
function Contact($$renderer) {
  const contactLinks = [
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/ferasahmad58",
      className: "border-[#354376] text-[#354376] hover:bg-[#354376]"
    },
    {
      name: "EMAIL",
      url: "mailto:ferasahmad.dev@gmail.com",
      className: "border-[#832C2A] text-[#832C2A] hover:bg-[#832C2A]"
    },
    {
      name: "GITHUB",
      url: "https://github.com/ferasahmad",
      className: "border-[#333333] text-[#333333] hover:bg-[#333333]"
    }
  ];
  $$renderer.push(`<div class="relative flex min-h-screen flex-col items-center justify-center p-6 md:p-12 lg:p-16"><picture class="absolute inset-0"><source type="image/avif" srcset="/images/optimized/contact-section/boats-2-640.avif 640w, /images/optimized/contact-section/boats-2-960.avif 960w, /images/optimized/contact-section/boats-2-1280.avif 1280w, /images/optimized/contact-section/boats-2-1600.avif 1600w, /images/optimized/contact-section/boats-2-1920.avif 1920w" sizes="100vw"/> <source type="image/webp" srcset="/images/optimized/contact-section/boats-2-640.webp 640w, /images/optimized/contact-section/boats-2-960.webp 960w, /images/optimized/contact-section/boats-2-1280.webp 1280w, /images/optimized/contact-section/boats-2-1600.webp 1600w, /images/optimized/contact-section/boats-2-1920.webp 1920w" sizes="100vw"/> <img src="/images/contact-section/boats-2.jpg" alt="" width="1920" height="1446" loading="lazy" decoding="async" class="h-full w-full object-cover object-center"/></picture> <div class="absolute inset-0 bg-(--bg-light)/60"></div> <div class="relative z-10 flex flex-col items-center justify-center"><h2 class="mb-8 text-5xl text-black md:mb-12">CONTACT ME</h2> <div class="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6"><!--[-->`);
  const each_array = ensure_array_like(contactLinks);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let link = each_array[index];
    $$renderer.push(`<a${attr("href", link.url)} target="_blank" rel="noopener noreferrer"${attr_class(`min-w-[200px] border-2 px-8 py-4 text-center text-lg font-bold transition-colors duration-200 hover:text-bg-light md:text-xl ${link.className}`)}>${escape_html(link.name)}</a>`);
  }
  $$renderer.push(`<!--]--></div></div></div>`);
}
function Experience($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const experiences = [
      {
        company: "V1Apps",
        period: "2018-2020",
        color: "#0c2375",
        technologies: ["React Native", "React", "TypeScript", "Redux"],
        description: "Led development of a React Native mobile app delivering market insights to traders. Focused on performance optimization, state management, and scalable feature design, resulting in strong user growth and app ratings."
      },
      {
        company: "Scout",
        period: "2020-2021",
        color: "#6e2365",
        technologies: ["React", "TypeScript", "React Native", "Firebase"],
        description: "Built web and mobile tools for content creators using React and TypeScript, including analytics features that improved engagement strategies. Helped scale platforms to tens of thousands of daily users with reliable, high-uptime systems."
      },
      {
        company: "Series",
        period: "2021-2024",
        color: "#69010f",
        technologies: ["Next.js", "TypeScript", "Jest", "Cypress"],
        description: "Developed a scalable banking platform for SMBs handling billions in transactions annually. Focused on testing infrastructure, automation, and AI-driven tools to streamline workflows for users."
      },
      {
        company: "Ohara",
        period: "2024-2026",
        color: "#7c3aed",
        technologies: ["Next.js", "TypeScript", "React Native", "Expo"],
        description: "Built core features for an AI-powered app generation platform using Next.js, React Native, and TypeScript, enabling non-technical users to create web apps seamlessly. Drove measurable gains in user adoption, retention, and conversion."
      }
    ];
    const timelineEndColor = "transparent";
    const timelineColors = [...experiences.map((exp) => exp.color), timelineEndColor].join(", ");
    const timelineGradientHorizontal = `linear-gradient(90deg, ${timelineColors})`;
    const timelineGradientVertical = `linear-gradient(180deg, ${timelineColors})`;
    $$renderer2.push(`<section class="flex justify-center bg-bg-primary p-8 text-black md:p-12 lg:h-screen lg:items-center lg:p-16 lg:px-32"><div><h3 class="mb-10 text-left text-5xl text-black">EXPERIENCE</h3> <div class="mb-8 hidden opacity-70 lg:block"><div class="relative"><div class="absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2"${attr_style(`background: ${timelineGradientHorizontal}`)}></div> <div class="relative z-10 grid grid-cols-4 gap-14"><!--[-->`);
    const each_array = ensure_array_like(experiences);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let exp = each_array[$$index];
      $$renderer2.push(`<div class="flex"><span class="h-3 w-3 rounded-full"${attr_style(`background-color: ${exp.color}`)}></span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="relative pl-8 md:pl-0"><div class="absolute bottom-0 left-1 top-0 w-[4px] rounded-full md:hidden"${attr_style(`background: ${timelineGradientVertical}`)}></div> <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16"><!--[-->`);
    const each_array_1 = ensure_array_like(experiences);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let exp = each_array_1[$$index_2];
      $$renderer2.push(`<article class="relative min-w-0"><span class="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full md:hidden"${attr_style(`background-color: ${exp.color}`)}></span> <h4 class="text-4xl font-semibold uppercase tracking-wide opacity-70"${attr_style(`color: ${exp.color}`)}>${escape_html(exp.company)}</h4> <p class="mt-1 text-md uppercase tracking-widest opacity-70">${escape_html(exp.period)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`);
      const each_array_2 = ensure_array_like(exp.technologies);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let tech = each_array_2[$$index_1];
        $$renderer2.push(`<span class="border border-black/20 bg-black/5 px-3 py-1 text-xs font-medium tracking-wide">${escape_html(tech)}</span>`);
      }
      $$renderer2.push(`<!--]--></div> <p class="mt-4 text-2xl leading-6 text-black">${escape_html(exp.description)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section>`);
  });
}
function Hero($$renderer) {
  $$renderer.push(`<div class="flex h-screen"><div class="flex flex-1 flex-col items-center justify-center bg-bg-primary p-8 md:p-0"><div class="relative"><div class="relative inline-block"><div class="absolute z-0 hidden bg-accent md:block" style="top: -20px; right: 20px; width: 100%; height: 100%; opacity: 0.3;"></div> <picture><source type="image/avif" srcset="/images/optimized/hero-section/ferasahmad-300.avif 300w, /images/optimized/hero-section/ferasahmad-450.avif 450w, /images/optimized/hero-section/ferasahmad-600.avif 600w, /images/optimized/hero-section/ferasahmad-900.avif 900w" sizes="(min-width: 1024px) 450px, 300px"/> <source type="image/webp" srcset="/images/optimized/hero-section/ferasahmad-300.webp 300w, /images/optimized/hero-section/ferasahmad-450.webp 450w, /images/optimized/hero-section/ferasahmad-600.webp 600w, /images/optimized/hero-section/ferasahmad-900.webp 900w" sizes="(min-width: 1024px) 450px, 300px"/> <img src="/images/hero-section/ferasahmad.png" alt="Feras Ahmad" width="450" height="604" loading="eager" decoding="async" fetchpriority="high" class="relative z-10 h-auto w-[300px] object-contain lg:w-[450px]"/></picture></div></div> <div class="flex w-[300px] items-center justify-between text-center lg:w-[450px]"><h1 class="text-xl text-black lg:text-2xl">FERAS AHMAD</h1> <p class="text-xl text-black lg:text-2xl">SOFTWARE ENGINEER</p></div></div> <div class="relative hidden flex-1 md:block"><picture><source type="image/avif" srcset="/images/optimized/hero-section/sea-640.avif 640w, /images/optimized/hero-section/sea-960.avif 960w, /images/optimized/hero-section/sea-1280.avif 1280w, /images/optimized/hero-section/sea-1600.avif 1600w, /images/optimized/hero-section/sea-1920.avif 1920w" sizes="50vw"/> <source type="image/webp" srcset="/images/optimized/hero-section/sea-640.webp 640w, /images/optimized/hero-section/sea-960.webp 960w, /images/optimized/hero-section/sea-1280.webp 1280w, /images/optimized/hero-section/sea-1600.webp 1600w, /images/optimized/hero-section/sea-1920.webp 1920w" sizes="50vw"/> <img src="/images/hero-section/sea.png" alt="NYC skyline with boats" width="1920" height="1280" loading="eager" decoding="async" class="h-full w-full object-cover"/></picture></div></div>`);
}
function _page($$renderer) {
  $$renderer.push(`<div class="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll lg:overscroll-contain lg:scroll-smooth"><section class="lg:snap-start lg:snap-always">`);
  Hero($$renderer);
  $$renderer.push(`<!----></section> <section class="lg:snap-start lg:snap-always">`);
  About($$renderer);
  $$renderer.push(`<!----></section> <section class="lg:snap-start lg:snap-always">`);
  Experience($$renderer);
  $$renderer.push(`<!----></section> <section class="lg:snap-start lg:snap-always">`);
  Contact($$renderer);
  $$renderer.push(`<!----></section></div>`);
}
export {
  _page as default
};
