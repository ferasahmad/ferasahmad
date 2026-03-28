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
            <div className="block lg:hidden">
              <Image
                src="/images/hero-section/ferasahmad.png"
                alt="Feras Ahmad"
                width={300}
                height={400}
                className="relative z-10"
                priority
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/hero-section/ferasahmad.png"
                alt="Feras Ahmad"
                width={450}
                height={600}
                className="relative z-10"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex text-center w-[300px] lg:w-[450px] items-center justify-between">
          <h1 className="text-xl lg:text-2xl text-black">FERAS AHMAD</h1>
          <p className="text-xl lg:text-2xl text-black">SOFTWARE ENGINEER</p>
        </div>
      </div>

      <div className="relative hidden flex-1 md:block">
        <Image
          src="/images/hero-section/sea.png"
          alt="NYC skyline with boats"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
