import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 md:left-1/2" aria-hidden>
        <Image
          src="/images/hero-section/sea.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center overflow-hidden p-8 md:bg-bg-primary md:p-0">
        <div
          className="absolute inset-0 bg-bg-primary/80 md:hidden"
          aria-hidden
        />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative inline-block">
            <div
              className="absolute z-0 bg-accent hidden md:block"
              style={{
                top: "-20px",
                right: "20px",
                width: "100%",
                height: "100%",
                opacity: 0.3,
              }}
            />
            <Image
              src="/images/hero-section/me.png"
              alt="Feras Ahmad"
              width={1002}
              height={1346}
              className="relative z-10 h-auto w-[300px] shrink-0 lg:w-[450px]"
              sizes="(max-width: 1023px) 300px, 450px"
              priority
            />
          </div>
          <div className="flex w-[300px] items-center justify-between text-center lg:w-[450px]">
            <h1 className="text-xl text-black lg:text-2xl">FERAS AHMAD</h1>
            <p className="text-xl text-black lg:text-2xl">SOFTWARE ENGINEER</p>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 hidden min-w-0 flex-1 md:block"
        aria-hidden
      />
    </div>
  );
}
