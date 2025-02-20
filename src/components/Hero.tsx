import { NextPage } from "next";
import SectionContainer from "./SectionContainer";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Hero: NextPage = () => {
  return (
    <SectionContainer>
      <div className="flex-1">
        <div className="hidden md:block">
          <TextHoverEffect text="FERAS AHMAD" />
        </div>
        <div className="md:hidden">
          <h1 className="text-4xl font-bold">FERAS AHMAD</h1>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
