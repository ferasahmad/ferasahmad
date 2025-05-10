import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen w-full">
      {/* Left side - colored background */}
      <div className="w-full md:w-1/2 bg-yellow-900 p-8 flex items-center justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">FERAS AHMAD</h1>
          <p className="text-lg text-gray-300">SOFTWARE ENGINEER</p>
        </div>
      </div>

      {/* Right side - image container */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <Image
          src="/images/hero-background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Centered overlay image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[375px] h-[575px]">
            <Image
              src="/images/hero-avatar.png"
              alt="Avatar"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
