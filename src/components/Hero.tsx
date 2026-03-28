import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-1 flex-col items-center justify-center bg-bg-primary p-8 md:p-0">
        <div className="relative">
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
        </div>
        <div className="flex text-center w-[300px] lg:w-[450px] items-center justify-between">
          <h1 className="text-xl lg:text-2xl text-black">FERAS AHMAD</h1>
          <p className="text-xl lg:text-2xl text-black">SOFTWARE ENGINEER</p>
        </div>
      </div>

      <div className="relative hidden flex-1 md:block">
        <Image src="/images/hero-section/sea.webp" alt="" fill priority />
      </div>
    </div>
  );
}
