import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col items-center justify-center bg-[var(--bg-primary)] p-8 md:p-12">
        <div className="relative">
          <div className="relative inline-block">
            <div
              className="absolute z-0 bg-[var(--accent)] hidden md:block"
              style={{
                top: "-30px",
                right: "30px",
                width: "100%",
                height: "100%",
                opacity: 0.3,
              }}
            />
            <div className="hidden md:block">
              <Image
                src="/images/hero-section/ferasahmad.png"
                alt="Feras Ahmad"
                width={400}
                height={600}
                className="relative z-10 object-contain"
                priority
              />
            </div>
            <div className="block md:hidden">
              <Image
                src="/images/hero-section/ferasahmad.png"
                alt="Feras Ahmad"
                width={200}
                height={300}
                className="relative z-10 object-contain"
                priority
              />
            </div>
          </div>
        </div>
        {/* <div className="flex text-center w-[400px] items-center justify-between">
          <h1 className="text-lg text-black">FERAS AHMAD</h1>
          <p className="text-lg text-black">SOFTWARE ENGINEER</p>
        </div> */}
        <div className="text-center items-center justify-between">
          <h1 className="text-sm text-black">CURRENTLY UNAVAILABLE.</h1>
          <p className="text-sm text-black">
            SENDING POSITIVE ENERGY YOUR WAY.
          </p>
        </div>
      </div>

      {/* <div className="relative hidden flex-1 md:block">
        <Image
          src="/images/hero-section/sea.png"
          alt="NYC skyline with boats"
          fill
          className="object-cover"
          priority
        />
      </div> */}
    </div>
  );
}
