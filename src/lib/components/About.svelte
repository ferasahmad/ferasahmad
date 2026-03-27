<script lang="ts">
  const introText =
    "Hi I'm Feras and I like to build software. I've worked on fintech apps, content creator tools, and AI-driven products, but what I care about most is making complex ideas feel simple through thoughtful design and engineering.";

  const hobbiesText =
    "When I'm not coding, you can find me doing some photography, hiking, snowboarding, and sometimes, just sometimes, reading.";
</script>

<section class="flex justify-center bg-bg-light p-8 text-black md:p-12 lg:h-screen lg:items-center lg:p-16 lg:px-32">
  <div class="flex w-full flex-col gap-10 lg:flex-row lg:items-center">
    <div class="flex flex-1 flex-col justify-center">
      <p class="mb-10 text-left text-5xl text-black">ABOUT ME</p>
      <p class="mb-4 text-2xl text-black">{introText}</p>
      <p class="text-2xl text-black">{hobbiesText}</p>
    </div>
    <div class="hidden flex-1 items-center justify-end lg:flex">
      <picture>
        <source
          type="image/avif"
          srcset="/images/optimized/about-section/main-600.avif 600w, /images/optimized/about-section/main-900.avif 900w, /images/optimized/about-section/main-1200.avif 1200w, /images/optimized/about-section/main-1600.avif 1600w"
          sizes="(min-width: 1024px) 40vw, 0px"
        />
        <source
          type="image/webp"
          srcset="/images/optimized/about-section/main-600.webp 600w, /images/optimized/about-section/main-900.webp 900w, /images/optimized/about-section/main-1200.webp 1200w, /images/optimized/about-section/main-1600.webp 1600w"
          sizes="(min-width: 1024px) 40vw, 0px"
        />
        <img
          src="/images/about-section/main.png"
          alt=""
          width="1200"
          height="1049"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  </div>
</section>
