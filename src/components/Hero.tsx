import { NextPage } from "next";
import SectionContainer from "./SectionContainer";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Hero: NextPage = () => {
  return (
    <SectionContainer>
      <div className="hidden flex-1 md:block">
        <TextHoverEffect text="FERAS AHMAD" />
      </div>
      <div className="md:hidden">
        <h1 className="text-6xl text-center font-bold">FERAS AHMAD</h1>
      </div>
    </SectionContainer>
  );
};

export default Hero;
