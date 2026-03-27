<div class="flex h-screen">
  <div class="flex flex-1 flex-col items-center justify-center bg-bg-primary p-8 md:p-0">
    <div class="relative">
      <div class="relative inline-block">
        <div
          class="absolute z-0 hidden bg-accent md:block"
          style="top: -20px; right: 20px; width: 100%; height: 100%; opacity: 0.3;"
        ></div>
        <picture>
          <source
            type="image/avif"
            srcset="/images/optimized/hero-section/ferasahmad-300.avif 300w, /images/optimized/hero-section/ferasahmad-450.avif 450w, /images/optimized/hero-section/ferasahmad-600.avif 600w, /images/optimized/hero-section/ferasahmad-900.avif 900w"
            sizes="(min-width: 1024px) 450px, 300px"
          />
          <source
            type="image/webp"
            srcset="/images/optimized/hero-section/ferasahmad-300.webp 300w, /images/optimized/hero-section/ferasahmad-450.webp 450w, /images/optimized/hero-section/ferasahmad-600.webp 600w, /images/optimized/hero-section/ferasahmad-900.webp 900w"
            sizes="(min-width: 1024px) 450px, 300px"
          />
          <img
            src="/images/hero-section/ferasahmad.png"
            alt="Feras Ahmad"
            width="450"
            height="604"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            class="relative z-10 h-auto w-[300px] object-contain lg:w-[450px]"
          />
        </picture>
      </div>
    </div>
    <div class="flex w-[300px] items-center justify-between text-center lg:w-[450px]">
      <h1 class="text-xl text-black lg:text-2xl">FERAS AHMAD</h1>
      <p class="text-xl text-black lg:text-2xl">SOFTWARE ENGINEER</p>
    </div>
  </div>

  <div class="relative hidden flex-1 md:block">
    <picture>
      <source
        type="image/avif"
        srcset="/images/optimized/hero-section/sea-640.avif 640w, /images/optimized/hero-section/sea-960.avif 960w, /images/optimized/hero-section/sea-1280.avif 1280w, /images/optimized/hero-section/sea-1600.avif 1600w, /images/optimized/hero-section/sea-1920.avif 1920w"
        sizes="50vw"
      />
      <source
        type="image/webp"
        srcset="/images/optimized/hero-section/sea-640.webp 640w, /images/optimized/hero-section/sea-960.webp 960w, /images/optimized/hero-section/sea-1280.webp 1280w, /images/optimized/hero-section/sea-1600.webp 1600w, /images/optimized/hero-section/sea-1920.webp 1920w"
        sizes="50vw"
      />
      <img
        src="/images/hero-section/sea.png"
        alt="NYC skyline with boats"
        width="1920"
        height="1280"
        loading="eager"
        decoding="async"
        class="h-full w-full object-cover"
      />
    </picture>
  </div>
</div>
