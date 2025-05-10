import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#1B3B25]">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="relative w-[375px] h-[375px]">
          <Image
            src="/images/me-about.png"
            alt="About me"
            fill
            className="object-contain rounded-full"
            priority
          />
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A Little About Me
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a software engineer passionate about building innovative
            solutions. With a focus on modern web technologies, I create
            efficient and user-friendly applications that solve real-world
            problems.
          </p>
        </div>
      </div>
    </div>
  );
}
