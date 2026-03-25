import React from "react";

const contactLinks = [
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/ferasahmad58",
    className: "border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]",
  },
  {
    name: "EMAIL",
    url: "mailto:ferasahmad.dev@gmail.com",
    className: "border-[#EA4335] text-[#EA4335] hover:bg-[#EA4335]",
  },
  {
    name: "GITHUB",
    url: "https://github.com/ferasahmad",
    className: "border-[#333333] text-[#333333] hover:bg-[#333333]",
  },
];

export default function Contact() {
  return (
    <div
      className="relative min-h-[100vh] flex flex-col justify-center items-center p-6 md:p-12 lg:p-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/contact-section/boats-2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[var(--bg-light)]/60" />

      <div className="relative z-10 flex flex-col justify-center items-center">
        <h2 className="text-5xl text-black mb-8 md:mb-12">CONTACT ME</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 border-2 text-lg md:text-xl font-bold hover:text-[var(--bg-light)] transition-colors duration-200 min-w-[200px] text-center ${link.className}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
