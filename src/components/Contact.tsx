import React from "react";

const contactLinks = [
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/ferasahmad58",
  },
  {
    name: "EMAIL",
    url: "mailto:ferasahmad.dev@gmail.com",
  },
  {
    name: "GITHUB",
    url: "https://github.com/ferasahmad",
  },
];

export default function Contact() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center bg-[var(--bg-light)] p-6 md:p-12 lg:p-16">
      <h2 className="text-5xl text-black mb-8 md:mb-12">
        CONTACT ME
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-black text-black text-lg md:text-xl font-bold hover:bg-black hover:text-[var(--bg-light)] transition-colors duration-200 min-w-[200px] text-center"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
