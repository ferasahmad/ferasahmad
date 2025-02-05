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
      className={`flex snap-start items-center justify-center w-full h-screen ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
