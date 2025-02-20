import { NextPage } from "next";
import SectionContainer from "./SectionContainer";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Hero: NextPage = () => {
  return (
    <SectionContainer>
      <div className="flex-1">
        <TextHoverEffect text="FERAS AHMAD" />
      </div>
    </SectionContainer>
  );
};

export default Hero;
