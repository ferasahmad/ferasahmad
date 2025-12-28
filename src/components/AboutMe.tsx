import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex min-h-screen flex-col bg-[var(--bg-light)] md:flex-row">
      {/* Left Side - Centered Image */}
      <div className="flex flex-1 items-center justify-center p-8 md:p-12">
        <div className="relative">
          <Image
            src="/images/about-me/grouped-photos.png"
            alt="Grouped photos collage"
            width={600}
            height={800}
            quality={100}
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Side - Centered Text */}
      <div className="flex flex-1 items-center justify-center p-8 md:p-12">
        <div className="max-w-lg text-center">
          <p className="text-lg leading-relaxed text-[var(--foreground)]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni.
          </p>
        </div>
      </div>
    </section>
  );
}
