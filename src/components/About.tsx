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
        Hey there! I&apos;m Feras, a Software Engineer based in New Jersey. When
        I&apos;m not coding, I enjoy taking photos, attending concerts, gaming,
        and baking (though I&apos;m not great at it...)
      </p>
    </SectionContainer>
  );
}
