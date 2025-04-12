import { NextPage } from "next";
import SectionContainer from "./SectionContainer";

const Hero: NextPage = () => {
  return (
    <SectionContainer>
      <div>
        <h1 className="sm:text-[80px] text-4xl text-center font-bold text-white">
          FERAS AHMAD
        </h1>
      </div>
    </SectionContainer>
  );
};

export default Hero;
