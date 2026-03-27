<script lang="ts">
  import About from "$lib/components/About.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Hero from "$lib/components/Hero.svelte";
</script>

<div class="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll lg:overscroll-contain lg:scroll-smooth">
  <section class="lg:snap-start lg:snap-always">
    <Hero />
  </section>
  <section class="lg:snap-start lg:snap-always">
    <About />
  </section>
  <section class="lg:snap-start lg:snap-always">
    <Experience />
  </section>
  <section class="lg:snap-start lg:snap-always">
    <Contact />
  </section>
</div>
