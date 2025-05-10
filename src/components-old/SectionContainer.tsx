import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer = ({
  children,
  className = "",
}: SectionContainerProps) => {
  return (
    <section
      className={`flex lg:py-0 py-20 lg:px-96 px-10 snap-start items-center justify-center w-full h-screen ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
