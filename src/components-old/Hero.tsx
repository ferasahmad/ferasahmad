import { NextPage } from "next";
import SectionContainer from "./SectionContainer";

const Hero: NextPage = () => {
  return (
    <SectionContainer>
      <div className="relative grid grid-cols-3 gap-4">
        {/* Three images */}
        <div className="h-[400px] bg-gray-800 rounded-lg overflow-hidden">
          <img
            src="/path-to-image1.jpg"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[400px] bg-gray-800 rounded-lg overflow-hidden">
          <img
            src="/path-to-image2.jpg"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[400px] bg-gray-800 rounded-lg overflow-hidden">
          <img
            src="/path-to-image3.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text overlays */}
        <div className="absolute top-4 left-[33%] text-white text-4xl font-bold">
          Welcome To
        </div>
        <div className="absolute bottom-4 right-4 text-white text-4xl font-bold">
          FERAS&apos; WEBSITE
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
