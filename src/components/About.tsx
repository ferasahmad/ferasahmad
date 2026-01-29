import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex h-[100vh] bg-[var(--bg-light)] p-8">
      <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
        <p className="text-4xl text-black text-left mb-4">ABOUT ME</p>
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
      <div className="hidden lg:flex flex-1 items-center ">
        <Image
          src="/images/about-section/main.png"
          alt=""
          width={800}
          height={800}
          className=""
        />
      </div>
    </div>
  );
}
