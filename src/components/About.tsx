import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex justify-center bg-[var(--bg-light)] p-8 md:p-12 lg:items-center lg:h-[100vh] lg:p-16 lg:px-32 text-black">
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-5xl text-black text-left mb-10">ABOUT ME</p>
          <p className="text-2xl text-black mb-4">
            Hi I’m Feras and I like to build software. I’ve worked on fintech
            apps, content creator tools, and AI-driven products, but what I care
            about most is making complex ideas feel simple through thoughtful
            design and engineering.
          </p>
          <p className="text-2xl text-black">
            When I'm not coding, you can find me doing some photography, hiking,
            snowboarding, and sometimes, just sometimes, reading.
          </p>
        </div>
        <div className="hidden lg:flex flex-1 items-center justify-end">
          <Image
            src="/images/about-section/main.png"
            alt=""
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
