import Image from "next/image";
import SectionContainer from "./SectionContainer";

export default function About() {
  return (
    <SectionContainer className="justify-between lg:flex-row flex-col">
      <Image
        src="/images/me.svg"
        height={300}
        width={300}
        alt="Profile picture"
      />
      <p className="lg:max-w-[400px] text-justify font-semibold text-2xl lg:text-xl">
        I&apos;m Feras, a Software Engineer based in New Jersey. I build web and
        mobile applications, and outside of work, I enjoy photography, concerts,
        gaming, and changing my website&apos;s font a hundred times.
      </p>
    </SectionContainer>
  );
}
