<script lang="ts">
  type ContactLink = {
    name: string;
    url: string;
    className: string;
  };

  const contactLinks: ContactLink[] = [
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/ferasahmad58",
      className: "border-[#354376] text-[#354376] hover:bg-[#354376]",
    },
    {
      name: "EMAIL",
      url: "mailto:ferasahmad.dev@gmail.com",
      className: "border-[#832C2A] text-[#832C2A] hover:bg-[#832C2A]",
    },
    {
      name: "GITHUB",
      url: "https://github.com/ferasahmad",
      className: "border-[#333333] text-[#333333] hover:bg-[#333333]",
    },
  ];
</script>

<div class="relative flex min-h-screen flex-col items-center justify-center p-6 md:p-12 lg:p-16">
  <picture class="absolute inset-0">
    <source
      type="image/avif"
      srcset="/images/optimized/contact-section/boats-2-640.avif 640w, /images/optimized/contact-section/boats-2-960.avif 960w, /images/optimized/contact-section/boats-2-1280.avif 1280w, /images/optimized/contact-section/boats-2-1600.avif 1600w, /images/optimized/contact-section/boats-2-1920.avif 1920w"
      sizes="100vw"
    />
    <source
      type="image/webp"
      srcset="/images/optimized/contact-section/boats-2-640.webp 640w, /images/optimized/contact-section/boats-2-960.webp 960w, /images/optimized/contact-section/boats-2-1280.webp 1280w, /images/optimized/contact-section/boats-2-1600.webp 1600w, /images/optimized/contact-section/boats-2-1920.webp 1920w"
      sizes="100vw"
    />
    <img
      src="/images/contact-section/boats-2.jpg"
      alt=""
      width="1920"
      height="1446"
      loading="lazy"
      decoding="async"
      class="h-full w-full object-cover object-center"
    />
  </picture>
  <div class="absolute inset-0 bg-(--bg-light)/60"></div>

  <div class="relative z-10 flex flex-col items-center justify-center">
    <h2 class="mb-8 text-5xl text-black md:mb-12">CONTACT ME</h2>
    <div class="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
      {#each contactLinks as link, index (index)}
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          class={`min-w-[200px] border-2 px-8 py-4 text-center text-lg font-bold transition-colors duration-200 hover:text-bg-light md:text-xl ${link.className}`}
        >
          {link.name}
        </a>
      {/each}
    </div>
  </div>
</div>
